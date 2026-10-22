import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type EnableContentLogging = boolean;

export const enableContentLoggingSchema: Schema<EnableContentLogging> = s.of<EnableContentLogging>(
  s.union([s.boolean()]),
);
