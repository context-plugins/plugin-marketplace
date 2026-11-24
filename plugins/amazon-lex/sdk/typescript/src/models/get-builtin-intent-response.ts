import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { builtinIntentSlotSchema, type BuiltinIntentSlot } from "./builtin-intent-slot.js";
import { supportedLocaleSchema, type SupportedLocale } from "./supported-locale.js";

export type GetBuiltinIntentResponse = {
  /** The unique identifier for a built-in intent. */
  signature?: string;
  /** A list of locales that the intent supports. */
  supportedLocales?: SupportedLocale[];
  /** An array of BuiltinIntentSlot objects, one entry for each slot type in the intent. */
  slots?: BuiltinIntentSlot[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getBuiltinIntentResponseSchema: Schema<GetBuiltinIntentResponse> =
  s.object<GetBuiltinIntentResponse>(
    {
      signature: s.optional(s.string()),
      supportedLocales: s.optional(s.array(s.lazy(() => supportedLocaleSchema))),
      slots: s.optional(s.array(s.lazy(() => builtinIntentSlotSchema))),
    },
    { additionalProperties: s.json() },
  );
