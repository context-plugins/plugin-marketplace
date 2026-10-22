import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { interleavedFieldSchema, type InterleavedField } from "../interleaved-field.js";

/**
 * `false` means reasoning stays in `content` and cannot be separated. A string (`reasoning_content`
 * or `reasoning_details`) means the model can parse reasoning into a top-level field of that name
 * via `parse_reasoning`.
 */
export type Interleaved = boolean | InterleavedField;

export const interleavedSchema: Schema<Interleaved> = s.of<Interleaved>(
  s.union([s.boolean(), s.lazy(() => interleavedFieldSchema)]),
);
