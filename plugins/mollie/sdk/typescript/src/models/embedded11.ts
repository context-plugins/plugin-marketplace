import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entityCapabilitySchema, type EntityCapability } from "./entity-capability.js";

export type Embedded11 = {
  capabilities: EntityCapability[];
};

export const embedded11Schema: Schema<Embedded11> = s.object<Embedded11>({
  capabilities: s.array(s.lazy(() => entityCapabilitySchema)),
});
