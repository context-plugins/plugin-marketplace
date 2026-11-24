import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data1Schema, type Data1 } from "./data1.js";

/** Up to 12 recent public media items */
export type Media = {
  data: Data1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mediaSchema: Schema<Media> = s.object<Media>(
  {
    data: s.array(s.lazy(() => data1Schema)),
  },
  { additionalProperties: s.json() },
);
