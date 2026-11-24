import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Links1ConnectTransactionsApi = {
  /** Self reference url. */
  self: string;
  /** URL to the next result page when there are more than 500 transactions. */
  next?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const links1ConnectTransactionsApiSchema: Schema<Links1ConnectTransactionsApi> =
  s.object<Links1ConnectTransactionsApi>(
    {
      self: s.string(),
      next: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
