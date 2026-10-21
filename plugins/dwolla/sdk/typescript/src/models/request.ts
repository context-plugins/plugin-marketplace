import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { headerSchema, type Header } from "./header.js";

export type Request = {
  timestamp?: Date;
  url?: string;
  headers?: Header[];
  body?: string;
};

export const requestSchema: Schema<Request> = s.object<Request>({
  timestamp: s.optional(s.dateTime()),
  url: s.optional(s.string()),
  headers: s.optional(s.array(s.lazy(() => headerSchema))),
  body: s.optional(s.string()),
});
