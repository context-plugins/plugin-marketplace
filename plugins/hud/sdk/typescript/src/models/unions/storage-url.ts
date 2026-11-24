import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type StorageUrl = string;

export const storageUrlSchema: Schema<StorageUrl> = s.of<StorageUrl>(s.union([s.string()]));
