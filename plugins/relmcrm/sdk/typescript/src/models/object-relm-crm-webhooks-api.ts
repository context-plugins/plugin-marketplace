import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ObjectRelmCrmWebhooksApi = {
  Webhook: "webhook",
} as const;
export type ObjectRelmCrmWebhooksApi =
  | (typeof ObjectRelmCrmWebhooksApi)[keyof typeof ObjectRelmCrmWebhooksApi]
  | (string & {});

export const objectRelmCrmWebhooksApiSchema: EnumSchema<ObjectRelmCrmWebhooksApi> =
  s.enumOf<ObjectRelmCrmWebhooksApi>(ObjectRelmCrmWebhooksApi);
