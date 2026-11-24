import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EnumOptionInsertRequest = {
  /** The gid of the enum option to relocate. */
  enumOption: string;
  /**
   * An existing enum option within this custom field before which the new enum option should be
   * inserted. Cannot be provided together with after_enum_option.
   */
  beforeEnumOption?: string;
  /**
   * An existing enum option within this custom field after which the new enum option should be
   * inserted. Cannot be provided together with before_enum_option.
   */
  afterEnumOption?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const enumOptionInsertRequestSchema: Schema<EnumOptionInsertRequest> =
  s.object<EnumOptionInsertRequest>(
    {
      enumOption: s.string(),
      beforeEnumOption: s.optional(s.string()),
      afterEnumOption: s.optional(s.string()),
      _keysMap: {
        enumOption: "enum_option",
        beforeEnumOption: "before_enum_option",
        afterEnumOption: "after_enum_option",
      },
    },
    { additionalProperties: s.json() },
  );
