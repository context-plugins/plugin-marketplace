import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** An external identifier that can be used to match the refunds against your own records. */
export type ExternalIdentifier36 = string;

export const externalIdentifier36Schema: Schema<ExternalIdentifier36> = s.of<ExternalIdentifier36>(
  s.union([s.string()]),
);
