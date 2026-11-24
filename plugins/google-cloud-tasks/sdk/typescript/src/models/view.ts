import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The view specifies which subset of the Task has been returned. */
export const View = {
  ViewUnspecified: "VIEW_UNSPECIFIED",
  Basic: "BASIC",
  Full: "FULL",
} as const;
export type View = (typeof View)[keyof typeof View] | (string & {});

export const viewSchema: EnumSchema<View> = s.enumOf<View>(View);
