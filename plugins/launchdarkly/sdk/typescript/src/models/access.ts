import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessAllowedRepSchema, type AccessAllowedRep } from "./access-allowed-rep.js";
import { accessDeniedSchema, type AccessDenied } from "./access-denied.js";

export type Access = {
  denied: AccessDenied[];
  allowed: AccessAllowedRep[];
};

export const accessSchema: Schema<Access> = s.object<Access>({
  denied: s.array(s.lazy(() => accessDeniedSchema)),
  allowed: s.array(s.lazy(() => accessAllowedRepSchema)),
});
