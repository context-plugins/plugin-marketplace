import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { supportedLocaleSchema, type SupportedLocale } from "./supported-locale.js";

export type BuiltinSlotTypeMetadata = {
  /**
   * A unique identifier for the built-in slot type. To find the signature for a slot type, see Slot
   * Type Reference in the Alexa Skills Kit.
   */
  signature?: string;
  /** A list of target locales for the slot. */
  supportedLocales?: SupportedLocale[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const builtinSlotTypeMetadataSchema: Schema<BuiltinSlotTypeMetadata> =
  s.object<BuiltinSlotTypeMetadata>(
    {
      signature: s.optional(s.string()),
      supportedLocales: s.optional(s.array(s.lazy(() => supportedLocaleSchema))),
    },
    { additionalProperties: s.json() },
  );
