import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Override for the timestamp of the message */
export type OverrideTimestamp1 = string;

export const overrideTimestamp1Schema: Schema<OverrideTimestamp1> = s.of<OverrideTimestamp1>(
  s.union([s.string()]),
);
