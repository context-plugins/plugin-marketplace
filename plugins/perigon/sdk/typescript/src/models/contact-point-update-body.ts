import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";

export type ContactPointUpdateBody = {
  name?: string | null;
  status?: Status1 | null;
  webhook?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactPointUpdateBodySchema: Schema<ContactPointUpdateBody> = s.object<ContactPointUpdateBody>(
  {
    name: s.optionalNullable(s.string()),
    status: s.optionalNullable(s.lazy(() => status1Schema)),
    webhook: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
