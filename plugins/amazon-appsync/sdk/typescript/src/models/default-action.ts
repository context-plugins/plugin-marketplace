import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The action that you want your GraphQL API to take when a request that uses Amazon Cognito user
 * pool authentication doesn't match the Amazon Cognito user pool configuration.
 */
export const DefaultAction = {
  Allow: "ALLOW",
  Deny: "DENY",
} as const;
export type DefaultAction = (typeof DefaultAction)[keyof typeof DefaultAction] | (string & {});

export const defaultActionSchema: EnumSchema<DefaultAction> = s.enumOf<DefaultAction>(DefaultAction);
