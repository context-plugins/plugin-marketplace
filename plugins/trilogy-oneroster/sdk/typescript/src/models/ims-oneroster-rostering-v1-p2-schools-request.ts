import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { org3Schema, type Org3 } from "./org3.js";

export type ImsOnerosterRosteringV1P2SchoolsRequest = {
  org: Org3;
};

export const imsOnerosterRosteringV1P2SchoolsRequestSchema: Schema<ImsOnerosterRosteringV1P2SchoolsRequest> =
  s.object<ImsOnerosterRosteringV1P2SchoolsRequest>({
    org: org3Schema,
  });
