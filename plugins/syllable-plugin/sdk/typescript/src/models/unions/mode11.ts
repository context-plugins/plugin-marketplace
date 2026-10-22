import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { modeSchema, type Mode } from "../mode.js";

/**
 * Voicemail-detection strategy: 'v1' (original check_voicemail/leave_voicemail) or 'v2' (Voicemail
 * Detection 2, which suppresses the turn-0 greeting and uses the greeting tool). The two modes are
 * mutually exclusive. Omitted/null on legacy v1 campaigns is treated as v1.
 */
export type Mode11 = Mode;

export const mode11Schema: Schema<Mode11> = s.of<Mode11>(s.union([s.lazy(() => modeSchema)]));
