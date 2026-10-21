import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authSchema, type Auth } from "./auth.js";
import { ldSchema, type Ld } from "./ld.js";

export type Chip = {
  lds: Ld[];
  auth: Auth[];
};

export const chipSchema: Schema<Chip> = s.object<Chip>({
  lds: s.array(s.lazy(() => ldSchema)),
  auth: s.array(s.lazy(() => authSchema)),
});
