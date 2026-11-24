import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  v3SignalScoreContactItemInternalSchema,
  v3SignalScoreContactItemSchema,
  type V3SignalScoreContactItem,
} from "./v3-signal-score-contact-item.js";

export type V3SignalScoreContactsRequest = {
  contacts: V3SignalScoreContactItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3SignalScoreContactsRequestProperties: s.Shape<V3SignalScoreContactsRequest> = {
  contacts: s.array(s.lazy(() => v3SignalScoreContactItemInternalSchema)),
};

export const v3SignalScoreContactsRequestInternalSchema: Schema<V3SignalScoreContactsRequest> =
  s.object<V3SignalScoreContactsRequest>(v3SignalScoreContactsRequestProperties, {
    additionalProperties: s.json(),
  });

export const v3SignalScoreContactsRequestSchema: Schema<V3SignalScoreContactsRequest> = s.lazySchema(() =>
  s.object<V3SignalScoreContactsRequest>(
    {
      ...v3SignalScoreContactsRequestProperties,
      contacts: s.array(s.lazy(() => v3SignalScoreContactItemSchema)).check(s.minLength(1), s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
