import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { vcsInfoInternalSchema, vcsInfoSchema, type VcsInfo } from "./vcs-info.js";

export type Project2 = {
  /** The project slug */
  slug?: string;
  /** The project name */
  name?: string;
  /** The unique identifier of the project */
  id?: string;
  /** The name of the organization */
  organizationName?: string;
  /** The slug of the organization */
  organizationSlug?: string;
  /** The ID of the organization */
  organizationId?: string;
  /** Version control system information */
  vcsInfo?: VcsInfo;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const project2Properties: s.Shape<Project2> = {
  slug: s.optional(s.string()),
  name: s.optional(s.string()),
  id: s.optional(s.string()),
  organizationName: s.optional(s.string()),
  organizationSlug: s.optional(s.string()),
  organizationId: s.optional(s.string()),
  vcsInfo: s.optional(s.lazy(() => vcsInfoInternalSchema)),
  _keysMap: {
    organizationName: "organization_name",
    organizationSlug: "organization_slug",
    organizationId: "organization_id",
    vcsInfo: "vcs_info",
  },
};

export const project2InternalSchema: Schema<Project2> = s.object<Project2>(project2Properties, {
  additionalProperties: s.json(),
});

export const project2Schema: Schema<Project2> = s.lazySchema(() =>
  s.object<Project2>(
    {
      ...project2Properties,
      vcsInfo: s.optional(s.lazy(() => vcsInfoSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
