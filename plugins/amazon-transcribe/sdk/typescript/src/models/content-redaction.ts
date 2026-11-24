import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { piiEntityTypeSchema, type PiiEntityType } from "./pii-entity-type.js";
import { redactionOutputSchema, type RedactionOutput } from "./redaction-output.js";

export type ContentRedaction = {
  /**
   * Specify the category of information you want to redact; PII (personally identifiable
   * information) is the only valid value. You can use PiiEntityTypes to choose which types of PII
   * you want to redact. If you do not include PiiEntityTypes in your request, all PII is redacted.
   *
   * @default "PII"
   */
  redactionType?: "PII";
  /**
   * Specify if you want only a redacted transcript, or if you want a redacted and an unredacted
   * transcript. When you choose redacted Amazon Transcribe creates only a redacted transcript. When
   * you choose redacted_and_unredacted Amazon Transcribe creates a redacted and an unredacted
   * transcript (as two separate files).
   */
  redactionOutput: RedactionOutput;
  /**
   * Specify which types of personally identifiable information (PII) you want to redact in your
   * transcript. You can include as many types as you'd like, or you can select ALL. If you do not
   * include PiiEntityTypes in your request, all PII is redacted.
   */
  piiEntityTypes?: PiiEntityType[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contentRedactionSchema: Schema<ContentRedaction> = s.object<ContentRedaction>(
  {
    redactionType: s.defaulted(s.literal("PII"), "PII"),
    redactionOutput: redactionOutputSchema,
    piiEntityTypes: s.optional(s.array(s.lazy(() => piiEntityTypeSchema))),
    _keysMap: {
      redactionType: "RedactionType",
      redactionOutput: "RedactionOutput",
      piiEntityTypes: "PiiEntityTypes",
    },
  },
  { additionalProperties: s.json() },
);
