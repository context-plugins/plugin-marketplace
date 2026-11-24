import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionSchema, type Action } from "./action.js";

export type RequestGroup = {
  resourceType?: string;
  id?: string;
  status?: string;
  intent?: string;
  subject?: Record<string, unknown>;
  author?: Record<string, unknown>;
  action?: Action[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requestGroupSchema: Schema<RequestGroup> = s.object<RequestGroup>(
  {
    resourceType: s.optional(s.string()),
    id: s.optional(s.string()),
    status: s.optional(s.string()),
    intent: s.optional(s.string()),
    subject: s.optional(s.record(s.string(), s.unknown())),
    author: s.optional(s.record(s.string(), s.unknown())),
    action: s.optional(s.array(s.lazy(() => actionSchema))),
  },
  { additionalProperties: s.json() },
);
