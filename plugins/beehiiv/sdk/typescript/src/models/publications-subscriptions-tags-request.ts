import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicationsSubscriptionsTagsRequest = {
  /** Tags that can be used to group subscribers */
  tags?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsSubscriptionsTagsRequestSchema: Schema<PublicationsSubscriptionsTagsRequest> =
  s.object<PublicationsSubscriptionsTagsRequest>(
    {
      tags: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
