import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  viewLinkRequestSegmentIdentifierSchema,
  type ViewLinkRequestSegmentIdentifier,
} from "./view-link-request-segment-identifier.js";

export type ViewLinkRequestSegmentIdentifiers = {
  /** Identifiers of the segments to link/unlink (environmentId and segmentKey) */
  segmentIdentifiers: ViewLinkRequestSegmentIdentifier[];
  /**
   * Optional filter string to determine which resources should be linked. Resources only need to
   * match either the filter or explicitly-listed keys to be linked (union). Uses the same
   * queryfilter syntax as the segments list endpoint.
   *
   * Supported filters for segments: query, tags, keys, excludedKeys, unbounded, external, view,
   * type
   */
  filter?: string;
  /**
   * Required when using filter for segment resources. Specifies which environment to query for
   * segments matching the filter. Ignored when only using explicit segmentIdentifiers (since each
   * identifier contains its own environmentId).
   */
  environmentId?: string;
  /** Optional comment for the link/unlink operation */
  comment?: string;
};

export const viewLinkRequestSegmentIdentifiersSchema: Schema<ViewLinkRequestSegmentIdentifiers> =
  s.object<ViewLinkRequestSegmentIdentifiers>({
    segmentIdentifiers: s.array(s.lazy(() => viewLinkRequestSegmentIdentifierSchema)),
    filter: s.optional(s.string()),
    environmentId: s.optional(s.string()),
    comment: s.optional(s.string()),
  });
