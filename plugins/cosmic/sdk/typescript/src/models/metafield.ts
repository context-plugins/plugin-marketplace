import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** One field in an Object type's content model. */
export type Metafield = {
  /** Assigned by Cosmic. Omit when creating. */
  id?: string;
  /** Label shown to editors in the dashboard. */
  title: string;
  /** The key used in an Object's `metadata`. */
  key: string;
  /**
   * The Metafield type. See the Metafields documentation for the full list and the value shape each
   * one expects.
   */
  type: string;
  /** Default value for the Metafield. */
  value?: Record<string, unknown>;
  /** Guidance shown to editors beneath the field. */
  helptext?: string;
  /** Whether Objects in this type must supply a value. */
  required?: boolean;
  /** Restricts uploads for File Metafields. */
  mediaValidationType?: string;
  /** Child Metafields, for `repeater` types. */
  repeaterFields?: Metafield[];
  /** Choices for select, radio, and checkbox types. */
  options?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metafieldSchema: Schema<Metafield> = s.object<Metafield>(
  {
    id: s.optional(s.string()),
    title: s.string(),
    key: s.string(),
    type: s.string(),
    value: s.optional(s.record(s.string(), s.unknown())),
    helptext: s.optional(s.string()),
    required: s.optional(s.boolean()),
    mediaValidationType: s.optional(s.string()),
    repeaterFields: s.optional(s.array(s.lazy(() => metafieldSchema))),
    options: s.optional(s.array(s.record(s.string(), s.unknown()))),
    _keysMap: {
      mediaValidationType: "media_validation_type",
      repeaterFields: "repeater_fields",
    },
  },
  { additionalProperties: s.json() },
);
