import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cardSchema, type Card } from "./card.js";
import { walletSchema, type Wallet } from "./wallet.js";

export type Organization = {
  card?: Card;
  wallet?: Wallet;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organizationSchema: Schema<Organization> = s.object<Organization>(
  {
    card: s.optional(s.lazy(() => cardSchema)),
    wallet: s.optional(s.lazy(() => walletSchema)),
  },
  { additionalProperties: s.json() },
);
