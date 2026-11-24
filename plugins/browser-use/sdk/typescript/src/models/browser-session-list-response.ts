import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  browserSessionItemViewInternalSchema,
  browserSessionItemViewSchema,
  type BrowserSessionItemView,
} from "./browser-session-item-view.js";

/** Response model for paginated browser session list requests. */
export type BrowserSessionListResponse = {
  /** List of browser session views for the current page */
  items: BrowserSessionItemView[];
  /** Total number of items in the list */
  totalItems: number;
  /** Page number */
  pageNumber: number;
  /** Number of items per page */
  pageSize: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const browserSessionListResponseProperties: s.Shape<BrowserSessionListResponse> = {
  items: s.array(s.lazy(() => browserSessionItemViewInternalSchema)),
  totalItems: s.int(),
  pageNumber: s.int(),
  pageSize: s.int(),
};

export const browserSessionListResponseInternalSchema: Schema<BrowserSessionListResponse> =
  s.object<BrowserSessionListResponse>(browserSessionListResponseProperties, {
    additionalProperties: s.json(),
  });

export const browserSessionListResponseSchema: Schema<BrowserSessionListResponse> = s.lazySchema(() =>
  s.object<BrowserSessionListResponse>(
    {
      ...browserSessionListResponseProperties,
      items: s.array(s.lazy(() => browserSessionItemViewSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
