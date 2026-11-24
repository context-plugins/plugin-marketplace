import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Body for POST /api/v1/scans. */
export type StartScanRequest = {
  url: string;
  pageLimit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const startScanRequestProperties: s.Shape<StartScanRequest> = {
  url: s.string(),
  pageLimit: s.optional(s.int()),
};

export const startScanRequestInternalSchema: Schema<StartScanRequest> = s.object<StartScanRequest>(
  startScanRequestProperties,
  { additionalProperties: s.json() },
);

export const startScanRequestSchema: Schema<StartScanRequest> = s.lazySchema(() =>
  s.object<StartScanRequest>(
    {
      ...startScanRequestProperties,
      url: s.string().check(s.maxLength(2000), s.url()),
      pageLimit: s.optional(s.int().check(s.gte(1), s.lte(2000))),
    },
    { additionalProperties: s.json() },
  ),
);
