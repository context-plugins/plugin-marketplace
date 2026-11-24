import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataTextFormatSchema, type DataTextFormat } from "./data-text-format.js";
import {
  typeArchbeePublicDocumentsApiSchema,
  type TypeArchbeePublicDocumentsApi,
} from "./type-archbee-public-documents-api.js";

export type DocsSearchRequest = {
  /** Filter text, question or document title */
  query: string;
  /** OPTIONAL. Search only by title */
  searchOnlyTitle?: boolean;
  /** OPTIONAL. Wether to keep a SearchSession in our database and return its id. */
  persistSearch?: boolean;
  /** OPTIONAL. id for the SearchSession object to update. More useful for AI chat. */
  searchSessionId?: string;
  /** OPTIONAL. Return only one document with this id, if there is one */
  docId?: string;
  /** OPTIONAL. Return documents with dataText in this format */
  dataTextFormat?: DataTextFormat;
  /**
   * OPTIONAL. Return only child documents of the doc with this id, if there are any. Can be "null"
   * for retrieving the root docs.
   */
  parentDocId?: string;
  /** OPTIONAL. which type of search to use; default is word-based */
  type?: TypeArchbeePublicDocumentsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsSearchRequestSchema: Schema<DocsSearchRequest> = s.object<DocsSearchRequest>(
  {
    query: s.string(),
    searchOnlyTitle: s.optional(s.boolean()),
    persistSearch: s.optional(s.boolean()),
    searchSessionId: s.optional(s.string()),
    docId: s.optional(s.string()),
    dataTextFormat: s.optional(s.lazy(() => dataTextFormatSchema)),
    parentDocId: s.optional(s.string()),
    type: s.optional(s.lazy(() => typeArchbeePublicDocumentsApiSchema)),
  },
  { additionalProperties: s.json() },
);
