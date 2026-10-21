import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select the type of Dynatrace endpoint configured */
export const EndpointType = {
  Saas: "saas",
  Ag: "ag",
} as const;
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType] | (string & {});

export const endpointTypeSchema: EnumSchema<EndpointType> = s.enumOf<EndpointType>(EndpointType);
