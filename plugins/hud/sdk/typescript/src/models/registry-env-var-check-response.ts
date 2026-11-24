import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  registryEnvVarCheckItemSchema,
  type RegistryEnvVarCheckItem,
} from "./registry-env-var-check-item.js";

export type RegistryEnvVarCheckResponse = {
  environments: RegistryEnvVarCheckItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registryEnvVarCheckResponseSchema: Schema<RegistryEnvVarCheckResponse> =
  s.object<RegistryEnvVarCheckResponse>(
    {
      environments: s.array(s.lazy(() => registryEnvVarCheckItemSchema)),
    },
    { additionalProperties: s.json() },
  );
