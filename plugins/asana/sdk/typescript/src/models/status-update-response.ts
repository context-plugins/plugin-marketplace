import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { likeSchema, type Like } from "./like.js";
import { projectCompactSchema, type ProjectCompact } from "./project-compact.js";
import {
  resourceSubtypeAsanaStatusUpdatesApiSchema,
  type ResourceSubtypeAsanaStatusUpdatesApi,
} from "./resource-subtype-asana-status-updates-api.js";
import { statusTypeSchema, type StatusType } from "./status-type.js";
import { userCompactSchema, type UserCompact } from "./user-compact.js";

export type StatusUpdateResponse = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The title of the status update. */
  title?: string;
  /**
   * The subtype of this resource. Different subtypes retain many of the same fields and behavior,
   * but may render differently in Asana or represent resources with different semantic meaning. The
   * `resource_subtype`s for `status` objects represent the type of their parent.
   */
  resourceSubtype?: ResourceSubtypeAsanaStatusUpdatesApi;
  /** The text content of the status update. */
  text: string;
  /**
   * [Opt In](/docs/input-output-options). The text content of the status update with formatting as
   * HTML.
   */
  htmlText?: string;
  /**
   * The type associated with the status update. This represents the current state of the object
   * this object is on.
   */
  statusType: StatusType;
  author?: UserCompact;
  /** The time at which this resource was created. */
  createdAt?: Date;
  createdBy?: UserCompact;
  /**
   * *Deprecated - please use liked instead* True if the status is hearted by the authorized user,
   * false if not.
   */
  hearted?: boolean;
  /**
   * *Deprecated - please use likes instead* Array of likes for users who have hearted this status.
   */
  hearts?: Like[];
  /** True if the status is liked by the authorized user, false if not. */
  liked?: boolean;
  /** Array of likes for users who have liked this status. */
  likes?: Like[];
  /**
   * The time at which this project status was last modified. *Note: This does not currently reflect
   * any changes in associations such as comments that may have been added or removed from the
   * status.*
   */
  modifiedAt?: Date;
  /** *Deprecated - please use likes instead* The number of users who have hearted this status. */
  numHearts?: number;
  /** The number of users who have liked this status. */
  numLikes?: number;
  parent?: ProjectCompact;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statusUpdateResponseSchema: Schema<StatusUpdateResponse> = s.object<StatusUpdateResponse>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    title: s.optional(s.string()),
    resourceSubtype: s.optional(s.lazy(() => resourceSubtypeAsanaStatusUpdatesApiSchema)),
    text: s.string(),
    htmlText: s.optional(s.string()),
    statusType: statusTypeSchema,
    author: s.optional(s.lazy(() => userCompactSchema)),
    createdAt: s.optional(s.dateTime()),
    createdBy: s.optional(s.lazy(() => userCompactSchema)),
    hearted: s.optional(s.boolean()),
    hearts: s.optional(s.array(s.lazy(() => likeSchema))),
    liked: s.optional(s.boolean()),
    likes: s.optional(s.array(s.lazy(() => likeSchema))),
    modifiedAt: s.optional(s.dateTime()),
    numHearts: s.optional(s.int()),
    numLikes: s.optional(s.int()),
    parent: s.optional(s.lazy(() => projectCompactSchema)),
    _keysMap: {
      resourceType: "resource_type",
      resourceSubtype: "resource_subtype",
      htmlText: "html_text",
      statusType: "status_type",
      createdAt: "created_at",
      createdBy: "created_by",
      modifiedAt: "modified_at",
      numHearts: "num_hearts",
      numLikes: "num_likes",
    },
  },
  { additionalProperties: s.json() },
);
