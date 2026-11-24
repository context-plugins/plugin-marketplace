import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { complimentaryAccessSchema, type ComplimentaryAccess } from "./complimentary-access.js";

export type ComplimentaryAccessResponse = {
  /** The complimentary access object. */
  data?: ComplimentaryAccess;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const complimentaryAccessResponseSchema: Schema<ComplimentaryAccessResponse> =
  s.object<ComplimentaryAccessResponse>(
    {
      data: s.optional(s.lazy(() => complimentaryAccessSchema)),
    },
    { additionalProperties: s.json() },
  );
