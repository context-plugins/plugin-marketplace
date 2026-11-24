import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type2Schema, type Type2 } from "./type2.js";

export type KnownGender = {
  /** A string value of the KnownGender info about the Celebrity. */
  type?: Type2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const knownGenderSchema: Schema<KnownGender> = s.object<KnownGender>(
  {
    type: s.optional(s.lazy(() => type2Schema)),
    _keysMap: {
      type: "Type",
    },
  },
  { additionalProperties: s.json() },
);
