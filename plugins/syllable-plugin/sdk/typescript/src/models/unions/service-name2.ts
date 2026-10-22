import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Service display name. */
export type ServiceName2 = string;

export const serviceName2Schema: Schema<ServiceName2> = s.of<ServiceName2>(s.union([s.string()]));
