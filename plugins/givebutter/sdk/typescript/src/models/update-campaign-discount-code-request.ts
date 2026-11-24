import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { discountCodeTypeSchema, type DiscountCodeType } from "./discount-code-type.js";

export type UpdateCampaignDiscountCodeRequest = {
  items?: string[] | null;
  amount: number;
  type?: DiscountCodeType;
  active?: boolean;
  code?: string;
  uses?: number | null;
  startsAt?: Date | null;
  expiresAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateCampaignDiscountCodeRequestProperties: s.Shape<UpdateCampaignDiscountCodeRequest> = {
  items: s.optionalNullable(s.array(s.string())),
  amount: s.float64(),
  type: s.optional(s.lazy(() => discountCodeTypeSchema)),
  active: s.optional(s.boolean()),
  code: s.optional(s.string()),
  uses: s.optionalNullable(s.float64()),
  startsAt: s.optionalNullable(s.dateTime()),
  expiresAt: s.optionalNullable(s.dateTime()),
  _keysMap: {
    startsAt: "starts_at",
    expiresAt: "expires_at",
  },
};

export const updateCampaignDiscountCodeRequestInternalSchema: Schema<UpdateCampaignDiscountCodeRequest> =
  s.object<UpdateCampaignDiscountCodeRequest>(updateCampaignDiscountCodeRequestProperties, {
    additionalProperties: s.json(),
  });

export const updateCampaignDiscountCodeRequestSchema: Schema<UpdateCampaignDiscountCodeRequest> =
  s.lazySchema(() =>
    s.object<UpdateCampaignDiscountCodeRequest>(
      {
        ...updateCampaignDiscountCodeRequestProperties,
        amount: s.float64().check(s.gte(1), s.lte(100)),
        code: s.optional(s.string().check(s.maxLength(255))),
        uses: s.optionalNullable(s.float64().check(s.gte(1))),
      },
      { additionalProperties: s.json() },
    ),
  );
