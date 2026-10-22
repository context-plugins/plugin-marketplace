import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The external identifier for the capture. */
export type ExternalIdentifier33 = string;

export const externalIdentifier33Schema: Schema<ExternalIdentifier33> = s.of<ExternalIdentifier33>(
  s.union([s.string()]),
);
