import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayDisputesApi = {
  Dispute: "dispute",
} as const;
export type EntityRazorpayDisputesApi =
  | (typeof EntityRazorpayDisputesApi)[keyof typeof EntityRazorpayDisputesApi]
  | (string & {});

export const entityRazorpayDisputesApiSchema: EnumSchema<EntityRazorpayDisputesApi> =
  s.enumOf<EntityRazorpayDisputesApi>(EntityRazorpayDisputesApi);
