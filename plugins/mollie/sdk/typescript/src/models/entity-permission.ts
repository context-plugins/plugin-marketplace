import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links13Schema, type Links13 } from "./links13.js";

export type EntityPermission = {
  /**
   * Indicates the response contains a permission object. Will always contain the string
   * `permission` for this endpoint.
   */
  resource: string;
  /** The identifier uniquely referring to this permission. Example: `payments.read`. */
  id: string;
  /** A short description of what kind of access the permission enables. */
  description: string;
  /** Whether this permission is granted to the app by the organization. */
  granted: boolean;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: Links13;
};

export const entityPermissionSchema: Schema<EntityPermission> = s.object<EntityPermission>({
  resource: s.string(),
  id: s.string(),
  description: s.string(),
  granted: s.boolean(),
  links: links13Schema,
  _keysMap: {
    links: "_links",
  },
});
