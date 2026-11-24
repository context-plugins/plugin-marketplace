import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Referrer type. */
export const Type1 = {
  SalesforceCoreBotId: "Salesforce:Core:Bot:Id",
  SalesforceBotRuntimeSessionId: "Salesforce:BotRuntime:Session:Id",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
