import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublishJobResponse = {
  /** @default true */
  success?: boolean;
  message: string;
  publicUrl: string;
  jobId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publishJobResponseSchema: Schema<PublishJobResponse> = s.object<PublishJobResponse>(
  {
    success: s.defaulted(s.boolean(), true),
    message: s.string(),
    publicUrl: s.string(),
    jobId: s.string(),
    _keysMap: {
      publicUrl: "public_url",
      jobId: "job_id",
    },
  },
  { additionalProperties: s.json() },
);
