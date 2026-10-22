import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type WordsTruncated = boolean;

export const wordsTruncatedSchema: Schema<WordsTruncated> = s.of<WordsTruncated>(s.union([s.boolean()]));
