import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { hostSchema, type Host } from "../host.js";

export type Host1 = Host;

export const host1Schema: Schema<Host1> = s.of<Host1>(s.union([s.lazy(() => hostSchema)]));
