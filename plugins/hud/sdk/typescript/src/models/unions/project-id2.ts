import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Only tasksets contained by this Project; omitted lists every Project */
export type ProjectId2 = string;

export const projectId2Schema: Schema<ProjectId2> = s.of<ProjectId2>(s.union([s.string()]));
