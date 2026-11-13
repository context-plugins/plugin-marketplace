import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { emailObjectTypeSchema, type EmailObjectType } from "./email-object-type.js";

export type Body4 = {
  /** Type of Todoist object to create an email for. */
  objType: EmailObjectType;
  /** String ID of the Todoist object. */
  objId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const body4Schema: Schema<Body4> = s.object<Body4>(
  {
    objType: emailObjectTypeSchema,
    objId: s.string(),
    _keysMap: {
      objType: "obj_type",
      objId: "obj_id",
    },
  },
  { additionalProperties: s.json() },
);
