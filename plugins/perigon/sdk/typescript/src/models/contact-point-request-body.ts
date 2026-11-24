import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

export type ContactPointRequestBody = {
  type: Type1;
  name: string;
  email?: string | null;
  webhook?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactPointRequestBodySchema: Schema<ContactPointRequestBody> =
  s.object<ContactPointRequestBody>(
    {
      type: type1Schema,
      name: s.string(),
      email: s.optionalNullable(s.string()),
      webhook: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
