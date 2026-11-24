import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Filter by geographic content scope. Accepts all, local, or world. */
export const TypePerigonMonitorsApi = {
  All: "ALL",
  Local: "LOCAL",
  World: "WORLD",
} as const;
export type TypePerigonMonitorsApi =
  | (typeof TypePerigonMonitorsApi)[keyof typeof TypePerigonMonitorsApi]
  | (string & {});

export const typePerigonMonitorsApiSchema: EnumSchema<TypePerigonMonitorsApi> =
  s.enumOf<TypePerigonMonitorsApi>(TypePerigonMonitorsApi);
