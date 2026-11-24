import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Runtime project attachment represents an attachment from the runtime project to the host project.
 * Api Hub looks for deployments in the attached runtime projects and creates corresponding
 * resources in Api Hub for the discovered deployments.
 */
export type GoogleCloudApihubV1RuntimeProjectAttachment = {
  /** Output only. Create time. */
  createTime?: string;
  /**
   * Identifier. The resource name of a runtime project attachment. Format:
   * "projects/{project}/locations/{location}/runtimeProjectAttachments/{runtime_project_attachment}".
   */
  name?: string;
  /**
   * Required. Immutable. Google cloud project name in the format: "projects/abc" or "projects/123".
   * As input, project name with either project id or number are accepted. As output, this field
   * will contain project number.
   */
  runtimeProject?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1RuntimeProjectAttachmentSchema: Schema<GoogleCloudApihubV1RuntimeProjectAttachment> =
  s.object<GoogleCloudApihubV1RuntimeProjectAttachment>(
    {
      createTime: s.optional(s.string()),
      name: s.optional(s.string()),
      runtimeProject: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
