import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { enumerationValueSchema, type EnumerationValue } from "./enumeration-value.js";
import { slotTypeConfigurationSchema, type SlotTypeConfiguration } from "./slot-type-configuration.js";
import { valueSelectionStrategySchema, type ValueSelectionStrategy } from "./value-selection-strategy.js";

export type CreateSlotTypeVersionResponse = {
  /** The name of the slot type. */
  name?: string;
  /** A description of the slot type. */
  description?: string;
  /** A list of EnumerationValue objects that defines the values that the slot type can take. */
  enumerationValues?: EnumerationValue[];
  /**
   * The date that the slot type was updated. When you create a resource, the creation date and last
   * update date are the same.
   */
  lastUpdatedDate?: Date;
  /** The date that the slot type was created. */
  createdDate?: Date;
  /** The version assigned to the new slot type version. */
  version?: string;
  /** Checksum of the $LATEST version of the slot type. */
  checksum?: string;
  /**
   * The strategy that Amazon Lex uses to determine the value of the slot. For more information, see
   * PutSlotType.
   */
  valueSelectionStrategy?: ValueSelectionStrategy;
  /** The built-in slot type used a the parent of the slot type. */
  parentSlotTypeSignature?: string;
  /** Configuration information that extends the parent built-in slot type. */
  slotTypeConfigurations?: SlotTypeConfiguration[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createSlotTypeVersionResponseSchema: Schema<CreateSlotTypeVersionResponse> =
  s.object<CreateSlotTypeVersionResponse>(
    {
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      enumerationValues: s.optional(s.array(s.lazy(() => enumerationValueSchema))),
      lastUpdatedDate: s.optional(s.dateTime()),
      createdDate: s.optional(s.dateTime()),
      version: s.optional(s.string()),
      checksum: s.optional(s.string()),
      valueSelectionStrategy: s.optional(s.lazy(() => valueSelectionStrategySchema)),
      parentSlotTypeSignature: s.optional(s.string()),
      slotTypeConfigurations: s.optional(s.array(s.lazy(() => slotTypeConfigurationSchema))),
    },
    { additionalProperties: s.json() },
  );
