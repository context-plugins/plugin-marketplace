import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Association = {
  routeTableAssociationId?: string;
  routeTableId?: string;
  subnetId?: string;
  gatewayId?: string;
  /** Indicates whether this is the main route table */
  main?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const associationSchema: Schema<Association> = s.object<Association>(
  {
    routeTableAssociationId: s.optional(s.string()),
    routeTableId: s.optional(s.string()),
    subnetId: s.optional(s.string()),
    gatewayId: s.optional(s.string()),
    main: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
