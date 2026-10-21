import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MassPaymentsRequest1 = {
  status: string;
};

export const massPaymentsRequest1Schema: Schema<MassPaymentsRequest1> = s.object<MassPaymentsRequest1>({
  status: s.string(),
});
