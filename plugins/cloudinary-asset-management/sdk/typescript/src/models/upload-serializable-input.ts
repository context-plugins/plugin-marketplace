import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tagsParamSchema, type TagsParam } from "./unions/tags-param.js";

/**
 * Upload parameters that accept encoded string values, such as comma-separated tags, pipe-separated
 * context metadata, and transformation strings.
 */
export type UploadSerializableInput = {
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

export const uploadSerializableInputSchema: Schema<UploadSerializableInput> =
  s.object<UploadSerializableInput>({
    tags: s.optional(s.lazy(() => tagsParamSchema)),
    context: s.optional(s.string()),
    eager: s.optional(s.string()),
    transformation: s.optional(s.string()),
    allowedFormats: s.optional(s.string()),
    headers: s.optional(s.string()),
    faceCoordinates: s.optional(s.string()),
    customCoordinates: s.optional(s.string()),
    _keysMap: {
      allowedFormats: "allowed_formats",
      faceCoordinates: "face_coordinates",
      customCoordinates: "custom_coordinates",
    },
  });
