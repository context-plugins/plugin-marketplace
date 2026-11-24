import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { leadDeletionRequestSchema, type LeadDeletionRequest } from "./lead-deletion-request.js";

export type PagesLeadDeletionRequestResponse = {
  leadDeletionRequests?: LeadDeletionRequest[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pagesLeadDeletionRequestResponseSchema: Schema<PagesLeadDeletionRequestResponse> =
  s.object<PagesLeadDeletionRequestResponse>(
    {
      leadDeletionRequests: s.optional(s.array(s.lazy(() => leadDeletionRequestSchema))),
      _keysMap: {
        leadDeletionRequests: "lead_deletion_requests",
      },
    },
    { additionalProperties: s.json() },
  );
