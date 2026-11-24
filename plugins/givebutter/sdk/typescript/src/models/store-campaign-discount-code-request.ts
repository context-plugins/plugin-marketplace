import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { discountCodeTypeSchema, type DiscountCodeType } from "./discount-code-type.js";

export type StoreCampaignDiscountCodeRequest = {
  items?: string[] | null;
  type: DiscountCodeType;
  active: boolean;
  amount: number;
  code: string;
  uses?: number | null;
  startsAt?: Date | null;
  expiresAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const storeCampaignDiscountCodeRequestProperties: s.Shape<StoreCampaignDiscountCodeRequest> = {
  items: s.optionalNullable(s.array(s.string())),
  type: discountCodeTypeSchema,
  active: s.boolean(),
  amount: s.float64(),
  code: s.string(),
  uses: s.optionalNullable(s.float64()),
  startsAt: s.optionalNullable(s.dateTime()),
  expiresAt: s.optionalNullable(s.dateTime()),
  _keysMap: {
    startsAt: "starts_at",
    expiresAt: "expires_at",
  },
};

export const storeCampaignDiscountCodeRequestInternalSchema: Schema<StoreCampaignDiscountCodeRequest> =
  s.object<StoreCampaignDiscountCodeRequest>(storeCampaignDiscountCodeRequestProperties, {
    additionalProperties: s.json(),
  });

export const storeCampaignDiscountCodeRequestSchema: Schema<StoreCampaignDiscountCodeRequest> = s.lazySchema(
  () =>
    s.object<StoreCampaignDiscountCodeRequest>(
      {
        ...storeCampaignDiscountCodeRequestProperties,
        amount: s.float64().check(s.gte(1), s.lte(100)),
        code: s.string().check(s.maxLength(255)),
        uses: s.optionalNullable(s.float64().check(s.gte(1))),
      },
      { additionalProperties: s.json() },
    ),
);
