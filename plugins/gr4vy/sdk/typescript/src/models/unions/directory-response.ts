import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type DirectoryResponse = string;

export const directoryResponseSchema: Schema<DirectoryResponse> = s.of<DirectoryResponse>(
  s.union([s.string()]),
);
