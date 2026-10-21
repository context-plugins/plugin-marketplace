import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The timestamp of the user's last session */
export type LastSessionAt = Date;

export const lastSessionAtSchema: Schema<LastSessionAt> = s.of<LastSessionAt>(s.union([s.dateTime()]));
