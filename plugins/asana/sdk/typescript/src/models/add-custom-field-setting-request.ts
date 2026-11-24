import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AddCustomFieldSettingRequest = {
  /** The custom field to associate with this container. */
  customField: string;
  /**
   * Whether this field should be considered important to this container (for instance, to display
   * in the list view of items in the container).
   */
  isImportant?: boolean;
  /**
   * A gid of a Custom Field Setting on this container, before which the new Custom Field Setting
   * will be added. `insert_before` and `insert_after` parameters cannot both be specified.
   */
  insertBefore?: string;
  /**
   * A gid of a Custom Field Setting on this container, after which the new Custom Field Setting
   * will be added. `insert_before` and `insert_after` parameters cannot both be specified.
   */
  insertAfter?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const addCustomFieldSettingRequestSchema: Schema<AddCustomFieldSettingRequest> =
  s.object<AddCustomFieldSettingRequest>(
    {
      customField: s.string(),
      isImportant: s.optional(s.boolean()),
      insertBefore: s.optional(s.string()),
      insertAfter: s.optional(s.string()),
      _keysMap: {
        customField: "custom_field",
        isImportant: "is_important",
        insertBefore: "insert_before",
        insertAfter: "insert_after",
      },
    },
    { additionalProperties: s.json() },
  );
