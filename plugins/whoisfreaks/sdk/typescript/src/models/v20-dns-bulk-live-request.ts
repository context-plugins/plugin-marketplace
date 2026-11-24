import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V20DnsBulkLiveRequest = {
  domainNames?: string[];
  ipAddresses?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v20DnsBulkLiveRequestSchema: Schema<V20DnsBulkLiveRequest> = s.object<V20DnsBulkLiveRequest>(
  {
    domainNames: s.optional(s.array(s.string())),
    ipAddresses: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
