import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  resourceSubtypeAsanaStatusUpdatesApiSchema,
  type ResourceSubtypeAsanaStatusUpdatesApi,
} from "./resource-subtype-asana-status-updates-api.js";
import { statusTypeSchema, type StatusType } from "./status-type.js";

export type StatusUpdateBase = {
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statusUpdateBaseSchema: Schema<StatusUpdateBase> = s.object<StatusUpdateBase>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    title: s.optional(s.string()),
    resourceSubtype: s.optional(s.lazy(() => resourceSubtypeAsanaStatusUpdatesApiSchema)),
    text: s.string(),
    htmlText: s.optional(s.string()),
    statusType: statusTypeSchema,
    _keysMap: {
      resourceType: "resource_type",
      resourceSubtype: "resource_subtype",
      htmlText: "html_text",
      statusType: "status_type",
    },
  },
  { additionalProperties: s.json() },
);
