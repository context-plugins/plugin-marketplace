import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data1CommonelementsComVendorsApi = {
  /** Review id. */
  id?: string;
  /** 1 to 5. */
  rating?: number;
  /** Review text. */
  body?: string;
  /** Review lifecycle timestamps. */
  createdAt?: Date;
  /** Review lifecycle timestamps. */
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data1CommonelementsComVendorsApiSchema: Schema<Data1CommonelementsComVendorsApi> =
  s.object<Data1CommonelementsComVendorsApi>(
    {
      id: s.optional(s.string()),
      rating: s.optional(s.float64()),
      body: s.optional(s.string()),
      createdAt: s.optional(s.dateTime()),
      updatedAt: s.optional(s.dateTime()),
      _keysMap: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
    { additionalProperties: s.json() },
  );
