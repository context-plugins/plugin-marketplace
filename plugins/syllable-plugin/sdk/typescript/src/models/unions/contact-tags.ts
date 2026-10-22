import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Tags for the directory member */
export type ContactTags = Record<string, unknown>;

export const contactTagsSchema: Schema<ContactTags> = s.of<ContactTags>(
  s.union([s.record(s.string(), s.unknown())]),
);
