import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Label = {
  NoUnauthenticated: "!no-unauthenticated",
  Porn: "porn",
  Sexual: "sexual",
  Nudity: "nudity",
  GraphicMedia: "graphic-media",
} as const;
export type Label = (typeof Label)[keyof typeof Label] | (string & {});

export const labelSchema: EnumSchema<Label> = s.enumOf<Label>(Label);
