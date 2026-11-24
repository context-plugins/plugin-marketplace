import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { borderStyle2Schema, type BorderStyle2 } from "./border-style2.js";

export type VisualSettings = {
  /** The background color of the block. */
  backgroundColor?: string;
  /** The text color of the block. */
  textColor?: string;
  /** The border color of the block. */
  borderColor?: string;
  /** The border style of the block. */
  borderStyle?: BorderStyle2;
  /** The border width of the block. */
  borderWidth?: number;
  /** The border width of the top of the block. */
  borderWidthTop?: number;
  /** The border width of the bottom of the block. */
  borderWidthBottom?: number;
  /** The border width of the left of the block. */
  borderWidthLeft?: number;
  /** The border width of the right of the block. */
  borderWidthRight?: number;
  /** The border radius of the block. */
  borderRadius?: number;
  /** The border radius of the top left of the block. */
  borderRadiusTopLeft?: number;
  /** The border radius of the top right of the block. */
  borderRadiusTopRight?: number;
  /** The border radius of the bottom left of the block. */
  borderRadiusBottomLeft?: number;
  /** The border radius of the bottom right of the block. */
  borderRadiusBottomRight?: number;
  /** The inner spacing of the block. */
  innerSpacing?: number;
  /** The inner spacing of the top of the block. */
  innerSpacingTop?: number;
  /** The inner spacing of the bottom of the block. */
  innerSpacingBottom?: number;
  /** The inner spacing of the left of the block. */
  innerSpacingLeft?: number;
  /** The inner spacing of the right of the block. */
  innerSpacingRight?: number;
  /** The outer spacing of the block. */
  outerSpacing?: number;
  /** The outer spacing of the top of the block. */
  outerSpacingTop?: number;
  /** The outer spacing of the bottom of the block. */
  outerSpacingBottom?: number;
  /** The outer spacing of the left of the block. */
  outerSpacingLeft?: number;
  /** The outer spacing of the right of the block. */
  outerSpacingRight?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const visualSettingsSchema: Schema<VisualSettings> = s.object<VisualSettings>(
  {
    backgroundColor: s.optional(s.string()),
    textColor: s.optional(s.string()),
    borderColor: s.optional(s.string()),
    borderStyle: s.optional(s.lazy(() => borderStyle2Schema)),
    borderWidth: s.optional(s.int()),
    borderWidthTop: s.optional(s.int()),
    borderWidthBottom: s.optional(s.int()),
    borderWidthLeft: s.optional(s.int()),
    borderWidthRight: s.optional(s.int()),
    borderRadius: s.optional(s.int()),
    borderRadiusTopLeft: s.optional(s.int()),
    borderRadiusTopRight: s.optional(s.int()),
    borderRadiusBottomLeft: s.optional(s.int()),
    borderRadiusBottomRight: s.optional(s.int()),
    innerSpacing: s.optional(s.int()),
    innerSpacingTop: s.optional(s.int()),
    innerSpacingBottom: s.optional(s.int()),
    innerSpacingLeft: s.optional(s.int()),
    innerSpacingRight: s.optional(s.int()),
    outerSpacing: s.optional(s.int()),
    outerSpacingTop: s.optional(s.int()),
    outerSpacingBottom: s.optional(s.int()),
    outerSpacingLeft: s.optional(s.int()),
    outerSpacingRight: s.optional(s.int()),
    _keysMap: {
      backgroundColor: "background_color",
      textColor: "text_color",
      borderColor: "border_color",
      borderStyle: "border_style",
      borderWidth: "border_width",
      borderWidthTop: "border_width_top",
      borderWidthBottom: "border_width_bottom",
      borderWidthLeft: "border_width_left",
      borderWidthRight: "border_width_right",
      borderRadius: "border_radius",
      borderRadiusTopLeft: "border_radius_top_left",
      borderRadiusTopRight: "border_radius_top_right",
      borderRadiusBottomLeft: "border_radius_bottom_left",
      borderRadiusBottomRight: "border_radius_bottom_right",
      innerSpacing: "inner_spacing",
      innerSpacingTop: "inner_spacing_top",
      innerSpacingBottom: "inner_spacing_bottom",
      innerSpacingLeft: "inner_spacing_left",
      innerSpacingRight: "inner_spacing_right",
      outerSpacing: "outer_spacing",
      outerSpacingTop: "outer_spacing_top",
      outerSpacingBottom: "outer_spacing_bottom",
      outerSpacingLeft: "outer_spacing_left",
      outerSpacingRight: "outer_spacing_right",
    },
  },
  { additionalProperties: s.json() },
);
