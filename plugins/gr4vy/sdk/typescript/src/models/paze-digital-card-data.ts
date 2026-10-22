import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PazeDigitalCardData = {
  /** URI hosting the card art image. */
  artUri: string;
  /** Card art height in pixels. */
  artHeight: number;
  /** Card art width in pixels. */
  artWidth: number;
};

export const pazeDigitalCardDataSchema: Schema<PazeDigitalCardData> = s.object<PazeDigitalCardData>({
  artUri: s.string(),
  artHeight: s.int(),
  artWidth: s.int(),
});
