import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. Type of this resource. */
export const Type1 = {
  ResourceTypeUnspecified: "RESOURCE_TYPE_UNSPECIFIED",
  ApiProxy: "API_PROXY",
  ApiHubDeployment: "API_HUB_DEPLOYMENT",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
