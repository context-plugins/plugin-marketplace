import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { allocationTypeSchema, type AllocationType } from "./allocation-type.js";

/** Summary information for an allocation. */
export type AllocationListItem = {
  /** Allocation ID. */
  id?: string;
  /** Allocation name. */
  name?: string;
  /** Allocation owner. */
  owner?: string;
  /** Allocation description. */
  description?: string;
  /** Type of allocation (preset or custom). */
  type?: string;
  /** Composition type of allocation (single or group). */
  allocationType?: AllocationType;
  /** The time when the allocation was created (in UNIX timestamp). */
  createTime?: number;
  /** Last time the allocation was modified (in UNIX timestamp). */
  updateTime?: number;
  /** URL to view the allocation in the DoiT console. */
  urlUi?: string;
  /**
   * Identifier of the folder that contains the allocation. Set to "root" if the allocation is at
   * the top level (not in a folder).
   *
   * @default "root"
   */
  folderId?: string;
  /**
   * Whether anomaly detection is enabled for this allocation. Only applicable to single
   * allocations.
   */
  anomalyDetection?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const allocationListItemSchema: Schema<AllocationListItem> = s.object<AllocationListItem>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    owner: s.optional(s.string()),
    description: s.optional(s.string()),
    type: s.optional(s.string()),
    allocationType: s.optional(s.lazy(() => allocationTypeSchema)),
    createTime: s.optional(s.int()),
    updateTime: s.optional(s.int()),
    urlUi: s.optional(s.string()),
    folderId: s.defaulted(s.string(), "root"),
    anomalyDetection: s.optional(s.boolean()),
    _keysMap: {
      urlUi: "urlUI",
    },
  },
  { additionalProperties: s.json() },
);
