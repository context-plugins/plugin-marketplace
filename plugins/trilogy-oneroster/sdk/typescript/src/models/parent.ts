import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Parent = {
  href: string;
  sourcedId: string;
  type: string;
};

export const parentSchema: Schema<Parent> = s.object<Parent>({
  href: s.string(),
  sourcedId: s.string(),
  type: s.string(),
});
