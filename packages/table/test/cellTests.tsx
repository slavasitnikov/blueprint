/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

import { Cell } from "../src/cell/cell";
import { ReactHarness } from "./harness";
import { Intent } from "@blueprintjs/core";
import { expect } from "chai";
import * as React from "react";

describe("Cell", () => {
    const harness = new ReactHarness();

    afterEach(() => {
        harness.unmount();
    });

    after(() => {
        harness.destroy();
    });

    it("displays regular content", () => {
        const cell = harness.mount(
            <Cell><div className="inner">Purple</div></Cell>
        );
        expect(cell.find(".inner").text()).to.equal("Purple");
    });

    it("uses intents for styling", () => {
        const cell0 = harness.mount(<Cell intent={Intent.PRIMARY}>Dangerous</Cell>);
        expect(cell0.find(".bp-table-cell.pt-intent-primary").element).to.exist;

        const cell1 = harness.mount(<Cell intent={Intent.SUCCESS}>Dangerous</Cell>);
        expect(cell1.find(".bp-table-cell.pt-intent-success").element).to.exist;

        const cell2 = harness.mount(<Cell intent={Intent.WARNING}>Dangerous</Cell>);
        expect(cell2.find(".bp-table-cell.pt-intent-warning").element).to.exist;

        const cell3 = harness.mount(<Cell intent={Intent.DANGER}>Dangerous</Cell>);
        expect(cell3.find(".bp-table-cell.pt-intent-danger").element).to.exist;
    });
});
