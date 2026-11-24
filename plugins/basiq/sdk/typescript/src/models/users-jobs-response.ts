import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobsDataSchema, type JobsData } from "./jobs-data.js";
import { resourceLinkSchema, type ResourceLink } from "./resource-link.js";

export type UsersJobsResponse = {
  /** Type of the response, always "list". */
  type: string;
  /** Container object, containing job details. */
  data: JobsData[];
  /** Size of the all the jobs. */
  size: number;
  /** Link object containing a link to the resource, self reference. */
  links: ResourceLink;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersJobsResponseSchema: Schema<UsersJobsResponse> = s.object<UsersJobsResponse>(
  {
    type: s.string(),
    data: s.array(s.lazy(() => jobsDataSchema)),
    size: s.int(),
    links: resourceLinkSchema,
  },
  { additionalProperties: s.json() },
);
