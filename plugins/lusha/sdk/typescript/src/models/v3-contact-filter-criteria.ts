import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { educationSchema, type Education } from "./education.js";
import {
  existingDataPointsConditionSchema,
  type ExistingDataPointsCondition,
} from "./existing-data-points-condition.js";
import { geographicDetailSchema, type GeographicDetail } from "./geographic-detail.js";
import { scoreInternalSchema, scoreSchema, type Score } from "./score.js";
import { signalsSchema, type Signals } from "./signals.js";
import { v3LocationSchema, type V3Location } from "./v3-location.js";

export type V3ContactFilterCriteria = {
  names?: string[];
  jobTitles?: string[];
  jobTitlesExactMatch?: string[];
  normalizedJobTitles?: string[];
  searchText?: string;
  countries?: string[];
  locations?: V3Location[];
  seniorityIds?: number[];
  departments?: string[];
  linkedinUrls?: string[];
  existingDataPoints?: string[];
  signals?: Signals;
  /** Personal data — no catalog. */
  emails?: string[];
  /** Personal data — no catalog. */
  previousEmails?: string[];
  previousJobTitle?: string[];
  skills?: string[];
  certifications?: string[];
  awards?: string[];
  /** Encrypted contact id from a prior search's `results[].id`. */
  ids?: string[];
  /** Pairs with `existingDataPoints`. */
  existingDataPointsCondition?: ExistingDataPointsCondition;
  /** Refinement-only — must be paired with a base filter (e.g. `jobTitles`). */
  jobChangedAfterDate?: string;
  /** Refinement-only — must be paired with a base filter. */
  jobChangedLastViewDate?: string;
  /** Refinement-only — must be paired with a base filter. */
  education?: Education;
  /**
   * Refinement-only — must be paired with a base filter. Raw 0–100 contact score. Distinct from the
   * `confidence` band ("A+"/"A") returned on enriched contacts, which is derived from this score
   * (e.g. `A+` when score > 75).
   */
  score?: Score;
  geographicDetails?: GeographicDetail[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3ContactFilterCriteriaProperties: s.Shape<V3ContactFilterCriteria> = {
  names: s.optional(s.array(s.string())),
  jobTitles: s.optional(s.array(s.string())),
  jobTitlesExactMatch: s.optional(s.array(s.string())),
  normalizedJobTitles: s.optional(s.array(s.string())),
  searchText: s.optional(s.string()),
  countries: s.optional(s.array(s.string())),
  locations: s.optional(s.array(s.lazy(() => v3LocationSchema))),
  seniorityIds: s.optional(s.array(s.int())),
  departments: s.optional(s.array(s.string())),
  linkedinUrls: s.optional(s.array(s.string())),
  existingDataPoints: s.optional(s.array(s.string())),
  signals: s.optional(s.lazy(() => signalsSchema)),
  emails: s.optional(s.array(s.string())),
  previousEmails: s.optional(s.array(s.string())),
  previousJobTitle: s.optional(s.array(s.string())),
  skills: s.optional(s.array(s.string())),
  certifications: s.optional(s.array(s.string())),
  awards: s.optional(s.array(s.string())),
  ids: s.optional(s.array(s.string())),
  existingDataPointsCondition: s.optional(s.lazy(() => existingDataPointsConditionSchema)),
  jobChangedAfterDate: s.optional(s.dateOnly()),
  jobChangedLastViewDate: s.optional(s.dateOnly()),
  education: s.optional(s.lazy(() => educationSchema)),
  score: s.optional(s.lazy(() => scoreInternalSchema)),
  geographicDetails: s.optional(s.array(s.lazy(() => geographicDetailSchema))),
};

export const v3ContactFilterCriteriaInternalSchema: Schema<V3ContactFilterCriteria> =
  s.object<V3ContactFilterCriteria>(v3ContactFilterCriteriaProperties, { additionalProperties: s.json() });

export const v3ContactFilterCriteriaSchema: Schema<V3ContactFilterCriteria> = s.lazySchema(() =>
  s.object<V3ContactFilterCriteria>(
    {
      ...v3ContactFilterCriteriaProperties,
      searchText: s.optional(s.string().check(s.maxLength(200))),
      emails: s.optional(s.array(s.string().check(s.email()))),
      previousEmails: s.optional(s.array(s.string().check(s.email()))),
      score: s.optional(s.lazy(() => scoreSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
