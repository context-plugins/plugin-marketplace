import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type QueueTimeoutMs = number;

export const queueTimeoutMsSchema: Schema<QueueTimeoutMs> = s.of<QueueTimeoutMs>(s.union([s.int()]));
