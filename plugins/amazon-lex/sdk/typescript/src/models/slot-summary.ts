import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { promptSpecificationSchema, type PromptSpecification } from "./prompt-specification.js";
import { slotConstraint1Schema, type SlotConstraint1 } from "./slot-constraint1.js";

export type SlotSummary = {
  /** The unique identifier of the slot. */
  slotId?: string;
  /** The name given to the slot. */
  slotName?: string;
  /** The description of the slot. */
  description?: string;
  /**
   * Whether the slot is required or optional. An intent is complete when all required slots are
   * filled.
   */
  slotConstraint?: SlotConstraint1;
  /** The unique identifier for the slot type that defines the values for the slot. */
  slotTypeId?: string;
  valueElicitationPromptSpecification?: PromptSpecification;
  /** The timestamp of the last date and time that the slot was updated. */
  lastUpdatedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotSummarySchema: Schema<SlotSummary> = s.object<SlotSummary>(
  {
    slotId: s.optional(s.string()),
    slotName: s.optional(s.string()),
    description: s.optional(s.string()),
    slotConstraint: s.optional(s.lazy(() => slotConstraint1Schema)),
    slotTypeId: s.optional(s.string()),
    valueElicitationPromptSpecification: s.optional(s.lazy(() => promptSpecificationSchema)),
    lastUpdatedDateTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
