import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** An optional external identifier for this issuance. */
export type ExternalIdentifier17 = string;

export const externalIdentifier17Schema: Schema<ExternalIdentifier17> = s.of<ExternalIdentifier17>(
  s.union([s.string()]),
);
