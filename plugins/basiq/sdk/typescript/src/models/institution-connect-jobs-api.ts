import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobsLinksSchema, type JobsLinks } from "./jobs-links.js";

/** Institution details. */
export type InstitutionConnectJobsApi = {
  /** A string that uniquely identifies institution. */
  id: string;
  /** Links to the resources. */
  links: JobsLinks;
  /** Always "institution". */
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const institutionConnectJobsApiSchema: Schema<InstitutionConnectJobsApi> =
  s.object<InstitutionConnectJobsApi>(
    {
      id: s.string(),
      links: jobsLinksSchema,
      type: s.string(),
    },
    { additionalProperties: s.json() },
  );
