import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The display name of the report creator. */
export type CreatorDisplayName = string;

export const creatorDisplayNameSchema: Schema<CreatorDisplayName> = s.of<CreatorDisplayName>(
  s.union([s.string()]),
);
