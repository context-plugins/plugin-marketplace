import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTaskEvents2Schema, type EventTaskEvents2 } from "./event-task-events2.js";
import { Type8, type8Schema } from "./type8.js";
import { configSchema, type Config } from "./unions/config.js";
import { idSchema, type Id } from "./unions/id.js";
import { metadataSchema, type Metadata } from "./unions/metadata.js";
import { toolSchema, type Tool } from "./unions/tool.js";
import { variablesSchema, type Variables } from "./unions/variables.js";
import { Version, versionSchema } from "./version.js";

export type EventTask = {
  /** A unique identifier for the task. */
  id?: Id;
  config?: Config;
  variables?: Variables;
  metadata?: Metadata;
  tool?: Tool;
  /** @default Type8.Event */
  type?: Type8;
  /** @default Version.V1Alpha */
  version?: Version;
  /** Actions to execute when the configured events occur. */
  on?: EventTaskEvents2;
};

export const eventTaskSchema: Schema<EventTask> = s.object<EventTask>({
  id: s.optional(s.lazy(() => idSchema)),
  config: s.optional(s.lazy(() => configSchema)),
  variables: s.optional(s.lazy(() => variablesSchema)),
  metadata: s.optional(s.lazy(() => metadataSchema)),
  tool: s.optional(s.lazy(() => toolSchema)),
  type: s.defaulted(type8Schema, Type8.Event),
  version: s.defaulted(versionSchema, Version.V1Alpha),
  on: s.optional(s.lazy(() => eventTaskEvents2Schema)),
});
