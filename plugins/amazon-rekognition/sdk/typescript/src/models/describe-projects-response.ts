import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectDescriptionSchema, type ProjectDescription } from "./project-description.js";

export type DescribeProjectsResponse = {
  /**
   * A list of project descriptions. The list is sorted by the date and time the projects are
   * created.
   */
  projectDescriptions?: ProjectDescription[];
  /**
   * If the previous response was incomplete (because there is more results to retrieve), Amazon
   * Rekognition returns a pagination token in the response. You can use this pagination token to
   * retrieve the next set of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeProjectsResponseSchema: Schema<DescribeProjectsResponse> =
  s.object<DescribeProjectsResponse>(
    {
      projectDescriptions: s.optional(s.array(s.lazy(() => projectDescriptionSchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        projectDescriptions: "ProjectDescriptions",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
