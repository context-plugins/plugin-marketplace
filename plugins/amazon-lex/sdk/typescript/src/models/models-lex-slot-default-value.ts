import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ModelsLexSlotDefaultValue = {
  /**
   * The default value for the slot. You can specify one of the following: #context-name.slot-name -
   * The slot value "slot-name" in the context "context-name." {attribute} - The slot value of the
   * session attribute "attribute." 'value' - The discrete value "value."
   */
  defaultValue: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelsLexSlotDefaultValueSchema: Schema<ModelsLexSlotDefaultValue> =
  s.object<ModelsLexSlotDefaultValue>(
    {
      defaultValue: s.string(),
    },
    { additionalProperties: s.json() },
  );
