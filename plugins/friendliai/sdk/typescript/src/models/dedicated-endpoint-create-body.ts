import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { endpointAdvancedConfig2Schema, type EndpointAdvancedConfig2 } from "./endpoint-advanced-config2.js";
import { autoScalePolicySchema, type AutoScalePolicy } from "./unions/auto-scale-policy.js";
import { hfModelRepoRevisionSchema, type HfModelRepoRevision } from "./unions/hf-model-repo-revision.js";
import { hfModelRepoSchema, type HfModelRepo } from "./unions/hf-model-repo.js";
import { initialVersionCommentSchema, type InitialVersionComment } from "./unions/initial-version-comment.js";
import { simpleScaleSchema, type SimpleScale } from "./unions/simple-scale.js";
import { uploadedModelIdSchema, type UploadedModelId } from "./unions/uploaded-model-id.js";

/** Dedicated endpoint create request. */
export type DedicatedEndpointCreateBody = {
  /** The ID of the project that owns the endpoint. */
  projectId: string;
  /** The name of the endpoint. */
  name: string;
  /**
   * The ID of the instance option.
   *
   * Available options:
   * - 1x NVIDIA A100 80GB: `ShbPuOs4tfGb`
   * - 2x NVIDIA A100 80GB: `mrAHuYt7T40o`
   * - 4x NVIDIA A100 80GB: `JkNob0NMdoF3`
   * - 8x NVIDIA A100 80GB: `sYH4kHmAcA5P`
   * - 1x NVIDIA H100: `TwD5AqnBSVN0`
   * - 2x NVIDIA H100: `zfTutSiLn0Hq`
   * - 4x NVIDIA H100: `lfkRz5G48REc`
   * - 8x NVIDIA H100: `GUA4qYFmsYz8`
   * - 1x NVIDIA H200: `LnK1wTaKc7WO`
   * - 2x NVIDIA H200: `Tu6GjBnfHPe4`
   * - 4x NVIDIA H200: `OhTzYtZuomzI`
   * - 8x NVIDIA H200: `ahBzWtOuomsI`
   * - 1x NVIDIA B200: `8GiQTLKfJNOr`
   * - 2x NVIDIA B200: `brTZGIuYgVrs`
   * - 4x NVIDIA B200: `AFoZMFXZnAdD`
   * - 8x NVIDIA B200: `drbc6G9FxJWZ`
   * - 1x NVIDIA B300: `b300x1`
   * - 2x NVIDIA B300: `b300x2`
   * - 4x NVIDIA B300: `b300x4`
   * - 8x NVIDIA B300: `b300x8`
   */
  instanceOptionId: string;
  /** The advanced configuration of the endpoint. */
  advanced: EndpointAdvancedConfig2;
  /** The simple scaling configuration of the endpoint. */
  simplescale?: SimpleScale;
  /** The auto scaling configuration of the endpoint. */
  autoscalingPolicy?: AutoScalePolicy;
  /** Hugging Face model ID (e.g. meta-llama/Llama-3.1-8B-Instruct). */
  hfModelRepo?: HfModelRepo;
  /**
   * HF commit hash or revision of the model (e.g. main). Can only be used when `hfModelRepo` is
   * provided.
   */
  hfModelRepoRevision?: HfModelRepoRevision;
  /** ID of an uploaded model. Cannot be used when `hfModelRepo` is provided. */
  uploadedModelId?: UploadedModelId;
  /** The comment for the initial version. */
  initialVersionComment?: InitialVersionComment;
};

export const dedicatedEndpointCreateBodySchema: Schema<DedicatedEndpointCreateBody> =
  s.object<DedicatedEndpointCreateBody>({
    projectId: s.string(),
    name: s.string(),
    instanceOptionId: s.string(),
    advanced: endpointAdvancedConfig2Schema,
    simplescale: s.optional(s.lazy(() => simpleScaleSchema)),
    autoscalingPolicy: s.optional(s.lazy(() => autoScalePolicySchema)),
    hfModelRepo: s.optional(s.lazy(() => hfModelRepoSchema)),
    hfModelRepoRevision: s.optional(s.lazy(() => hfModelRepoRevisionSchema)),
    uploadedModelId: s.optional(s.lazy(() => uploadedModelIdSchema)),
    initialVersionComment: s.optional(s.lazy(() => initialVersionCommentSchema)),
  });
