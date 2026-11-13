import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

/** The Identity of the VCS user that authored the Commit. */
export type Identity = {
  /** A string description of this resource. */
  entityType: string;
  /** This is your login in VCS. */
  name: string | null;
  /** The service this Identity is for. */
  type: Type | null;
};

export const identitySchema: Schema<Identity> = s.object<Identity>({
  entityType: s.string(),
  name: s.nullable(s.string()),
  type: s.nullable(s.lazy(() => typeSchema)),
  _keysMap: {
    entityType: "entity_type",
  },
});
