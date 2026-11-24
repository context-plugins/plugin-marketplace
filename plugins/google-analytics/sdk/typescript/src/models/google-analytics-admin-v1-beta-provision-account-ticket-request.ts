import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaAccount2Schema,
  type GoogleAnalyticsAdminV1BetaAccount2,
} from "./google-analytics-admin-v1-beta-account2.js";

/** Request message for ProvisionAccountTicket RPC. */
export type GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest = {
  /** The account to create. */
  account?: GoogleAnalyticsAdminV1BetaAccount2;
  /** Redirect URI where the user will be sent after accepting Terms of Service. */
  redirectUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaProvisionAccountTicketRequestSchema: Schema<GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest> =
  s.object<GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest>(
    {
      account: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaAccount2Schema)),
      redirectUri: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
