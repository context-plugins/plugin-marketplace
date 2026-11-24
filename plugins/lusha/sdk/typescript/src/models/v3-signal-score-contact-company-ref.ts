import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Company the contact was scored at. */
export type V3SignalScoreContactCompanyRef = {
  id?: string;
  name?: string;
  domain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3SignalScoreContactCompanyRefSchema: Schema<V3SignalScoreContactCompanyRef> =
  s.object<V3SignalScoreContactCompanyRef>(
    {
      id: s.optional(s.string()),
      name: s.optional(s.string()),
      domain: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
