import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { coverSchema, type Cover } from "./cover.js";
import { currencySchema, type Currency } from "./currency.js";
import { typeSchema, type Type } from "./type.js";
import { settingInternalSchema, settingSchema, type Setting } from "./unions/setting.js";

export type UpdateCampaignRequest = {
  published?: boolean;
  public?: boolean;
  type?: Type;
  title?: string;
  subtitle?: string | null;
  description?: string | null;
  goal?: number | null;
  endAt?: Date | null;
  shortCode?: string | null;
  slug?: string;
  beneficiaryId?: number | null;
  timezone?: string | null;
  currency?: Currency;
  defaultAppealId?: number | null;
  cover?: Cover;
  settings?: Setting[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateCampaignRequestProperties: s.Shape<UpdateCampaignRequest> = {
  published: s.optional(s.boolean()),
  public: s.optional(s.boolean()),
  type: s.optional(s.lazy(() => typeSchema)),
  title: s.optional(s.string()),
  subtitle: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  goal: s.optionalNullable(s.int()),
  endAt: s.optionalNullable(s.dateTime()),
  shortCode: s.optionalNullable(s.string()),
  slug: s.optional(s.string()),
  beneficiaryId: s.optionalNullable(s.int()),
  timezone: s.optionalNullable(s.string()),
  currency: s.optional(s.lazy(() => currencySchema)),
  defaultAppealId: s.optionalNullable(s.int()),
  cover: s.optional(s.lazy(() => coverSchema)),
  settings: s.optionalNullable(s.array(s.lazy(() => settingInternalSchema))),
  _keysMap: {
    endAt: "end_at",
    shortCode: "short_code",
    beneficiaryId: "beneficiary_id",
    defaultAppealId: "default_appeal_id",
  },
};

export const updateCampaignRequestInternalSchema: Schema<UpdateCampaignRequest> =
  s.object<UpdateCampaignRequest>(updateCampaignRequestProperties, { additionalProperties: s.json() });

export const updateCampaignRequestSchema: Schema<UpdateCampaignRequest> = s.lazySchema(() =>
  s.object<UpdateCampaignRequest>(
    {
      ...updateCampaignRequestProperties,
      title: s.optional(s.string().check(s.maxLength(150))),
      subtitle: s.optionalNullable(s.string().check(s.maxLength(255))),
      goal: s.optionalNullable(s.int().check(s.gte(0))),
      shortCode: s.optionalNullable(s.string().check(s.maxLength(255))),
      slug: s.optional(s.string().check(s.maxLength(255))),
      timezone: s.optionalNullable(s.string().check(s.maxLength(255))),
      settings: s.optionalNullable(s.array(s.lazy(() => settingSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
