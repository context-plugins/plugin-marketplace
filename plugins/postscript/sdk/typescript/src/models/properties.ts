import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * These are the properties of the event. These properties will be exposed in the Postscript
 * platform for things like filtering and merge tags to merchants.
 */
export type Properties = {
  /**
   * Properties can be key:value pairs. We will attempt to choose the appropriate data type for the
   * value depending on what you send us. We currently accept strings, booleans, integers, floats,
   * and datetime strings.
   *
   * @default "value"
   */
  key?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const propertiesSchema: Schema<Properties> = s.object<Properties>(
  {
    key: s.defaulted(s.string(), "value"),
  },
  { additionalProperties: s.json() },
);
