import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the profile to use for the session */
export type ProfileId = string;

export const profileIdSchema: Schema<ProfileId> = s.of<ProfileId>(s.union([s.string()]));
