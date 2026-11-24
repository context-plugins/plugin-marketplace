import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type8Schema, type Type8 } from "./type8.js";

export type Upload1 = {
  id: string;
  teamId?: string | null;
  organizationId?: string | null;
  iconUrl?: string | null;
  thumbnailUrl?: string | null;
  url?: string | null;
  externalLink?: string | null;
  iconPath?: string | null;
  thumbnailPath?: string | null;
  path?: string | null;
  type: Type8;
  width?: number | null;
  height?: number | null;
  fileSize?: number | null;
  videoLength?: number | null;
  mime?: string | null;
  ext?: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const upload1Properties: s.Shape<Upload1> = {
  id: s.string(),
  teamId: s.optionalNullable(s.string()),
  organizationId: s.optionalNullable(s.string()),
  iconUrl: s.optionalNullable(s.string()),
  thumbnailUrl: s.optionalNullable(s.string()),
  url: s.optionalNullable(s.string()),
  externalLink: s.optionalNullable(s.string()),
  iconPath: s.optionalNullable(s.string()),
  thumbnailPath: s.optionalNullable(s.string()),
  path: s.optionalNullable(s.string()),
  type: type8Schema,
  width: s.optionalNullable(s.float64()),
  height: s.optionalNullable(s.float64()),
  fileSize: s.optionalNullable(s.float64()),
  videoLength: s.optionalNullable(s.float64()),
  mime: s.optionalNullable(s.string()),
  ext: s.optionalNullable(s.string()),
  createdAt: s.nullable(s.dateTime()),
  updatedAt: s.nullable(s.dateTime()),
};

export const upload1InternalSchema: Schema<Upload1> = s.object<Upload1>(upload1Properties, {
  additionalProperties: s.json(),
});

export const upload1Schema: Schema<Upload1> = s.lazySchema(() =>
  s.object<Upload1>(
    {
      ...upload1Properties,
      iconUrl: s.optionalNullable(s.string().check(s.url())),
      thumbnailUrl: s.optionalNullable(s.string().check(s.url())),
      url: s.optionalNullable(s.string().check(s.url())),
      externalLink: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
