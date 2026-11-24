import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { currencySchema, type Currency } from "./currency.js";
import { typeSchema, type Type } from "./type.js";
import { settingInternalSchema, settingSchema, type Setting } from "./unions/setting.js";

export type StoreCampaignRequest = {
  type: Type;
  title: string;
  subtitle?: string | null;
  description?: string | null;
  goal?: number | null;
  endAt?: Date | null;
  slug?: string;
  beneficiaryId?: number | null;
  timezone?: string | null;
  currency?: Currency;
  settings?: Setting[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const storeCampaignRequestProperties: s.Shape<StoreCampaignRequest> = {
  type: typeSchema,
  title: s.string(),
  subtitle: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  goal: s.optionalNullable(s.int()),
  endAt: s.optionalNullable(s.dateTime()),
  slug: s.optional(s.string()),
  beneficiaryId: s.optionalNullable(s.int()),
  timezone: s.optionalNullable(s.string()),
  currency: s.optional(s.lazy(() => currencySchema)),
  settings: s.optionalNullable(s.array(s.lazy(() => settingInternalSchema))),
  _keysMap: {
    endAt: "end_at",
    beneficiaryId: "beneficiary_id",
  },
};

export const storeCampaignRequestInternalSchema: Schema<StoreCampaignRequest> =
  s.object<StoreCampaignRequest>(storeCampaignRequestProperties, { additionalProperties: s.json() });

export const storeCampaignRequestSchema: Schema<StoreCampaignRequest> = s.lazySchema(() =>
  s.object<StoreCampaignRequest>(
    {
      ...storeCampaignRequestProperties,
      title: s.string().check(s.maxLength(150)),
      subtitle: s.optionalNullable(s.string().check(s.maxLength(255))),
      goal: s.optionalNullable(s.int().check(s.gte(0))),
      slug: s.optional(s.string().check(s.maxLength(255))),
      timezone: s.optionalNullable(s.string().check(s.maxLength(255))),
      settings: s.optionalNullable(s.array(s.lazy(() => settingSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
