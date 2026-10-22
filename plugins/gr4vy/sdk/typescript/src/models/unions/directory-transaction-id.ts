import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type DirectoryTransactionId = string;

export const directoryTransactionIdSchema: Schema<DirectoryTransactionId> = s.of<DirectoryTransactionId>(
  s.union([s.string()]),
);
