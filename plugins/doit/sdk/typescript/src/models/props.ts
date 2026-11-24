import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Component properties. For the "prop" category contains the matched property key-value pairs. */
export type Props = {
  /** Cloud service type (e.g. AWS::EC2::Instance). */
  serviceType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const propsSchema: Schema<Props> = s.object<Props>(
  {
    serviceType: s.optional(s.string()),
    _keysMap: {
      serviceType: "service_type",
    },
  },
  { additionalProperties: s.json() },
);
