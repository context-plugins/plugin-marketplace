import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { qaAgentLinkedTasksetSchema, type QaAgentLinkedTaskset } from "./qa-agent-linked-taskset.js";
import { qaAgentOutputPropertySchema, type QaAgentOutputProperty } from "./qa-agent-output-property.js";
import { qaAgentSubjectTypeSchema, type QaAgentSubjectType } from "./qa-agent-subject-type.js";
import { scenarioArgumentSchema, type ScenarioArgument } from "./scenario-argument.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import { environmentIdSchema, type EnvironmentId } from "./unions/environment-id.js";
import { environmentNameSchema, type EnvironmentName } from "./unions/environment-name.js";
import { modelIdSchema, type ModelId } from "./unions/model-id.js";
import { modelNameSchema, type ModelName } from "./unions/model-name.js";
import { providerIconUrlSchema, type ProviderIconUrl } from "./unions/provider-icon-url.js";
import { scenarioDescriptionSchema, type ScenarioDescription } from "./unions/scenario-description.js";
import { scenarioNameSchema, type ScenarioName } from "./unions/scenario-name.js";
import { sdkAgentTypeSchema, type SdkAgentType } from "./unions/sdk-agent-type.js";

/** A QA agent; its model and argument config are returned only to the owning team. */
export type QaAgentResponse = {
  id: string;
  scenarioId: string;
  modelId?: ModelId;
  name: string;
  description?: Description;
  maxSteps: number;
  partialArgs: Record<string, unknown>;
  /** @default false */
  public?: boolean;
  /** Canonical resources a QA agent can analyze. */
  subjectType?: QaAgentSubjectType;
  createdAt: Date;
  updatedAt: Date;
  scenarioName?: ScenarioName;
  scenarioDescription?: ScenarioDescription;
  scenarioArguments?: ScenarioArgument[];
  environmentId?: EnvironmentId;
  environmentName?: EnvironmentName;
  modelName?: ModelName;
  providerIconUrl?: ProviderIconUrl;
  sdkAgentType?: SdkAgentType;
  outputProperties?: QaAgentOutputProperty[];
  linkedTasksets?: QaAgentLinkedTaskset[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qaAgentResponseSchema: Schema<QaAgentResponse> = s.object<QaAgentResponse>(
  {
    id: s.string(),
    scenarioId: s.string(),
    modelId: s.optional(s.lazy(() => modelIdSchema)),
    name: s.string(),
    description: s.optional(s.lazy(() => descriptionSchema)),
    maxSteps: s.int(),
    partialArgs: s.record(s.string(), s.unknown()),
    public: s.defaulted(s.boolean(), false),
    subjectType: s.optional(s.lazy(() => qaAgentSubjectTypeSchema)),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    scenarioName: s.optional(s.lazy(() => scenarioNameSchema)),
    scenarioDescription: s.optional(s.lazy(() => scenarioDescriptionSchema)),
    scenarioArguments: s.optional(s.array(s.lazy(() => scenarioArgumentSchema))),
    environmentId: s.optional(s.lazy(() => environmentIdSchema)),
    environmentName: s.optional(s.lazy(() => environmentNameSchema)),
    modelName: s.optional(s.lazy(() => modelNameSchema)),
    providerIconUrl: s.optional(s.lazy(() => providerIconUrlSchema)),
    sdkAgentType: s.optional(s.lazy(() => sdkAgentTypeSchema)),
    outputProperties: s.optional(s.array(s.lazy(() => qaAgentOutputPropertySchema))),
    linkedTasksets: s.optional(s.array(s.lazy(() => qaAgentLinkedTasksetSchema))),
    _keysMap: {
      scenarioId: "scenario_id",
      modelId: "model_id",
      maxSteps: "max_steps",
      partialArgs: "partial_args",
      subjectType: "subject_type",
      createdAt: "created_at",
      updatedAt: "updated_at",
      scenarioName: "scenario_name",
      scenarioDescription: "scenario_description",
      scenarioArguments: "scenario_arguments",
      environmentId: "environment_id",
      environmentName: "environment_name",
      modelName: "model_name",
      providerIconUrl: "provider_icon_url",
      sdkAgentType: "sdk_agent_type",
      outputProperties: "output_properties",
      linkedTasksets: "linked_tasksets",
    },
  },
  { additionalProperties: s.json() },
);
