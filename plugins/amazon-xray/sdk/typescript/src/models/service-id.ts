import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ServiceId = {
  name?: string;
  names?: string[];
  accountId?: string;
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceIdSchema: Schema<ServiceId> = s.object<ServiceId>(
  {
    name: s.optional(s.string()),
    names: s.optional(s.array(s.string())),
    accountId: s.optional(s.string()),
    type: s.optional(s.string()),
    _keysMap: {
      name: "Name",
      names: "Names",
      accountId: "AccountId",
      type: "Type",
    },
  },
  { additionalProperties: s.json() },
);
