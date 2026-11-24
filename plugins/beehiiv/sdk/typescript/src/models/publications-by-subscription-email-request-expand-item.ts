import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PublicationsBySubscriptionEmailRequestExpandItem = {
  Subscription: "subscription",
  Publication: "publication",
  SubscriptionCustomFields: "subscription_custom_fields",
} as const;
export type PublicationsBySubscriptionEmailRequestExpandItem =
  | (typeof PublicationsBySubscriptionEmailRequestExpandItem)[keyof typeof PublicationsBySubscriptionEmailRequestExpandItem]
  | (string & {});

export const publicationsBySubscriptionEmailRequestExpandItemSchema: EnumSchema<PublicationsBySubscriptionEmailRequestExpandItem> =
  s.enumOf<PublicationsBySubscriptionEmailRequestExpandItem>(
    PublicationsBySubscriptionEmailRequestExpandItem,
  );
