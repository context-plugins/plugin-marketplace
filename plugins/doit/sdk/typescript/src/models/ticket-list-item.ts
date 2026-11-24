import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  platformDoiTSupportRequestsApiSchema,
  type PlatformDoiTSupportRequestsApi,
} from "./platform-doi-tsupport-requests-api.js";

/** Summary information about a support ticket. */
export type TicketListItem = {
  /** The time when this ticket was created, in milliseconds since the epoch. */
  createTime?: number;
  /** Ticket ID (e.g., "33234"). */
  id?: number;
  /** Whether the ticket is public. */
  isPublic?: boolean;
  /** Platform of the ticket. */
  platform?: PlatformDoiTSupportRequestsApi;
  /** Ticket product. */
  product?: string;
  /** The ticket requester in the form of user@domain.com */
  requester?: string;
  /** Ticket severity. */
  severity?: string;
  /** Ticket status. */
  status?: string;
  /** The subject of the ticket. */
  subject?: string;
  /** The time when this ticket was last updated, in milliseconds since the epoch. */
  updateTime?: number;
  /** Link to the report in DoiT console. */
  urlUi?: string;
  /**
   * Ticket tags, filtered by caller type. DoiT employee (doer) callers receive the full tag set
   * verbatim, including internal namespaces (e.g. `tier/*`, `synapse_*`). Customer callers receive
   * only tags under the `customer_tag/` namespace, with that prefix stripped. Always present; empty
   * array when the caller has no visible tags.
   */
  tags?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ticketListItemSchema: Schema<TicketListItem> = s.object<TicketListItem>(
  {
    createTime: s.optional(s.int()),
    id: s.optional(s.int()),
    isPublic: s.optional(s.boolean()),
    platform: s.optional(s.lazy(() => platformDoiTSupportRequestsApiSchema)),
    product: s.optional(s.string()),
    requester: s.optional(s.string()),
    severity: s.optional(s.string()),
    status: s.optional(s.string()),
    subject: s.optional(s.string()),
    updateTime: s.optional(s.int()),
    urlUi: s.optional(s.string()),
    tags: s.optional(s.array(s.string())),
    _keysMap: {
      isPublic: "is_public",
      urlUi: "urlUI",
    },
  },
  { additionalProperties: s.json() },
);
