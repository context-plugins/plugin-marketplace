import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AppVersion = {
  /** Increasing number on android, major.minor on iOS */
  code: string;
  /** The name of the app version */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const appVersionSchema: Schema<AppVersion> = s.object<AppVersion>(
  {
    code: s.string(),
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
