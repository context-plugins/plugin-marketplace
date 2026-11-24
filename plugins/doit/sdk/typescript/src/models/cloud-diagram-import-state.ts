import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusDoiTCloudDiagramsApiSchema,
  type StatusDoiTCloudDiagramsApi,
} from "./status-doi-tcloud-diagrams-api.js";
import { type6Schema, type Type6 } from "./type6.js";

/** Current import/sync state for a cloud-connected diagram. */
export type CloudDiagramImportState = {
  /** Import status. */
  status?: StatusDoiTCloudDiagramsApi;
  /** Connected cloud account type. */
  type?: Type6;
  /** Connected account ID. */
  account?: string;
  /** Cloud account ID. */
  cloudId?: string;
  /** Error message if the import failed. */
  errorMessage?: string;
  /** Timestamp of the last successful sync. */
  syncedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramImportStateSchema: Schema<CloudDiagramImportState> =
  s.object<CloudDiagramImportState>(
    {
      status: s.optional(s.lazy(() => statusDoiTCloudDiagramsApiSchema)),
      type: s.optional(s.lazy(() => type6Schema)),
      account: s.optional(s.string()),
      cloudId: s.optional(s.string()),
      errorMessage: s.optional(s.string()),
      syncedAt: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
