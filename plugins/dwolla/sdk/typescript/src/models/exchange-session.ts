import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  externalProviderSessionDataSchema,
  type ExternalProviderSessionData,
} from "./external-provider-session-data.js";
import { links25Schema, type Links25 } from "./links25.js";

/**
 * Details of a previously created exchange session. Response shape varies by exchange partner.
 * - **MX**: includes `_links.external-provider-session.href` (redirect URL).
 * - **Plaid**: includes `externalProviderSessionToken` (Link initialization token).
 * - **Checkout.com**: includes `externalProviderSessionData` (payment session for Flow/debit card
 *   capture).
 */
export type ExchangeSession = {
  created: Date;
  links: Links25;
  /** Present for Plaid exchange sessions. Contains the token to initialize the Plaid Link flow. */
  externalProviderSessionToken?: string;
  /**
   * Present for Checkout.com exchange sessions (Push to Card / debit card flow). Use these fields
   * to initialize the Checkout.com Flow component for card capture.
   */
  externalProviderSessionData?: ExternalProviderSessionData;
};

export const exchangeSessionSchema: Schema<ExchangeSession> = s.object<ExchangeSession>({
  created: s.dateTime(),
  links: links25Schema,
  externalProviderSessionToken: s.optional(s.string()),
  externalProviderSessionData: s.optional(s.lazy(() => externalProviderSessionDataSchema)),
  _keysMap: {
    links: "_links",
  },
});
