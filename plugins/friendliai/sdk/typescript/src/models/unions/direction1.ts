import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { directionSchema, type Direction } from "../direction.js";

export type Direction1 = Direction;

export const direction1Schema: Schema<Direction1> = s.of<Direction1>(
  s.union([s.lazy(() => directionSchema)]),
);
