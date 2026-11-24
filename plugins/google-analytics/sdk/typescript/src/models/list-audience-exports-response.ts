import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audienceExportSchema, type AudienceExport } from "./audience-export.js";

/** A list of all audience exports for a property. */
export type ListAudienceExportsResponse = {
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Each audience export for a property. */
  audienceExports?: AudienceExport[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listAudienceExportsResponseSchema: Schema<ListAudienceExportsResponse> =
  s.object<ListAudienceExportsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      audienceExports: s.optional(s.array(s.lazy(() => audienceExportSchema))),
    },
    { additionalProperties: s.json() },
  );
