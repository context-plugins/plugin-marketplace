import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** An external identifier that can be used to match the transaction against your own records. */
export type ExternalIdentifier32 = string;

export const externalIdentifier32Schema: Schema<ExternalIdentifier32> = s.of<ExternalIdentifier32>(
  s.union([s.string()]),
);
