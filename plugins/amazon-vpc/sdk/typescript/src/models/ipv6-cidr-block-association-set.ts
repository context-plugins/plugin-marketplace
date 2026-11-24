import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ipv6CidrBlockStateSchema, type Ipv6CidrBlockState } from "./ipv6-cidr-block-state.js";

export type Ipv6CidrBlockAssociationSet = {
  ipv6CidrBlock?: string;
  associationId?: string;
  ipv6CidrBlockState?: Ipv6CidrBlockState;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipv6CidrBlockAssociationSetSchema: Schema<Ipv6CidrBlockAssociationSet> =
  s.object<Ipv6CidrBlockAssociationSet>(
    {
      ipv6CidrBlock: s.optional(s.string()),
      associationId: s.optional(s.string()),
      ipv6CidrBlockState: s.optional(s.lazy(() => ipv6CidrBlockStateSchema)),
    },
    { additionalProperties: s.json() },
  );
