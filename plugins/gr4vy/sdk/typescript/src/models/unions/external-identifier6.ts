import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** An external identifier that can be used to match the capture against your own records. */
export type ExternalIdentifier6 = string;

export const externalIdentifier6Schema: Schema<ExternalIdentifier6> = s.of<ExternalIdentifier6>(
  s.union([s.string()]),
);
