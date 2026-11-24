import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The website URL to scan. */
export type ApiX402ScanRequest = {
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiX402ScanRequestProperties: s.Shape<ApiX402ScanRequest> = {
  url: s.string(),
};

export const apiX402ScanRequestInternalSchema: Schema<ApiX402ScanRequest> = s.object<ApiX402ScanRequest>(
  apiX402ScanRequestProperties,
  { additionalProperties: s.json() },
);

export const apiX402ScanRequestSchema: Schema<ApiX402ScanRequest> = s.lazySchema(() =>
  s.object<ApiX402ScanRequest>(
    {
      ...apiX402ScanRequestProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
