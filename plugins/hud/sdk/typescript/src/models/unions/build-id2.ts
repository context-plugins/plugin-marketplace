import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filter scenarios to a specific build of this registry. Defaults to the registry's latest build
 * when omitted.
 */
export type BuildId2 = string;

export const buildId2Schema: Schema<BuildId2> = s.of<BuildId2>(s.union([s.string()]));
