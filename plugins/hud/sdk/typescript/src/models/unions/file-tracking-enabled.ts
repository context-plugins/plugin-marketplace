import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type FileTrackingEnabled = boolean;

export const fileTrackingEnabledSchema: Schema<FileTrackingEnabled> = s.of<FileTrackingEnabled>(
  s.union([s.boolean()]),
);
