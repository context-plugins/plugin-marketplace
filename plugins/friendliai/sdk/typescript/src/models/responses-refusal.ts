import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponsesRefusal = {
  /** The type of the refusal. Always `refusal`. @default "refusal" */
  type?: "refusal";
  /** The refusal explanation from the model. */
  refusal: string;
};

export const responsesRefusalSchema: Schema<ResponsesRefusal> = s.object<ResponsesRefusal>({
  type: s.defaulted(s.literal("refusal"), "refusal"),
  refusal: s.string(),
});
