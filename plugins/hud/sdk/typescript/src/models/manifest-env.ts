import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Env identity from the control channel's `hello` reply. */
export type ManifestEnv = {
  name: string;
  /** @default "0.0.0" */
  version?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const manifestEnvSchema: Schema<ManifestEnv> = s.object<ManifestEnv>(
  {
    name: s.string(),
    version: s.defaulted(s.string(), "0.0.0"),
  },
  { additionalProperties: s.json() },
);
