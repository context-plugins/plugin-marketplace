import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { grammarSlotTypeSourceSchema, type GrammarSlotTypeSource } from "./grammar-slot-type-source.js";

export type GrammarSlotTypeSetting = {
  source?: GrammarSlotTypeSource;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const grammarSlotTypeSettingSchema: Schema<GrammarSlotTypeSetting> = s.object<GrammarSlotTypeSetting>(
  {
    source: s.optional(s.lazy(() => grammarSlotTypeSourceSchema)),
  },
  { additionalProperties: s.json() },
);
