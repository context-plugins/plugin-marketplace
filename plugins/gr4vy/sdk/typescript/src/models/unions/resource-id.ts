import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the conflicting resource. */
export type ResourceId = string;

export const resourceIdSchema: Schema<ResourceId> = s.of<ResourceId>(s.union([s.string()]));
