import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Controls tracking of task run execution progress. When set to true, progress events are recorded
 * and can be accessed via the [Task Run events](https://docs.parallel.ai/api-reference) endpoint.
 * When false, no progress events are tracked. Note that progress tracking cannot be enabled after a
 * run has been created. The flag is set to true by default for premium processors (pro and above).
 */
export type EnableEvents = boolean;

export const enableEventsSchema: Schema<EnableEvents> = s.of<EnableEvents>(s.union([s.boolean()]));
