import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  createCustomerExchangeSessionForCardSchema,
  type CreateCustomerExchangeSessionForCard,
} from "../create-customer-exchange-session-for-card.js";
import {
  createCustomerExchangeSessionForWebSchema,
  type CreateCustomerExchangeSessionForWeb,
} from "../create-customer-exchange-session-for-web.js";
import {
  createCustomerExchangeSessionWithRedirectSchema,
  type CreateCustomerExchangeSessionWithRedirect,
} from "../create-customer-exchange-session-with-redirect.js";

export type CustomersExchangeSessionsRequest =
  | CreateCustomerExchangeSessionWithRedirect
  | CreateCustomerExchangeSessionForWeb
  | CreateCustomerExchangeSessionForCard;

export const customersExchangeSessionsRequestSchema: Schema<CustomersExchangeSessionsRequest> =
  s.of<CustomersExchangeSessionsRequest>(
    s.union([
      s.lazy(() => createCustomerExchangeSessionWithRedirectSchema),
      s.lazy(() => createCustomerExchangeSessionForWebSchema),
      s.lazy(() => createCustomerExchangeSessionForCardSchema),
    ]),
  );
