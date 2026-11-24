import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * You can opt in to allow the export of your certificates by specifying ENABLED. You cannot update
 * the value of Export after the the certificate is created.
 */
export const Export = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type Export = (typeof Export)[keyof typeof Export] | (string & {});

export const exportSchema: EnumSchema<Export> = s.enumOf<Export>(Export);
