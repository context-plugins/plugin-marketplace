import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { syncSchema, type Sync } from "./sync.js";

export type SyncsResponse = {
  hasMore: boolean;
  data: Sync[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const syncsResponseSchema: Schema<SyncsResponse> = s.object<SyncsResponse>(
  {
    hasMore: s.boolean(),
    data: s.array(s.lazy(() => syncSchema)),
  },
  { additionalProperties: s.json() },
);
