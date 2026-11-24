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

export type CloudflowV1ConnectionsRequest1 = {
  name?: string;
  description?: string;
  /** GCP connection configuration. Server-owned fields (status, deploymentCommand) are excluded. */
  gcpConfig?: CloudflowGcpConfigRequest;
  /**
   * AWS connection configuration. Server-owned fields (context[].status,
   * context[].nextStackOperation, stackSet) are excluded.
   */
  awsConfig?: CloudflowAwsConfigRequest;
  collaborators?: CloudflowCollaborator[];
  /** Set to false to disable the connection, true to re-enable it. */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cloudflowV1ConnectionsRequest1Properties: s.Shape<CloudflowV1ConnectionsRequest1> = {
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  gcpConfig: s.optional(s.lazy(() => cloudflowGcpConfigRequestSchema)),
  awsConfig: s.optional(s.lazy(() => cloudflowAwsConfigRequestSchema)),
  collaborators: s.optional(s.array(s.lazy(() => cloudflowCollaboratorInternalSchema))),
  enabled: s.optional(s.boolean()),
};

export const cloudflowV1ConnectionsRequest1InternalSchema: Schema<CloudflowV1ConnectionsRequest1> =
  s.object<CloudflowV1ConnectionsRequest1>(cloudflowV1ConnectionsRequest1Properties, {
    additionalProperties: s.json(),
  });

export const cloudflowV1ConnectionsRequest1Schema: Schema<CloudflowV1ConnectionsRequest1> = s.lazySchema(() =>
  s.object<CloudflowV1ConnectionsRequest1>(
    {
      ...cloudflowV1ConnectionsRequest1Properties,
      collaborators: s.optional(s.array(s.lazy(() => cloudflowCollaboratorSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
