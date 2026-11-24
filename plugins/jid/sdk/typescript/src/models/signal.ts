import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { effectSchema, type Effect } from "./effect.js";

export type Signal = {
  name?: string;
  label?: string;
  value?: Record<string, unknown>;
  effect?: Effect;
  detail?: string;
  source?: string;
  sourceUrl?: string | null;
  verifiedAt?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalSchema: Schema<Signal> = s.object<Signal>(
  {
    name: s.optional(s.string()),
    label: s.optional(s.string()),
    value: s.optional(s.record(s.string(), s.unknown())),
    effect: s.optional(s.lazy(() => effectSchema)),
    detail: s.optional(s.string()),
    source: s.optional(s.string()),
    sourceUrl: s.optionalNullable(s.string()),
    verifiedAt: s.optionalNullable(s.string()),
    _keysMap: {
      sourceUrl: "source_url",
      verifiedAt: "verified_at",
    },
  },
  { additionalProperties: s.json() },
);
