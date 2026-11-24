import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type XV4QueueDeduplicate = string;

export const xv4QueueDeduplicateSchema: Schema<XV4QueueDeduplicate> = s.of<XV4QueueDeduplicate>(
  s.union([s.string()]),
);
