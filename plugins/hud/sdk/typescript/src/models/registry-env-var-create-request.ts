import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RegistryEnvVarCreateRequest = {
  registryId: string;
  /**
   * Environment variable name. Lowercase letters are uppercased and hyphens become underscores; all
   * other characters are rejected.
   */
  name: string;
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registryEnvVarCreateRequestSchema: Schema<RegistryEnvVarCreateRequest> =
  s.object<RegistryEnvVarCreateRequest>(
    {
      registryId: s.string(),
      name: s.string(),
      value: s.string(),
      _keysMap: {
        registryId: "registry_id",
      },
    },
    { additionalProperties: s.json() },
  );
