import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Control the number of required acknowledgments. */
export const Acknowledgments6 = {
  _1: 1,
  _0: 0,
  _Minus1: -1,
} as const;
export type Acknowledgments6 = (typeof Acknowledgments6)[keyof typeof Acknowledgments6] | (number & {});

export const acknowledgments6Schema: EnumSchema<Acknowledgments6> =
  s.enumOf<Acknowledgments6>(Acknowledgments6);
