import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scenarioArgumentSchema, type ScenarioArgument } from "./scenario-argument.js";
import { buildVersionSchema, type BuildVersion } from "./unions/build-version.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import { registryDisplayNameSchema, type RegistryDisplayName } from "./unions/registry-display-name.js";
import { sdkGenerationSchema, type SdkGeneration } from "./unions/sdk-generation.js";

export type TaskScenarioBrief = {
  id: string;
  name: string;
  description?: Description;
  registryId: string;
  buildId: string;
  sdkGeneration?: SdkGeneration;
  arguments?: ScenarioArgument[];
  registryDisplayName?: RegistryDisplayName;
  buildVersion?: BuildVersion;
  /** @default false */
  hasWorkspace?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskScenarioBriefSchema: Schema<TaskScenarioBrief> = s.object<TaskScenarioBrief>(
  {
    id: s.string(),
    name: s.string(),
    description: s.optional(s.lazy(() => descriptionSchema)),
    registryId: s.string(),
    buildId: s.string(),
    sdkGeneration: s.optional(s.lazy(() => sdkGenerationSchema)),
    arguments: s.optional(s.array(s.lazy(() => scenarioArgumentSchema))),
    registryDisplayName: s.optional(s.lazy(() => registryDisplayNameSchema)),
    buildVersion: s.optional(s.lazy(() => buildVersionSchema)),
    hasWorkspace: s.defaulted(s.boolean(), false),
    _keysMap: {
      registryId: "registry_id",
      buildId: "build_id",
      sdkGeneration: "sdk_generation",
      registryDisplayName: "registry_display_name",
      buildVersion: "build_version",
      hasWorkspace: "has_workspace",
    },
  },
  { additionalProperties: s.json() },
);
