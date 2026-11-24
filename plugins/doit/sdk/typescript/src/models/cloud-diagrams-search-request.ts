import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request body for searching diagrams and components. */
export type CloudDiagramsSearchRequest = {
  /** Search query string. */
  query: string;
  /** Limit search to components within this layer. */
  ssId?: string;
  /** Pagination offset (default 0). */
  from?: number;
  /** Maximum number of results per category (default 20). */
  size?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cloudDiagramsSearchRequestProperties: s.Shape<CloudDiagramsSearchRequest> = {
  query: s.string(),
  ssId: s.optional(s.string()),
  from: s.optional(s.int()),
  size: s.optional(s.int()),
  _keysMap: {
    ssId: "ss_id",
  },
};

export const cloudDiagramsSearchRequestInternalSchema: Schema<CloudDiagramsSearchRequest> =
  s.object<CloudDiagramsSearchRequest>(cloudDiagramsSearchRequestProperties, {
    additionalProperties: s.json(),
  });

export const cloudDiagramsSearchRequestSchema: Schema<CloudDiagramsSearchRequest> = s.lazySchema(() =>
  s.object<CloudDiagramsSearchRequest>(
    {
      ...cloudDiagramsSearchRequestProperties,
      from: s.optional(s.int().check(s.gte(0))),
      size: s.optional(s.int().check(s.gte(1))),
    },
    { additionalProperties: s.json() },
  ),
);
