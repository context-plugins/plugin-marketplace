import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  defaultClientSideAvailabilityPostSchema,
  type DefaultClientSideAvailabilityPost,
} from "./default-client-side-availability-post.js";
import { environmentPostSchema, type EnvironmentPost } from "./environment-post.js";
import { namingConventionSchema, type NamingConvention } from "./naming-convention.js";

export type ProjectPost = {
  /** A human-friendly name for the project. */
  name: string;
  /** A unique key used to reference the project in your code. */
  key: string;
  /**
   * Whether or not flags created in this project are made available to the client-side JavaScript
   * SDK by default.
   */
  includeInSnippetByDefault?: boolean;
  defaultClientSideAvailability?: DefaultClientSideAvailabilityPost;
  /** Tags for the project */
  tags?: string[];
  /**
   * Creates the provided environments for this project. If omitted default environments will be
   * created instead.
   */
  environments?: EnvironmentPost[];
  namingConvention?: NamingConvention;
};

export const projectPostSchema: Schema<ProjectPost> = s.object<ProjectPost>({
  name: s.string(),
  key: s.string(),
  includeInSnippetByDefault: s.optional(s.boolean()),
  defaultClientSideAvailability: s.optional(s.lazy(() => defaultClientSideAvailabilityPostSchema)),
  tags: s.optional(s.array(s.string())),
  environments: s.optional(s.array(s.lazy(() => environmentPostSchema))),
  namingConvention: s.optional(s.lazy(() => namingConventionSchema)),
});
