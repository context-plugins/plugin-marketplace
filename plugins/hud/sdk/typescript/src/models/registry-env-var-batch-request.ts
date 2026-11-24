import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  registryEnvVarBatchItemSchema,
  type RegistryEnvVarBatchItem,
} from "./registry-env-var-batch-item.js";

export type RegistryEnvVarBatchRequest = {
  registryId: string;
  variables: RegistryEnvVarBatchItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registryEnvVarBatchRequestSchema: Schema<RegistryEnvVarBatchRequest> =
  s.object<RegistryEnvVarBatchRequest>(
    {
      registryId: s.string(),
      variables: s.array(s.lazy(() => registryEnvVarBatchItemSchema)),
      _keysMap: {
        registryId: "registry_id",
      },
    },
    { additionalProperties: s.json() },
  );
