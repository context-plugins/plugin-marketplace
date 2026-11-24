import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authUserSchema, type AuthUser } from "./auth-user.js";

export type AuthSubscriptionAccount = {
  apiTokenName?: string;
  endsAt?: string;
  id?: string;
  isEnterprise?: boolean;
  maxConcurrency?: number;
  quantity?: number;
  rateLimit?: number;
  rateTtl?: number;
  stripeStatus?: string;
  stripeSubscriptionId?: string;
  subscriptionItemId?: string;
  tokenLimit?: number;
  tokenUsage?: number;
  trialEndsAt?: string;
  user?: AuthUser;
  userId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authSubscriptionAccountSchema: Schema<AuthSubscriptionAccount> =
  s.object<AuthSubscriptionAccount>(
    {
      apiTokenName: s.optional(s.string()),
      endsAt: s.optional(s.string()),
      id: s.optional(s.string()),
      isEnterprise: s.optional(s.boolean()),
      maxConcurrency: s.optional(s.int()),
      quantity: s.optional(s.int()),
      rateLimit: s.optional(s.int()),
      rateTtl: s.optional(s.int()),
      stripeStatus: s.optional(s.string()),
      stripeSubscriptionId: s.optional(s.string()),
      subscriptionItemId: s.optional(s.string()),
      tokenLimit: s.optional(s.int()),
      tokenUsage: s.optional(s.int()),
      trialEndsAt: s.optional(s.string()),
      user: s.optional(s.lazy(() => authUserSchema)),
      userId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
