import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TransactionalSendSmsRequest = {
  smsId?: string;
  mergeBy?: string[];
  people?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transactionalSendSmsRequestSchema: Schema<TransactionalSendSmsRequest> =
  s.object<TransactionalSendSmsRequest>(
    {
      smsId: s.optional(s.string()),
      mergeBy: s.optional(s.array(s.string())),
      people: s.optional(s.array(s.record(s.string(), s.unknown()))),
      _keysMap: {
        smsId: "sms_id",
        mergeBy: "merge_by",
      },
    },
    { additionalProperties: s.json() },
  );
