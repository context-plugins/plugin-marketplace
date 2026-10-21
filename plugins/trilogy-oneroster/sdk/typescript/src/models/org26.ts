import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { parent3Schema, type Parent3 } from "./parent3.js";
import { Status, statusSchema } from "./status.js";
import { typeSchema, type Type } from "./type.js";

export type Org26 = {
  sourcedId?: string;
  /** @default Status.Active */
  status?: Status;
  metadata?: Record<string, Record<string, unknown>>;
  name: string;
  type: Type;
  identifier?: string;
  parent?: Parent3 | null;
};

export const org26Schema: Schema<Org26> = s.object<Org26>({
  sourcedId: s.optional(s.string()),
  status: s.defaulted(statusSchema, Status.Active),
  metadata: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  name: s.string(),
  type: typeSchema,
  identifier: s.optional(s.string()),
  parent: s.optionalNullable(s.lazy(() => parent3Schema)),
});
