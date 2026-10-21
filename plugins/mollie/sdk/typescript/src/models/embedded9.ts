import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listEntityPermissionSchema, type ListEntityPermission } from "./list-entity-permission.js";

export type Embedded9 = {
  /** An array of permission objects. */
  permissions: ListEntityPermission[];
};

export const embedded9Schema: Schema<Embedded9> = s.object<Embedded9>({
  permissions: s.array(s.lazy(() => listEntityPermissionSchema)),
});
