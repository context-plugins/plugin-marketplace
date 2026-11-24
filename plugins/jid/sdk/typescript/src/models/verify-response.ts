import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { decisionSchema, type Decision } from "./decision.js";
import { factSchema, type Fact } from "./fact.js";
import { identifierSchema, type Identifier } from "./identifier.js";
import { receiptSchema, type Receipt } from "./receipt.js";
import { statusJidVerifyApiSchema, type StatusJidVerifyApi } from "./status-jid-verify-api.js";

export type VerifyResponse = {
  id?: string;
  name?: string;
  url?: string;
  fileCheckedAt?: string;
  ownerStatus?: string;
  status?: StatusJidVerifyApi;
  identifiers?: Identifier[];
  facts?: Fact[];
  notInSources?: string[];
  terms?: string;
  decision?: Decision;
  receipt?: Receipt;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const verifyResponseSchema: Schema<VerifyResponse> = s.object<VerifyResponse>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    url: s.optional(s.string()),
    fileCheckedAt: s.optional(s.string()),
    ownerStatus: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusJidVerifyApiSchema)),
    identifiers: s.optional(s.array(s.lazy(() => identifierSchema))),
    facts: s.optional(s.array(s.lazy(() => factSchema))),
    notInSources: s.optional(s.array(s.string())),
    terms: s.optional(s.string()),
    decision: s.optional(s.lazy(() => decisionSchema)),
    receipt: s.optional(s.lazy(() => receiptSchema)),
    _keysMap: {
      fileCheckedAt: "file_checked_at",
      ownerStatus: "owner_status",
      notInSources: "not_in_sources",
    },
  },
  { additionalProperties: s.json() },
);
