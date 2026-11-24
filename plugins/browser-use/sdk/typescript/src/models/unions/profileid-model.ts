import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * ID of a browser profile to load into the session. Profiles persist cookies, local storage, and
 * other browser state across sessions.
 */
export type ProfileidModel = string;

export const profileidModelSchema: Schema<ProfileidModel> = s.of<ProfileidModel>(s.union([s.string()]));
