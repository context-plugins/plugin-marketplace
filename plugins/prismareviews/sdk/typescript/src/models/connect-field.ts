import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typePrismaReviewsPlatformsApiSchema,
  type TypePrismaReviewsPlatformsApi,
} from "./type-prisma-reviews-platforms-api.js";

export type ConnectField = {
  /** Key inside `credentials`, or `listing_url` at the top level of the request. */
  name: string;
  /** Label for a form. */
  label: string;
  type: TypePrismaReviewsPlatformsApi;
  required: boolean;
  /** Example value. */
  placeholder?: string;
  /** Where to find the value. */
  help?: string;
  /** For textarea fields: the file the value usually comes from. */
  fileAccept?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const connectFieldSchema: Schema<ConnectField> = s.object<ConnectField>(
  {
    name: s.string(),
    label: s.string(),
    type: typePrismaReviewsPlatformsApiSchema,
    required: s.boolean(),
    placeholder: s.optional(s.string()),
    help: s.optional(s.string()),
    fileAccept: s.optional(s.string()),
    _keysMap: {
      fileAccept: "file_accept",
    },
  },
  { additionalProperties: s.json() },
);
