import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusArchbeePublicFileManagerApiSchema,
  type StatusArchbeePublicFileManagerApi,
} from "./status-archbee-public-file-manager-api.js";

export type TeamExport400Error1 = {
  /** Response Status */
  status?: StatusArchbeePublicFileManagerApi;
  /** Array of messages */
  messages?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamExport400Error1Schema: Schema<TeamExport400Error1> = s.object<TeamExport400Error1>(
  {
    status: s.optional(s.lazy(() => statusArchbeePublicFileManagerApiSchema)),
    messages: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
