import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response message for ProvisionAccountTicket RPC. */
export type GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse = {
  /** The param to be passed in the ToS link. */
  accountTicketId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaProvisionAccountTicketResponseSchema: Schema<GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse> =
  s.object<GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse>(
    {
      accountTicketId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
