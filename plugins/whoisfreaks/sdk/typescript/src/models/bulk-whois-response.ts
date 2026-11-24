import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bulkWhoisItemSchema, type BulkWhoisItem } from "./bulk-whois-item.js";

export type BulkWhoisResponse = {
  bulkWhoisResponse?: BulkWhoisItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkWhoisResponseSchema: Schema<BulkWhoisResponse> = s.object<BulkWhoisResponse>(
  {
    bulkWhoisResponse: s.optional(s.array(s.lazy(() => bulkWhoisItemSchema))),
    _keysMap: {
      bulkWhoisResponse: "bulk_whois_response",
    },
  },
  { additionalProperties: s.json() },
);
