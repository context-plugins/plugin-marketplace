import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body2 = {
  /** Updated folder name. Passing null or omitting this field will leave it unchanged. */
  name?: string | null;
  /**
   * Updated default position of the folder. Passing null or omitting this field will leave it
   * unchanged.
   */
  defaultOrder?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const body2Schema: Schema<Body2> = s.object<Body2>(
  {
    name: s.optionalNullable(s.string()),
    defaultOrder: s.optionalNullable(s.int()),
    _keysMap: {
      defaultOrder: "default_order",
    },
  },
  { additionalProperties: s.json() },
);
