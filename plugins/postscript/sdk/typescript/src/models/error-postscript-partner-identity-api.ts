import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ErrorPostscriptPartnerIdentityApi = {
  ctx?: Record<string, unknown>;
  log?: string[];
  msg?: string;
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorPostscriptPartnerIdentityApiSchema: Schema<ErrorPostscriptPartnerIdentityApi> =
  s.object<ErrorPostscriptPartnerIdentityApi>(
    {
      ctx: s.optional(s.record(s.string(), s.unknown())),
      log: s.optional(s.array(s.string())),
      msg: s.optional(s.string()),
      type: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
