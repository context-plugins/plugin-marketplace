import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessControlItemSchema, type AccessControlItem } from "./access-control-item.js";
import { accessModeSchema, type AccessMode } from "./access-mode.js";
import { autoTranscription1Schema, type AutoTranscription1 } from "./unions/auto-transcription1.js";
import { regionsSchema, type Regions } from "./unions/regions.js";
import { responsiveBreakpointsSchema, type ResponsiveBreakpoints } from "./unions/responsive-breakpoints.js";
import {
  structuredMetadataParamSchema,
  type StructuredMetadataParam,
} from "./unions/structured-metadata-param.js";
import { tagsParamSchema, type TagsParam } from "./unions/tags-param.js";

/**
 * Common parameters for configuring an asset, including transformation, tagging, metadata, and
 * moderation options.
 */
export type UploadCommonParameters = {
  /** Whether to return accessibility analysis values for the image. */
  accessibilityAnalysis?: boolean;
  /** The asset folder to assign to the asset. */
  assetFolder?: string;
  /**
   * When set to true, returns the uploaded asset's public_id immediately in the response, before
   * the upload is completed (asynchronously). Default: false.
   */
  async?: boolean;
  /**
   * Whether to trigger automatic generation of video chapters. Chapters will be generated and saved
   * as a .vtt file with -chapters appended to the public ID of the video. You can enable chapters
   * as part of the Cloudinary Video Player. Relevant for videos only.
   */
  autoChaptering?: boolean;
  /**
   * Automatically assigns tags to an asset according to detected objects or categories with a
   * confidence score higher than the specified value. Use together with the detection parameter
   * for:
   * - Cloudinary AI Content Analysis
   * - Amazon Rekognition Celebrity Detection Use together with the categorization parameter for:
   * - Google Automatic Video Tagging
   * - Google Auto Tagging
   * - Imagga Auto Tagging
   * - Amazon Rekognition Auto Tagging
   */
  autoTagging?: number;
  autoTranscription?: AutoTranscription1;
  /**
   * Restricts access to the asset by specifying one or more access types. The asset is restricted
   * unless at least one listed access type is valid.
   */
  accessControl?: AccessControlItem[];
  /**
   * Deprecated. Use access_control instead. Allows the asset to behave as if it's of the
   * authenticated delivery type while still using the default 'upload' type in delivery URLs. The
   * asset can later be made public by changing its access_mode via the Admin API, without having to
   * update any delivery URLs.
   *
   * @deprecated
   */
  accessMode?: AccessMode;
  /**
   * Whether to backup the uploaded asset. When set to true, backs up uploaded assets to a secondary
   * storage bucket.
   */
  backup?: boolean;
  /**
   * Automatically remove the background of an image using an add-on.
   * - Set to cloudinary_ai to use the deep-learning based Cloudinary AI Background Removal add-on.
   *   Optionally append a template suffix (e.g., cloudinary_ai:fine_edges).
   * - Note: this feature has been superseded by background removal on the fly.
   * - Set to pixelz to use the human-powered Pixelz Remove-The-Background Editing add-on service.
   *   Relevant for images only.
   */
  backgroundRemoval?: string;
  /**
   * A URL to redirect to after the upload/explicit is completed instead of returning the upload
   * response. Signed upload result parameters are added to the callback URL. This parameter is
   * ignored for XHR (Ajax XMLHttpRequest) or JavaScript Fetch API upload requests. Note: This
   * parameter is relevant for direct uploads from a form in the browser. It is automatically set if
   * you perform direct upload from the browser using Cloudinary's SDKs and the jQuery plugin.
   *
   * @deprecated
   */
  callback?: string;
  /**
   * A comma-separated list of the categorization add-ons to run on the asset. Set to
   * google_tagging, google_video_tagging, imagga_tagging and/or aws_rek_tagging to automatically
   * classify the scenes of the uploaded asset. Optionally append a language code suffix (e.g.,
   * google_tagging:fr).
   */
  categorization?: string;
  /**
   * Whether to return a cinemagraph analysis value for the media asset between 0 and 1, where 0
   * means the asset is not a cinemagraph and 1 means the asset is a cinemagraph. Relevant for
   * animated images and video only. A static image will return 0.
   */
  cinemagraphAnalysis?: boolean;
  /**
   * Whether to retrieve predominant colors & color histogram of the uploaded image. Note: If all
   * returned colors are opaque, then 6-digit RGB hex values are returned. If one or more colors
   * contain an alpha channel, then 8-digit RGBA hex quadruplet values are returned.
   *
   * @default false
   */
  colors?: boolean;
  /**
   * Invokes the relevant add-on to return a list of detected content. Set to:
   * - <content-aware model>_[<version>] (e.g. coco_v2) to return a list of detected content using
   *   the Cloudinary AI Content Analysis add-on. Can be used together with the auto_tagging
   *   parameter to apply tags automatically.
   * - captioning to analyze an image and suggest a caption based on the image's contents.
   * - iqa to analyze the quality of an image.
   * - watermark-detection to detect watermarks in an image.
   * - adv_face to return a list of facial attributes using the Advanced Facial Attribute Detection
   *   add-on.
   * - aws_rek_face to return a list of detected celebrities and facial attributes using the Amazon
   *   Rekognition Celebrity Detection add-on. Can be used together with the auto_tagging parameter
   *   to apply tags automatically.
   */
  detection?: string;
  /**
   * Whether to discard the name of the original uploaded file. Relevant when delivering assets as
   * attachments (setting the flag disposition:attachment in delivery URLs).
   */
  discardOriginalFilename?: boolean;
  /** A display name for the asset. */
  displayName?: string;
  /**
   * Whether to generate the eager transformations asynchronously in the background after the upload
   * request is completed rather than before the upload is completed.
   */
  eagerAsync?: boolean;
  /** A URL to notify when eager transformations are completed. */
  eagerNotificationUrl?: string;
  /**
   * Allows you to modify upload parameters by specifying custom logic with JavaScript. This can be
   * useful for conditionally adding tags, contextual metadata, structured metadata or eager
   * transformations depending on specific criteria of the uploaded file.
   */
  eval?: string;
  /** Whether to detect faces in the asset. */
  faces?: boolean;
  /**
   * Overrides the originally uploaded asset's file name in downloads that use flags like
   * fl_attachment or fl_force_original.
   */
  filenameOverride?: string;
  /**
   * Folder name where the uploaded asset will be stored. This parameter applies when using the
   * Admin API, or when specifying the upload preset for unsigned uploading with the Upload API.
   *
   * @deprecated
   */
  folder?: string;
  /** An optional format to convert the uploaded asset to before saving in the cloud. */
  format?: string;
  /**
   * Whether to invalidate CDN cache copies of a previously uploaded asset that shares the same
   * public ID. Default: false.
   */
  invalidate?: boolean;
  /**
   * Whether to return IPTC, XMP, and detailed Exif metadata of the uploaded asset in the response.
   * Supported for images, video, and audio.
   * - Returned metadata for images includes: PixelsPerUnitX, PixelsPerUnitY, PixelUnits,
   *   Colorspace, and DPI.
   * - Returned metadata for audio and video includes: audio_codec, audio_bit_rate, audio_frequency,
   *   channels, channel_layout.
   * - Additional metadata for video includes: pix_format, codec, level, profile, video_bit_rate,
   *   dar.
   */
  mediaMetadata?: boolean;
  /**
   * A pipe-separated list or a map of custom metadata fields (by external_id) and the values to
   * assign to each of them. The = " and | characters can be supported as values when escaped with a
   * prepended backslash (\). For a multi-select field, you can set a maximum of 3000 different
   * metadata values on an asset.
   */
  metadata?: StructuredMetadataParam;
  /**
   * Whether to clear metadata field values that have become invalid due to a change in metadata
   * rules. If false, the API returns an error if any existing metadata value is no longer valid.
   * Default: false.
   *
   * @default false
   */
  clearInvalid?: boolean;
  /**
   * For all asset types, set to:
   * - manual to add the uploaded asset to a list of pending assets that can be moderated using the
   *   Admin API or the Cloudinary Console.
   * - perception_point to automatically moderate the uploaded asset using the Perception Point
   *   Malware Detection add-on.
   *
   * For images only, set to:
   * - webpurify to automatically moderate the uploaded image using the WebPurify Image Moderation
   *   add-on.
   * - aws_rek to automatically moderate the uploaded image using the Amazon Rekognition AI
   *   Moderation add-on.
   * - duplicate:<threshold> to detect if the same or a similar image already exists using the
   *   Cloudinary Duplicate Image Detection add-on. Set threshold to a float greater than 0 and less
   *   than or equal to 1.0 to specify how similar an image needs to be in order to be considered a
   *   duplicate. Set threshold to 0 to add an image to the index of images that are searched when
   *   duplicate detection is invoked for another image.
   *
   * For videos only, set to:
   * - aws_rek_video to automatically moderate the uploaded video using the Amazon Rekognition Video
   *   Moderation add-on.
   * - google_video_moderation automatically moderate the uploaded video using the Google AI Video
   *   Moderation add-on.
   *
   * To request multiple moderations in a single API call:
   * - Send the desired list of moderations as a pipe-separated string with manual moderation, if
   *   relevant, being last.
   *
   * Note: Rejected assets are automatically invalidated on the CDN within approximately ten
   * minutes.
   */
  moderation?: string;
  /** A URL to notify when the asset is ready. */
  notificationUrl?: string;
  /**
   * Set to adv_ocr to extract all text elements in an image as well as the bounding box coordinates
   * of each detected element using the OCR text detection and extraction add-on. Optionally append
   * options (e.g., adv_ocr:document).
   */
  ocr?: string;
  /**
   * Allows you to update an asset by specifying custom logic with JavaScript that is executed after
   * the upload to Cloudinary is completed successfully. This can be useful for conditionally adding
   * tags, contextual metadata, and structured metadata, depending on the results of using the
   * detection parameter on upload.
   */
  onSuccess?: string;
  /**
   * Whether to overwrite existing assets with the same public ID. When set to false, return
   * immediately if an asset with the same public ID already exists. Default: true (when using
   * unsigned upload, the default is false and cannot be changed to true).
   */
  overwrite?: boolean;
  /**
   * Whether to return the perceptual hash (pHash) on the uploaded image for image similarity
   * detection.
   */
  phash?: boolean;
  /** A proxy to use for fetching remote URLs. The format should be http://hostname:port. */
  proxy?: string;
  /**
   * The identifier that is used for accessing the uploaded asset. If not specified, a unique ID is
   * generated automatically.
   */
  publicId?: string;
  /**
   * A string or path that's automatically prepended to the public_id with a forward slash. The
   * value can contain the same characters as the public_id including additional forward slashes.
   * This prefix can be useful to provide context and improve the SEO of an asset's filename in the
   * delivery URL, but the value does not impact the location where the asset is stored.
   */
  publicIdPrefix?: string;
  /**
   * Whether to return a quality analysis value for the image between 0 and 1, where 0 means the
   * image is blurry and out of focus and 1 means the image is sharp and in focus. Relevant for
   * images only.
   */
  qualityAnalysis?: boolean;
  /**
   * Generates a related file based on the uploaded file.
   * - Set to aspose to automatically create a PDF or other image format from a raw Office document
   *   using the Aspose Document Conversion add-on. (Asynchronous)
   * - Set to google_speech to instruct the Google AI Video Transcription add-on to generate an
   *   automatic transcript raw file from an uploaded video. (Asynchronous)
   * - Set to extract_text to extract all the text from a PDF file and store it in a raw JSON file
   *   with a public ID in the format: [pdf_public_id].extract_text.json. The full URL of the
   *   generated JSON file is included in the API response. Unlike the above raw_convert options,
   *   this option doesn't require registering for an add-on.(Synchronous)
   * - Set to azure_video_indexer to generate AI-powered video insights from Microsoft Azure.
   *   (Asynchronous)
   */
  rawConvert?: string;
  /**
   * Named region coordinate groups for cropping with region gravity. Can be a JSON-encoded string
   * or an object. Each region name may contain only letters, numbers, or hyphens, and must have at
   * least two coordinate pairs.
   */
  regions?: Regions;
  /** Settings to automatically generate breakpoints for responsive images. */
  responsiveBreakpoints?: ResponsiveBreakpoints;
  /**
   * Whether to return a deletion token in the upload response. The token can be used to delete the
   * uploaded asset within approximately 10 minutes using an unauthenticated API call.
   */
  returnDeleteToken?: boolean;
  /**
   * Name of an upload preset that you defined for your Cloudinary product environment. An upload
   * preset consists of upload parameters centrally managed using the Admin API or from the Upload
   * Presets page of the Console Settings.
   */
  uploadPreset?: string;
  /**
   * Whether to add the asset_folder value as a prefix to the public_id value (prepended with a
   * forward slash). This ensures that the public ID path will always match the initial asset
   * folder, and can help to retain the behavior that previously existed in fixed folder mode.
   * However, keep in mind that even when this option is used during upload, an asset with a certain
   * public ID path can later be moved to a completely different asset folder hierarchy without
   * impacting the public ID. This option only ensures path matching for the initial upload.
   * Relevant only when public_id_prefix (or folder) has not been separately specified.
   */
  useAssetFolderAsPublicIdPrefix?: boolean;
  /**
   * Whether to use the original file name of the uploaded asset if available for the public ID. The
   * file name is normalized and random characters are appended to ensure uniqueness if the file
   * name already exists. Default: false.
   */
  useFilename?: boolean;
  /**
   * Whether to automatically assign the original filename of the uploaded asset as the asset's
   * display name. Relevant only if the display_name parameter isn't set.
   */
  useFilenameAsDisplayName?: boolean;
  /** Whether the display name should be unique. */
  uniqueDisplayName?: boolean;
  /**
   * When set to false and used together with use_filename, if an asset with the same file name
   * already exists, no random characters are appended to the file name. Instead, the asset is
   * overwritten. Default: true (random characters are added to the file name if needed).
   */
  uniqueFilename?: boolean;
  /** Whether to index the image for use with visual searches. Relevant for images only. */
  visualSearch?: boolean;
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
   * A list of transformations to eagerly generate for the asset. Accepts either a single
   * transformation or a pipe-separated list of transformations.
   */
  eager?: string;
  /**
   * An incoming transformation to run on the uploaded asset before its storage. In contrast to
   * eager, this parameter is applied before the file is stored.
   */
  transformation?: string;
  /**
   * A comma-separated list of file formats that are allowed for uploading. Files of other types
   * will be rejected. The formats can be any combination of image types, video formats or raw file
   * extensions. Note: You can also add the `format` parameter to convert other file types instead
   * of rejecting them. In this case, only files that would normally be rejected are converted, any
   * file format allowed for upload won't be converted.
   */
  allowedFormats?: string;
  /**
   * An HTTP header or a list of headers lines for adding as response HTTP headers when delivering
   * the asset to your users. Supported headers: Link, Authorization, X-Robots-Tag.
   */
  headers?: string;
  /** Face coordinates as comma-separated values, with multiple faces separated by pipes. */
  faceCoordinates?: string;
  /** Custom coordinates as comma-separated values, with multiple coordinates separated by pipes. */
  customCoordinates?: string;
};

