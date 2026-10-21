import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  semanticSearchBoundingBoxSchema,
  type SemanticSearchBoundingBox,
} from "./semantic-search-bounding-box.js";
import { pointIdSchema, type PointId } from "./unions/point-id.js";
import { recordVersionSchema, type RecordVersion } from "./unions/record-version.js";

/**
 * Per-hit metadata after retrieval enrichment (record + vector context). Listed fields are the
 * documented contract; Qdrant or pipeline updates may add more keys over time—extend this schema
 * when new stable fields appear.
 */
export type SemanticSearchHitMetadata = {
  orgId?: string | null;
  recordId?: string | null;
  virtualRecordId?: string | null;
  recordName?: string | null;
  recordType?: string | null;
  recordVersion?: RecordVersion | null;
  origin?: string | null;
  connector?: string | null;
  connectorId?: string | null;
  /** The name the admin gave the connector instance; `connector` is only its type. */
  connectorInstanceName?: string | null;
  connectorName?: string | null;
  blockText?: string | null;
  /**
   * Block type for this hit. Common values: `text`, `image`, `table_row`, `table`, `record_summary`
   * (whole-record semantic summary chunk — no block index).
   */
  blockType?: string | null;
  boundingBox?: SemanticSearchBoundingBox[] | null;
  pageNum?: (number | null)[] | null;
  extension?: string | null;
  mimeType?: string | null;
  blockNum?: number[] | null;
  chunkIndex?: number | null;
  sheetName?: string | null;
  sheetNum?: number | null;
  webUrl?: string | null;
  previewRenderable?: boolean | null;
  hideWeburl?: boolean | null;
  updatedAt?: Date | null;
  categories?: string[] | null;
  departments?: string[] | null;
  topics?: string[] | null;
  languages?: string[] | null;
  subcategoryLevel1?: string | null;
  subcategoryLevel2?: string | null;
  subcategoryLevel3?: string | null;
  score?: number | null;
  id?: string | null;
  collectionName?: string | null;
  blockIndex?: number | null;
  blockId?: string | null;
  isBlock?: boolean | null;
  isBlockGroup?: boolean | null;
  /**
   * Set to `true` by the indexing pipeline when this vector chunk represents a whole-record
   * semantic summary rather than an individual block. When true, `blockIndex` is absent and
   * `block_type` on the parent hit is `record_summary`.
   */
  isRecordSummary?: boolean | null;
  /** Knowledge base id merged from graph record during retrieval (when present). */
  kbId?: string | null;
  /** Qdrant point identifier attached during vector lookup (shape varies by deployment). */
  pointId?: PointId | null;
};

export const semanticSearchHitMetadataSchema: Schema<SemanticSearchHitMetadata> =
  s.object<SemanticSearchHitMetadata>({
    orgId: s.optionalNullable(s.string()),
    recordId: s.optionalNullable(s.string()),
    virtualRecordId: s.optionalNullable(s.string()),
    recordName: s.optionalNullable(s.string()),
    recordType: s.optionalNullable(s.string()),
    recordVersion: s.optionalNullable(s.lazy(() => recordVersionSchema)),
    origin: s.optionalNullable(s.string()),
    connector: s.optionalNullable(s.string()),
    connectorId: s.optionalNullable(s.string()),
    connectorInstanceName: s.optionalNullable(s.string()),
    connectorName: s.optionalNullable(s.string()),
    blockText: s.optionalNullable(s.string()),
    blockType: s.optionalNullable(s.string()),
    boundingBox: s.optionalNullable(s.array(s.lazy(() => semanticSearchBoundingBoxSchema))),
    pageNum: s.optionalNullable(s.array(s.nullable(s.int()))),
    extension: s.optionalNullable(s.string()),
    mimeType: s.optionalNullable(s.string()),
    blockNum: s.optionalNullable(s.array(s.float64())),
    chunkIndex: s.optionalNullable(s.int()),
    sheetName: s.optionalNullable(s.string()),
    sheetNum: s.optionalNullable(s.int()),
    webUrl: s.optionalNullable(s.string()),
    previewRenderable: s.optionalNullable(s.boolean()),
    hideWeburl: s.optionalNullable(s.boolean()),
    updatedAt: s.optionalNullable(s.dateTime()),
    categories: s.optionalNullable(s.array(s.string())),
    departments: s.optionalNullable(s.array(s.string())),
    topics: s.optionalNullable(s.array(s.string())),
    languages: s.optionalNullable(s.array(s.string())),
    subcategoryLevel1: s.optionalNullable(s.string()),
    subcategoryLevel2: s.optionalNullable(s.string()),
    subcategoryLevel3: s.optionalNullable(s.string()),
    score: s.optionalNullable(s.float64()),
    id: s.optionalNullable(s.string()),
    collectionName: s.optionalNullable(s.string()),
    blockIndex: s.optionalNullable(s.int()),
    blockId: s.optionalNullable(s.string()),
    isBlock: s.optionalNullable(s.boolean()),
    isBlockGroup: s.optionalNullable(s.boolean()),
    isRecordSummary: s.optionalNullable(s.boolean()),
    kbId: s.optionalNullable(s.string()),
    pointId: s.optionalNullable(s.lazy(() => pointIdSchema)),
    _keysMap: {
      boundingBox: "bounding_box",
      id: "_id",
      collectionName: "_collection_name",
      pointId: "point_id",
    },
  });
