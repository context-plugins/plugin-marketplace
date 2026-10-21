import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bandwidthSchema, type Bandwidth } from "./bandwidth.js";
import { impressionsSchema, type Impressions } from "./impressions.js";
import { mediaLimitsSchema, type MediaLimits } from "./media-limits.js";
import { objectsSchema, type Objects } from "./objects.js";
import { secondsDeliveredSchema, type SecondsDelivered } from "./seconds-delivered.js";
import { storageSchema, type Storage } from "./storage.js";
import { transformationsSchema, type Transformations } from "./transformations.js";

export type UsageResponse = {
  /** The current plan name */
  plan?: string;
  /** When the usage data was last updated */
  lastUpdated?: string;
  /** The date for which usage was requested */
  dateRequested?: Date;
  transformations?: Transformations;
  objects?: Objects;
  bandwidth?: Bandwidth;
  storage?: Storage;
  impressions?: Impressions;
  secondsDelivered?: SecondsDelivered;
  /** Number of resources stored */
  resources?: number;
  /** Number of derived resources */
  derivedResources?: number;
  /** Number of requests made */
  requests?: number;
  /** Upload size and pixel limits */
  mediaLimits?: MediaLimits;
};

export const usageResponseSchema: Schema<UsageResponse> = s.object<UsageResponse>({
  plan: s.optional(s.string()),
  lastUpdated: s.optional(s.dateOnly()),
  dateRequested: s.optional(s.dateTime()),
  transformations: s.optional(s.lazy(() => transformationsSchema)),
  objects: s.optional(s.lazy(() => objectsSchema)),
  bandwidth: s.optional(s.lazy(() => bandwidthSchema)),
  storage: s.optional(s.lazy(() => storageSchema)),
  impressions: s.optional(s.lazy(() => impressionsSchema)),
  secondsDelivered: s.optional(s.lazy(() => secondsDeliveredSchema)),
  resources: s.optional(s.int()),
  derivedResources: s.optional(s.int()),
  requests: s.optional(s.int()),
  mediaLimits: s.optional(s.lazy(() => mediaLimitsSchema)),
  _keysMap: {
    lastUpdated: "last_updated",
    dateRequested: "date_requested",
    secondsDelivered: "seconds_delivered",
    derivedResources: "derived_resources",
    mediaLimits: "media_limits",
  },
});
