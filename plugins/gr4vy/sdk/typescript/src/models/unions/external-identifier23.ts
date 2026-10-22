import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The merchant identifier for this card. */
export type ExternalIdentifier23 = string;

export const externalIdentifier23Schema: Schema<ExternalIdentifier23> = s.of<ExternalIdentifier23>(
  s.union([s.string()]),
);
