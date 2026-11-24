import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { xPlinthSchema, type XPlinth } from "../xplinth.js";

export type XPlinth1 = XPlinth;

export const xPlinth1Schema: Schema<XPlinth1> = s.of<XPlinth1>(s.union([s.lazy(() => xPlinthSchema)]));
