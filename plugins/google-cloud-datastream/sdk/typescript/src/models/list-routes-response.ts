import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { routeSchema, type Route } from "./route.js";

/** Route list response. */
export type ListRoutesResponse = {
  /** Locations that could not be reached. */
  unreachable?: string[];
  /** List of Routes. */
  routes?: Route[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listRoutesResponseSchema: Schema<ListRoutesResponse> = s.object<ListRoutesResponse>(
  {
    unreachable: s.optional(s.array(s.string())),
    routes: s.optional(s.array(s.lazy(() => routeSchema))),
    nextPageToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
