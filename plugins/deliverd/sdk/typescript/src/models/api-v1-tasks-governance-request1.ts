import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { autonomySchema, type Autonomy } from "./autonomy.js";
import { dataClassificationSchema, type DataClassification } from "./data-classification.js";
import {
  decisionImpactDeliverdDevGovernanceApiSchema,
  type DecisionImpactDeliverdDevGovernanceApi,
} from "./decision-impact-deliverd-dev-governance-api.js";
import {
  oversightDeliverdDevTasksApiSchema,
  type OversightDeliverdDevTasksApi,
} from "./oversight-deliverd-dev-tasks-api.js";
import {
  riskDeliverdDevTasksApiSchema,
  type RiskDeliverdDevTasksApi,
} from "./risk-deliverd-dev-tasks-api.js";

export type ApiV1TasksGovernanceRequest1 = {
  /** The AI system doing the work, from the register (register_ai_system) */
  aiSystemId?: string | null;
  /** What the AI is used for in this work, in a sentence a reviewer can check against */
  purpose?: string | null;
  /** The person accountable for the outcome */
  businessOwner?: string | null;
  /** The person accountable for how it is built and run */
  technicalOwner?: string | null;
  /** low, medium, high or critical. Never lower than the AI system's own */
  risk?: RiskDeliverdDevTasksApi;
  dataClassification?: DataClassification | null;
  personalData?: boolean;
  sensitiveData?: boolean;
  customerFacing?: boolean;
  productionUse?: boolean;
  /**
   * Supports a critical or important function (DORA Art. 3(22)), as the organisation classifies it.
   * null until classified, when production use stands in. Only a person lowers it
   */
  criticalFunction?: boolean | null;
  autonomy?: Autonomy | null;
  decisionImpact?: DecisionImpactDeliverdDevGovernanceApi | null;
  /** How people oversee the AI's work */
  oversight?: OversightDeliverdDevTasksApi | null;
  /** Where the work or its effects apply, e.g. EU, UK, US-CA */
  jurisdictions?: string[];
  /** The version you read; refused if somebody wrote in between */
  expectedVersion?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1TasksGovernanceRequest1Properties: s.Shape<ApiV1TasksGovernanceRequest1> = {
  aiSystemId: s.optionalNullable(s.string()),
  purpose: s.optionalNullable(s.string()),
  businessOwner: s.optionalNullable(s.string()),
  technicalOwner: s.optionalNullable(s.string()),
  risk: s.optional(s.lazy(() => riskDeliverdDevTasksApiSchema)),
  dataClassification: s.optionalNullable(s.lazy(() => dataClassificationSchema)),
  personalData: s.optional(s.boolean()),
  sensitiveData: s.optional(s.boolean()),
  customerFacing: s.optional(s.boolean()),
  productionUse: s.optional(s.boolean()),
  criticalFunction: s.optionalNullable(s.boolean()),
  autonomy: s.optionalNullable(s.lazy(() => autonomySchema)),
  decisionImpact: s.optionalNullable(s.lazy(() => decisionImpactDeliverdDevGovernanceApiSchema)),
  oversight: s.optionalNullable(s.lazy(() => oversightDeliverdDevTasksApiSchema)),
  jurisdictions: s.optional(s.array(s.string())),
  expectedVersion: s.optional(s.int()),
};

export const apiV1TasksGovernanceRequest1InternalSchema: Schema<ApiV1TasksGovernanceRequest1> =
  s.object<ApiV1TasksGovernanceRequest1>(apiV1TasksGovernanceRequest1Properties, {
    additionalProperties: s.json(),
  });

export const apiV1TasksGovernanceRequest1Schema: Schema<ApiV1TasksGovernanceRequest1> = s.lazySchema(() =>
  s.object<ApiV1TasksGovernanceRequest1>(
    {
      ...apiV1TasksGovernanceRequest1Properties,
      purpose: s.optionalNullable(s.string().check(s.maxLength(4000))),
      businessOwner: s.optionalNullable(s.string().check(s.maxLength(320))),
      technicalOwner: s.optionalNullable(s.string().check(s.maxLength(320))),
      jurisdictions: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(60))).check(s.maxLength(30)),
      ),
      expectedVersion: s.optional(s.int().check(s.gt(0))),
    },
    { additionalProperties: s.json() },
  ),
);
