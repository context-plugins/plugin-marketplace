import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { subSlotTypeCompositionSchema, type SubSlotTypeComposition } from "./sub-slot-type-composition.js";

export type CompositeSlotTypeSetting = {
  /** Subslots in the composite slot. */
  subSlots?: SubSlotTypeComposition[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compositeSlotTypeSettingSchema: Schema<CompositeSlotTypeSetting> =
  s.object<CompositeSlotTypeSetting>(
    {
      subSlots: s.optional(s.array(s.lazy(() => subSlotTypeCompositionSchema))),
    },
    { additionalProperties: s.json() },
  );
