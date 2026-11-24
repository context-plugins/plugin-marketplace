import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiKeyEventSchema, type ApiKeyEvent } from "./api-key-event.js";

export type ApiKeyEventList = {
  events: ApiKeyEvent[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiKeyEventListSchema: Schema<ApiKeyEventList> = s.object<ApiKeyEventList>(
  {
    events: s.array(s.lazy(() => apiKeyEventSchema)),
  },
  { additionalProperties: s.json() },
);
