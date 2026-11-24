import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { identityInternalSchema, identitySchema, type Identity } from "../identity.js";

export type Identity1 = Identity;

export const identity1InternalSchema: Schema<Identity1> = s.of<Identity1>(
  s.union([s.lazy(() => identityInternalSchema)]),
);

export const identity1Schema: Schema<Identity1> = s.lazySchema(() =>
  s.of<Identity1>(s.union([s.lazy(() => identitySchema)])),
);
