import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Sets the value of the GraphQL API to enable (ENABLED) or disable (DISABLED) introspection. If no
 * value is provided, the introspection configuration will be set to ENABLED by default. This field
 * will produce an error if the operation attempts to use the introspection feature while this field
 * is disabled. For more information about introspection, see GraphQL introspection.
 */
export const IntrospectionConfig = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type IntrospectionConfig =
  | (typeof IntrospectionConfig)[keyof typeof IntrospectionConfig]
  | (string & {});

export const introspectionConfigSchema: EnumSchema<IntrospectionConfig> =
  s.enumOf<IntrospectionConfig>(IntrospectionConfig);
