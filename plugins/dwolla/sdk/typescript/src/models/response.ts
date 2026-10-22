import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { headerSchema, type Header } from "./header.js";

export type Response = {
  timestamp?: Date;
  headers?: Header[];
  statusCode?: number;
  body?: string;
};

export const responseSchema: Schema<Response> = s.object<Response>({
  timestamp: s.optional(s.dateTime()),
  headers: s.optional(s.array(s.lazy(() => headerSchema))),
  statusCode: s.optional(s.int()),
  body: s.optional(s.string()),
});
