import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { redirectUrlSchema, type RedirectUrl } from "./redirect-url.js";

export type Links26 = {
  redirectUrl: RedirectUrl;
};

export const links26Schema: Schema<Links26> = s.object<Links26>({
  redirectUrl: redirectUrlSchema,
  _keysMap: {
    redirectUrl: "redirect-url",
  },
});
