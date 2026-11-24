import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Delivery channel type. API-managed contact points use WEBHOOK. */
export const Type = {
  Email: "EMAIL",
  Fastn: "FASTN",
  Webhook: "WEBHOOK",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
