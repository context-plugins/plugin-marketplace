import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of the transfer target. */
export const Type = {
  SalesforceCoreBotId: "Salesforce:Core:Bot:Id",
  SalesforceCoreQueueId: "Salesforce:Core:Queue:Id",
  SalesforceCoreSkillId: "Salesforce:Core:Skill:Id",
  SalesforceCoreFlowId: "Salesforce:Core:Flow:Id",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
