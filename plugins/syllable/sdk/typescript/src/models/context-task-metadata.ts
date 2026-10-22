import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { prioritySchema, type Priority } from "./unions/priority.js";

export type ContextTaskMetadata = {
  priority?: Priority;
};

export const contextTaskMetadataSchema: Schema<ContextTaskMetadata> = s.object<ContextTaskMetadata>({
  priority: s.optional(s.lazy(() => prioritySchema)),
});
