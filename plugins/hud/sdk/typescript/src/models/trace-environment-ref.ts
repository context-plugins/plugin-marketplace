import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildDigestSchema, type BuildDigest } from "./unions/build-digest.js";
import { buildIdSchema, type BuildId } from "./unions/build-id.js";
import { buildVersionSchema, type BuildVersion } from "./unions/build-version.js";
import { registryTypeSchema, type RegistryType } from "./unions/registry-type.js";

export type TraceEnvironmentRef = {
  id: string;
  name: string;
  registryType?: RegistryType;
  buildId?: BuildId;
  buildVersion?: BuildVersion;
  buildDigest?: BuildDigest;
  /** @default false */
  canViewSource?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceEnvironmentRefSchema: Schema<TraceEnvironmentRef> = s.object<TraceEnvironmentRef>(
  {
    id: s.string(),
    name: s.string(),
    registryType: s.optional(s.lazy(() => registryTypeSchema)),
    buildId: s.optional(s.lazy(() => buildIdSchema)),
    buildVersion: s.optional(s.lazy(() => buildVersionSchema)),
    buildDigest: s.optional(s.lazy(() => buildDigestSchema)),
    canViewSource: s.defaulted(s.boolean(), false),
    _keysMap: {
      registryType: "registry_type",
      buildId: "build_id",
      buildVersion: "build_version",
      buildDigest: "build_digest",
      canViewSource: "can_view_source",
    },
  },
  { additionalProperties: s.json() },
);
