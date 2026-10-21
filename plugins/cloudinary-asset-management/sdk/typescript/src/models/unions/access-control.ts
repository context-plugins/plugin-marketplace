import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { accessControlItemSchema, type AccessControlItem } from "../access-control-item.js";

export type AccessControl = AccessControlItem[];

export const accessControlSchema: Schema<AccessControl> = s.of<AccessControl>(
  s.union([s.array(s.lazy(() => accessControlItemSchema))]),
);
