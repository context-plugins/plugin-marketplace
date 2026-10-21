import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** describes a list of groups that are all required in a permissions constraint */
export type PermissionsGroupIntersectionDefinition = {
  requiredGroups?: string[];
};

export const permissionsGroupIntersectionDefinitionSchema: Schema<PermissionsGroupIntersectionDefinition> =
  s.object<PermissionsGroupIntersectionDefinition>({
    requiredGroups: s.optional(s.array(s.string())),
  });
