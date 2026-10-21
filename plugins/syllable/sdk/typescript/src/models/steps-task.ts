import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Start, startSchema } from "./start.js";
import { stepSchema, type Step } from "./step.js";
import { Type9, type9Schema } from "./type9.js";
import { configSchema, type Config } from "./unions/config.js";
import { idSchema, type Id } from "./unions/id.js";
import { metadataSchema, type Metadata } from "./unions/metadata.js";
import { toolSchema, type Tool } from "./unions/tool.js";
import { variablesSchema, type Variables } from "./unions/variables.js";
import { Version, versionSchema } from "./version.js";

export type StepsTask = {
  /** A unique identifier for the task. */
  id?: Id;
  config?: Config;
  variables?: Variables;
  metadata?: Metadata;
  tool?: Tool;
  /** @default Type9.Steps */
  type?: Type9;
  /** @default Version.V1Alpha */
  version?: Version;
  /**
   * Controls when the workflow activation lifecycle runs. `auto` activates at session start;
   * `manual` activates on first invocation.
   *
   * @default Start.Auto
   */
  start?: Start;
  steps?: Step[];
};

export const stepsTaskSchema: Schema<StepsTask> = s.object<StepsTask>({
  id: s.optional(s.lazy(() => idSchema)),
  config: s.optional(s.lazy(() => configSchema)),
  variables: s.optional(s.lazy(() => variablesSchema)),
  metadata: s.optional(s.lazy(() => metadataSchema)),
  tool: s.optional(s.lazy(() => toolSchema)),
  type: s.defaulted(type9Schema, Type9.Steps),
  version: s.defaulted(versionSchema, Version.V1Alpha),
  start: s.defaulted(startSchema, Start.Auto),
  steps: s.optional(s.array(s.lazy(() => stepSchema))),
});
