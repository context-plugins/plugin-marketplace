import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Runtime project attachment for a project if exists, empty otherwise. */
export type GoogleCloudApihubV1RuntimeProjectAttachment1 = {
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

export const googleCloudApihubV1RuntimeProjectAttachment1Schema: Schema<GoogleCloudApihubV1RuntimeProjectAttachment1> =
  s.object<GoogleCloudApihubV1RuntimeProjectAttachment1>(
    {
      createTime: s.optional(s.string()),
      name: s.optional(s.string()),
      runtimeProject: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
