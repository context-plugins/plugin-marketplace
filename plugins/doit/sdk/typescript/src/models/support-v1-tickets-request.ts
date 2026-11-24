import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusDoiTSupportRequestsApiSchema,
  type StatusDoiTSupportRequestsApi,
} from "./status-doi-tsupport-requests-api.js";

export type SupportV1TicketsRequest = {
  /** The status to set on the request. */
  status?: StatusDoiTSupportRequestsApi;
  /**
   * Email of the DoiT employee to assign the request to, resolved to a Zendesk agent. DoiT
   * employees only.
   */
  assignee?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const supportV1TicketsRequestProperties: s.Shape<SupportV1TicketsRequest> = {
  status: s.optional(s.lazy(() => statusDoiTSupportRequestsApiSchema)),
  assignee: s.optional(s.string()),
};

export const supportV1TicketsRequestInternalSchema: Schema<SupportV1TicketsRequest> =
  s.object<SupportV1TicketsRequest>(supportV1TicketsRequestProperties, { additionalProperties: s.json() });

export const supportV1TicketsRequestSchema: Schema<SupportV1TicketsRequest> = s.lazySchema(() =>
  s.object<SupportV1TicketsRequest>(
    {
      ...supportV1TicketsRequestProperties,
      assignee: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
