import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CoreLink = {
  href: string;
  type: string;
};

export const coreLinkSchema: Schema<CoreLink> = s.object<CoreLink>({
  href: s.string(),
  type: s.string(),
});
