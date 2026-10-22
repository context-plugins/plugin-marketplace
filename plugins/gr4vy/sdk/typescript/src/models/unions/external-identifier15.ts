import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** An optional external identifier for this activation. */
export type ExternalIdentifier15 = string;

export const externalIdentifier15Schema: Schema<ExternalIdentifier15> = s.of<ExternalIdentifier15>(
  s.union([s.string()]),
);