export const uploadCommonParametersSchema: Schema<UploadCommonParameters> = s.object<UploadCommonParameters>({
  accessibilityAnalysis: s.optional(s.boolean()),
  assetFolder: s.optional(s.string()),
  async: s.optional(s.boolean()),
  autoChaptering: s.optional(s.boolean()),
  autoTagging: s.optional(s.float64()),
  autoTranscription: s.optional(s.lazy(() => autoTranscription1Schema)),
  accessControl: s.optional(s.array(s.lazy(() => accessControlItemSchema))),
  accessMode: s.optional(s.lazy(() => accessModeSchema)),
  backup: s.optional(s.boolean()),
  backgroundRemoval: s.optional(s.string()),
  callback: s.optional(s.string()),
  categorization: s.optional(s.string()),
  cinemagraphAnalysis: s.optional(s.boolean()),
  colors: s.defaulted(s.boolean(), false),
  detection: s.optional(s.string()),
  discardOriginalFilename: s.optional(s.boolean()),
  displayName: s.optional(s.string()),
  eagerAsync: s.optional(s.boolean()),
  eagerNotificationUrl: s.optional(s.string()),
  eval: s.optional(s.string()),
  faces: s.optional(s.boolean()),
  filenameOverride: s.optional(s.string()),
  folder: s.optional(s.string()),
  format: s.optional(s.string()),
  invalidate: s.optional(s.boolean()),
  mediaMetadata: s.optional(s.boolean()),
  metadata: s.optional(s.lazy(() => structuredMetadataParamSchema)),
  clearInvalid: s.defaulted(s.boolean(), false),
  moderation: s.optional(s.string()),
  notificationUrl: s.optional(s.string()),
  ocr: s.optional(s.string()),
  onSuccess: s.optional(s.string()),
  overwrite: s.optional(s.boolean()),
  phash: s.optional(s.boolean()),
  proxy: s.optional(s.string()),
  publicId: s.optional(s.string()),
  publicIdPrefix: s.optional(s.string()),
  qualityAnalysis: s.optional(s.boolean()),
  rawConvert: s.optional(s.string()),
  regions: s.optional(s.lazy(() => regionsSchema)),
  responsiveBreakpoints: s.optional(s.lazy(() => responsiveBreakpointsSchema)),
  returnDeleteToken: s.optional(s.boolean()),
  uploadPreset: s.optional(s.string()),
  useAssetFolderAsPublicIdPrefix: s.optional(s.boolean()),
  useFilename: s.optional(s.boolean()),
  useFilenameAsDisplayName: s.optional(s.boolean()),
  uniqueDisplayName: s.optional(s.boolean()),
  uniqueFilename: s.optional(s.boolean()),
  visualSearch: s.optional(s.boolean()),
  tags: s.optional(s.lazy(() => tagsParamSchema)),
  context: s.optional(s.string()),
  eager: s.optional(s.string()),
  transformation: s.optional(s.string()),
  allowedFormats: s.optional(s.string()),
  headers: s.optional(s.string()),
  faceCoordinates: s.optional(s.string()),
  customCoordinates: s.optional(s.string()),
  _keysMap: {
    accessibilityAnalysis: "accessibility_analysis",
    assetFolder: "asset_folder",
    autoChaptering: "auto_chaptering",
    autoTagging: "auto_tagging",
    autoTranscription: "auto_transcription",
    accessControl: "access_control",
    accessMode: "access_mode",
    backgroundRemoval: "background_removal",
    cinemagraphAnalysis: "cinemagraph_analysis",
    discardOriginalFilename: "discard_original_filename",
    displayName: "display_name",
    eagerAsync: "eager_async",
    eagerNotificationUrl: "eager_notification_url",
    filenameOverride: "filename_override",
    mediaMetadata: "media_metadata",
    clearInvalid: "clear_invalid",
    notificationUrl: "notification_url",
    onSuccess: "on_success",
    publicId: "public_id",
    publicIdPrefix: "public_id_prefix",
    qualityAnalysis: "quality_analysis",
    rawConvert: "raw_convert",
    responsiveBreakpoints: "responsive_breakpoints",
    returnDeleteToken: "return_delete_token",
    uploadPreset: "upload_preset",
    useAssetFolderAsPublicIdPrefix: "use_asset_folder_as_public_id_prefix",
    useFilename: "use_filename",
    useFilenameAsDisplayName: "use_filename_as_display_name",
    uniqueDisplayName: "unique_display_name",
    uniqueFilename: "unique_filename",
    visualSearch: "visual_search",
    allowedFormats: "allowed_formats",
    faceCoordinates: "face_coordinates",
    customCoordinates: "custom_coordinates",
  },
});
