import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GivingSpaceResource = {
  id: string;
  name: string;
  amount: number;
  message: string;
  createdAt: string;
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const givingSpaceResourceSchema: Schema<GivingSpaceResource> = s.object<GivingSpaceResource>(
  {
    id: s.string(),
    name: s.string(),
    amount: s.float64(),
    message: s.string(),
    createdAt: s.string(),
    updatedAt: s.string(),
    _keysMap: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
