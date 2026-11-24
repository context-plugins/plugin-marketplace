import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Specification for lookalike audiences */
export type LookalikeSpec = {
  originAudienceId?: string;
  ratio?: number;
  country?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const lookalikeSpecProperties: s.Shape<LookalikeSpec> = {
  originAudienceId: s.optional(s.string()),
  ratio: s.optional(s.float64()),
  country: s.optional(s.string()),
  _keysMap: {
    originAudienceId: "origin_audience_id",
  },
};

export const lookalikeSpecInternalSchema: Schema<LookalikeSpec> = s.object<LookalikeSpec>(
  lookalikeSpecProperties,
  { additionalProperties: s.json() },
);

export const lookalikeSpecSchema: Schema<LookalikeSpec> = s.lazySchema(() =>
  s.object<LookalikeSpec>(
    {
      ...lookalikeSpecProperties,
      ratio: s.optional(s.float64().check(s.gte(0.01), s.lte(0.2))),
    },
    { additionalProperties: s.json() },
  ),
);
