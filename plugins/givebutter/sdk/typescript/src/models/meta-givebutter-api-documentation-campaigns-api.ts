import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { links1Schema, type Links1 } from "./links1.js";

export type MetaGivebutterApiDocumentationCampaignsApi = {
  currentPage: number;
  from: number | null;
  lastPage: number;
  /** Generated paginator links. */
  links: Links1[];
  /** Base path for paginator generated URLs. */
  path: string | null;
  /** Number of items shown per page. */
  perPage: number;
  /** Number of the last item in the slice. */
  to: number | null;
  /** Total number of items being paginated. */
  total: number;
  unfilteredTotal: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const metaGivebutterApiDocumentationCampaignsApiProperties: s.Shape<MetaGivebutterApiDocumentationCampaignsApi> =
  {
    currentPage: s.int(),
    from: s.nullable(s.int()),
    lastPage: s.int(),
    links: s.array(s.lazy(() => links1Schema)),
    path: s.nullable(s.string()),
    perPage: s.int(),
    to: s.nullable(s.int()),
    total: s.int(),
    unfilteredTotal: s.string(),
    _keysMap: {
      currentPage: "current_page",
      lastPage: "last_page",
      perPage: "per_page",
      unfilteredTotal: "unfiltered_total",
    },
  };

export const metaGivebutterApiDocumentationCampaignsApiInternalSchema: Schema<MetaGivebutterApiDocumentationCampaignsApi> =
  s.object<MetaGivebutterApiDocumentationCampaignsApi>(metaGivebutterApiDocumentationCampaignsApiProperties, {
    additionalProperties: s.json(),
  });

export const metaGivebutterApiDocumentationCampaignsApiSchema: Schema<MetaGivebutterApiDocumentationCampaignsApi> =
  s.lazySchema(() =>
    s.object<MetaGivebutterApiDocumentationCampaignsApi>(
      {
        ...metaGivebutterApiDocumentationCampaignsApiProperties,
        currentPage: s.int().check(s.gte(1)),
        from: s.nullable(s.int().check(s.gte(1))),
        lastPage: s.int().check(s.gte(1)),
        perPage: s.int().check(s.gte(0)),
        to: s.nullable(s.int().check(s.gte(1))),
        total: s.int().check(s.gte(0)),
      },
      { additionalProperties: s.json() },
    ),
  );
