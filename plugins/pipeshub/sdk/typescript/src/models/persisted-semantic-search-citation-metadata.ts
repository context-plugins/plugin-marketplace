import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  persistedSemanticSearchBoundingBoxSchema,
  type PersistedSemanticSearchBoundingBox,
} from "./persisted-semantic-search-bounding-box.js";

/**
 * Citation metadata as persisted in MongoDB. Required fields mirror the Mongoose schema's
 * `required: true` flags; the rest are optional and may come through as `null` because the AI
 * retrieval service emits explicit nulls for absent fields.
 */
export type PersistedSemanticSearchCitationMetadata = {
  orgId: string;
  mimeType: string;
  recordId: string;
  recordName: string;
  origin: string;
  recordVersion?: number | null;
  extension?: string | null;
  webUrl?: string | null;
  previewRenderable?: boolean | null;
  hideWeburl?: boolean | null;
  connector?: string | null;
  /**
   * The connector instance the record came from. `connector` names only the kind of source (for
   * example `SLACK`), which several instances can share. Absent on citations saved before this
   * field was stored.
   */
  connectorId?: string | null;
  /**
   * The name the connector instance had when the answer was written. Absent on citations saved
   * before this field was stored.
   */
  connectorInstanceName?: string | null;
  recordType?: string | null;
  blockNum?: (number | null)[] | null;
  pageNum?: (number | null)[] | null;
  sheetNum?: number | null;
  sheetName?: string | null;
  boundingBox?: PersistedSemanticSearchBoundingBox[] | null;
  /**
   * Block type for this citation. Common values: `text`, `image`, `table_row`, `table`,
   * `record_summary` (whole-record semantic summary chunk).
   */
  blockType?: string | null;
  blockText?: string | null;
  departments?: string[] | null;
  languages?: string[] | null;
  topics?: string[] | null;
  /** When the cited record was last updated at its source. */
  updatedAt?: Date | null;
};

export const persistedSemanticSearchCitationMetadataSchema: Schema<PersistedSemanticSearchCitationMetadata> =
  s.object<PersistedSemanticSearchCitationMetadata>({
    orgId: s.string(),
    mimeType: s.string(),
    recordId: s.string(),
    recordName: s.string(),
    origin: s.string(),
    recordVersion: s.optionalNullable(s.int()),
    extension: s.optionalNullable(s.string()),
    webUrl: s.optionalNullable(s.string()),
    previewRenderable: s.optionalNullable(s.boolean()),
    hideWeburl: s.optionalNullable(s.boolean()),
    connector: s.optionalNullable(s.string()),
    connectorId: s.optionalNullable(s.string()),
    connectorInstanceName: s.optionalNullable(s.string()),
    recordType: s.optionalNullable(s.string()),
    blockNum: s.optionalNullable(s.array(s.nullable(s.float64()))),
    pageNum: s.optionalNullable(s.array(s.nullable(s.float64()))),
    sheetNum: s.optionalNullable(s.float64()),
    sheetName: s.optionalNullable(s.string()),
    boundingBox: s.optionalNullable(s.array(s.lazy(() => persistedSemanticSearchBoundingBoxSchema))),
    blockType: s.optionalNullable(s.string()),
    blockText: s.optionalNullable(s.string()),
    departments: s.optionalNullable(s.array(s.string())),
    languages: s.optionalNullable(s.array(s.string())),
    topics: s.optionalNullable(s.array(s.string())),
    updatedAt: s.optionalNullable(s.dateTime()),
    _keysMap: {
      boundingBox: "bounding_box",
    },
  });
