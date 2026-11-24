import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { supportedLocaleSchema, type SupportedLocale } from "./supported-locale.js";

export type BuiltinIntentMetadata = {
  /**
   * A unique identifier for the built-in intent. To find the signature for an intent, see Standard
   * Built-in Intents in the Alexa Skills Kit.
   */
  signature?: string;
  /** A list of identifiers for the locales that the intent supports. */
  supportedLocales?: SupportedLocale[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const builtinIntentMetadataSchema: Schema<BuiltinIntentMetadata> = s.object<BuiltinIntentMetadata>(
  {
    signature: s.optional(s.string()),
    supportedLocales: s.optional(s.array(s.lazy(() => supportedLocaleSchema))),
  },
  { additionalProperties: s.json() },
);
