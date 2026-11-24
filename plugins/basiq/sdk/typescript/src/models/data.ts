import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { permissionSchema, type Permission } from "./permission.js";

export type Data = {
  retainData: boolean;
  initialRetrievalDays?: number;
  organisation?: boolean | null;
  permissions: Permission[];
};

export const dataSchema: Schema<Data> = s.object<Data>({
  retainData: s.boolean(),
  initialRetrievalDays: s.optional(s.int()),
  organisation: s.optionalNullable(s.boolean()),
  permissions: s.array(s.lazy(() => permissionSchema)),
});
