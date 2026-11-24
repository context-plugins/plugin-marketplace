import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ProfileLevels = string;

export const profileLevelsSchema: Schema<ProfileLevels> = s.of<ProfileLevels>(s.union([s.string()]));
