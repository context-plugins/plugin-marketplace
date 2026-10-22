import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Reference to the Component Resource that this assessment line item is associated with. */
export type ComponentResource = {
  sourcedId: string;
};

export const componentResourceSchema: Schema<ComponentResource> = s.object<ComponentResource>({
  sourcedId: s.string(),
});
