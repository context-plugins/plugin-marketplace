import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cloudflowConnectionInternalSchema,
  cloudflowConnectionSchema,
  type CloudflowConnection,
} from "./cloudflow-connection.js";

/** Cursor-paginated list of CloudFlow connections. */
export type CloudflowConnectionListResponse = {
  /** List of connections for the current page. */
  items: CloudflowConnection[];
  /** Opaque cursor for the next page. `null` when there are no more results. */
  pageToken?: string | null;
  /** Always `null`. Row count is not computed for this endpoint. */
  rowCount?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cloudflowConnectionListResponseProperties: s.Shape<CloudflowConnectionListResponse> = {
  items: s.array(s.lazy(() => cloudflowConnectionInternalSchema)),
  pageToken: s.optionalNullable(s.string()),
  rowCount: s.optionalNullable(s.int()),
};

export const cloudflowConnectionListResponseInternalSchema: Schema<CloudflowConnectionListResponse> =
  s.object<CloudflowConnectionListResponse>(cloudflowConnectionListResponseProperties, {
    additionalProperties: s.json(),
  });

export const cloudflowConnectionListResponseSchema: Schema<CloudflowConnectionListResponse> = s.lazySchema(
  () =>
    s.object<CloudflowConnectionListResponse>(
      {
        ...cloudflowConnectionListResponseProperties,
        items: s.array(s.lazy(() => cloudflowConnectionSchema)),
      },
      { additionalProperties: s.json() },
    ),
);
