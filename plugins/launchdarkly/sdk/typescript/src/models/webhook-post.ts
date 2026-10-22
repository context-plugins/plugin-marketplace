import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statementPostSchema, type StatementPost } from "./statement-post.js";

export type WebhookPost = {
  /** A human-readable name for your webhook */
  name?: string;
  /** The URL of the remote webhook */
  url: string;
  /**
   * If sign is true, and the secret attribute is omitted, LaunchDarkly automatically generates a
   * secret for you.
   */
  secret?: string;
  statements?: StatementPost[];
  /**
   * If sign is false, the webhook does not include a signature header, and the secret can be
   * omitted.
   */
  sign: boolean;
  /** Whether or not this webhook is enabled. */
  on: boolean;
  /** List of tags for this webhook */
  tags?: string[];
};

export const webhookPostSchema: Schema<WebhookPost> = s.object<WebhookPost>({
  name: s.optional(s.string()),
  url: s.string(),
  secret: s.optional(s.string()),
  statements: s.optional(s.array(s.lazy(() => statementPostSchema))),
  sign: s.boolean(),
  on: s.boolean(),
  tags: s.optional(s.array(s.string())),
});
