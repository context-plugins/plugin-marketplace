import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reputationSignalSchema, type ReputationSignal } from "./reputation-signal.js";

export type ReputationSignals = {
  positive?: ReputationSignal[];
  negative?: ReputationSignal[];
  neutral?: ReputationSignal[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reputationSignalsSchema: Schema<ReputationSignals> = s.object<ReputationSignals>(
  {
    positive: s.optional(s.array(s.lazy(() => reputationSignalSchema))),
    negative: s.optional(s.array(s.lazy(() => reputationSignalSchema))),
    neutral: s.optional(s.array(s.lazy(() => reputationSignalSchema))),
  },
  { additionalProperties: s.json() },
);
