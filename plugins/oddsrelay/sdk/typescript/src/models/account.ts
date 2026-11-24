import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type Account = {
  status: Status;
  suspensionReason: string | null;
  test: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountSchema: Schema<Account> = s.object<Account>(
  {
    status: statusSchema,
    suspensionReason: s.nullable(s.string()),
    test: s.nullable(s.boolean()),
    _keysMap: {
      suspensionReason: "suspension_reason",
    },
  },
  { additionalProperties: s.json() },
);
