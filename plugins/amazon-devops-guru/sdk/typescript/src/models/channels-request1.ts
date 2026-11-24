import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ChannelsRequest1 = {
  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this
   * value is null, it retrieves the first page.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const channelsRequest1Schema: Schema<ChannelsRequest1> = s.object<ChannelsRequest1>(
  {
    nextToken: s.optional(s.string()),
    _keysMap: {
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
