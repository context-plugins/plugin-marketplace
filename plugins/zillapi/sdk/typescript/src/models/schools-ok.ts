import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { schoolSchema, type School } from "./school.js";

export type SchoolsOk = {
  data?: School[];
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const schoolsOkSchema: Schema<SchoolsOk> = s.object<SchoolsOk>(
  {
    data: s.optional(s.array(s.lazy(() => schoolSchema))),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  },
  { additionalProperties: s.json() },
);
