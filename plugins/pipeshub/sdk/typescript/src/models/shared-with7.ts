import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { AccessLevel, accessLevelSchema } from "./access-level.js";

export type SharedWith7 = {
  userId: string;
  /** @default AccessLevel.Read */
  accessLevel?: AccessLevel;
};

export const sharedWith7Schema: Schema<SharedWith7> = s.object<SharedWith7>({
  userId: s.string(),
  accessLevel: s.defaulted(accessLevelSchema, AccessLevel.Read),
});
