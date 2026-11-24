import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  actionBundleSocialCreditApiSchema,
  type ActionBundleSocialCreditApi,
} from "./action-bundle-social-credit-api.js";

export type Line = {
  action: ActionBundleSocialCreditApi;
  label: string;
  unitAmountMicros: number;
  amountMicros: number;
  amountCents: number;
  /** @default "usd" */
  currency?: "usd";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lineSchema: Schema<Line> = s.object<Line>(
  {
    action: actionBundleSocialCreditApiSchema,
    label: s.string(),
    unitAmountMicros: s.int(),
    amountMicros: s.int(),
    amountCents: s.int(),
    currency: s.defaulted(s.literal("usd"), "usd"),
  },
  { additionalProperties: s.json() },
);
