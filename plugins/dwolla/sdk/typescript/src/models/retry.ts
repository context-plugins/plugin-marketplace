import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Retry = {
  href?: string;
};

export const retrySchema: Schema<Retry> = s.object<Retry>({
  href: s.optional(s.string()),
});
