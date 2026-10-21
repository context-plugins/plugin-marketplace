import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { parent3Schema, type Parent3 } from "./parent3.js";
import { Status, statusSchema } from "./status.js";

export type Org3 = {
  sourcedId?: string;
  /** @default Status.Active */
  status?: Status;
  metadata?: Record<string, Record<string, unknown>>;
  name: string;
  /** @default "school" */
  type?: "school";
  identifier?: string;
  parent?: Parent3 | null;
};

export const org3Schema: Schema<Org3> = s.object<Org3>({
  sourcedId: s.optional(s.string()),
  status: s.defaulted(statusSchema, Status.Active),
  metadata: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  name: s.string(),
  type: s.defaulted(s.literal("school"), "school"),
  identifier: s.optional(s.string()),
  parent: s.optionalNullable(s.lazy(() => parent3Schema)),
});
