import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The shape one of the QR code's corners should take */
export const Shape = {
  Standard: "standard",
  SlightlyRound: "slightly_round",
  Rounded: "rounded",
  ExtraRound: "extra_round",
  Leaf: "leaf",
  LeafInner: "leaf_inner",
  LeafOuter: "leaf_outer",
  Target: "target",
  Concave: "concave",
} as const;
export type Shape = (typeof Shape)[keyof typeof Shape] | (string & {});

export const shapeSchema: EnumSchema<Shape> = s.enumOf<Shape>(Shape);
