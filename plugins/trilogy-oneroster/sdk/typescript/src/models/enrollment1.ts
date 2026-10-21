import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { user8Schema, type User8 } from "./user8.js";

export type Enrollment1 = {
  user: User8;
  /** @default false */
  primary?: boolean;
  beginDate?: string;
  endDate?: string;
};

export const enrollment1Schema: Schema<Enrollment1> = s.object<Enrollment1>({
  user: user8Schema,
  primary: s.defaulted(s.boolean(), false),
  beginDate: s.optional(s.string()),
  endDate: s.optional(s.string()),
});
