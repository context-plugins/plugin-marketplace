import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PrimaryOrg = {
  href: string;
  sourcedId: string;
  type: string;
};

export const primaryOrgSchema: Schema<PrimaryOrg> = s.object<PrimaryOrg>({
  href: s.string(),
  sourcedId: s.string(),
  type: s.string(),
});
