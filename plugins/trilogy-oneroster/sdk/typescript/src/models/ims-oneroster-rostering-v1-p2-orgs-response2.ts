import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orgSchema, type Org } from "./org.js";

export type ImsOnerosterRosteringV1P2OrgsResponse2 = {
  /** Represents an organization. */
  org: Org;
};

export const imsOnerosterRosteringV1P2OrgsResponse2Schema: Schema<ImsOnerosterRosteringV1P2OrgsResponse2> =
  s.object<ImsOnerosterRosteringV1P2OrgsResponse2>({
    org: orgSchema,
  });
