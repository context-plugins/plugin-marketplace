import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Links1InsightsApi = {
  /** Self-referencing link to this insight */
  self: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const links1InsightsApiProperties: s.Shape<Links1InsightsApi> = {
  self: s.string(),
};

export const links1InsightsApiInternalSchema: Schema<Links1InsightsApi> = s.object<Links1InsightsApi>(
  links1InsightsApiProperties,
  { additionalProperties: s.json() },
);

export const links1InsightsApiSchema: Schema<Links1InsightsApi> = s.lazySchema(() =>
  s.object<Links1InsightsApi>(
    {
      ...links1InsightsApiProperties,
      self: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
