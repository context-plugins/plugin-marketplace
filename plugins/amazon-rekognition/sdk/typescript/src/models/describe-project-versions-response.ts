import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  projectVersionDescriptionSchema,
  type ProjectVersionDescription,
} from "./project-version-description.js";

export type DescribeProjectVersionsResponse = {
  /**
   * A list of project version descriptions. The list is sorted by the creation date and time of the
   * project versions, latest to earliest.
   */
  projectVersionDescriptions?: ProjectVersionDescription[];
  /**
   * If the previous response was incomplete (because there is more results to retrieve), Amazon
   * Rekognition returns a pagination token in the response. You can use this pagination token to
   * retrieve the next set of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeProjectVersionsResponseSchema: Schema<DescribeProjectVersionsResponse> =
  s.object<DescribeProjectVersionsResponse>(
    {
      projectVersionDescriptions: s.optional(s.array(s.lazy(() => projectVersionDescriptionSchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        projectVersionDescriptions: "ProjectVersionDescriptions",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
