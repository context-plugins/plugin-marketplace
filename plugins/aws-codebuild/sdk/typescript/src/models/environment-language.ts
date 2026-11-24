import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { environmentImageSchema, type EnvironmentImage } from "./environment-image.js";
import { languageSchema, type Language } from "./language.js";

export type EnvironmentLanguage = {
  /** The programming language for the Docker images. */
  language?: Language;
  /** The list of Docker images that are related by the specified programming language. */
  images?: EnvironmentImage[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const environmentLanguageSchema: Schema<EnvironmentLanguage> = s.object<EnvironmentLanguage>(
  {
    language: s.optional(s.lazy(() => languageSchema)),
    images: s.optional(s.array(s.lazy(() => environmentImageSchema))),
  },
  { additionalProperties: s.json() },
);
