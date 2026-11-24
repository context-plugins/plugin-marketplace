import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobEntityLinkInfoSchema, type JobEntityLinkInfo } from "./job-entity-link-info.js";

export type JobEntityLinksResponse = {
  links?: JobEntityLinkInfo[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobEntityLinksResponseSchema: Schema<JobEntityLinksResponse> = s.object<JobEntityLinksResponse>(
  {
    links: s.optional(s.array(s.lazy(() => jobEntityLinkInfoSchema))),
  },
  { additionalProperties: s.json() },
);
