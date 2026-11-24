import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The color associated with the status update. */
export const ColorAsanaProjectStatusesApi = {
  Green: "green",
  Yellow: "yellow",
  Red: "red",
  Blue: "blue",
} as const;
export type ColorAsanaProjectStatusesApi =
  | (typeof ColorAsanaProjectStatusesApi)[keyof typeof ColorAsanaProjectStatusesApi]
  | (string & {});

export const colorAsanaProjectStatusesApiSchema: EnumSchema<ColorAsanaProjectStatusesApi> =
  s.enumOf<ColorAsanaProjectStatusesApi>(ColorAsanaProjectStatusesApi);
