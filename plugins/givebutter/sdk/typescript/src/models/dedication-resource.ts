import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { recipientSchema, type Recipient } from "./recipient.js";

export type DedicationResource = {
  type: string;
  name: string;
  recipient: Recipient;
  createdAt: string;
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dedicationResourceSchema: Schema<DedicationResource> = s.object<DedicationResource>(
  {
    type: s.string(),
    name: s.string(),
    recipient: recipientSchema,
    createdAt: s.string(),
    updatedAt: s.string(),
    _keysMap: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
