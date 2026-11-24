import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { slotDefaultValueSchema, type SlotDefaultValue } from "./slot-default-value.js";

export type SlotDefaultValueSpecification = {
  /**
   * A list of default values. Amazon Lex chooses the default value to use in the order that they
   * are presented in the list.
   */
  defaultValueList: SlotDefaultValue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotDefaultValueSpecificationSchema: Schema<SlotDefaultValueSpecification> =
  s.object<SlotDefaultValueSpecification>(
    {
      defaultValueList: s.array(s.lazy(() => slotDefaultValueSchema)),
    },
    { additionalProperties: s.json() },
  );
