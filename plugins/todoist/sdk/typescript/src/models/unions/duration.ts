import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Duration = number | string;

export const durationSchema: Schema<Duration> = s.of<Duration>(s.union([s.int(), s.string()]));
