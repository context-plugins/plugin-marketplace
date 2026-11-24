import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IosAppsRecrawl401Error = {
  message: string;
  code: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const iosAppsRecrawl401ErrorSchema: Schema<IosAppsRecrawl401Error> = s.object<IosAppsRecrawl401Error>(
  {
    message: s.string(),
    code: s.int(),
  },
  { additionalProperties: s.json() },
);
