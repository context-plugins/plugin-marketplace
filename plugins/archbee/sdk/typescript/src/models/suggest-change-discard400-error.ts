import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusArchbeePublicFileManagerApiSchema,
  type StatusArchbeePublicFileManagerApi,
} from "./status-archbee-public-file-manager-api.js";

export type SuggestChangeDiscard400Error = {
  /** Response Status */
  status?: StatusArchbeePublicFileManagerApi;
  /** Array of messages */
  messages?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const suggestChangeDiscard400ErrorSchema: Schema<SuggestChangeDiscard400Error> =
  s.object<SuggestChangeDiscard400Error>(
    {
      status: s.optional(s.lazy(() => statusArchbeePublicFileManagerApiSchema)),
      messages: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
