import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insightsConfigurationSchema, type InsightsConfiguration } from "./insights-configuration.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateGroupRequest = {
  /**
   * The case-sensitive name of the new group. Default is a reserved name and names must be unique.
   */
  groupName: string;
  /** The filter expression defining criteria by which to group traces. */
  filterExpression?: string;
  insightsConfiguration?: InsightsConfiguration;
  /**
   * A map that contains one or more tag keys and tag values to attach to an X-Ray group. For more
   * information about ways to use tags, see Tagging Amazon Web Services resources in the Amazon Web
   * Services General Reference. The following restrictions apply to tags: Maximum number of
   * user-applied tags per resource: 50 Maximum tag key length: 128 Unicode characters Maximum tag
   * value length: 256 Unicode characters Valid values for key and value: a-z, A-Z, 0-9, space, and
   * the following characters: _ . : / = + - and \@ Tag keys and values are case sensitive. Don't
   * use aws: as a prefix for keys; it's reser
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createGroupRequestSchema: Schema<CreateGroupRequest> = s.object<CreateGroupRequest>(
  {
    groupName: s.string(),
    filterExpression: s.optional(s.string()),
    insightsConfiguration: s.optional(s.lazy(() => insightsConfigurationSchema)),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    _keysMap: {
      groupName: "GroupName",
      filterExpression: "FilterExpression",
      insightsConfiguration: "InsightsConfiguration",
      tags: "Tags",
    },
  },
  { additionalProperties: s.json() },
);
