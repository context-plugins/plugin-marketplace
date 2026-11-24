import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RegistryEnvVarBatchResponse = {
  created: number;
  updated: number;
  deleted: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registryEnvVarBatchResponseSchema: Schema<RegistryEnvVarBatchResponse> =
  s.object<RegistryEnvVarBatchResponse>(
    {
      created: s.int(),
      updated: s.int(),
      deleted: s.int(),
    },
    { additionalProperties: s.json() },
  );
