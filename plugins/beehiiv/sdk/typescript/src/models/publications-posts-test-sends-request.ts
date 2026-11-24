import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicationsPostsTestSendsRequest = {
  /**
   * One or more email addresses to send the test to. Returns 422 if the daily test send limit has
   * been reached.
   */
  recipientEmails: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsPostsTestSendsRequestSchema: Schema<PublicationsPostsTestSendsRequest> =
  s.object<PublicationsPostsTestSendsRequest>(
    {
      recipientEmails: s.array(s.string()),
      _keysMap: {
        recipientEmails: "recipient_emails",
      },
    },
    { additionalProperties: s.json() },
  );
