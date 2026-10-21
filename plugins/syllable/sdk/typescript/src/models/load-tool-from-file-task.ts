import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type7, type7Schema } from "./type7.js";
import { configSchema, type Config } from "./unions/config.js";
import { fileSchema, type File } from "./unions/file.js";
import { idSchema, type Id } from "./unions/id.js";
import { metadataSchema, type Metadata } from "./unions/metadata.js";
import { toolSchema, type Tool } from "./unions/tool.js";
import { variablesSchema, type Variables } from "./unions/variables.js";
import { Version, versionSchema } from "./version.js";

/** Bootstraps a tool from a file (for internal developer use only if ENV.local=True). */
export type LoadToolFromFileTask = {
  /** A unique identifier for the task. */
  id?: Id;
  config?: Config;
  variables?: Variables;
  metadata?: Metadata;
  tool?: Tool;
  /** @default Type7.Import */
  type?: Type7;
  /** @default Version.V1Alpha */
  version?: Version;
  /** The local path of the tool definition JSON file. */
  file: File;
};

export const loadToolFromFileTaskSchema: Schema<LoadToolFromFileTask> = s.object<LoadToolFromFileTask>({
  id: s.optional(s.lazy(() => idSchema)),
  config: s.optional(s.lazy(() => configSchema)),
  variables: s.optional(s.lazy(() => variablesSchema)),
  metadata: s.optional(s.lazy(() => metadataSchema)),
  tool: s.optional(s.lazy(() => toolSchema)),
  type: s.defaulted(type7Schema, Type7.Import),
  version: s.defaulted(versionSchema, Version.V1Alpha),
  file: fileSchema,
});
