import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { outcomeSchema, type Outcome } from "./outcome.js";

export type V1OutcomesRequest = {
  resultId?: string;
  /**
   * legit, sales_pitch, spam and scam on a qualification are also community reports
   * (jid.com/privacy section 2b).
   */
  outcome?: Outcome;
  note?: string;
  token?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1OutcomesRequestProperties: s.Shape<V1OutcomesRequest> = {
  resultId: s.optional(s.string()),
  outcome: s.optional(s.lazy(() => outcomeSchema)),
  note: s.optional(s.string()),
  token: s.optional(s.string()),
  _keysMap: {
    resultId: "result_id",
  },
};

export const v1OutcomesRequestInternalSchema: Schema<V1OutcomesRequest> = s.object<V1OutcomesRequest>(
  v1OutcomesRequestProperties,
  { additionalProperties: s.json() },
);

export const v1OutcomesRequestSchema: Schema<V1OutcomesRequest> = s.lazySchema(() =>
  s.object<V1OutcomesRequest>(
    {
      ...v1OutcomesRequestProperties,
      note: s.optional(s.string().check(s.maxLength(280))),
    },
    { additionalProperties: s.json() },
  ),
);
