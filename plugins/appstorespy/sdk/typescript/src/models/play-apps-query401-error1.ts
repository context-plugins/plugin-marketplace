import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlayAppsQuery401Error1 = {
  message: string;
  code: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const playAppsQuery401Error1Schema: Schema<PlayAppsQuery401Error1> = s.object<PlayAppsQuery401Error1>(
  {
    message: s.string(),
    code: s.int(),
  },
  { additionalProperties: s.json() },
);
