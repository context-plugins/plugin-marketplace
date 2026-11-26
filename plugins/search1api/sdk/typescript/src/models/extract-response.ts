import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  extractParametersInternalSchema,
  extractParametersSchema,
  type ExtractParameters,
} from "./extract-parameters.js";

export type ExtractResponse = {
  /** @default "True" */
  success?: "True";
  extractParameters: ExtractParameters;
  results: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const extractResponseProperties: s.Shape<ExtractResponse> = {
  success: s.defaulted(s.literal("True"), "True"),
  extractParameters: extractParametersInternalSchema,
  results: s.record(s.string(), s.unknown()),
};

export const extractResponseInternalSchema: Schema<ExtractResponse> = s.object<ExtractResponse>(
  extractResponseProperties,
  { additionalProperties: s.json() },
);

export const extractResponseSchema: Schema<ExtractResponse> = s.lazySchema(() =>
  s.object<ExtractResponse>(
    {
      ...extractResponseProperties,
      extractParameters: extractParametersSchema,
    },
    { additionalProperties: s.json() },
  ),
);
