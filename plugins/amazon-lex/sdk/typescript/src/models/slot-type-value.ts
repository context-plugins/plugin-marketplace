import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sampleValueSchema, type SampleValue } from "./sample-value.js";

export type SlotTypeValue = {
  sampleValue?: SampleValue;
  /** Additional values related to the slot type entry. */
  synonyms?: SampleValue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotTypeValueSchema: Schema<SlotTypeValue> = s.object<SlotTypeValue>(
  {
    sampleValue: s.optional(s.lazy(() => sampleValueSchema)),
    synonyms: s.optional(s.array(s.lazy(() => sampleValueSchema))),
  },
  { additionalProperties: s.json() },
);
