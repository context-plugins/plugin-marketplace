import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";

export type ErrorList = {
  type?: string;
  correlationId?: string;
  data?: ErrorItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorListSchema: Schema<ErrorList> = s.object<ErrorList>(
  {
    type: s.optional(s.string()),
    correlationId: s.optional(s.string()),
    data: s.optional(s.array(s.lazy(() => errorItemSchema))),
  },
  { additionalProperties: s.json() },
);
