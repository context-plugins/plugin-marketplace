import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildOrBuySchema, type BuildOrBuy } from "./build-or-buy.js";
import { dataClassificationSchema, type DataClassification } from "./data-classification.js";
import { decisionImpactSchema, type DecisionImpact } from "./decision-impact.js";
import { entryTypeSchema, type EntryType } from "./entry-type.js";
import { environmentSchema, type Environment } from "./environment.js";
import { externalReachSchema, type ExternalReach } from "./external-reach.js";
import { oversightSchema, type Oversight } from "./oversight.js";
import { riskSchema, type Risk } from "./risk.js";
import { useScopeSchema, type UseScope } from "./use-scope.js";

export type ApiV1AiSystemsRequest1 = {
  name?: string;
  /** OpenAI, Anthropic, an internal team… */
  provider?: string | null;
  model?: string | null;
  modelVersion?: string | null;
  /** A digest of the prompt it runs with (sha256:…, a commit, a version tag), never the prompt */
  promptHash?: string | null;
  /** A digest of its guardrail configuration, never the configuration */
  guardrailsHash?: string | null;
  purpose?: string | null;
  businessOwner?: string | null;
  technicalOwner?: string | null;
  environment?: Environment;
  risk?: Risk;
  oversight?: Oversight | null;
  dataClassification?: DataClassification | null;
  personalData?: boolean;
  customerFacing?: boolean;
  /**
   * The contract in the ICT third-party register the system runs under (GET
   * /api/v1/governance/ict-register)
   */
  ictArrangementId?: string | null;
  /**
   * How the use came to the register: built in-house, a supplier's AI, a feature in a service, a
   * proof of concept, or found in use
   */
  entryType?: EntryType | null;
  /** Who uses it: one person for their work, a team or function, or the whole organisation */
  useScope?: UseScope | null;
  /** Who and how many, in a phrase: 'the 40 claims handlers' */
  userPopulation?: string | null;
  /** What its output feeds into */
  decisionImpact?: DecisionImpact | null;
  /** Who its output reaches, furthest first */
  externalReach?: ExternalReach | null;
  buildOrBuy?: BuildOrBuy | null;
  /** The supplier, when bought */
  supplier?: string | null;
  /** The legal entities that use it or are affected by it */
  entities?: string[];
  /** Why the use needs AI at all */
  needStatement?: string | null;
  /** How the work is, or would be, done without AI */
  nonAiAlternative?: string | null;
  /** What it is expected to give */
  expectedBenefit?: string | null;
  /** Yearly cost, with costCurrency */
  annualCost?: number | null;
  /** ISO 4217 code, such as EUR */
  costCurrency?: string | null;
  /** Triage: the record already in the register that this one repeats */
  duplicateOf?: string | null;
  /**
   * Not accepted: a record's status follows its lifecycle. Take a step with its transitions instead
   */
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1AiSystemsRequest1Properties: s.Shape<ApiV1AiSystemsRequest1> = {
  name: s.optional(s.string()),
  provider: s.optionalNullable(s.string()),
  model: s.optionalNullable(s.string()),
  modelVersion: s.optionalNullable(s.string()),
  promptHash: s.optionalNullable(s.string()),
  guardrailsHash: s.optionalNullable(s.string()),
  purpose: s.optionalNullable(s.string()),
  businessOwner: s.optionalNullable(s.string()),
  technicalOwner: s.optionalNullable(s.string()),
  environment: s.optional(s.lazy(() => environmentSchema)),
  risk: s.optional(s.lazy(() => riskSchema)),
  oversight: s.optionalNullable(s.lazy(() => oversightSchema)),
  dataClassification: s.optionalNullable(s.lazy(() => dataClassificationSchema)),
  personalData: s.optional(s.boolean()),
  customerFacing: s.optional(s.boolean()),
  ictArrangementId: s.optionalNullable(s.string()),
  entryType: s.optionalNullable(s.lazy(() => entryTypeSchema)),
  useScope: s.optionalNullable(s.lazy(() => useScopeSchema)),
  userPopulation: s.optionalNullable(s.string()),
  decisionImpact: s.optionalNullable(s.lazy(() => decisionImpactSchema)),
  externalReach: s.optionalNullable(s.lazy(() => externalReachSchema)),
  buildOrBuy: s.optionalNullable(s.lazy(() => buildOrBuySchema)),
  supplier: s.optionalNullable(s.string()),
  entities: s.optional(s.array(s.string())),
  needStatement: s.optionalNullable(s.string()),
  nonAiAlternative: s.optionalNullable(s.string()),
  expectedBenefit: s.optionalNullable(s.string()),
  annualCost: s.optionalNullable(s.float64()),
  costCurrency: s.optionalNullable(s.string()),
  duplicateOf: s.optionalNullable(s.string()),
  status: s.optional(s.string()),
};

export const apiV1AiSystemsRequest1InternalSchema: Schema<ApiV1AiSystemsRequest1> =
  s.object<ApiV1AiSystemsRequest1>(apiV1AiSystemsRequest1Properties, { additionalProperties: s.json() });

export const apiV1AiSystemsRequest1Schema: Schema<ApiV1AiSystemsRequest1> = s.lazySchema(() =>
  s.object<ApiV1AiSystemsRequest1>(
    {
      ...apiV1AiSystemsRequest1Properties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
      provider: s.optionalNullable(s.string().check(s.maxLength(120))),
      model: s.optionalNullable(s.string().check(s.maxLength(200))),
      modelVersion: s.optionalNullable(s.string().check(s.maxLength(120))),
      promptHash: s.optionalNullable(s.string().check(s.minLength(1), s.maxLength(200))),
      guardrailsHash: s.optionalNullable(s.string().check(s.minLength(1), s.maxLength(200))),
      purpose: s.optionalNullable(s.string().check(s.maxLength(4000))),
      businessOwner: s.optionalNullable(s.string().check(s.maxLength(320))),
      technicalOwner: s.optionalNullable(s.string().check(s.maxLength(320))),
      userPopulation: s.optionalNullable(s.string().check(s.maxLength(500))),
      supplier: s.optionalNullable(s.string().check(s.maxLength(200))),
      entities: s.optional(s.array(s.string().check(s.maxLength(120))).check(s.maxLength(50))),
      needStatement: s.optionalNullable(s.string().check(s.maxLength(4000))),
      nonAiAlternative: s.optionalNullable(s.string().check(s.maxLength(4000))),
      expectedBenefit: s.optionalNullable(s.string().check(s.maxLength(4000))),
      annualCost: s.optionalNullable(s.float64().check(s.gte(0))),
      costCurrency: s.optionalNullable(s.string().check(s.pattern("^[A-Z]{3}$"))),
    },
    { additionalProperties: s.json() },
  ),
);
