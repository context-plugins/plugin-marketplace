import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V20BulkwhoisLiveRequest = {
  domainNames: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v20BulkwhoisLiveRequestProperties: s.Shape<V20BulkwhoisLiveRequest> = {
  domainNames: s.array(s.string()),
};

export const v20BulkwhoisLiveRequestInternalSchema: Schema<V20BulkwhoisLiveRequest> =
  s.object<V20BulkwhoisLiveRequest>(v20BulkwhoisLiveRequestProperties, { additionalProperties: s.json() });

export const v20BulkwhoisLiveRequestSchema: Schema<V20BulkwhoisLiveRequest> = s.lazySchema(() =>
  s.object<V20BulkwhoisLiveRequest>(
    {
      ...v20BulkwhoisLiveRequestProperties,
      domainNames: s.array(s.string()).check(s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
