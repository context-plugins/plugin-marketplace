import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkedinActivityIntentItemSchema,
  type LinkedinActivityIntentItem,
} from "./linkedin-activity-intent-item.js";

export type Result = {
  id?: string;
  companyName?: string;
  domain?: string;
  linkedinActivityIntent?: LinkedinActivityIntentItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, Record<string, unknown>[]>;
};

export const resultSchema: Schema<Result> = s.object<Result>(
  {
    id: s.optional(s.string()),
    companyName: s.optional(s.string()),
    domain: s.optional(s.string()),
    linkedinActivityIntent: s.optional(s.array(s.lazy(() => linkedinActivityIntentItemSchema))),
  },
  { additionalProperties: s.array(s.record(s.string(), s.unknown())) },
);
