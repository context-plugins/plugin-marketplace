import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { relationshipSchema, type Relationship } from "./relationship.js";

export type Permission2 = {
  id: string;
  name: string;
  type: string;
  relationship: Relationship;
  accessType: string;
};

export const permission2Schema: Schema<Permission2> = s.object<Permission2>({
  id: s.string(),
  name: s.string(),
  type: s.string(),
  relationship: relationshipSchema,
  accessType: s.string(),
});
