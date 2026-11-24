import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  applicationBypassUpdateBodyInternalSchema,
  applicationBypassUpdateBodySchema,
  type ApplicationBypassUpdateBody,
} from "../application-bypass-update-body.js";
import { baseInheritanceSchema, type BaseInheritance } from "../base-inheritance.js";

export type Data81 = BaseInheritance | ApplicationBypassUpdateBody;

export const data81InternalSchema: Schema<Data81> = s.of<Data81>(
  s.union([s.lazy(() => baseInheritanceSchema), s.lazy(() => applicationBypassUpdateBodyInternalSchema)]),
);

export const data81Schema: Schema<Data81> = s.lazySchema(() =>
  s.of<Data81>(
    s.union([s.lazy(() => baseInheritanceSchema), s.lazy(() => applicationBypassUpdateBodySchema)]),
  ),
);
