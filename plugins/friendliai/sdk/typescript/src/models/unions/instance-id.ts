import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the instance. */
export type InstanceId = string;

export const instanceIdSchema: Schema<InstanceId> = s.of<InstanceId>(s.union([s.string()]));
