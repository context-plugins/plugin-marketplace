import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetStampSchema, type DatasetStamp } from "./dataset-stamp.js";
import { metaScopeSchema, type MetaScope } from "./meta-scope.js";
import { candidCompatibilitySchema, type CandidCompatibility } from "./unions/candid-compatibility.js";
import { complianceSourcesSchema, type ComplianceSources } from "./unions/compliance-sources.js";
import { trialSchema, type Trial } from "./unions/trial.js";
import { xPlinth1Schema, type XPlinth1 } from "./unions/xplinth1.js";

/** What this deployment holds and how to reach it. Needs no key — start here. */
export type MetaResponse = {
  /** @default 200 */
  code?: number;
  message: string;
  xPlinth?: XPlinth1;
  /**
   * Provenance of the slice that answered. `version` is the sync signal — poll it, re-pull when it
   * moves.
   */
  dataset: DatasetStamp;
  /**
   * Headline counts for the slice currently being served — the live figure any copy should track.
   *
   * ⚠️ THE TWO YEAR ENDS ARE DIFFERENT NUMBERS AND BOTH ARE PUBLISHED. `last_fiscal_year` is
   * max(tax_year) — sync a mirrored copy against it. `last_complete_fiscal_year` is the newest year
   * that has stopped filling, and it is the one prose should quote: the IRS lag means the corpus
   * always carries a few hundred early filings for a barely-started year, so max(tax_year) reads a
   * year or two ahead of the coverage anyone would recognise. Publishing only the first is what put
   * /meta at FY2026 while every page on the site said FY2025 (2026-08 audit).
   */
  scope: MetaScope;
  /** How to get a key with no account, and what it may read. */
  trial?: Trial;
  complianceSources?: ComplianceSources;
  candidCompatibility?: CandidCompatibility;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metaResponseSchema: Schema<MetaResponse> = s.object<MetaResponse>(
  {
    code: s.defaulted(s.int(), 200),
    message: s.string(),
    xPlinth: s.optional(s.lazy(() => xPlinth1Schema)),
    dataset: datasetStampSchema,
    scope: metaScopeSchema,
    trial: s.optional(s.lazy(() => trialSchema)),
    complianceSources: s.optional(s.lazy(() => complianceSourcesSchema)),
    candidCompatibility: s.optional(s.lazy(() => candidCompatibilitySchema)),
    _keysMap: {
      xPlinth: "x_plinth",
      complianceSources: "compliance_sources",
      candidCompatibility: "candid_compatibility",
    },
  },
  { additionalProperties: s.json() },
);
