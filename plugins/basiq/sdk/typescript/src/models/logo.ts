import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { colorsSchema, type Colors } from "./colors.js";
import {
  linksPlatformConnectorsApiSchema,
  type LinksPlatformConnectorsApi,
} from "./links-platform-connectors-api.js";

/** Institution logo resource type */
export type Logo = {
  /** Colors contains institution colors type */
  colors?: Colors;
  /** institution logo resource links */
  links: LinksPlatformConnectorsApi;
  /** Resource type identifier. image ImageResourceType @default "image" */
  type?: "image";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const logoSchema: Schema<Logo> = s.object<Logo>(
  {
    colors: s.optional(s.lazy(() => colorsSchema)),
    links: linksPlatformConnectorsApiSchema,
    type: s.defaulted(s.literal("image"), "image"),
  },
  { additionalProperties: s.json() },
);
