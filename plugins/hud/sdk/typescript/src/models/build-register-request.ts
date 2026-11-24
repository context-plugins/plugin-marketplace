import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  contentDigest1InternalSchema,
  contentDigest1Schema,
  type ContentDigest1,
} from "./unions/content-digest1.js";
import { externalIdInternalSchema, externalIdSchema, type ExternalId } from "./unions/external-id.js";
import { nameInternalSchema, nameSchema, type Name } from "./unions/name.js";
import { projectIdSchema, type ProjectId } from "./unions/project-id.js";
import { registryIdSchema, type RegistryId } from "./unions/registry-id.js";

/**
 * Record an uploaded build context as a build of an environment without building it.
 *
 * With `external_id` the environment is the team's environment imported under that id, created on
 * first use and named `name`, suffixed when the name is taken.
 */
export type BuildRegisterRequest = {
  registryId?: RegistryId;
  name?: Name;
  projectId?: ProjectId;
  buildId: string;
  /**
   * Identity of the environment in the system it is imported from, as `<system>:<id>`, e.g.
   * `harbor:hello-world`
   */
  externalId?: ExternalId;
  /**
   * Content hash of the uploaded source; registering a digest the environment already has returns
   * that build and discards the upload
   */
  contentDigest?: ContentDigest1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const buildRegisterRequestProperties: s.Shape<BuildRegisterRequest> = {
  registryId: s.optional(s.lazy(() => registryIdSchema)),
  name: s.optional(s.lazy(() => nameInternalSchema)),
  projectId: s.optional(s.lazy(() => projectIdSchema)),
  buildId: s.string(),
  externalId: s.optional(s.lazy(() => externalIdInternalSchema)),
  contentDigest: s.optional(s.lazy(() => contentDigest1InternalSchema)),
  _keysMap: {
    registryId: "registry_id",
    projectId: "project_id",
    buildId: "build_id",
    externalId: "external_id",
    contentDigest: "content_digest",
  },
};

export const buildRegisterRequestInternalSchema: Schema<BuildRegisterRequest> =
  s.object<BuildRegisterRequest>(buildRegisterRequestProperties, { additionalProperties: s.json() });

export const buildRegisterRequestSchema: Schema<BuildRegisterRequest> = s.lazySchema(() =>
  s.object<BuildRegisterRequest>(
    {
      ...buildRegisterRequestProperties,
      name: s.optional(s.lazy(() => nameSchema)),
      externalId: s.optional(s.lazy(() => externalIdSchema)),
      contentDigest: s.optional(s.lazy(() => contentDigest1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
