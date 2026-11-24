import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filter3Schema, type Filter3 } from "./filter3.js";

export type Data14 = {
  type?: string;
  id?: string;
  name?: string;
  description?: string;
  filters?: Filter3[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data14Schema: Schema<Data14> = s.object<Data14>(
  {
    type: s.optional(s.string()),
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    filters: s.optional(s.array(s.lazy(() => filter3Schema))),
  },
  { additionalProperties: s.json() },
);
