import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ExtractParameters = {
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const extractParametersProperties: s.Shape<ExtractParameters> = {
  url: s.string(),
};

export const extractParametersInternalSchema: Schema<ExtractParameters> = s.object<ExtractParameters>(
  extractParametersProperties,
  { additionalProperties: s.json() },
);

export const extractParametersSchema: Schema<ExtractParameters> = s.lazySchema(() =>
  s.object<ExtractParameters>(
    {
      ...extractParametersProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
