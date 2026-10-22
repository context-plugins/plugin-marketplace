import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponsesInputImage = {
  /** The type of the input item. Always `input_image`. @default "input_image" */
  type?: "input_image";
  /**
   * The URL of the image to be sent to the model. A fully qualified URL or base64 encoded image in
   * a data URL.
   */
  imageUrl: string;
};

export const responsesInputImageSchema: Schema<ResponsesInputImage> = s.object<ResponsesInputImage>({
  type: s.defaulted(s.literal("input_image"), "input_image"),
  imageUrl: s.string(),
  _keysMap: {
    imageUrl: "image_url",
  },
});
