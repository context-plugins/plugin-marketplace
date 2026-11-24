import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const View = {
  CategoryViewUnspecified: "CATEGORY_VIEW_UNSPECIFIED",
  Basic: "BASIC",
  Full: "FULL",
} as const;
export type View = (typeof View)[keyof typeof View] | (string & {});

export const viewSchema: EnumSchema<View> = s.enumOf<View>(View);
