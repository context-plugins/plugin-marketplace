import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RouteComment = {
  /** Brief description of the Route. */
  comment: string;
  /** Unique identifier for the Route Group that the Route is associated with. */
  groupId?: string;
  /** Unique identifier for the comment. */
  id: string;
  /** Relative position of the comment among all comments for the Route. */
  index: number;
};

export const routeCommentSchema: Schema<RouteComment> = s.object<RouteComment>({
  comment: s.string(),
  groupId: s.optional(s.string()),
  id: s.string(),
  index: s.int(),
});
