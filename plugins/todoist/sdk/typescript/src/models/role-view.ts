import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionViewSchema, type ActionView } from "./action-view.js";
import { nameSchema, type Name } from "./unions/name.js";

export type RoleView = {
  /** Role that grants the listed actions. */
  name: Name;
  /** Actions granted to this role. */
  actions: ActionView[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const roleViewSchema: Schema<RoleView> = s.object<RoleView>(
  {
    name: nameSchema,
    actions: s.array(s.lazy(() => actionViewSchema)),
  },
  { additionalProperties: s.json() },
);
