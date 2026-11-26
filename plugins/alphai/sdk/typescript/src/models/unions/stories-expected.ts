import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type StoriesExpected = number;

export const storiesExpectedSchema: Schema<StoriesExpected> = s.of<StoriesExpected>(s.union([s.float64()]));
