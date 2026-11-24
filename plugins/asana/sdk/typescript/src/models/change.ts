import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Information about the type of change that has occurred. This field is only present when the value
 * of the property `action`, describing the action taken on the **resource**, is `changed`.
 */
export type Change = {
  /** The name of the field that has changed in the resource. */
  field?: string;
  /**
   * The type of action taken on the **field** which has been changed. This can be one of `changed`,
   * `added`, or `removed` depending on the nature of the change.
   */
  action?: string;
  /**
   * *Conditional.* This property is only present when the **field's** `action` is `changed` _and_
   * the `new_value` is an Asana resource. This will be only the `gid` and `resource_type` of the
   * resource when the events come from webhooks; this will be the compact representation (and can
   * have fields expanded with [opt_fields](/docs/input-output-options)) when using the
   * [Events](/docs/asana-events) endpoint.
   */
  newValue?: Record<string, unknown>;
  /**
   * *Conditional.* This property is only present when the **field's** `action` is `added` _and_ the
   * `added_value` is an Asana resource. This will be only the `gid` and `resource_type` of the
   * resource when the events come from webhooks; this will be the compact representation (and can
   * have fields expanded with [opt_fields](/docs/input-output-options)) when using the
   * [Events](/docs/asana-events) endpoint.
   */
  addedValue?: Record<string, unknown>;
  /**
   * *Conditional.* This property is only present when the **field's** `action` is `removed` _and_
   * the `removed_value` is an Asana resource. This will be only the `gid` and `resource_type` of
   * the resource when the events come from webhooks; this will be the compact representation (and
   * can have fields expanded with [opt_fields](/docs/input-output-options)) when using the
   * [Events](/docs/asana-events) endpoint.
   */
  removedValue?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const changeSchema: Schema<Change> = s.object<Change>(
  {
    field: s.optional(s.string()),
    action: s.optional(s.string()),
    newValue: s.optional(s.record(s.string(), s.unknown())),
    addedValue: s.optional(s.record(s.string(), s.unknown())),
    removedValue: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      newValue: "new_value",
      addedValue: "added_value",
      removedValue: "removed_value",
    },
  },
  { additionalProperties: s.json() },
);
