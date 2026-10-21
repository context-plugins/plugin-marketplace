import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Creates events from the list of services */
export type Services = {
  /** Enabled */
  enable?: boolean;
};

export const servicesSchema: Schema<Services> = s.object<Services>({
  enable: s.optional(s.boolean()),
});
