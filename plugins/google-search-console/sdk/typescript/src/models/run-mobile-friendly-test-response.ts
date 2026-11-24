import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { image1Schema, type Image1 } from "./image1.js";
import { mobileFriendlinessSchema, type MobileFriendliness } from "./mobile-friendliness.js";
import { mobileFriendlyIssueSchema, type MobileFriendlyIssue } from "./mobile-friendly-issue.js";
import { resourceIssueSchema, type ResourceIssue } from "./resource-issue.js";
import { testStatus1Schema, type TestStatus1 } from "./test-status1.js";

/** Mobile-friendly test response, including mobile-friendly issues and resource issues. */
export type RunMobileFriendlyTestResponse = {
  /** List of mobile-usability issues. */
  mobileFriendlyIssues?: MobileFriendlyIssue[];
  /** Information about embedded resources issues. */
  resourceIssues?: ResourceIssue[];
  /** Test verdict, whether the page is mobile friendly or not. */
  mobileFriendliness?: MobileFriendliness;
  /** Final state of the test, can be either complete or an error. */
  testStatus?: TestStatus1;
  /** Screenshot of the requested URL. */
  screenshot?: Image1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runMobileFriendlyTestResponseSchema: Schema<RunMobileFriendlyTestResponse> =
  s.object<RunMobileFriendlyTestResponse>(
    {
      mobileFriendlyIssues: s.optional(s.array(s.lazy(() => mobileFriendlyIssueSchema))),
      resourceIssues: s.optional(s.array(s.lazy(() => resourceIssueSchema))),
      mobileFriendliness: s.optional(s.lazy(() => mobileFriendlinessSchema)),
      testStatus: s.optional(s.lazy(() => testStatus1Schema)),
      screenshot: s.optional(s.lazy(() => image1Schema)),
    },
    { additionalProperties: s.json() },
  );
