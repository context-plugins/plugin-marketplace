import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The type of the catalog. */
export const CatalogType = {
  CatalogTypeUnspecified: "CATALOG_TYPE_UNSPECIFIED",
  Hive: "HIVE",
  Iceberg: "ICEBERG",
} as const;
export type CatalogType = (typeof CatalogType)[keyof typeof CatalogType] | (string & {});

export const catalogTypeSchema: EnumSchema<CatalogType> = s.enumOf<CatalogType>(CatalogType);
