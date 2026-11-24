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

/** Detailed information about a single support ticket. */
export type TicketDetailExtApi = {
  /** Ticket ID. */
  id?: number;
  /** The subject of the ticket. */
  subject?: string;
  /** The body of the initial ticket message. */
  description?: string;
  /** Email address of the ticket requester. */
  requester?: string;
  /** Ticket severity. */
  severity?: SeverityDoiTSupportRequestsApi;
  /** Platform of the ticket. */
  platform?: PlatformDoiTSupportRequestsApi;
  /** Ticket product. */
  product?: string;
  /**
   * The cloud asset identifier(s) the requester selected on the support form's asset-selector
   * control — typically the GCP project ID, AWS account ID, Azure subscription ID, or equivalent.
   * May contain multiple identifiers as a comma-separated list (no spaces) when the requester
   * selected more than one asset, e.g. "111111111111,222222222222". Empty string when the ticket
   * has no asset value (e.g. older tickets or tickets opened through paths that bypass the form
   * selector).
   */
  platformInfo?: string;
  /** Ticket status. */
  status?: string;
  /** The time when this ticket was created, in milliseconds since the epoch. */
  createTime?: number;
  /** The time when this ticket was last updated, in milliseconds since the epoch. */
  updateTime?: number;
  /** Link to the ticket in DoiT console. */
  urlUi?: string;
  /** Whether the ticket is public. */
  isPublic?: boolean;
  /**
   * Ticket tags, filtered by caller type. DoiT employee (doer) callers receive the full tag set
   * verbatim, including internal namespaces (e.g. `tier/*`, `synapse_*`). Customer callers receive
   * only tags under the `customer_tag/` namespace, with that prefix stripped (e.g. a tag added as
   * `billing` reads back as `billing`). Always present; empty array when the caller has no visible
   * tags.
   */
  tags?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ticketDetailExtApiSchema: Schema<TicketDetailExtApi> = s.object<TicketDetailExtApi>(
  {
    id: s.optional(s.int()),
    subject: s.optional(s.string()),
    description: s.optional(s.string()),
    requester: s.optional(s.string()),
    severity: s.optional(s.lazy(() => severityDoiTSupportRequestsApiSchema)),
    platform: s.optional(s.lazy(() => platformDoiTSupportRequestsApiSchema)),
    product: s.optional(s.string()),
    platformInfo: s.optional(s.string()),
    status: s.optional(s.string()),
    createTime: s.optional(s.int()),
    updateTime: s.optional(s.int()),
    urlUi: s.optional(s.string()),
    isPublic: s.optional(s.boolean()),
    tags: s.optional(s.array(s.string())),
    _keysMap: {
      platformInfo: "platform_info",
      urlUi: "urlUI",
      isPublic: "is_public",
    },
  },
  { additionalProperties: s.json() },
);
