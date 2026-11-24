import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { multiMessageRequestSchema, type MultiMessageRequest } from "../multi-message-request.js";

export type Request = MultiMessageRequest | Record<string, unknown>;

export const requestSchema: Schema<Request> = s.of<Request>(
  s.union([s.lazy(() => multiMessageRequestSchema), s.record(s.string(), s.unknown())]),
);
