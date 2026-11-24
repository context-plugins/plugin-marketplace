import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { valueSchema, type Value } from "./unions/value.js";

export type RegistryEnvVarUpdateRequest = {
  value?: Value;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registryEnvVarUpdateRequestSchema: Schema<RegistryEnvVarUpdateRequest> =
  s.object<RegistryEnvVarUpdateRequest>(
    {
      value: s.optional(s.lazy(() => valueSchema)),
    },
    { additionalProperties: s.json() },
  );
