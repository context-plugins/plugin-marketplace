import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  submittedComposeProjectRefInternalSchema,
  submittedComposeProjectRefSchema,
  type SubmittedComposeProjectRef,
} from "../submitted-compose-project-ref.js";

export type Root = SubmittedComposeProjectRef;

export const rootInternalSchema: Schema<Root> = s.of<Root>(
  s.union([s.lazy(() => submittedComposeProjectRefInternalSchema)]),
);

export const rootSchema: Schema<Root> = s.lazySchema(() =>
  s.of<Root>(s.union([s.lazy(() => submittedComposeProjectRefSchema)])),
);
