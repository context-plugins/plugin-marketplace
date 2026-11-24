import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RegistryEnvVarBatchItem = {
  /**
   * Environment variable name. Lowercase letters are uppercased and hyphens become underscores; all
   * other characters are rejected.
   */
  name: string;
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registryEnvVarBatchItemSchema: Schema<RegistryEnvVarBatchItem> =
  s.object<RegistryEnvVarBatchItem>(
    {
      name: s.string(),
      value: s.string(),
    },
    { additionalProperties: s.json() },
  );
