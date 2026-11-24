import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { moderation1Schema, type Moderation1 } from "../moderation1.js";

export type Moderation11 = Moderation1;

export const moderation11Schema: Schema<Moderation11> = s.of<Moderation11>(
  s.union([s.lazy(() => moderation1Schema)]),
);
