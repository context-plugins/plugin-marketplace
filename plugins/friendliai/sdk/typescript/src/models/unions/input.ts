import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responsesInputItemSchema, type ResponsesInputItem } from "./responses-input-item.js";

/** Text or image inputs to the model, used to generate a response. */
export type Input = string | ResponsesInputItem[];

export const inputSchema: Schema<Input> = s.of<Input>(
  s.union([s.string(), s.array(s.lazy(() => responsesInputItemSchema))]),
);
