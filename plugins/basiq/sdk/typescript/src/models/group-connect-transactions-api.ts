import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GroupConnectTransactionsApi = {
  /** Group Code */
  code?: string;
  /** Group Details */
  title?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupConnectTransactionsApiSchema: Schema<GroupConnectTransactionsApi> =
  s.object<GroupConnectTransactionsApi>(
    {
      code: s.optional(s.string()),
      title: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
