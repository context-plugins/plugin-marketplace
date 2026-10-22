import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** A unique identifier for dipatched job */
export type DispatchId = string;

export const dispatchIdSchema: Schema<DispatchId> = s.of<DispatchId>(s.union([s.string()]));
