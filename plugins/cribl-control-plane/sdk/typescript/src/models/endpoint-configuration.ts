import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enter the data collection endpoint URL or the individual ID */
export const EndpointConfiguration = {
  Url: "url",
  Id: "ID",
} as const;
export type EndpointConfiguration =
  | (typeof EndpointConfiguration)[keyof typeof EndpointConfiguration]
  | (string & {});

export const endpointConfigurationSchema: EnumSchema<EndpointConfiguration> =
  s.enumOf<EndpointConfiguration>(EndpointConfiguration);
