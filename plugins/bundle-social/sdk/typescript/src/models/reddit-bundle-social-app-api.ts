import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusBundleSocialAppApiSchema,
  type StatusBundleSocialAppApi,
} from "./status-bundle-social-app-api.js";

export type RedditBundleSocialAppApi = {
  status: StatusBundleSocialAppApi;
  note: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const redditBundleSocialAppApiSchema: Schema<RedditBundleSocialAppApi> =
  s.object<RedditBundleSocialAppApi>(
    {
      status: statusBundleSocialAppApiSchema,
      note: s.string(),
    },
    { additionalProperties: s.json() },
  );
