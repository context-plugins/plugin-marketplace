import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Parent = {
  /** The name of the parent label. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const parentSchema: Schema<Parent> = s.object<Parent>(
  {
    name: s.optional(s.string()),
    _keysMap: {
      name: "Name",
    },
  },
  { additionalProperties: s.json() },
);
