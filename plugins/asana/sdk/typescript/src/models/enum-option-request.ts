import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EnumOptionRequest = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The name of the enum option. */
  name?: string;
  /** Whether or not the enum option is a selectable value for the custom field. */
  enabled?: boolean;
  /** The color of the enum option. Defaults to ‘none’. */
  color?: string;
  /**
   * An existing enum option within this custom field before which the new enum option should be
   * inserted. Cannot be provided together with after_enum_option.
   */
  insertBefore?: string;
  /**
   * An existing enum option within this custom field after which the new enum option should be
   * inserted. Cannot be provided together with before_enum_option.
   */
  insertAfter?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const enumOptionRequestSchema: Schema<EnumOptionRequest> = s.object<EnumOptionRequest>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    name: s.optional(s.string()),
    enabled: s.optional(s.boolean()),
    color: s.optional(s.string()),
    insertBefore: s.optional(s.string()),
    insertAfter: s.optional(s.string()),
    _keysMap: {
      resourceType: "resource_type",
      insertBefore: "insert_before",
      insertAfter: "insert_after",
    },
  },
  { additionalProperties: s.json() },
);
