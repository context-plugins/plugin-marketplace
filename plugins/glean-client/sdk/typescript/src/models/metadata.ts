import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Some metadata of the object which can be displayed, while not having the actual object. */
export type Metadata = {
  /** Placeholder name of the object, not the relationship. */
  name?: string;
};

export const metadataSchema: Schema<Metadata> = s.object<Metadata>({
  name: s.optional(s.string()),
});
