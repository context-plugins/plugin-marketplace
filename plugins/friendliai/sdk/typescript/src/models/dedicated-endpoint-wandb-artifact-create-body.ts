import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { acceleratorSchema, type Accelerator } from "./unions/accelerator.js";
import { autoscalingPolicy1Schema, type AutoscalingPolicy1 } from "./unions/autoscaling-policy1.js";
import { idempotencyKeySchema, type IdempotencyKey } from "./unions/idempotency-key.js";
import { name7Schema, type Name7 } from "./unions/name7.js";
import { projectIdSchema, type ProjectId } from "./unions/project-id.js";

/** Endpoint create request. */
export type DedicatedEndpointWandbArtifactCreateBody = {
  /**
   * The specific model artifact version from Weights & Biases. The referred artifact will be used
   * to create a new endpoint in Friendli Dedicated Endpoints or rollout an existing one.
   */
  wandbArtifactVersionName: string;
  /** Specifies the instance type for the endpoint. */
  accelerator?: Accelerator;
  /**
   * Specifies the name of your endpoint. If not provided, a name will be automatically generated
   * for you.
   */
  name?: Name7;
  /**
   * Specifies where endpoint will be created in your Friendli Dedicated Endpoints. If not provided,
   * a new project will be created within your default team.
   */
  projectId?: ProjectId;
  /**
   * Used by Friendli Dedicated Endpoints to track which webhook automation triggered an endpoint
   * rollout. If the `idempotencyKey` is provided, the API will check if the endpoint already
   * exists, and rollout the existing endpoint if it does. In such cases, the `projectId` must be
   * provided. Any unique value can be used.
   */
  idempotencyKey?: IdempotencyKey;
  /** Defines autoscaling settings for the endpoint. */
  autoscalingPolicy?: AutoscalingPolicy1;
};

export const dedicatedEndpointWandbArtifactCreateBodySchema: Schema<DedicatedEndpointWandbArtifactCreateBody> =
  s.object<DedicatedEndpointWandbArtifactCreateBody>({
    wandbArtifactVersionName: s.string(),
    accelerator: s.optional(s.lazy(() => acceleratorSchema)),
    name: s.optional(s.lazy(() => name7Schema)),
    projectId: s.optional(s.lazy(() => projectIdSchema)),
    idempotencyKey: s.optional(s.lazy(() => idempotencyKeySchema)),
    autoscalingPolicy: s.optional(s.lazy(() => autoscalingPolicy1Schema)),
  });
