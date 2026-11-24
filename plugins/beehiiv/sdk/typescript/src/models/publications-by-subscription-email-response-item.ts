import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { publication2Schema, type Publication2 } from "./publication2.js";
import {
  subscriptionExpandedStatus2Schema,
  type SubscriptionExpandedStatus2,
} from "./subscription-expanded-status2.js";
import { subscription1InternalSchema, subscription1Schema, type Subscription1 } from "./subscription1.js";

export type PublicationsBySubscriptionEmailResponseItem = {
  /** The prefixed ID of the publication */
  publicationId: string;
  /** The name of the publication */
  publicationName: string;
  /** The prefixed ID of the subscription matching the email address for this publication */
  subscriptionId: string;
  /** The status of the subscription matching the email address for this publication */
  status: SubscriptionExpandedStatus2;
  /** The full Publication object. Only present when `expand` includes `publication`. */
  publication?: Publication2;
  /**
   * The Subscription object matching the email address for this publication. Only present when
   * `expand` includes `subscription` or `subscription_custom_fields`.
   */
  subscription?: Subscription1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const publicationsBySubscriptionEmailResponseItemProperties: s.Shape<PublicationsBySubscriptionEmailResponseItem> =
  {
    publicationId: s.string(),
    publicationName: s.string(),
    subscriptionId: s.string(),
    status: subscriptionExpandedStatus2Schema,
    publication: s.optional(s.lazy(() => publication2Schema)),
    subscription: s.optional(s.lazy(() => subscription1InternalSchema)),
    _keysMap: {
      publicationId: "publication_id",
      publicationName: "publication_name",
      subscriptionId: "subscription_id",
    },
  };

export const publicationsBySubscriptionEmailResponseItemInternalSchema: Schema<PublicationsBySubscriptionEmailResponseItem> =
  s.object<PublicationsBySubscriptionEmailResponseItem>(
    publicationsBySubscriptionEmailResponseItemProperties,
    { additionalProperties: s.json() },
  );

export const publicationsBySubscriptionEmailResponseItemSchema: Schema<PublicationsBySubscriptionEmailResponseItem> =
  s.lazySchema(() =>
    s.object<PublicationsBySubscriptionEmailResponseItem>(
      {
        ...publicationsBySubscriptionEmailResponseItemProperties,
        subscription: s.optional(s.lazy(() => subscription1Schema)),
      },
      { additionalProperties: s.json() },
    ),
  );
