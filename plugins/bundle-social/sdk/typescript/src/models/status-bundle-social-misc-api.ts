import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StatusBundleSocialMiscApi = {
  privacyStatus?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statusBundleSocialMiscApiSchema: Schema<StatusBundleSocialMiscApi> =
  s.object<StatusBundleSocialMiscApi>(
    {
      privacyStatus: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
