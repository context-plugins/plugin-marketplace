import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orgSchema, type Org } from "./org.js";

export type ImsOnerosterRosteringV1P2SchoolsResponse1 = {
  /** Represents an organization. */
  org: Org;
};

export const imsOnerosterRosteringV1P2SchoolsResponse1Schema: Schema<ImsOnerosterRosteringV1P2SchoolsResponse1> =
  s.object<ImsOnerosterRosteringV1P2SchoolsResponse1>({
    org: orgSchema,
  });
