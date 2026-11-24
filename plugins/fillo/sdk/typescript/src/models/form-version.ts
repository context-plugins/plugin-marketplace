import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FormVersion = {
  id: string;
  version: number;
  schemaHash: string;
  createdAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const formVersionSchema: Schema<FormVersion> = s.object<FormVersion>(
  {
    id: s.string(),
    version: s.int(),
    schemaHash: s.string(),
    createdAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
