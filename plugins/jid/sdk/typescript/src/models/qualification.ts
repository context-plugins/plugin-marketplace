import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { affiliationSchema, type Affiliation } from "./affiliation.js";
import { assessmentSchema, type Assessment } from "./assessment.js";
import { checkSchema, type Check } from "./check.js";
import { engagePolicySchema, type EngagePolicy } from "./engage-policy.js";
import { entitySchema, type Entity } from "./entity.js";
import { locationSchema, type Location } from "./location.js";
import { mitigationSchema, type Mitigation } from "./mitigation.js";
import { outcomeLinksSchema, type OutcomeLinks } from "./outcome-links.js";
import { readInternalSchema, readSchema, type Read } from "./read.js";
import { receiptSchema, type Receipt } from "./receipt.js";
import { recommendationSchema, type Recommendation } from "./recommendation.js";
import { retentionSchema, type Retention } from "./retention.js";
import { riskSchema, type Risk } from "./risk.js";
import { signalSchema, type Signal } from "./signal.js";
import { subScoreInternalSchema, subScoreSchema, type SubScore } from "./sub-score.js";
import { websiteDeclaredSchema, type WebsiteDeclared } from "./website-declared.js";

export type Qualification = {
  id?: string;
  assessment?: Assessment;
  entity?: Entity | null;
  signals?: Signal[];
  legitimacy?: SubScore;
  capacity?: SubScore;
  consistency?: SubScore;
  recommendation?: Recommendation;
  /** Binary answer from the shared screen rules (same as /v1/screen) under `policy`. Advisory. */
  engage?: boolean;
  risk?: Risk;
  mitigations?: Mitigation[];
  engagePolicy?: EngagePolicy;
  suggestedNextStep?: string;
  questionsToAsk?: string[];
  checks?: Check[];
  /** What to show a human: render this and nothing else. */
  read?: Read;
  websiteDeclared?: WebsiteDeclared | null;
  /**
   * Keyed calls only: signed one-click URLs that record an outcome (POST /v1/outcomes) without a
   * login.
   */
  outcomeLinks?: OutcomeLinks;
  /**
   * Claims only: does the address's domain match the claimed business (same domain, a registry
   * domain of the business, or a link between the two websites)? A mismatch means manual review,
   * never rejection.
   */
  affiliation?: Affiliation | null;
  /**
   * Present when location inputs were given: the same block as /v1/screen. A mismatch, Tor exit or
   * hosting/VPN network adds risk only alongside another negative signal and never sets
   * engage=false on its own. Jid keeps only ip_country, ip_region, network type and consistent.
   */
  location?: Location | null;
  summary?: string | null;
  rulesVersion?: string;
  receipt?: Receipt;
  retention?: Retention;
  checksUsed?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const qualificationProperties: s.Shape<Qualification> = {
  id: s.optional(s.string()),
  assessment: s.optional(s.lazy(() => assessmentSchema)),
  entity: s.optionalNullable(s.lazy(() => entitySchema)),
  signals: s.optional(s.array(s.lazy(() => signalSchema))),
  legitimacy: s.optional(s.lazy(() => subScoreInternalSchema)),
  capacity: s.optional(s.lazy(() => subScoreInternalSchema)),
  consistency: s.optional(s.lazy(() => subScoreInternalSchema)),
  recommendation: s.optional(s.lazy(() => recommendationSchema)),
  engage: s.optional(s.boolean()),
  risk: s.optional(s.lazy(() => riskSchema)),
  mitigations: s.optional(s.array(s.lazy(() => mitigationSchema))),
  engagePolicy: s.optional(s.lazy(() => engagePolicySchema)),
  suggestedNextStep: s.optional(s.string()),
  questionsToAsk: s.optional(s.array(s.string())),
  checks: s.optional(s.array(s.lazy(() => checkSchema))),
  read: s.optional(s.lazy(() => readInternalSchema)),
  websiteDeclared: s.optionalNullable(s.lazy(() => websiteDeclaredSchema)),
  outcomeLinks: s.optional(s.lazy(() => outcomeLinksSchema)),
  affiliation: s.optionalNullable(s.lazy(() => affiliationSchema)),
  location: s.optionalNullable(s.lazy(() => locationSchema)),
  summary: s.optionalNullable(s.string()),
  rulesVersion: s.optional(s.string()),
  receipt: s.optional(s.lazy(() => receiptSchema)),
  retention: s.optional(s.lazy(() => retentionSchema)),
  checksUsed: s.optional(s.int()),
  _keysMap: {
    engagePolicy: "engage_policy",
    suggestedNextStep: "suggested_next_step",
    questionsToAsk: "questions_to_ask",
    websiteDeclared: "website_declared",
    outcomeLinks: "outcome_links",
    rulesVersion: "rules_version",
    checksUsed: "checks_used",
  },
};

export const qualificationInternalSchema: Schema<Qualification> = s.object<Qualification>(
  qualificationProperties,
  { additionalProperties: s.json() },
);

export const qualificationSchema: Schema<Qualification> = s.lazySchema(() =>
  s.object<Qualification>(
    {
      ...qualificationProperties,
      legitimacy: s.optional(s.lazy(() => subScoreSchema)),
      capacity: s.optional(s.lazy(() => subScoreSchema)),
      consistency: s.optional(s.lazy(() => subScoreSchema)),
      questionsToAsk: s.optional(s.array(s.string()).check(s.minLength(2), s.maxLength(4))),
      read: s.optional(s.lazy(() => readSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
