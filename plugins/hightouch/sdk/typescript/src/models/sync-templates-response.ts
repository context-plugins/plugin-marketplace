import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { syncTemplateSchema, type SyncTemplate } from "./sync-template.js";

export type SyncTemplatesResponse = {
  data: SyncTemplate[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const syncTemplatesResponseSchema: Schema<SyncTemplatesResponse> = s.object<SyncTemplatesResponse>(
  {
    data: s.array(s.lazy(() => syncTemplateSchema)),
  },
  { additionalProperties: s.json() },
);
