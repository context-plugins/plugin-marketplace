import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Place = string;

export const placeSchema: Schema<Place> = s.of<Place>(s.union([s.string()]));
