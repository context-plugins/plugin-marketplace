import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Control the number of required acknowledgments */
export const Acknowledgments = {
  _1: 1,
  _0: 0,
  _Minus1: -1,
} as const;
export type Acknowledgments = (typeof Acknowledgments)[keyof typeof Acknowledgments] | (number & {});

export const acknowledgmentsSchema: EnumSchema<Acknowledgments> = s.enumOf<Acknowledgments>(Acknowledgments);
