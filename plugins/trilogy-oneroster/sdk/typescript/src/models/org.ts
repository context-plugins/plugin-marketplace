import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { childSchema, type Child } from "./child.js";
import { parentSchema, type Parent } from "./parent.js";
import { statusSchema, type Status } from "./status.js";
import { typeSchema, type Type } from "./type.js";

/** Represents an organization. */
export type Org = {
  sourcedId: string;
  status: Status;
  dateLastModified?: Date;
  metadata?: Record<string, Record<string, unknown>> | null;
  name: string;
  type: Type;
  identifier: string;
  parent?: Parent | null;
  children: Child[] | null;
};

export const orgSchema: Schema<Org> = s.object<Org>({
  sourcedId: s.string(),
  status: statusSchema,
  dateLastModified: s.optional(s.dateTime()),
  metadata: s.optionalNullable(s.record(s.string(), s.record(s.string(), s.unknown()))),
  name: s.string(),
  type: typeSchema,
  identifier: s.string(),
  parent: s.optionalNullable(s.lazy(() => parentSchema)),
  children: s.nullable(s.array(s.lazy(() => childSchema))),
});
