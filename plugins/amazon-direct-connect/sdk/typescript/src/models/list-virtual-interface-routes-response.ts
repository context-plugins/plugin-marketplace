import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { routeSchema, type Route } from "./route.js";

export type ListVirtualInterfaceRoutesResponse = {
  /** The ID of the virtual interface. */
  virtualInterfaceId?: string;
  /** The routes for the virtual interface. */
  routes?: Route[];
  /**
   * The token to use to retrieve the next page of results. This value is null when there are no
   * more results to return.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listVirtualInterfaceRoutesResponseSchema: Schema<ListVirtualInterfaceRoutesResponse> =
  s.object<ListVirtualInterfaceRoutesResponse>(
    {
      virtualInterfaceId: s.optional(s.string()),
      routes: s.optional(s.array(s.lazy(() => routeSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
