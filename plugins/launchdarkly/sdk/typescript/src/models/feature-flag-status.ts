import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nameSchema, type Name } from "./name.js";

export type FeatureFlagStatus = {
  /** Status of the flag */
  name: Name;
  /** Timestamp of last time flag was requested */
  lastRequested?: Date;
  /** Default value seen from code */
  default?: Record<string, unknown>;
};

export const featureFlagStatusSchema: Schema<FeatureFlagStatus> = s.object<FeatureFlagStatus>({
  name: nameSchema,
  lastRequested: s.optional(s.dateTime()),
  default: s.optional(s.record(s.string(), s.unknown())),
});
