import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteWebhookInput = {
  /** The name of the CodeBuild project. */
  projectName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteWebhookInputSchema: Schema<DeleteWebhookInput> = s.object<DeleteWebhookInput>(
  {
    projectName: s.string(),
  },
  { additionalProperties: s.json() },
);
