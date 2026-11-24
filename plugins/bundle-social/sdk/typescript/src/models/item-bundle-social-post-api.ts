import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type ItemBundleSocialPostApi = {
  id: string;
  title: string;
  postDate: Date | null;
  status: Status;
  createdAt: Date | null;
  updatedAt: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemBundleSocialPostApiSchema: Schema<ItemBundleSocialPostApi> =
  s.object<ItemBundleSocialPostApi>(
    {
      id: s.string(),
      title: s.string(),
      postDate: s.nullable(s.dateTime()),
      status: statusSchema,
      createdAt: s.nullable(s.dateTime()),
      updatedAt: s.nullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
