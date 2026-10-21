import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Whether to enable strict schema adherence when generating the output. If set to true, the model
 * will always follow the exact schema defined in the `schema` field. Only a subset of JSON Schema
 * is supported when `strict` is `true`.
 */
export type Strict2 = boolean;

export const strict2Schema: Schema<Strict2> = s.of<Strict2>(s.union([s.boolean()]));
