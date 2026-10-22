import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links29Schema, type Links29 } from "./links29.js";

export type KbaResponse1 = {
  links?: Links29;
  verificationStatus?: string;
};

export const kbaResponse1Schema: Schema<KbaResponse1> = s.object<KbaResponse1>({
  links: s.optional(s.lazy(() => links29Schema)),
  verificationStatus: s.optional(s.string()),
  _keysMap: {
    links: "_links",
  },
});
