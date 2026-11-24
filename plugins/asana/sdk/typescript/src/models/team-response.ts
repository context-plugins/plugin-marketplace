import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { visibilitySchema, type Visibility } from "./visibility.js";
import { workspaceCompactSchema, type WorkspaceCompact } from "./workspace-compact.js";

export type TeamResponse = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The name of the team. */
  name?: string;
  /** [Opt In](/docs/input-output-options). The description of the team. */
  description?: string;
  /** [Opt In](/docs/input-output-options). The description of the team with formatting as HTML. */
  htmlDescription?: string;
  organization?: WorkspaceCompact;
  /** A url that points directly to the object within Asana. */
  permalinkUrl?: string;
  /** The visibility of the team to users in the same organization */
  visibility?: Visibility;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamResponseSchema: Schema<TeamResponse> = s.object<TeamResponse>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    htmlDescription: s.optional(s.string()),
    organization: s.optional(s.lazy(() => workspaceCompactSchema)),
    permalinkUrl: s.optional(s.string()),
    visibility: s.optional(s.lazy(() => visibilitySchema)),
    _keysMap: {
      resourceType: "resource_type",
      htmlDescription: "html_description",
      permalinkUrl: "permalink_url",
    },
  },
  { additionalProperties: s.json() },
);
