import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Download a specific build's source archive. Defaults to the registry's latest build when omitted.
 */
export type BuildId1 = string;

export const buildId1Schema: Schema<BuildId1> = s.of<BuildId1>(s.union([s.string()]));
