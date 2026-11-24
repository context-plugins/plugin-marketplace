import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { specificationsSchema, type Specifications } from "./specifications.js";

export type SubSlotSetting = {
  /**
   * The expression text for defining the constituent sub slots in the composite slot using logical
   * AND and OR operators.
   */
  expression?: string;
  /** Specifications for the constituent sub slots of a composite slot. */
  slotSpecifications?: Record<string, Specifications>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subSlotSettingSchema: Schema<SubSlotSetting> = s.object<SubSlotSetting>(
  {
    expression: s.optional(s.string()),
    slotSpecifications: s.optional(
      s.record(
        s.string(),
        s.lazy(() => specificationsSchema),
      ),
    ),
  },
  { additionalProperties: s.json() },
);
