import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { checkRunsSchema, type CheckRuns } from "./check-runs.js";
import { checkSchema, type Check } from "./check.js";
import { entityJidScreenApiSchema, type EntityJidScreenApi } from "./entity-jid-screen-api.js";
import { locationJidScreenApiSchema, type LocationJidScreenApi } from "./location-jid-screen-api.js";
import { mitigationSchema, type Mitigation } from "./mitigation.js";
import { outcomeLinksSchema, type OutcomeLinks } from "./outcome-links.js";
import {
  readJidScreenApiInternalSchema,
  readJidScreenApiSchema,
  type ReadJidScreenApi,
} from "./read-jid-screen-api.js";
import { reasonJidScreenApiSchema, type ReasonJidScreenApi } from "./reason-jid-screen-api.js";
import { riskSchema, type Risk } from "./risk.js";
import { subjectTypeSchema, type SubjectType } from "./subject-type.js";
import { websiteDeclaredSchema, type WebsiteDeclared } from "./website-declared.js";

export type ScreenResult = {
  engage?: boolean;
  risk?: Risk;
  confidence?: number;
  subjectType?: SubjectType;
  summary?: string;
  hardRules?: string[];
  riskPoints?: number;
  reasons?: ReasonJidScreenApi[];
  mitigations?: Mitigation[];
  entity?: EntityJidScreenApi | null;
  checks?: Check[];
  /** What to show a human: render this and nothing else. */
  read?: ReadJidScreenApi;
  websiteDeclared?: WebsiteDeclared | null;
  /**
   * Keyed calls only: signed one-click URLs that record an outcome (POST /v1/outcomes) without a
   * login.
   */
  outcomeLinks?: OutcomeLinks;
  /** Which live lookups ran (this was `checks` before 2026-10-05). */
  checkRuns?: Record<string, CheckRuns>;
  receiptId?: string;
  receiptUrl?: string;
  rulesVersion?: string;
  latencyMs?: number;
  checksUsed?: number;
  /** Present when location inputs were given */
  location?: LocationJidScreenApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const screenResultProperties: s.Shape<ScreenResult> = {
  engage: s.optional(s.boolean()),
  risk: s.optional(s.lazy(() => riskSchema)),
  confidence: s.optional(s.float64()),
  subjectType: s.optional(s.lazy(() => subjectTypeSchema)),
  summary: s.optional(s.string()),
  hardRules: s.optional(s.array(s.string())),
  riskPoints: s.optional(s.float64()),
  reasons: s.optional(s.array(s.lazy(() => reasonJidScreenApiSchema))),
  mitigations: s.optional(s.array(s.lazy(() => mitigationSchema))),
  entity: s.optionalNullable(s.lazy(() => entityJidScreenApiSchema)),
  checks: s.optional(s.array(s.lazy(() => checkSchema))),
  read: s.optional(s.lazy(() => readJidScreenApiInternalSchema)),
  websiteDeclared: s.optionalNullable(s.lazy(() => websiteDeclaredSchema)),
  outcomeLinks: s.optional(s.lazy(() => outcomeLinksSchema)),
  checkRuns: s.optional(
    s.record(
      s.string(),
      s.lazy(() => checkRunsSchema),
    ),
  ),
  receiptId: s.optional(s.string()),
  receiptUrl: s.optional(s.string()),
  rulesVersion: s.optional(s.string()),
  latencyMs: s.optional(s.float64()),
  checksUsed: s.optional(s.float64()),
  location: s.optional(s.lazy(() => locationJidScreenApiSchema)),
  _keysMap: {
    subjectType: "subject_type",
    hardRules: "hard_rules",
    riskPoints: "risk_points",
    websiteDeclared: "website_declared",
    outcomeLinks: "outcome_links",
    checkRuns: "check_runs",
    receiptId: "receipt_id",
    receiptUrl: "receipt_url",
    rulesVersion: "rules_version",
    latencyMs: "latency_ms",
    checksUsed: "checks_used",
  },
};

export const screenResultInternalSchema: Schema<ScreenResult> = s.object<ScreenResult>(
  screenResultProperties,
  { additionalProperties: s.json() },
);

export const screenResultSchema: Schema<ScreenResult> = s.lazySchema(() =>
  s.object<ScreenResult>(
    {
      ...screenResultProperties,
      confidence: s.optional(s.float64().check(s.gte(0), s.lte(1))),
      read: s.optional(s.lazy(() => readJidScreenApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
