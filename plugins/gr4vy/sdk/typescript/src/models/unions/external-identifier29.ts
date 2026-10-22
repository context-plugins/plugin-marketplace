import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** An external identifier that can be used to match the refund against your own records. */
export type ExternalIdentifier29 = string;

export const externalIdentifier29Schema: Schema<ExternalIdentifier29> = s.of<ExternalIdentifier29>(
  s.union([s.string()]),
);
