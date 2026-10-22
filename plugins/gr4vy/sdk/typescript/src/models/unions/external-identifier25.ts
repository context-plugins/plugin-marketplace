import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The merchant identifier for this payout. */
export type ExternalIdentifier25 = string;

export const externalIdentifier25Schema: Schema<ExternalIdentifier25> = s.of<ExternalIdentifier25>(
  s.union([s.string()]),
);
