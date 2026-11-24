import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audienceSchema, type Audience } from "./audience.js";

/** A list of audience segment definitions. */
export type AudienceList = {
  /** Array of audience objects. */
  data?: Audience[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const audienceListSchema: Schema<AudienceList> = s.object<AudienceList>(
  {
    data: s.optional(s.array(s.lazy(() => audienceSchema))),
  },
  { additionalProperties: s.json() },
);
