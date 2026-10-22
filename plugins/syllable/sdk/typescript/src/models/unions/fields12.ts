import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { fieldSchema, type Field } from "../field.js";

/** The fields to include in the response */
export type Fields12 = Field[];

export const fields12Schema: Schema<Fields12> = s.of<Fields12>(s.union([s.array(s.lazy(() => fieldSchema))]));
