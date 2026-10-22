import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IconType = {
  Collection: "COLLECTION",
  Custom: "CUSTOM",
  Datasource: "DATASOURCE",
  DatasourceInstance: "DATASOURCE_INSTANCE",
  Favicon: "FAVICON",
  FileType: "FILE_TYPE",
  GeneratedBackground: "GENERATED_BACKGROUND",
  Glyph: "GLYPH",
  MimeType: "MIME_TYPE",
  NoIcon: "NO_ICON",
  Person: "PERSON",
  Reactions: "REACTIONS",
  Url: "URL",
} as const;
export type IconType = (typeof IconType)[keyof typeof IconType] | (string & {});

export const iconTypeSchema: EnumSchema<IconType> = s.enumOf<IconType>(IconType);
