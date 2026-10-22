import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResourceAccess = {
  action?: string;
  resource?: string;
};

export const resourceAccessSchema: Schema<ResourceAccess> = s.object<ResourceAccess>({
  action: s.optional(s.string()),
  resource: s.optional(s.string()),
});
