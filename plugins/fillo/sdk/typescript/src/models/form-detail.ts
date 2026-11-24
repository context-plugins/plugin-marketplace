import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type FormDetail = {
  id: string;
  slug: string;
  name: string;
  status: Status;
  /** The published FormSchema (see \@usefillo/core). */
  schema: Record<string, unknown>;
  /** The published FormSettings. */
  settings: Record<string, unknown>;
  hasDraft: boolean;
  createdAt: Date;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const formDetailSchema: Schema<FormDetail> = s.object<FormDetail>(
  {
    id: s.string(),
    slug: s.string(),
    name: s.string(),
    status: statusSchema,
    schema: s.record(s.string(), s.unknown()),
    settings: s.record(s.string(), s.unknown()),
    hasDraft: s.boolean(),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
