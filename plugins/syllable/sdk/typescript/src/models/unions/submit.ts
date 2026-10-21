import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { submit1Schema, type Submit1 } from "./submit1.js";

/** Actions to execute when the tool/step is submitted by the LLM. */
export type Submit = Submit1[];

export const submitSchema: Schema<Submit> = s.of<Submit>(s.union([s.array(s.lazy(() => submit1Schema))]));
