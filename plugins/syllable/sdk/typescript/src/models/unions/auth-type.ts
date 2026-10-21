import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { toolAuthTypeSchema, type ToolAuthType } from "../tool-auth-type.js";

/** The type of authentication to use for the service's tools */
export type AuthType = ToolAuthType;

export const authTypeSchema: Schema<AuthType> = s.of<AuthType>(s.union([s.lazy(() => toolAuthTypeSchema)]));
