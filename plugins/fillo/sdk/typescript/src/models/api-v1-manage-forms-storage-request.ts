import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { destination1Schema, type Destination1 } from "./destination1.js";

export type ApiV1ManageFormsStorageRequest = {
  destination: Destination1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageFormsStorageRequestSchema: Schema<ApiV1ManageFormsStorageRequest> =
  s.object<ApiV1ManageFormsStorageRequest>(
    {
      destination: destination1Schema,
    },
    { additionalProperties: s.json() },
  );
