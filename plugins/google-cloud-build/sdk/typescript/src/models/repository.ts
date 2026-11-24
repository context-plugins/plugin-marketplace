import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A repository associated to a parent connection. */
export type Repository = {
  /** Required. Git Clone HTTPS URI. */
  remoteUri?: string;
  /** Output only. Server assigned timestamp for when the connection was created. */
  createTime?: string;
  /** Output only. Server assigned timestamp for when the connection was updated. */
  updateTime?: string;
  /**
   * Immutable. Resource name of the repository, in the format
   * `projects/*&#47;locations/*&#47;connections/*&#47;repositories/*`.
   */
  name?: string;
  /** Output only. External ID of the webhook created for the repository. */
  webhookId?: string;
  /** Optional. Allows clients to store small amounts of arbitrary data. */
  annotations?: Record<string, string>;
  /**
   * This checksum is computed by the server based on the value of other fields, and may be sent on
   * update and delete requests to ensure the client has an up-to-date value before proceeding.
   */
  etag?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const repositorySchema: Schema<Repository> = s.object<Repository>(
  {
    remoteUri: s.optional(s.string()),
    createTime: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    name: s.optional(s.string()),
    webhookId: s.optional(s.string()),
    annotations: s.optional(s.record(s.string(), s.string())),
    etag: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
