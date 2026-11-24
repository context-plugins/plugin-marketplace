import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { manifestCapabilitySchema, type ManifestCapability } from "./manifest-capability.js";
import { manifestEnvSchema, type ManifestEnv } from "./manifest-env.js";
import { manifestTaskSchema, type ManifestTask } from "./manifest-task.js";

/** What build introspection captured from a v6 image's control channel. */
export type EnvManifest = {
  /** Env identity from the control channel's `hello` reply. */
  env: ManifestEnv;
  capabilities?: ManifestCapability[];
  tasks?: ManifestTask[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const envManifestSchema: Schema<EnvManifest> = s.object<EnvManifest>(
  {
    env: manifestEnvSchema,
    capabilities: s.optional(s.array(s.lazy(() => manifestCapabilitySchema))),
    tasks: s.optional(s.array(s.lazy(() => manifestTaskSchema))),
  },
  { additionalProperties: s.json() },
);
