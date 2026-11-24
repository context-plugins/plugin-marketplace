import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Describes the type of requested change to a feature. example: 'featureUpdate' */
export const Operation = {
  FeatureUpdate: "featureUpdate",
  FeatureStatusUpdate: "featureStatusUpdate",
  FeatureStaticConfigurationUpdate: "featureStaticConfigurationUpdate",
} as const;
export type Operation = (typeof Operation)[keyof typeof Operation] | (string & {});

export const operationSchema: EnumSchema<Operation> = s.enumOf<Operation>(Operation);
