import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailSchema, type Detail } from "./detail.js";

export type Error2 = {
  code: string;
  message: string;
  details: Detail[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error2Schema: Schema<Error2> = s.object<Error2>(
  {
    code: s.string(),
    message: s.string(),
    details: s.array(s.lazy(() => detailSchema)),
  },
  { additionalProperties: s.json() },
);
