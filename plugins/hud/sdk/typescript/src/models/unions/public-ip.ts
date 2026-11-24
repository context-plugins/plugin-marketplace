import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PublicIp = string;

export const publicIpSchema: Schema<PublicIp> = s.of<PublicIp>(s.union([s.string()]));
