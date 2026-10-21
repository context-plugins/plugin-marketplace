import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The CX Flow ID as provided by the C2P SDK */
export type SrcCxFlowId = string;

export const srcCxFlowIdSchema: Schema<SrcCxFlowId> = s.of<SrcCxFlowId>(s.union([s.string()]));
