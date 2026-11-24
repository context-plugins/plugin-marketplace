import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListStreamProcessorsRequest = {
  /**
   * If the previous response was incomplete (because there are more stream processors to retrieve),
   * Amazon Rekognition Video returns a pagination token in the response. You can use this
   * pagination token to retrieve the next set of stream processors.
   */
  nextToken?: string;
  /**
   * Maximum number of stream processors you want Amazon Rekognition Video to return in the
   * response. The default is 1000.
   */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listStreamProcessorsRequestSchema: Schema<ListStreamProcessorsRequest> =
  s.object<ListStreamProcessorsRequest>(
    {
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      _keysMap: {
        nextToken: "NextToken",
        maxResults: "MaxResults",
      },
    },
    { additionalProperties: s.json() },
  );
