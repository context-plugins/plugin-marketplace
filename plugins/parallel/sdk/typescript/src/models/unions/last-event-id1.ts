import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type LastEventId1 = string;

export const lastEventId1Schema: Schema<LastEventId1> = s.of<LastEventId1>(s.union([s.string()]));
