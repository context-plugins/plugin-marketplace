import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Orientation = {
  Portrait: "portrait",
  Landscape: "landscape",
} as const;
export type Orientation = (typeof Orientation)[keyof typeof Orientation] | (string & {});

export const orientationSchema: EnumSchema<Orientation> = s.enumOf<Orientation>(Orientation);
