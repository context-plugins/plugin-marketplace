import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayPartnerWebhooksApi = {
  Webhook: "webhook",
} as const;
export type EntityRazorpayPartnerWebhooksApi =
  | (typeof EntityRazorpayPartnerWebhooksApi)[keyof typeof EntityRazorpayPartnerWebhooksApi]
  | (string & {});

export const entityRazorpayPartnerWebhooksApiSchema: EnumSchema<EntityRazorpayPartnerWebhooksApi> =
  s.enumOf<EntityRazorpayPartnerWebhooksApi>(EntityRazorpayPartnerWebhooksApi);
