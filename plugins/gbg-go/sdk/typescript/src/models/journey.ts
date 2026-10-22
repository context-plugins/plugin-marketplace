import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type Journey = {
  status: Status;
};

export const journeySchema: Schema<Journey> = s.object<Journey>({
  status: statusSchema,
});
