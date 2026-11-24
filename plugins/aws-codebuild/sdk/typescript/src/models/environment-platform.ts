import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { environmentLanguageSchema, type EnvironmentLanguage } from "./environment-language.js";
import { platformSchema, type Platform } from "./platform.js";

export type EnvironmentPlatform = {
  /** The platform's name. */
  platform?: Platform;
  /** The list of programming languages that are available for the specified platform. */
  languages?: EnvironmentLanguage[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const environmentPlatformSchema: Schema<EnvironmentPlatform> = s.object<EnvironmentPlatform>(
  {
    platform: s.optional(s.lazy(() => platformSchema)),
    languages: s.optional(s.array(s.lazy(() => environmentLanguageSchema))),
  },
  { additionalProperties: s.json() },
);
