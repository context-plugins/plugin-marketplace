import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeProjectVersionsRequest = {
  /**
   * The Amazon Resource Name (ARN) of the project that contains the model/adapter you want to
   * describe.
   */
  projectArn: string;
  /**
   * A list of model or project version names that you want to describe. You can add up to 10 model
   * or project version names to the list. If you don't specify a value, all project version
   * descriptions are returned. A version name is part of a project version ARN. For example,
   * my-model.2020-01-21T09.10.15 is the version name in the following ARN.
   * arn:aws:rekognition:us-east-1:123456789012:project/getting-started/version/my-model.2020-01-21T09.10.15/1234567890123.
   */
  versionNames?: string[];
  /**
   * If the previous response was incomplete (because there is more results to retrieve), Amazon
   * Rekognition returns a pagination token in the response. You can use this pagination token to
   * retrieve the next set of results.
   */
  nextToken?: string;
  /**
   * The maximum number of results to return per paginated call. The largest value you can specify
   * is 100. If you specify a value greater than 100, a ValidationException error occurs. The
   * default value is 100.
   */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeProjectVersionsRequestSchema: Schema<DescribeProjectVersionsRequest> =
  s.object<DescribeProjectVersionsRequest>(
    {
      projectArn: s.string(),
      versionNames: s.optional(s.array(s.string())),
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      _keysMap: {
        projectArn: "ProjectArn",
        versionNames: "VersionNames",
        nextToken: "NextToken",
        maxResults: "MaxResults",
      },
    },
    { additionalProperties: s.json() },
  );
