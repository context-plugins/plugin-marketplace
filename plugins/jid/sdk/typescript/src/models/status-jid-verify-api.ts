import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status1JidVerifyApiSchema, type Status1JidVerifyApi } from "./status1-jid-verify-api.js";

export type StatusJidVerifyApi = {
  status?: Status1JidVerifyApi;
  summary?: string;
  flags?: Record<string, unknown>[];
  rulesVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statusJidVerifyApiSchema: Schema<StatusJidVerifyApi> = s.object<StatusJidVerifyApi>(
  {
    status: s.optional(s.lazy(() => status1JidVerifyApiSchema)),
    summary: s.optional(s.string()),
    flags: s.optional(s.array(s.record(s.string(), s.unknown()))),
    rulesVersion: s.optional(s.string()),
    _keysMap: {
      rulesVersion: "rules_version",
    },
  },
  { additionalProperties: s.json() },
);
