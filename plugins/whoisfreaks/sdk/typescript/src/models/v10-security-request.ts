import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V10SecurityRequest = {
  ips: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v10SecurityRequestProperties: s.Shape<V10SecurityRequest> = {
  ips: s.array(s.string()),
};

export const v10SecurityRequestInternalSchema: Schema<V10SecurityRequest> = s.object<V10SecurityRequest>(
  v10SecurityRequestProperties,
  { additionalProperties: s.json() },
);

export const v10SecurityRequestSchema: Schema<V10SecurityRequest> = s.lazySchema(() =>
  s.object<V10SecurityRequest>(
    {
      ...v10SecurityRequestProperties,
      ips: s.array(s.string()).check(s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
