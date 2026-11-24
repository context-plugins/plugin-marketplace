import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  projectUiPathTestManagerProjectsApiSchema,
  type ProjectUiPathTestManagerProjectsApi,
} from "./project-ui-path-test-manager-projects-api.js";

/** Paginated response containing test projects */
export type ProjectListResponse = {
  /** Total number of projects */
  totalCount?: number;
  /** Current page number */
  page?: number;
  /** Records per page */
  pageSize?: number;
  projects?: ProjectUiPathTestManagerProjectsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectListResponseSchema: Schema<ProjectListResponse> = s.object<ProjectListResponse>(
  {
    totalCount: s.optional(s.int()),
    page: s.optional(s.int()),
    pageSize: s.optional(s.int()),
    projects: s.optional(s.array(s.lazy(() => projectUiPathTestManagerProjectsApiSchema))),
  },
  { additionalProperties: s.json() },
);
