import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EnumOption = {
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const enumOptionSchema: Schema<EnumOption> = s.object<EnumOption>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    name: s.optional(s.string()),
    enabled: s.optional(s.boolean()),
    color: s.optional(s.string()),
    _keysMap: {
      resourceType: "resource_type",
    },
  },
  { additionalProperties: s.json() },
);
