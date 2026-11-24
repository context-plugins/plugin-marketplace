import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { baseInheritanceSchema, type BaseInheritance } from "../base-inheritance.js";
import {
  urlBypassUpdateBodyInternalSchema,
  urlBypassUpdateBodySchema,
  type UrlBypassUpdateBody,
} from "../url-bypass-update-body.js";

export type Data61 = BaseInheritance | UrlBypassUpdateBody;

export const data61InternalSchema: Schema<Data61> = s.of<Data61>(
  s.union([s.lazy(() => baseInheritanceSchema), s.lazy(() => urlBypassUpdateBodyInternalSchema)]),
);

export const data61Schema: Schema<Data61> = s.lazySchema(() =>
  s.of<Data61>(s.union([s.lazy(() => baseInheritanceSchema), s.lazy(() => urlBypassUpdateBodySchema)])),
);
