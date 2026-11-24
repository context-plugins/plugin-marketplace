import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { registryEnvVarItemSchema, type RegistryEnvVarItem } from "./registry-env-var-item.js";

export type RegistryEnvVarsListResponse = {
  variables: RegistryEnvVarItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registryEnvVarsListResponseSchema: Schema<RegistryEnvVarsListResponse> =
  s.object<RegistryEnvVarsListResponse>(
    {
      variables: s.array(s.lazy(() => registryEnvVarItemSchema)),
    },
    { additionalProperties: s.json() },
  );
