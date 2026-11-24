import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1RecallsBatchSubmitRequest = {
  /** Array of 17-character VINs (max 10,000 per batch). */
  vins?: string[];
  /**
   * Inline CSV text containing VINs. Available with CarsXE API-key authentication only; x402 does
   * not accept this form.
   */
  csv?: string;
  /**
   * HTTPS link to a CSV file of VINs (max 5 MB) hosted on a supported storage provider (e.g. S3,
   * GCS, Firebase, Dropbox). Available with CarsXE API-key authentication only; x402 does not
   * accept this form.
   */
  csvUrl?: string;
  /**
   * HTTPS URL for a customer webhook. CarsXE POSTs a JSON payload when the batch finishes. Must be
   * a valid HTTPS URL allowed by CarsXE validation rules.
   */
  webhookUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1RecallsBatchSubmitRequestSchema: Schema<V1RecallsBatchSubmitRequest> =
  s.object<V1RecallsBatchSubmitRequest>(
    {
      vins: s.optional(s.array(s.string())),
      csv: s.optional(s.string()),
      csvUrl: s.optional(s.string()),
      webhookUrl: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
