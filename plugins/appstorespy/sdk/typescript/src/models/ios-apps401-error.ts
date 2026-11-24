import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IosApps401Error = {
  message: string;
  code: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const iosApps401ErrorSchema: Schema<IosApps401Error> = s.object<IosApps401Error>(
  {
    message: s.string(),
    code: s.int(),
  },
  { additionalProperties: s.json() },
);
