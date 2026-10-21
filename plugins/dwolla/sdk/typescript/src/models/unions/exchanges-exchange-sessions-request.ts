import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  createReAuthExchangeSessionWithRedirectSchema,
  type CreateReAuthExchangeSessionWithRedirect,
} from "../create-re-auth-exchange-session-with-redirect.js";

export type ExchangesExchangeSessionsRequest =
  | Record<string, unknown>
  | CreateReAuthExchangeSessionWithRedirect;

export const exchangesExchangeSessionsRequestSchema: Schema<ExchangesExchangeSessionsRequest> =
  s.of<ExchangesExchangeSessionsRequest>(
    s.union([s.record(s.string(), s.unknown()), s.lazy(() => createReAuthExchangeSessionWithRedirectSchema)]),
  );
