import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  responsesFunctionCallOutputContentSchema,
  type ResponsesFunctionCallOutputContent,
} from "./responses-function-call-output-content.js";

/**
 * Text or image output of the function tool call. Can be a JSON string of the output, or an array
 * of content parts (text or image).
 */
export type Output = string | ResponsesFunctionCallOutputContent[];

export const outputSchema: Schema<Output> = s.of<Output>(
  s.union([s.string(), s.array(s.lazy(() => responsesFunctionCallOutputContentSchema))]),
);
