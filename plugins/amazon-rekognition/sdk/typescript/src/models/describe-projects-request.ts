import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { feature1Schema, type Feature1 } from "./feature1.js";

export type DescribeProjectsRequest = {
  /**
   * If the previous response was incomplete (because there is more results to retrieve),
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
  /**
   * A list of the projects that you want Rekognition to describe. If you don't specify a value, the
   * response includes descriptions for all the projects in your AWS account.
   */
  projectNames?: string[];
  /**
   * Specifies the type of customization to filter projects by. If no value is specified,
   * CUSTOM_LABELS is used as a default.
   */
  features?: Feature1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeProjectsRequestSchema: Schema<DescribeProjectsRequest> =
  s.object<DescribeProjectsRequest>(
    {
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      projectNames: s.optional(s.array(s.string())),
      features: s.optional(s.array(s.lazy(() => feature1Schema))),
      _keysMap: {
        nextToken: "NextToken",
        maxResults: "MaxResults",
        projectNames: "ProjectNames",
        features: "Features",
      },
    },
    { additionalProperties: s.json() },
  );
