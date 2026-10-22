import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { typeSchema, type Type } from "../type.js";

/** The action to take when the LLM calls the tool. */
export type Type6 = Type;

export const type6Schema: Schema<Type6> = s.of<Type6>(s.union([s.lazy(() => typeSchema)]));
