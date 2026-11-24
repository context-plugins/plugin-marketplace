import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cidrBlockStateSchema, type CidrBlockState } from "./cidr-block-state.js";

export type CidrBlockAssociationSet = {
  cidrBlock?: string;
  associationId?: string;
  cidrBlockState?: CidrBlockState;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cidrBlockAssociationSetSchema: Schema<CidrBlockAssociationSet> =
  s.object<CidrBlockAssociationSet>(
    {
      cidrBlock: s.optional(s.string()),
      associationId: s.optional(s.string()),
      cidrBlockState: s.optional(s.lazy(() => cidrBlockStateSchema)),
    },
    { additionalProperties: s.json() },
  );
