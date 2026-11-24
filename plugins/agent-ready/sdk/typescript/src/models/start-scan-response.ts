import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusAgentReadyScansApiSchema,
  type StatusAgentReadyScansApi,
} from "./status-agent-ready-scans-api.js";

/** Async-job acknowledgement returned with 202. */
export type StartScanResponse = {
  id: string;
  /** Lifecycle state of a scan. Poll until status is 'completed' or 'failed'. */
  status: StatusAgentReadyScansApi;
  url: string;
  pollUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const startScanResponseProperties: s.Shape<StartScanResponse> = {
  id: s.string(),
  status: statusAgentReadyScansApiSchema,
  url: s.string(),
  pollUrl: s.string(),
};

export const startScanResponseInternalSchema: Schema<StartScanResponse> = s.object<StartScanResponse>(
  startScanResponseProperties,
  { additionalProperties: s.json() },
);

export const startScanResponseSchema: Schema<StartScanResponse> = s.lazySchema(() =>
  s.object<StartScanResponse>(
    {
      ...startScanResponseProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
