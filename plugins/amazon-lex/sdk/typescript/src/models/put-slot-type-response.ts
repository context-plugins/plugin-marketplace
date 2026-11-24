import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { enumerationValueSchema, type EnumerationValue } from "./enumeration-value.js";
import { slotTypeConfigurationSchema, type SlotTypeConfiguration } from "./slot-type-configuration.js";
import { valueSelectionStrategy3Schema, type ValueSelectionStrategy3 } from "./value-selection-strategy3.js";

export type PutSlotTypeResponse = {
  /** The name of the slot type. */
  name?: string;
  /** A description of the slot type. */
  description?: string;
  /** A list of EnumerationValue objects that defines the values that the slot type can take. */
  enumerationValues?: EnumerationValue[];
  /**
   * The date that the slot type was updated. When you create a slot type, the creation date and
   * last update date are the same.
   */
  lastUpdatedDate?: Date;
  /** The date that the slot type was created. */
  createdDate?: Date;
  /** The version of the slot type. For a new slot type, the version is always $LATEST. */
  version?: string;
  /** Checksum of the $LATEST version of the slot type. */
  checksum?: string;
  /**
   * The slot resolution strategy that Amazon Lex uses to determine the value of the slot. For more
   * information, see PutSlotType.
   */
  valueSelectionStrategy?: ValueSelectionStrategy3;
  /**
   * True if a new version of the slot type was created. If the createVersion field was not
   * specified in the request, the createVersion field is set to false in the response.
   */
  createVersion?: boolean;
  /** The built-in slot type used as the parent of the slot type. */
  parentSlotTypeSignature?: string;
  /** Configuration information that extends the parent built-in slot type. */
  slotTypeConfigurations?: SlotTypeConfiguration[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const putSlotTypeResponseSchema: Schema<PutSlotTypeResponse> = s.object<PutSlotTypeResponse>(
  {
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    enumerationValues: s.optional(s.array(s.lazy(() => enumerationValueSchema))),
    lastUpdatedDate: s.optional(s.dateTime()),
    createdDate: s.optional(s.dateTime()),
    version: s.optional(s.string()),
    checksum: s.optional(s.string()),
    valueSelectionStrategy: s.optional(s.lazy(() => valueSelectionStrategy3Schema)),
    createVersion: s.optional(s.boolean()),
    parentSlotTypeSignature: s.optional(s.string()),
    slotTypeConfigurations: s.optional(s.array(s.lazy(() => slotTypeConfigurationSchema))),
  },
  { additionalProperties: s.json() },
);
