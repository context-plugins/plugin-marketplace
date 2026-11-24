import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type XRapidapiUser = string;

export const xRapidapiUserSchema: Schema<XRapidapiUser> = s.of<XRapidapiUser>(s.union([s.string()]));
