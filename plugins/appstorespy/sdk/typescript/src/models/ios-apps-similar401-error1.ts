import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IosAppsSimilar401Error1 = {
  message: string;
  code: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const iosAppsSimilar401Error1Schema: Schema<IosAppsSimilar401Error1> =
  s.object<IosAppsSimilar401Error1>(
    {
      message: s.string(),
      code: s.int(),
    },
    { additionalProperties: s.json() },
  );
