import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UploadRequestParameters = {
  /**
   * (Required for unsigned uploading / optional for signed uploading) Name of an upload preset that
   * you defined for your Cloudinary product environment. An upload preset consists of upload
   * parameters centrally managed using the Admin API or from the Upload Presets page of the Console
   * Settings. An upload preset may be marked as unsigned, which allows unsigned uploading directly
   * from the browser and restricts the optional parameters to: public_id, folder, tags, context,
   * face_coordinates, regions and custom_coordinates.
   */
  uploadPreset?: string;
};

export const uploadRequestParametersSchema: Schema<UploadRequestParameters> =
  s.object<UploadRequestParameters>({
    uploadPreset: s.optional(s.string()),
    _keysMap: {
      uploadPreset: "upload_preset",
    },
  });
