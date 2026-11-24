import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusBundleSocialAppApiSchema,
  type StatusBundleSocialAppApi,
} from "./status-bundle-social-app-api.js";

export type SnapchatBundleSocialAppApi = {
  status: StatusBundleSocialAppApi;
  note: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const snapchatBundleSocialAppApiSchema: Schema<SnapchatBundleSocialAppApi> =
  s.object<SnapchatBundleSocialAppApi>(
    {
      status: statusBundleSocialAppApiSchema,
      note: s.string(),
    },
    { additionalProperties: s.json() },
  );
