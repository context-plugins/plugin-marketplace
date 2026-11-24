import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { nameSchema, type Name } from "./name.js";

export type KeyUsage = {
  /** A string value that contains a Key Usage extension name. */
  name?: Name;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const keyUsageSchema: Schema<KeyUsage> = s.object<KeyUsage>(
  {
    name: s.optional(s.lazy(() => nameSchema)),
    _keysMap: {
      name: "Name",
    },
  },
  { additionalProperties: s.json() },
);
