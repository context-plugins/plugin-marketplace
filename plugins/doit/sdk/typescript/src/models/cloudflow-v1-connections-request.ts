import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cloudflowAwsConfigRequestSchema,
  type CloudflowAwsConfigRequest,
} from "./cloudflow-aws-config-request.js";
import {
  cloudflowCollaboratorInternalSchema,
  cloudflowCollaboratorSchema,
  type CloudflowCollaborator,
} from "./cloudflow-collaborator.js";
import {
  cloudflowGcpConfigRequestSchema,
  type CloudflowGcpConfigRequest,
} from "./cloudflow-gcp-config-request.js";

export type CloudflowV1ConnectionsRequest = {
  /** Human-readable connection name. */
  name: string;
  /** Optional description. */
  description?: string;
  /** GCP connection configuration. Server-owned fields (status, deploymentCommand) are excluded. */
  gcpConfig?: CloudflowGcpConfigRequest;
  /**
   * AWS connection configuration. Server-owned fields (context[].status,
   * context[].nextStackOperation, stackSet) are excluded.
   */
  awsConfig?: CloudflowAwsConfigRequest;
  collaborators?: CloudflowCollaborator[];
  /** When false, the connection is created in a disabled state. @default true */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cloudflowV1ConnectionsRequestProperties: s.Shape<CloudflowV1ConnectionsRequest> = {
  name: s.string(),
  description: s.optional(s.string()),
  gcpConfig: s.optional(s.lazy(() => cloudflowGcpConfigRequestSchema)),
  awsConfig: s.optional(s.lazy(() => cloudflowAwsConfigRequestSchema)),
  collaborators: s.optional(s.array(s.lazy(() => cloudflowCollaboratorInternalSchema))),
  enabled: s.defaulted(s.boolean(), true),
};

export const cloudflowV1ConnectionsRequestInternalSchema: Schema<CloudflowV1ConnectionsRequest> =
  s.object<CloudflowV1ConnectionsRequest>(cloudflowV1ConnectionsRequestProperties, {
    additionalProperties: s.json(),
  });

export const cloudflowV1ConnectionsRequestSchema: Schema<CloudflowV1ConnectionsRequest> = s.lazySchema(() =>
  s.object<CloudflowV1ConnectionsRequest>(
    {
      ...cloudflowV1ConnectionsRequestProperties,
      collaborators: s.optional(s.array(s.lazy(() => cloudflowCollaboratorSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
