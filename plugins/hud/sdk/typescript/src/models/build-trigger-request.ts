import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildArgsSchema, type BuildArgs } from "./unions/build-args.js";
import { buildIdSchema, type BuildId } from "./unions/build-id.js";
import { entryFolderSchema, type EntryFolder } from "./unions/entry-folder.js";
import { nameInternalSchema, nameSchema, type Name } from "./unions/name.js";
import { projectIdSchema, type ProjectId } from "./unions/project-id.js";
import { registryIdSchema, type RegistryId } from "./unions/registry-id.js";
import {
  runtimeConfigModelInternalSchema,
  runtimeConfigModelSchema,
  type RuntimeConfigModel,
} from "./unions/runtime-config-model.js";
import { runtimeProvider1Schema, type RuntimeProvider1 } from "./unions/runtime-provider1.js";

/** Trigger a build for a registry. */
export type BuildTriggerRequest = {
  registryId?: RegistryId;
  name?: Name;
  projectId?: ProjectId;
  /** @default "direct" */
  source?: "direct";
  buildId?: BuildId;
  environmentVariables?: Record<string, string>;
  buildSecrets?: Record<string, string>;
  runtimeProvider?: RuntimeProvider1;
  runtimeConfig?: RuntimeConfigModel;
  entryFolder?: EntryFolder;
  buildArgs?: BuildArgs;
  /**
   * Bypass persistent cache inputs and whole-build reuse while still exporting fresh cache state.
   *
   * @default false
   */
  noCache?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const buildTriggerRequestProperties: s.Shape<BuildTriggerRequest> = {
  registryId: s.optional(s.lazy(() => registryIdSchema)),
  name: s.optional(s.lazy(() => nameInternalSchema)),
  projectId: s.optional(s.lazy(() => projectIdSchema)),
  source: s.defaulted(s.literal("direct"), "direct"),
  buildId: s.optional(s.lazy(() => buildIdSchema)),
  environmentVariables: s.optional(s.record(s.string(), s.string())),
  buildSecrets: s.optional(s.record(s.string(), s.string())),
  runtimeProvider: s.optional(s.lazy(() => runtimeProvider1Schema)),
  runtimeConfig: s.optional(s.lazy(() => runtimeConfigModelInternalSchema)),
  entryFolder: s.optional(s.lazy(() => entryFolderSchema)),
  buildArgs: s.optional(s.lazy(() => buildArgsSchema)),
  noCache: s.defaulted(s.boolean(), false),
  _keysMap: {
    registryId: "registry_id",
    projectId: "project_id",
    buildId: "build_id",
    environmentVariables: "environment_variables",
    buildSecrets: "build_secrets",
    runtimeProvider: "runtime_provider",
    runtimeConfig: "runtime_config",
    entryFolder: "entry_folder",
    buildArgs: "build_args",
    noCache: "no_cache",
  },
};

export const buildTriggerRequestInternalSchema: Schema<BuildTriggerRequest> = s.object<BuildTriggerRequest>(
  buildTriggerRequestProperties,
  { additionalProperties: s.json() },
);

export const buildTriggerRequestSchema: Schema<BuildTriggerRequest> = s.lazySchema(() =>
  s.object<BuildTriggerRequest>(
    {
      ...buildTriggerRequestProperties,
      name: s.optional(s.lazy(() => nameSchema)),
      runtimeConfig: s.optional(s.lazy(() => runtimeConfigModelSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
