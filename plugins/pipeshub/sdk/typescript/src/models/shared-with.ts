import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessLevelSchema, type AccessLevel } from "./access-level.js";

export type SharedWith = {
  userId?: string;
  accessLevel?: AccessLevel;
};

export const sharedWithSchema: Schema<SharedWith> = s.object<SharedWith>({
  userId: s.optional(s.string()),
  accessLevel: s.optional(s.lazy(() => accessLevelSchema)),
});
