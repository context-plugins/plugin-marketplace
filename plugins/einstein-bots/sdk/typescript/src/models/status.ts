import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";

export type Status = {
  /** Health status of Einstein Bots API. */
  status: Status1;
};

export const statusSchema: Schema<Status> = s.object<Status>({
  status: status1Schema,
});
