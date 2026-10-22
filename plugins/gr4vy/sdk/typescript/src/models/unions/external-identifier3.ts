import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The merchant identifier for this buyer. */
export type ExternalIdentifier3 = string;

export const externalIdentifier3Schema: Schema<ExternalIdentifier3> = s.of<ExternalIdentifier3>(
  s.union([s.string()]),
);
