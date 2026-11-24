import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Annotations for a Tool. */
export type GoogleCloudApihubV1ToolAnnotations = {
  /** Optional. Hint indicating if the tool interacts with the open world (e.g., internet). */
  openWorldHint?: boolean;
  /** Optional. A human-readable title for the tool (if different from Tool.title). */
  title?: string;
  /** Optional. Hint indicating if the tool is idempotent. */
  idempotentHint?: boolean;
  /** Optional. Hint indicating if the tool is read-only. */
  readOnlyHint?: boolean;
  /** Optional. Hint indicating if the tool may have destructive side effects. */
  destructiveHint?: boolean;
  /** Optional. Additional hints which may help tools and not covered in defaults. */
  additionalHints?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ToolAnnotationsSchema: Schema<GoogleCloudApihubV1ToolAnnotations> =
  s.object<GoogleCloudApihubV1ToolAnnotations>(
    {
      openWorldHint: s.optional(s.boolean()),
      title: s.optional(s.string()),
      idempotentHint: s.optional(s.boolean()),
      readOnlyHint: s.optional(s.boolean()),
      destructiveHint: s.optional(s.boolean()),
      additionalHints: s.optional(s.record(s.string(), s.string())),
    },
    { additionalProperties: s.json() },
  );
