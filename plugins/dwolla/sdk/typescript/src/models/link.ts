import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { destination5Schema, type Destination5 } from "./destination5.js";

/** Link wrapper for the destination funding source (Dwolla HAL-style single link). */
export type Link = {
  destination: Destination5;
};

export const linkSchema: Schema<Link> = s.object<Link>({
  destination: destination5Schema,
});
