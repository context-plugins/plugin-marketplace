import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. The distribution shape of the nodes in the multi-zonal cluster. */
export const TargetShape = {
  TargetShapeUnspecified: "TARGET_SHAPE_UNSPECIFIED",
  Any: "ANY",
} as const;
export type TargetShape = (typeof TargetShape)[keyof typeof TargetShape] | (string & {});

export const targetShapeSchema: EnumSchema<TargetShape> = s.enumOf<TargetShape>(TargetShape);
