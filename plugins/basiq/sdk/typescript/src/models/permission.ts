import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { informationSchema, type Information } from "./information.js";
import { primarySchema, type Primary } from "./primary.js";

export type Permission = {
  scope: string;
  required: boolean;
  consented?: boolean;
  entity: string;
  information: Information;
  purpose: Primary;
};

export const permissionSchema: Schema<Permission> = s.object<Permission>({
  scope: s.string(),
  required: s.boolean(),
  consented: s.optional(s.boolean()),
  entity: s.string(),
  information: informationSchema,
  purpose: primarySchema,
});
