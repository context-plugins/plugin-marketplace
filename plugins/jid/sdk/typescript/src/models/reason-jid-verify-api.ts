import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { effectJidVerifyApiSchema, type EffectJidVerifyApi } from "./effect-jid-verify-api.js";
import { kindJidVerifyApiSchema, type KindJidVerifyApi } from "./kind-jid-verify-api.js";
import { source1Schema, type Source1 } from "./source1.js";
import { met1Schema, type Met1 } from "./unions/met1.js";

export type ReasonJidVerifyApi = {
  code: string;
  requirement: string;
  kind?: KindJidVerifyApi;
  met: Met1;
  effect?: EffectJidVerifyApi | null;
  detail?: string;
  factIds: string[];
  source?: Source1 | null;
  sourceUrl?: string | null;
  verifiedAt?: Date | null;
  freshUntil?: Date | null;
  authority?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reasonJidVerifyApiSchema: Schema<ReasonJidVerifyApi> = s.object<ReasonJidVerifyApi>(
  {
    code: s.string(),
    requirement: s.string(),
    kind: s.optional(s.lazy(() => kindJidVerifyApiSchema)),
    met: met1Schema,
    effect: s.optionalNullable(s.lazy(() => effectJidVerifyApiSchema)),
    detail: s.optional(s.string()),
    factIds: s.array(s.string()),
    source: s.optionalNullable(s.lazy(() => source1Schema)),
    sourceUrl: s.optionalNullable(s.string()),
    verifiedAt: s.optionalNullable(s.dateTime()),
    freshUntil: s.optionalNullable(s.dateTime()),
    authority: s.optional(s.string()),
    _keysMap: {
      factIds: "fact_ids",
      sourceUrl: "source_url",
      verifiedAt: "verified_at",
      freshUntil: "fresh_until",
    },
  },
  { additionalProperties: s.json() },
);
