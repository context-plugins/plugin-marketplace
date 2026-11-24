import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Company1LushaSignalsApi = {
  id: string;
  name?: string;
  domain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const company1LushaSignalsApiSchema: Schema<Company1LushaSignalsApi> =
  s.object<Company1LushaSignalsApi>(
    {
      id: s.string(),
      name: s.optional(s.string()),
      domain: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
