import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { principalTypeSchema, type PrincipalType } from "./principal-type.js";

/** The user, group, or API key whose role assignments are being modified. */
export type Principal = {
  /** The type of principal. */
  type: PrincipalType;
  /** The unique identifier of the principal. For `apiKey`, provide the API key value. */
  id: string;
};

export const principalSchema: Schema<Principal> = s.object<Principal>({
  type: principalTypeSchema,
  id: s.string(),
});
