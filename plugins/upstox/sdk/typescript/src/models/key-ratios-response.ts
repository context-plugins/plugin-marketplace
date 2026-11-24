import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { keyRatioDataSchema, type KeyRatioData } from "./key-ratio-data.js";
import { statusSchema, type Status } from "./status.js";

export type KeyRatiosResponse = {
  status?: Status;
  data?: KeyRatioData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const keyRatiosResponseSchema: Schema<KeyRatiosResponse> = s.object<KeyRatiosResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.array(s.lazy(() => keyRatioDataSchema))),
  },
  { additionalProperties: s.json() },
);
