import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PrimaryOrg1 = {
  sourcedId: string;
};

export const primaryOrg1Schema: Schema<PrimaryOrg1> = s.object<PrimaryOrg1>({
  sourcedId: s.string(),
});
