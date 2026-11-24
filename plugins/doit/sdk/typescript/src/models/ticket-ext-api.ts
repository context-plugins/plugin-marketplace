import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  platformDoiTSupportRequestsApiSchema,
  type PlatformDoiTSupportRequestsApi,
} from "./platform-doi-tsupport-requests-api.js";
import {
  severityDoiTSupportRequestsApiSchema,
  type SeverityDoiTSupportRequestsApi,
} from "./severity-doi-tsupport-requests-api.js";

/** Payload to create a support ticket via API. */
export type TicketExtApi = {
  /** The body of the ticket (can include html formatting). */
  body: string;
  /** Ticket creation time. */
  created?: string;
  /** Platform of the ticket. */
  platform: PlatformDoiTSupportRequestsApi;
  /** Ticket product details. */
  product: string;
  /**
   * Human contact email used as the Zendesk ticket requester. Required when the caller is a service
   * account. User callers must omit this field; their verified email remains the requester.
   */
  requester?: string;
  /** Ticket severity. */
  severity: SeverityDoiTSupportRequestsApi;
  /** The subject of the ticket. */
  subject: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ticketExtApiProperties: s.Shape<TicketExtApi> = {
  body: s.string(),
  created: s.optional(s.string()),
  platform: platformDoiTSupportRequestsApiSchema,
  product: s.string(),
  requester: s.optional(s.string()),
  severity: severityDoiTSupportRequestsApiSchema,
  subject: s.string(),
};

export const ticketExtApiInternalSchema: Schema<TicketExtApi> = s.object<TicketExtApi>(
  ticketExtApiProperties,
  { additionalProperties: s.json() },
);

export const ticketExtApiSchema: Schema<TicketExtApi> = s.lazySchema(() =>
  s.object<TicketExtApi>(
    {
      ...ticketExtApiProperties,
      requester: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
