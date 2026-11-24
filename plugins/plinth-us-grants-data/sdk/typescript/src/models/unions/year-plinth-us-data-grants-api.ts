import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type YearPlinthUsDataGrantsApi = string;

export const yearPlinthUsDataGrantsApiSchema: Schema<YearPlinthUsDataGrantsApi> =
  s.of<YearPlinthUsDataGrantsApi>(s.union([s.string()]));
