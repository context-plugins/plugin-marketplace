import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { extensionViewSchema, type ExtensionView } from "./extension-view.js";

export type ExtensionListResponse = {
  items: ExtensionView[];
  /** Total number of items in the list */
  totalItems: number;
  /** Page number */
  pageNumber: number;
  /** Number of items per page */
  pageSize: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const extensionListResponseSchema: Schema<ExtensionListResponse> = s.object<ExtensionListResponse>(
  {
    items: s.array(s.lazy(() => extensionViewSchema)),
    totalItems: s.int(),
    pageNumber: s.int(),
    pageSize: s.int(),
  },
  { additionalProperties: s.json() },
);
