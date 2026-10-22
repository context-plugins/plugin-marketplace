import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The merchant reference for the payment link. */
export type ExternalIdentifier19 = string;

export const externalIdentifier19Schema: Schema<ExternalIdentifier19> = s.of<ExternalIdentifier19>(
  s.union([s.string()]),
);
