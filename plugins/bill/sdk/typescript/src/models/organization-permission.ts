import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cardSchema, type Card } from "./card.js";
import { walletSchema, type Wallet } from "./wallet.js";

/** Organization level permission response DTO. */
export type OrganizationPermission = {
  card?: Card;
  wallet?: Wallet;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organizationPermissionSchema: Schema<OrganizationPermission> = s.object<OrganizationPermission>(
  {
    card: s.optional(s.lazy(() => cardSchema)),
    wallet: s.optional(s.lazy(() => walletSchema)),
  },
  { additionalProperties: s.json() },
);
