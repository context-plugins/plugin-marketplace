import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Dlr = {
  /** Optional DLR (Delivery Receipt) callback URL */
  callbackEndpoint?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dlrSchema: Schema<Dlr> = s.object<Dlr>(
  {
    callbackEndpoint: s.optional(s.string()),
    _keysMap: {
      callbackEndpoint: "callback_endpoint",
    },
  },
  { additionalProperties: s.json() },
);
