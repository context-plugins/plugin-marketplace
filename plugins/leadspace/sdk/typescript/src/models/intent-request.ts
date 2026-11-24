import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datumSchema, type Datum } from "./datum.js";

export type IntentRequest = {
  data: Datum[];
  externalBulkId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentRequestSchema: Schema<IntentRequest> = s.object<IntentRequest>(
  {
    data: s.array(s.lazy(() => datumSchema)),
    externalBulkId: s.optional(s.string()),
    _keysMap: {
      externalBulkId: "external_bulk_id",
    },
  },
  { additionalProperties: s.json() },
);
