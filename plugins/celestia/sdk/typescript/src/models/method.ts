import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Method = {
  BlobSubmit: "blob.Submit",
  BlobGet: "blob.Get",
  BlobGetAll: "blob.GetAll",
  BlobGetProof: "blob.GetProof",
  BlobIncluded: "blob.Included",
  BlobSubscribe: "blob.Subscribe",
} as const;
export type Method = (typeof Method)[keyof typeof Method] | (string & {});

export const methodSchema: EnumSchema<Method> = s.enumOf<Method>(Method);
