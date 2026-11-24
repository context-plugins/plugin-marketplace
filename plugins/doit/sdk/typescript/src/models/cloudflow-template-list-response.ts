import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cloudflowTemplateSchema, type CloudflowTemplate } from "./cloudflow-template.js";

/** Cursor-paginated list of CloudFlow templates. */
export type CloudflowTemplateListResponse = {
  items: CloudflowTemplate[];
  /** Opaque cursor for the next page. `null` when there are no more results. */
  pageToken?: string | null;
  /** Total number of templates matching the current query. */
  rowCount?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudflowTemplateListResponseSchema: Schema<CloudflowTemplateListResponse> =
  s.object<CloudflowTemplateListResponse>(
    {
      items: s.array(s.lazy(() => cloudflowTemplateSchema)),
      pageToken: s.optionalNullable(s.string()),
      rowCount: s.optionalNullable(s.int()),
    },
    { additionalProperties: s.json() },
  );
