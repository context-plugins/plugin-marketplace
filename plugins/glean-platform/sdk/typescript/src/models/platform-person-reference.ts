import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A lightweight reference to a person, used where a payload merely points at someone. */
export type PlatformPersonReference = {
  /** Opaque Glean person ID. */
  id?: string;
  /** Display name. */
  name: string;
};

export const platformPersonReferenceSchema: Schema<PlatformPersonReference> =
  s.object<PlatformPersonReference>({
    id: s.optional(s.string()),
    name: s.string(),
  });
