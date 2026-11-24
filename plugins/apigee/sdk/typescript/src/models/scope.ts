import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Required. The scope of the attribute. It represents the resource in the API Hub to which the
 * attribute can be linked.
 */
export const Scope = {
  ScopeUnspecified: "SCOPE_UNSPECIFIED",
  Api: "API",
  Version: "VERSION",
  Spec: "SPEC",
  ApiOperation: "API_OPERATION",
  Deployment: "DEPLOYMENT",
  Dependency: "DEPENDENCY",
  Definition: "DEFINITION",
  ExternalApi: "EXTERNAL_API",
  Plugin: "PLUGIN",
} as const;
export type Scope = (typeof Scope)[keyof typeof Scope] | (string & {});

export const scopeSchema: EnumSchema<Scope> = s.enumOf<Scope>(Scope);
