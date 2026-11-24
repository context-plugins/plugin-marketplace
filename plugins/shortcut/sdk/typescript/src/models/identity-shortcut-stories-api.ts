import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

/** The Identity of the VCS user that authored the Commit. */
export type IdentityShortcutStoriesApi = {
  /** A string description of this resource. */
  entityType: string;
  /** This is your login in VCS. */
  name: string | null;
  /** The service this Identity is for. */
  type: Type1 | null;
};

export const identityShortcutStoriesApiSchema: Schema<IdentityShortcutStoriesApi> =
  s.object<IdentityShortcutStoriesApi>({
    entityType: s.string(),
    name: s.nullable(s.string()),
    type: s.nullable(s.lazy(() => type1Schema)),
    _keysMap: {
      entityType: "entity_type",
    },
  });
