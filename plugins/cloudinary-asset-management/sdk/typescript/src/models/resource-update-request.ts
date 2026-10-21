import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessControlItemSchema, type AccessControlItem } from "./access-control-item.js";
import { moderationStatusSchema, type ModerationStatus } from "./moderation-status.js";
import {
  structuredMetadataParamSchema,
  type StructuredMetadataParam,
} from "./unions/structured-metadata-param.js";
import { tagsParamSchema, type TagsParam } from "./unions/tags-param.js";

/** The resource properties to update. */
export type ResourceUpdateRequest = {
  /** The display name of the resource. */
  displayName?: string;
  /**
   * Whether to ensure the display name is unique across all resources. If false, the operation will
   * fail if a resource with the same display name exists. Default: false
   *
   * @default false
   */
  uniqueDisplayName?: boolean;
  /** The folder where the asset should be placed. */
  assetFolder?: string;
  /** A comma-separated list of tag names, or an array of tag names. */
  tags?: TagsParam;
  /**
   * A pipe-separated list of key-value pairs of general textual context metadata to attach to the
   * asset (e.g., "alt=My image|caption=Nice photo"). A literal = or | inside a value must be
   * escaped with a prepending backslash, and a literal backslash must be doubled. A double quote
   * must not be escaped.
   */
  context?: string;
  /**
   * A pipe-separated list or a map of custom metadata fields (by external_id) and the values to
   * assign to each of them. The = " and | characters can be supported as values when escaped with a
   * prepended backslash (\). For a multi-select field, you can set a maximum of 3000 different
   * metadata values on an asset.
   */
  metadata?: StructuredMetadataParam;
  /**
   * Whether to clear invalid metadata fields. If false, invalid fields will be preserved. Default:
   * false
   *
   * @default false
   */
  clearInvalid?: boolean;
  /** Face coordinates as comma-separated values, with multiple faces separated by pipes. */
  faceCoordinates?: string;
  /** Custom coordinates as comma-separated values, with multiple coordinates separated by pipes. */
  customCoordinates?: string;
  /**
   * A JSON-encoded object of named groups of coordinate pairs representing regions. Each region
   * name may contain only letters, numbers, or hyphens, and must have at least two coordinate
   * pairs.
   */
  regions?: string;
  /** Quality override value that will override any automatic quality transformations. */
  qualityOverride?: string;
  /** The moderation status of the resource. */
  moderationStatus?: ModerationStatus;
  /** Confidence threshold for auto-tagging. */
  autoTagging?: number;
  /** The type of detection to perform on the resource. */
  detection?: string;
  /**
   * The type of OCR to perform on the resource. Set to adv_ocr, optionally with options (e.g.,
   * adv_ocr:document).
   */
  ocr?: string;
  /** The conversion to apply for raw files (e.g., aspose, google_speech, extract_text). */
  rawConvert?: string;
  /**
   * The type of categorization to perform on the resource. Optionally append a language code suffix
   * (e.g., google_tagging:fr).
   */
  categorization?: string;
  /**
   * Whether to index the resource with visual search. If true, the resource will be indexed for
   * visual search capabilities. Default: false
   */
  visualSearch?: boolean;
  /**
   * The background removal provider to use for the resource. Optionally append a template suffix
   * (e.g., cloudinary_ai:fine_edges).
   */
  backgroundRemoval?: string;
  /**
   * Restricts access to the asset by specifying one or more access types. The asset is restricted
   * unless at least one listed access type is valid.
   */
  accessControl?: AccessControlItem[];
};

export const resourceUpdateRequestSchema: Schema<ResourceUpdateRequest> = s.object<ResourceUpdateRequest>({
  displayName: s.optional(s.string()),
  uniqueDisplayName: s.defaulted(s.boolean(), false),
  assetFolder: s.optional(s.string()),
  tags: s.optional(s.lazy(() => tagsParamSchema)),
  context: s.optional(s.string()),
  metadata: s.optional(s.lazy(() => structuredMetadataParamSchema)),
  clearInvalid: s.defaulted(s.boolean(), false),
  faceCoordinates: s.optional(s.string()),
  customCoordinates: s.optional(s.string()),
  regions: s.optional(s.string()),
  qualityOverride: s.optional(s.string()),
  moderationStatus: s.optional(s.lazy(() => moderationStatusSchema)),
  autoTagging: s.optional(s.float64()),
  detection: s.optional(s.string()),
  ocr: s.optional(s.string()),
  rawConvert: s.optional(s.string()),
  categorization: s.optional(s.string()),
  visualSearch: s.optional(s.boolean()),
  backgroundRemoval: s.optional(s.string()),
  accessControl: s.optional(s.array(s.lazy(() => accessControlItemSchema))),
  _keysMap: {
    displayName: "display_name",
    uniqueDisplayName: "unique_display_name",
    assetFolder: "asset_folder",
    clearInvalid: "clear_invalid",
    faceCoordinates: "face_coordinates",
    customCoordinates: "custom_coordinates",
    qualityOverride: "quality_override",
    moderationStatus: "moderation_status",
    autoTagging: "auto_tagging",
    rawConvert: "raw_convert",
    visualSearch: "visual_search",
    backgroundRemoval: "background_removal",
    accessControl: "access_control",
  },
});
