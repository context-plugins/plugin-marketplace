import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ownerSchema, type Owner } from "./owner.js";

export type CreateContextRequest = {
  /** The name of the context */
  name: string;
  owner: Owner;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createContextRequestSchema: Schema<CreateContextRequest> = s.object<CreateContextRequest>(
  {
    name: s.string(),
    owner: ownerSchema,
  },
  { additionalProperties: s.json() },
);
