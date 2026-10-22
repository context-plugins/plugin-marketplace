import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  dependentFlagEnvironmentSchema,
  type DependentFlagEnvironment,
} from "./dependent-flag-environment.js";

export type MultiEnvironmentDependentFlag = {
  /** The flag name */
  name?: string;
  /** The flag key */
  key: string;
  /** A list of environments in which the dependent flag appears */
  environments: DependentFlagEnvironment[];
};

export const multiEnvironmentDependentFlagSchema: Schema<MultiEnvironmentDependentFlag> =
  s.object<MultiEnvironmentDependentFlag>({
    name: s.optional(s.string()),
    key: s.string(),
    environments: s.array(s.lazy(() => dependentFlagEnvironmentSchema)),
  });
