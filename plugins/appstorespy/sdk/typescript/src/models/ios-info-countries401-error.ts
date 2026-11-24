import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IosInfoCountries401Error = {
  message: string;
  code: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const iosInfoCountries401ErrorSchema: Schema<IosInfoCountries401Error> =
  s.object<IosInfoCountries401Error>(
    {
      message: s.string(),
      code: s.int(),
    },
    { additionalProperties: s.json() },
  );
