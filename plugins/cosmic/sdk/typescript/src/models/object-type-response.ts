import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { objectTypeSchema, type ObjectType } from "./object-type.js";

export type ObjectTypeResponse = {
  /** The content model shared by every Object in the type. */
  objectType: ObjectType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const objectTypeResponseSchema: Schema<ObjectTypeResponse> = s.object<ObjectTypeResponse>(
  {
    objectType: objectTypeSchema,
    _keysMap: {
      objectType: "object_type",
    },
  },
  { additionalProperties: s.json() },
);
