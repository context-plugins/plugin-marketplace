import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { clientSideAvailabilitySchema, type ClientSideAvailability } from "./client-side-availability.js";
import { environmentsSchema, type Environments } from "./environments.js";
import { linkSchema, type Link } from "./link.js";

export type Project = {
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** The ID of this project */
  id: string;
  /** The key of this project */
  key: string;
  /**
   * Whether or not flags created in this project are made available to the client-side JavaScript
   * SDK by default
   */
  includeInSnippetByDefault: boolean;
  defaultClientSideAvailability?: ClientSideAvailability;
  /** A human-friendly name for the project */
  name: string;
  access?: Access;
  /** A list of tags for the project */
  tags: string[];
  /** The key of the default release pipeline for this project */
  defaultReleasePipelineKey?: string;
  environments?: Environments;
};

export const projectSchema: Schema<Project> = s.object<Project>({
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  id: s.string(),
  key: s.string(),
  includeInSnippetByDefault: s.boolean(),
  defaultClientSideAvailability: s.optional(s.lazy(() => clientSideAvailabilitySchema)),
  name: s.string(),
  access: s.optional(s.lazy(() => accessSchema)),
  tags: s.array(s.string()),
  defaultReleasePipelineKey: s.optional(s.string()),
  environments: s.optional(s.lazy(() => environmentsSchema)),
  _keysMap: {
    links: "_links",
    id: "_id",
    access: "_access",
  },
});
