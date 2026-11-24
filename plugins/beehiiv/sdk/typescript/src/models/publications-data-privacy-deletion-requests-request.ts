import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicationsDataPrivacyDeletionRequestsRequest = {
  /** The email address of the subscriber to delete. */
  email: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsDataPrivacyDeletionRequestsRequestSchema: Schema<PublicationsDataPrivacyDeletionRequestsRequest> =
  s.object<PublicationsDataPrivacyDeletionRequestsRequest>(
    {
      email: s.string(),
    },
    { additionalProperties: s.json() },
  );
