import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Mode, modeSchema } from "./mode.js";
import { TargetFormat, targetFormatSchema } from "./target-format.js";
import { assetFoldersSchema, type AssetFolders } from "./unions/asset-folders.js";
import { deliveryTypeAll1Schema, type DeliveryTypeAll1 } from "./unions/delivery-type-all1.js";

/** The archive generation parameters. */
export type GenerateArchiveRequest = {
  /**
   * The API key to use for the request. This is automatically computed by the Cloudinary's SDKs.
   */
  apiKey?: string;
  /**
   * The timestamp to use for the request in unix time. This is automatically computed by the
   * Cloudinary's SDKs.
   */
  timestamp?: number;
  /**
   * (Required for signed REST API calls) Used to authenticate the request and based on the
   * parameters you use in the request. When using the Cloudinary SDKs for signed requests, the
   * signature is automatically generated and added to the request. If you manually generate your
   * own signed POST request, you need to manually generate the signature parameter and add it to
   * the request together with the api_key and timestamp parameters.
   */
  signature?: string;
  /** The list of public IDs to include in the archive. */
  publicIds?: string[];
  /**
   * Tags to filter which assets to include in the archive. Assets matching any of the specified
   * tags are included.
   */
  tags?: string[];
  /** Select all assets where the public ID starts with this prefix. */
  prefixes?: string[];
  /** All supported delivery types. */
  type?: DeliveryTypeAll1;
  /**
   * The transformations to apply to the assets before including them in the archive (separated by
   * "|").
   */
  transformations?: string;
  /**
   * The method for generating and delivering the archive. Options: download - Generates and
   * delivers the archive file without storing it create - Creates and stores the archive as a raw
   * asset, returning URLs in the response create_and_download - Creates, stores, and delivers the
   * archive file
   *
   * @default Mode.Create
   */
  mode?: Mode;
  /** The format of the generated archive. @default TargetFormat.Zip */
  targetFormat?: TargetFormat;
  /**
   * The public ID to assign to the generated archive, or the filename of the downloaded archive
   * file.
   */
  targetPublicId?: string;
  /** The folder in your product environment where the generated archive should be stored. */
  targetAssetFolder?: string;
  /** Whether to flatten all files to be in the root of the archive file. @default false */
  flattenFolders?: boolean;
  /** Whether to flatten the folder structure of the derived assets. @default false */
  flattenTransformations?: boolean;
  /**
   * Whether to skip adding the transformation details to the file names in the archive.
   *
   * @default false
   */
  skipTransformationName?: boolean;
  /**
   * Whether to allow missing assets in the archive. If false, the operation will fail if any asset
   * is not found.
   *
   * @default false
   */
  allowMissing?: boolean;
  /**
   * ("download" mode only) Unix timestamp indicating when the generated archive URL should expire.
   */
  expiresAt?: number;
  /**
   * Whether to use the original filenames of the assets in the archive instead of public IDs (when
   * available).
   *
   * @default false
   */
  useOriginalFilename?: boolean;
  /**
   * ("create" mode only), specifies whether to generate the archive asynchronously.
   *
   * @default false
   */
  async?: boolean;
  /** ("create" mode only), specifies the URL to notify when the archive generation is complete. */
  notificationUrl?: string;
  /** A list of tag names to assign to the generated archive. */
  targetTags?: string[];
  /** Whether to keep the derived assets used for generating the archive. @default false */
  keepDerived?: boolean;
  /**
   * A list of fully qualified public IDs (resource_type/type/public_id) to include in the archive.
   */
  fullyQualifiedPublicIds?: string[];
  /** A search expression to select assets to include in the archive. */
  searchExpression?: string;
  /**
   * The filename for the downloaded archive file. Extension must match target_format (zip or tgz).
   */
  targetFilename?: string;
  /**
   * A list of asset folder paths to include in the archive, or a single folder path string. Only
   * available when asset folders are enabled for your account.
   */
  assetFolders?: AssetFolders;
};

export const generateArchiveRequestSchema: Schema<GenerateArchiveRequest> = s.object<GenerateArchiveRequest>({
  apiKey: s.optional(s.string()),
  timestamp: s.optional(s.int()),
  signature: s.optional(s.string()),
  publicIds: s.optional(s.array(s.string())),
  tags: s.optional(s.array(s.string())),
  prefixes: s.optional(s.array(s.string())),
  type: s.optional(s.lazy(() => deliveryTypeAll1Schema)),
  transformations: s.optional(s.string()),
  mode: s.defaulted(modeSchema, Mode.Create),
  targetFormat: s.defaulted(targetFormatSchema, TargetFormat.Zip),
  targetPublicId: s.optional(s.string()),
  targetAssetFolder: s.optional(s.string()),
  flattenFolders: s.defaulted(s.boolean(), false),
  flattenTransformations: s.defaulted(s.boolean(), false),
  skipTransformationName: s.defaulted(s.boolean(), false),
  allowMissing: s.defaulted(s.boolean(), false),
  expiresAt: s.optional(s.int()),
  useOriginalFilename: s.defaulted(s.boolean(), false),
  async: s.defaulted(s.boolean(), false),
  notificationUrl: s.optional(s.string()),
  targetTags: s.optional(s.array(s.string())),
  keepDerived: s.defaulted(s.boolean(), false),
  fullyQualifiedPublicIds: s.optional(s.array(s.string())),
  searchExpression: s.optional(s.string()),
  targetFilename: s.optional(s.string()),
  assetFolders: s.optional(s.lazy(() => assetFoldersSchema)),
  _keysMap: {
    apiKey: "api_key",
    publicIds: "public_ids",
    targetFormat: "target_format",
    targetPublicId: "target_public_id",
    targetAssetFolder: "target_asset_folder",
    flattenFolders: "flatten_folders",
    flattenTransformations: "flatten_transformations",
    skipTransformationName: "skip_transformation_name",
    allowMissing: "allow_missing",
    expiresAt: "expires_at",
    useOriginalFilename: "use_original_filename",
    notificationUrl: "notification_url",
    targetTags: "target_tags",
    keepDerived: "keep_derived",
    fullyQualifiedPublicIds: "fully_qualified_public_ids",
    searchExpression: "search_expression",
    targetFilename: "target_filename",
    assetFolders: "asset_folders",
  },
});
