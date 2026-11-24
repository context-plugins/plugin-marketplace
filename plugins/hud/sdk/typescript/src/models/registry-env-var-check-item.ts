import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RegistryEnvVarCheckItem = {
  registryId: string;
  requiredVars: string[];
  configuredVars: string[];
  missingVars: string[];
  isComplete: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registryEnvVarCheckItemSchema: Schema<RegistryEnvVarCheckItem> =
  s.object<RegistryEnvVarCheckItem>(
    {
      registryId: s.string(),
      requiredVars: s.array(s.string()),
      configuredVars: s.array(s.string()),
      missingVars: s.array(s.string()),
      isComplete: s.boolean(),
      _keysMap: {
        registryId: "registry_id",
        requiredVars: "required_vars",
        configuredVars: "configured_vars",
        missingVars: "missing_vars",
        isComplete: "is_complete",
      },
    },
    { additionalProperties: s.json() },
  );
