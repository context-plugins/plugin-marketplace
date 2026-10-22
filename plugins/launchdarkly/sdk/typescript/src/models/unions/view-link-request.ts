import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { viewLinkRequestFilterSchema, type ViewLinkRequestFilter } from "../view-link-request-filter.js";
import { viewLinkRequestKeysSchema, type ViewLinkRequestKeys } from "../view-link-request-keys.js";
import {
  viewLinkRequestSegmentIdentifiersSchema,
  type ViewLinkRequestSegmentIdentifiers,
} from "../view-link-request-segment-identifiers.js";

export type ViewLinkRequest = ViewLinkRequestKeys | ViewLinkRequestSegmentIdentifiers | ViewLinkRequestFilter;

export const viewLinkRequestSchema: Schema<ViewLinkRequest> = s.of<ViewLinkRequest>(
  s.union([
    s.lazy(() => viewLinkRequestKeysSchema),
    s.lazy(() => viewLinkRequestSegmentIdentifiersSchema),
    s.lazy(() => viewLinkRequestFilterSchema),
  ]),
);
