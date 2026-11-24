import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";

export type AccountsMergeRequest = {
  accounts?: Account[];
  mergeBy?: string[];
  mergeStrategy?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountsMergeRequestSchema: Schema<AccountsMergeRequest> = s.object<AccountsMergeRequest>(
  {
    accounts: s.optional(s.array(s.lazy(() => accountSchema))),
    mergeBy: s.optional(s.array(s.string())),
    mergeStrategy: s.optional(s.int()),
    _keysMap: {
      mergeBy: "merge_by",
      mergeStrategy: "merge_strategy",
    },
  },
  { additionalProperties: s.json() },
);
