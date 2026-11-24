import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { moderationSchema, type Moderation } from "../moderation.js";

export type Moderation2 = Moderation;

export const moderation2Schema: Schema<Moderation2> = s.of<Moderation2>(
  s.union([s.lazy(() => moderationSchema)]),
);
