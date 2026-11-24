import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { awsConfigSchema, type AwsConfig } from "./aws-config.js";
import {
  cloudflowCollaboratorInternalSchema,
  cloudflowCollaboratorSchema,
  type CloudflowCollaborator,
} from "./cloudflow-collaborator.js";
import { gcpConfigSchema, type GcpConfig } from "./gcp-config.js";

/** A cloud provider connection used in CloudFlow workflows. */
export type CloudflowConnection = {
  /** Unique identifier for the connection. */
  connectionId?: string;
  name?: string;
  description?: string;
  gcpConfig?: GcpConfig;
  awsConfig?: AwsConfig;
  collaborators?: CloudflowCollaborator[];
  /** false when the connection is disabled. */
  enabled?: boolean;
  /** Overall connection status. */
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cloudflowConnectionProperties: s.Shape<CloudflowConnection> = {
  connectionId: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  gcpConfig: s.optional(s.lazy(() => gcpConfigSchema)),
  awsConfig: s.optional(s.lazy(() => awsConfigSchema)),
  collaborators: s.optional(s.array(s.lazy(() => cloudflowCollaboratorInternalSchema))),
  enabled: s.optional(s.boolean()),
  status: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
};

export const cloudflowConnectionInternalSchema: Schema<CloudflowConnection> = s.object<CloudflowConnection>(
  cloudflowConnectionProperties,
  { additionalProperties: s.json() },
);

export const cloudflowConnectionSchema: Schema<CloudflowConnection> = s.lazySchema(() =>
  s.object<CloudflowConnection>(
    {
      ...cloudflowConnectionProperties,
      collaborators: s.optional(s.array(s.lazy(() => cloudflowCollaboratorSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
