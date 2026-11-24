import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Accept = {
  ApplicationJson: "application/json",
  ImageSvgXml: "image/svg+xml",
  ImagePng: "image/png",
} as const;
export type Accept = (typeof Accept)[keyof typeof Accept] | (string & {});

export const acceptSchema: EnumSchema<Accept> = s.enumOf<Accept>(Accept);
