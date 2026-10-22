import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  additionalPropertiesTypeRoutesGroupsSchema,
  type AdditionalPropertiesTypeRoutesGroups,
} from "./additional-properties-type-routes-groups.js";
import { routeCommentSchema, type RouteComment } from "./route-comment.js";
import { routeConfSchema, type RouteConf } from "./route-conf.js";

export type Routes = {
  /** Array of user-provided comments that describe or annotate Routes. */
  comments?: RouteComment[];
  /** Information about the Route Groups that the Route is associated with. */
  groups?: Record<string, AdditionalPropertiesTypeRoutesGroups>;
  /** Unique identifier for the Routing table. The supported value is <code>default</code>. */
  id: string;
  /** Array of Route configurations that define how events are processed and routed. */
  routes: RouteConf[];
};

export const routesSchema: Schema<Routes> = s.object<Routes>({
  comments: s.optional(s.array(s.lazy(() => routeCommentSchema))),
  groups: s.optional(
    s.record(
      s.string(),
      s.lazy(() => additionalPropertiesTypeRoutesGroupsSchema),
    ),
  ),
  id: s.string(),
  routes: s.array(s.lazy(() => routeConfSchema)),
});
