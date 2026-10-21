import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponsesToolChoiceCustom = {
  /** For custom tool calling, the type is always `custom`. @default "custom" */
  type?: "custom";
  /** The name of the custom tool to call. */
  name: string;
};

export const responsesToolChoiceCustomSchema: Schema<ResponsesToolChoiceCustom> =
  s.object<ResponsesToolChoiceCustom>({
    type: s.defaulted(s.literal("custom"), "custom"),
    name: s.string(),
  });
