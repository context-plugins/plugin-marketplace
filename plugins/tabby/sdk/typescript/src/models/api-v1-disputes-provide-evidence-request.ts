import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1DisputesProvideEvidenceRequest = {
  /** Text content of the evidence being provided. */
  content: string;
  /**
   * Array of attachment IDs to include as evidence. IDs can be received via `upload attachment`
   * endpoint.
   */
  attachmentIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1DisputesProvideEvidenceRequestSchema: Schema<ApiV1DisputesProvideEvidenceRequest> =
  s.object<ApiV1DisputesProvideEvidenceRequest>(
    {
      content: s.string(),
      attachmentIds: s.optional(s.array(s.string())),
      _keysMap: {
        attachmentIds: "attachment_ids",
      },
    },
    { additionalProperties: s.json() },
  );
