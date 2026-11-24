import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IosInfoLanguages401Error1 = {
  message: string;
  code: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const iosInfoLanguages401Error1Schema: Schema<IosInfoLanguages401Error1> =
  s.object<IosInfoLanguages401Error1>(
    {
      message: s.string(),
      code: s.int(),
    },
    { additionalProperties: s.json() },
  );
