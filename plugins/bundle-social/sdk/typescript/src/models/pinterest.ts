import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Pinterest = {
  text?: string | null;
  description?: string | null;
  boardName: string;
  uploadIds?: string[] | null;
  /** The URL to image uploaded on bundle.social. */
  thumbnail?: string | null;
  /** The URL to which the Pin will link to. */
  link?: string | null;
  /**
   * The alt text for the image. This is used by screen readers and when the image can't be loaded.
   */
  altText?: string | null;
  /** A note about the Pin. This is not visible to the public. */
  note?: string | null;
  /** The dominant color of the image. This is used to display the image before it's loaded. */
  dominantColor?: string | null;
  /**
   * Set to true if the Pin content was generated or modified by AI. Adds Pinterest's AI disclosure
   * label.
   *
   * @default false
   */
  isAiGenerated?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pinterestSchema: Schema<Pinterest> = s.object<Pinterest>(
  {
    text: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    boardName: s.string(),
    uploadIds: s.optionalNullable(s.array(s.string())),
    thumbnail: s.optionalNullable(s.string()),
    link: s.optionalNullable(s.string()),
    altText: s.optionalNullable(s.string()),
    note: s.optionalNullable(s.string()),
    dominantColor: s.optionalNullable(s.string()),
    isAiGenerated: s.defaulted(s.nullable(s.boolean()), false),
  },
  { additionalProperties: s.json() },
);
