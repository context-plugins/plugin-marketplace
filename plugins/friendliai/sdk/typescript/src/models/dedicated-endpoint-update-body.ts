import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { advancedSchema, type Advanced } from "./unions/advanced.js";
import { autoScalePolicySchema, type AutoScalePolicy } from "./unions/auto-scale-policy.js";
import { hfModelRepoRevisionSchema, type HfModelRepoRevision } from "./unions/hf-model-repo-revision.js";
import { hfModelRepoSchema, type HfModelRepo } from "./unions/hf-model-repo.js";
import { instanceOptionIdSchema, type InstanceOptionId } from "./unions/instance-option-id.js";
import { name6Schema, type Name6 } from "./unions/name6.js";
import { newVersionCommentSchema, type NewVersionComment } from "./unions/new-version-comment.js";
import { simpleScaleSchema, type SimpleScale } from "./unions/simple-scale.js";
import { uploadedModelIdSchema, type UploadedModelId } from "./unions/uploaded-model-id.js";

/** Dedicated endpoint update request. */
export type DedicatedEndpointUpdateBody = {
  /** The name of the endpoint. */
  name?: Name6;
  /** The advanced configuration of the endpoint. */
  advanced?: Advanced;
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
  /** Comment for the new version. */
  newVersionComment?: NewVersionComment;
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
  instanceOptionId?: InstanceOptionId;
};

export const dedicatedEndpointUpdateBodySchema: Schema<DedicatedEndpointUpdateBody> =
  s.object<DedicatedEndpointUpdateBody>({
    name: s.optional(s.lazy(() => name6Schema)),
    advanced: s.optional(s.lazy(() => advancedSchema)),
    simplescale: s.optional(s.lazy(() => simpleScaleSchema)),
    autoscalingPolicy: s.optional(s.lazy(() => autoScalePolicySchema)),
    hfModelRepo: s.optional(s.lazy(() => hfModelRepoSchema)),
    hfModelRepoRevision: s.optional(s.lazy(() => hfModelRepoRevisionSchema)),
    uploadedModelId: s.optional(s.lazy(() => uploadedModelIdSchema)),
    newVersionComment: s.optional(s.lazy(() => newVersionCommentSchema)),
    instanceOptionId: s.optional(s.lazy(() => instanceOptionIdSchema)),
  });
