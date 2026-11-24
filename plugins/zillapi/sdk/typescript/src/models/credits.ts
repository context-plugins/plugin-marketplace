import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Credits = {
  balance?: number;
  grantedThisCycle?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditsSchema: Schema<Credits> = s.object<Credits>(
  {
    balance: s.optional(s.int()),
    grantedThisCycle: s.optional(s.int()),
    _keysMap: {
      grantedThisCycle: "granted_this_cycle",
    },
  },
  { additionalProperties: s.json() },
);
