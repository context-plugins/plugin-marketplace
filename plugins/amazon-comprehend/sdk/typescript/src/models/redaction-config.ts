import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { maskModeSchema, type MaskMode } from "./mask-mode.js";
import { piiEntityTypeSchema, type PiiEntityType } from "./pii-entity-type.js";

export type RedactionConfig = {
  /**
   * An array of the types of PII entities that Amazon Comprehend detects in the input text for your
   * request.
   */
  piiEntityTypes?: PiiEntityType[];
  /** Specifies whether the PII entity is redacted with the mask character or the entity type. */
  maskMode?: MaskMode;
  /** A character that replaces each character in the redacted PII entity. */
  maskCharacter?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const redactionConfigSchema: Schema<RedactionConfig> = s.object<RedactionConfig>(
  {
    piiEntityTypes: s.optional(s.array(s.lazy(() => piiEntityTypeSchema))),
    maskMode: s.optional(s.lazy(() => maskModeSchema)),
    maskCharacter: s.optional(s.string()),
    _keysMap: {
      piiEntityTypes: "PiiEntityTypes",
      maskMode: "MaskMode",
      maskCharacter: "MaskCharacter",
    },
  },
  { additionalProperties: s.json() },
);
