import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SlotTypeMetadata = {
  /** The name of the slot type. */
  name?: string;
  /** A description of the slot type. */
  description?: string;
  /**
   * The date that the slot type was updated. When you create a resource, the creation date and last
   * updated date are the same.
   */
  lastUpdatedDate?: Date;
  /** The date that the slot type was created. */
  createdDate?: Date;
  /** The version of the slot type. */
  version?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotTypeMetadataSchema: Schema<SlotTypeMetadata> = s.object<SlotTypeMetadata>(
  {
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    lastUpdatedDate: s.optional(s.dateTime()),
    createdDate: s.optional(s.dateTime()),
    version: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
