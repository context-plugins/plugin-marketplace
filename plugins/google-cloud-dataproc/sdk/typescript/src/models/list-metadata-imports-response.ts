import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metadataImportSchema, type MetadataImport } from "./metadata-import.js";

/** Response message for DataprocMetastore.ListMetadataImports. */
export type ListMetadataImportsResponse = {
  /** Locations that could not be reached. */
  unreachable?: string[];
  /** The imports in the specified service. */
  metadataImports?: MetadataImport[];
  /**
   * A token that can be sent as page_token to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMetadataImportsResponseSchema: Schema<ListMetadataImportsResponse> =
  s.object<ListMetadataImportsResponse>(
    {
      unreachable: s.optional(s.array(s.string())),
      metadataImports: s.optional(s.array(s.lazy(() => metadataImportSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
