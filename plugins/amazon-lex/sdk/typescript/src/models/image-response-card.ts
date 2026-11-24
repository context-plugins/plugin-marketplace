import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buttonSchema, type Button } from "./button.js";

export type ImageResponseCard = {
  /**
   * The title to display on the response card. The format of the title is determined by the
   * platform displaying the response card.
   */
  title: string;
  /**
   * The subtitle to display on the response card. The format of the subtitle is determined by the
   * platform displaying the response card.
   */
  subtitle?: string;
  /**
   * The URL of an image to display on the response card. The image URL must be publicly available
   * so that the platform displaying the response card has access to the image.
   */
  imageUrl?: string;
  /**
   * A list of buttons that should be displayed on the response card. The arrangement of the buttons
   * is determined by the platform that displays the button.
   */
  buttons?: Button[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const imageResponseCardSchema: Schema<ImageResponseCard> = s.object<ImageResponseCard>(
  {
    title: s.string(),
    subtitle: s.optional(s.string()),
    imageUrl: s.optional(s.string()),
    buttons: s.optional(s.array(s.lazy(() => buttonSchema))),
  },
  { additionalProperties: s.json() },
);
