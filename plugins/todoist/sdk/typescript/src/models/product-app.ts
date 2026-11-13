import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Product name as first-party clients spell it on the wire. */
export const ProductApp = {
  Todoist: "todoist",
  Comms: "comms",
  Automations: "automations",
} as const;
export type ProductApp = (typeof ProductApp)[keyof typeof ProductApp] | (string & {});

export const productAppSchema: EnumSchema<ProductApp> = s.enumOf<ProductApp>(ProductApp);
