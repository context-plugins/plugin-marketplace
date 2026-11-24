import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyLookalikesMetaSchema, type CompanyLookalikesMeta } from "./company-lookalikes-meta.js";
import { lookalikeCompanyResultSchema, type LookalikeCompanyResult } from "./lookalike-company-result.js";

export type CompanyLookalikesResponse2 = {
  dedupeSessionId: string;
  results: LookalikeCompanyResult[];
  meta: CompanyLookalikesMeta;
  creditsCharged?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companyLookalikesResponse2Properties: s.Shape<CompanyLookalikesResponse2> = {
  dedupeSessionId: s.string(),
  results: s.array(s.lazy(() => lookalikeCompanyResultSchema)),
  meta: companyLookalikesMetaSchema,
  creditsCharged: s.optional(s.int()),
};

export const companyLookalikesResponse2InternalSchema: Schema<CompanyLookalikesResponse2> =
  s.object<CompanyLookalikesResponse2>(companyLookalikesResponse2Properties, {
    additionalProperties: s.json(),
  });

export const companyLookalikesResponse2Schema: Schema<CompanyLookalikesResponse2> = s.lazySchema(() =>
  s.object<CompanyLookalikesResponse2>(
    {
      ...companyLookalikesResponse2Properties,
      creditsCharged: s.optional(s.int().check(s.gte(0))),
    },
    { additionalProperties: s.json() },
  ),
);
