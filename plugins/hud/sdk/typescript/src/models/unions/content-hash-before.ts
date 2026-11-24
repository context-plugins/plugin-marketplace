import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ContentHashBefore = string;

export const contentHashBeforeSchema: Schema<ContentHashBefore> = s.of<ContentHashBefore>(
  s.union([s.string()]),
);
