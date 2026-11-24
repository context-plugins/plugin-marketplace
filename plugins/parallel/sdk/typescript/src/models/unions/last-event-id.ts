import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * ID of the last event of the run at the time of the request. This can be used to resume streaming
 * from the last event.
 */
export type LastEventId = string;

export const lastEventIdSchema: Schema<LastEventId> = s.of<LastEventId>(s.union([s.string()]));
