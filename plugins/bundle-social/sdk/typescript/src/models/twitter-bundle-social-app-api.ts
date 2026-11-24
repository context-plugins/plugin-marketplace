import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusBundleSocialAppApiSchema,
  type StatusBundleSocialAppApi,
} from "./status-bundle-social-app-api.js";

export type TwitterBundleSocialAppApi = {
  status: StatusBundleSocialAppApi;
  note: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const twitterBundleSocialAppApiSchema: Schema<TwitterBundleSocialAppApi> =
  s.object<TwitterBundleSocialAppApi>(
    {
      status: statusBundleSocialAppApiSchema,
      note: s.string(),
    },
    { additionalProperties: s.json() },
  );
