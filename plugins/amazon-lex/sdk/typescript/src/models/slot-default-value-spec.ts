import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  modelsLexSlotDefaultValueSchema,
  type ModelsLexSlotDefaultValue,
} from "./models-lex-slot-default-value.js";

export type SlotDefaultValueSpec = {
  /**
   * The default values for a slot. You can specify more than one default. For example, you can
   * specify a default value to use from a matching context variable, a session attribute, or a
   * fixed value. The default value chosen is selected based on the order that you specify them in
   * the list. For example, if you specify a context variable and a fixed value in that order,
   * Amazon Lex uses the context variable if it is available, else it uses the fixed value.
   */
  defaultValueList: ModelsLexSlotDefaultValue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotDefaultValueSpecSchema: Schema<SlotDefaultValueSpec> = s.object<SlotDefaultValueSpec>(
  {
    defaultValueList: s.array(s.lazy(() => modelsLexSlotDefaultValueSchema)),
  },
  { additionalProperties: s.json() },
);
