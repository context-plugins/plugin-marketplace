import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** External identifier to match. */
export type ExternalIdentifier31 = string;

export const externalIdentifier31Schema: Schema<ExternalIdentifier31> = s.of<ExternalIdentifier31>(
  s.union([s.string()]),
);
