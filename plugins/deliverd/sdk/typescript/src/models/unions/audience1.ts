import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { audienceInternalSchema, audienceSchema, type Audience } from "../audience.js";

export type Audience1 = string | Audience;

export const audience1InternalSchema: Schema<Audience1> = s.of<Audience1>(
  s.union([s.string(), s.lazy(() => audienceInternalSchema)]),
);

export const audience1Schema: Schema<Audience1> = s.lazySchema(() =>
  s.of<Audience1>(
    s.union([s.string().check(s.minLength(1), s.maxLength(200)), s.lazy(() => audienceSchema)]),
  ),
);
