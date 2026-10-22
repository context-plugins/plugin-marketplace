import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { accessControlItemSchema, type AccessControlItem } from "../access-control-item.js";

/** The access control settings for the asset. */
export type AccessControl1 = AccessControlItem[];

export const accessControl1Schema: Schema<AccessControl1> = s.of<AccessControl1>(
  s.union([s.array(s.lazy(() => accessControlItemSchema))]),
);
