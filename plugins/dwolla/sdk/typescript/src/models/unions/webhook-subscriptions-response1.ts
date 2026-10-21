import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { invalidUrlFormatErrorSchema, type InvalidUrlFormatError } from "../invalid-url-format-error.js";
import {
  maxSubscriptionsReachedErrorSchema,
  type MaxSubscriptionsReachedError,
} from "../max-subscriptions-reached-error.js";
import { secretTooLongErrorSchema, type SecretTooLongError } from "../secret-too-long-error.js";

export type WebhookSubscriptionsResponse1 =
  | InvalidUrlFormatError
  | SecretTooLongError
  | MaxSubscriptionsReachedError;

export const webhookSubscriptionsResponse1Schema: Schema<WebhookSubscriptionsResponse1> =
  s.of<WebhookSubscriptionsResponse1>(
    s.union([
      s.lazy(() => invalidUrlFormatErrorSchema),
      s.lazy(() => secretTooLongErrorSchema),
      s.lazy(() => maxSubscriptionsReachedErrorSchema),
    ]),
  );
