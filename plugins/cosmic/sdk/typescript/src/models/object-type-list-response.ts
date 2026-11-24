import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { objectTypeSchema, type ObjectType } from "./object-type.js";

export type ObjectTypeListResponse = {
  objectTypes: ObjectType[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const objectTypeListResponseSchema: Schema<ObjectTypeListResponse> = s.object<ObjectTypeListResponse>(
  {
    objectTypes: s.array(s.lazy(() => objectTypeSchema)),
    _keysMap: {
      objectTypes: "object_types",
    },
  },
  { additionalProperties: s.json() },
);
