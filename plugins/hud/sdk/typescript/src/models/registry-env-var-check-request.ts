import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RegistryEnvVarCheckRequest = {
  registryIds: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registryEnvVarCheckRequestSchema: Schema<RegistryEnvVarCheckRequest> =
  s.object<RegistryEnvVarCheckRequest>(
    {
      registryIds: s.array(s.string()),
      _keysMap: {
        registryIds: "registry_ids",
      },
    },
    { additionalProperties: s.json() },
  );
