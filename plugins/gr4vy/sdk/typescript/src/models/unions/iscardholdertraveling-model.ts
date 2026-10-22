import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Indicates whether the cardholder is also a passenger. */
export type IscardholdertravelingModel = boolean;

export const iscardholdertravelingModelSchema: Schema<IscardholdertravelingModel> =
  s.of<IscardholdertravelingModel>(s.union([s.boolean()]));
