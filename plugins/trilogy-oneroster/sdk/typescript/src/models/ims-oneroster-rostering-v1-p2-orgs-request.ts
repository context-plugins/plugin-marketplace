import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { org26Schema, type Org26 } from "./org26.js";

export type ImsOnerosterRosteringV1P2OrgsRequest = {
  org: Org26;
};

export const imsOnerosterRosteringV1P2OrgsRequestSchema: Schema<ImsOnerosterRosteringV1P2OrgsRequest> =
  s.object<ImsOnerosterRosteringV1P2OrgsRequest>({
    org: org26Schema,
  });
