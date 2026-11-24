import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platformSchema, type Platform } from "./platform.js";
import {
  statusDoiTCloudIncidentsApiSchema,
  type StatusDoiTCloudIncidentsApi,
} from "./status-doi-tcloud-incidents-api.js";

/** Summary information for a cloud incident. */
export type CloudIncidentListItem = {
  /** The creation time of this cloud incident, in milliseconds since the epoch. */
  createTime?: number;
  /** The unique cloud incident identifier. */
  id?: string;
  /** The Cloud Platform. */
  platform?: Platform;
  /** The name of the product affected by the cloud incident */
  product?: string;
  /** The Status of the issue */
  status?: StatusDoiTCloudIncidentsApi;
  /** Cloud incident name as provided by the cloud platform vendor */
  title?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudIncidentListItemSchema: Schema<CloudIncidentListItem> = s.object<CloudIncidentListItem>(
  {
    createTime: s.optional(s.int()),
    id: s.optional(s.string()),
    platform: s.optional(s.lazy(() => platformSchema)),
    product: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusDoiTCloudIncidentsApiSchema)),
    title: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
