import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentationSchema, type Documentation } from "./documentation.js";

export type Links1 = {
  /** The URL to the generic Mollie API error handling guide. */
  documentation: Documentation;
};

export const links1Schema: Schema<Links1> = s.object<Links1>({
  documentation: documentationSchema,
});
