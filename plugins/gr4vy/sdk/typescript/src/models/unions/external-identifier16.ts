import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The external identifier provided when issuing the gift card. */
export type ExternalIdentifier16 = string;

export const externalIdentifier16Schema: Schema<ExternalIdentifier16> = s.of<ExternalIdentifier16>(
  s.union([s.string()]),
);
