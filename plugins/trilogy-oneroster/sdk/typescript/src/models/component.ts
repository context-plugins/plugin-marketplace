import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Reference to the Component that this assessment line item is associated with. */
export type Component = {
  sourcedId: string;
};

export const componentSchema: Schema<Component> = s.object<Component>({
  sourcedId: s.string(),
});
