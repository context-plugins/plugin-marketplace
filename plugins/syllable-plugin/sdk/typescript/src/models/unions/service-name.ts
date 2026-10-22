import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The name of the service to which the tool belongs */
export type ServiceName = string;

export const serviceNameSchema: Schema<ServiceName> = s.of<ServiceName>(s.union([s.string()]));
