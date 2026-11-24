import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListProjectPoliciesRequest = {
  /** The ARN of the project for which you want to list the project policies. */
  projectArn: string;
  /**
   * If the previous response was incomplete (because there is more results to retrieve), Amazon
   * Rekognition Custom Labels returns a pagination token in the response. You can use this
   * pagination token to retrieve the next set of results.
   */
  nextToken?: string;
  /**
   * The maximum number of results to return per paginated call. The largest value you can specify
   * is 5. If you specify a value greater than 5, a ValidationException error occurs. The default
   * value is 5.
   */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listProjectPoliciesRequestSchema: Schema<ListProjectPoliciesRequest> =
  s.object<ListProjectPoliciesRequest>(
    {
      projectArn: s.string(),
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      _keysMap: {
        projectArn: "ProjectArn",
        nextToken: "NextToken",
        maxResults: "MaxResults",
      },
    },
    { additionalProperties: s.json() },
  );
