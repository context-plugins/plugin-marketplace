import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Class1ConnectTransactionsApi = {
  /** Class Details */
  title?: string;
  /** Class Code */
  code?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const class1ConnectTransactionsApiSchema: Schema<Class1ConnectTransactionsApi> =
  s.object<Class1ConnectTransactionsApi>(
    {
      title: s.optional(s.string()),
      code: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
