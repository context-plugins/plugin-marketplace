import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** An enumeration. */
export const IosSortEnum = {
  RevenueMonth: "revenue_month",
  RevenueMonth2: "-revenue_month",
  DownloadsMonth: "downloads_month",
  DownloadsMonth2: "-downloads_month",
  UpdateDate: "update_date",
  UpdateDate2: "-update_date",
  ReleaseDate: "release_date",
  ReleaseDate2: "-release_date",
  RemovalDate: "removal_date",
  RemovalDate2: "-removal_date",
  DownloadsExact: "downloads_exact",
  DownloadsExact2: "-downloads_exact",
  DownloadsMark: "downloads_mark",
  DownloadsMark2: "-downloads_mark",
  RatingCount: "rating_count",
  RatingCount2: "-rating_count",
  RatingValue: "rating_value",
  RatingValue2: "-rating_value",
  ReviewCount: "review_count",
  ReviewCount2: "-review_count",
  RatingAvg: "rating_avg",
  RatingAvg2: "-rating_avg",
  ChartInfo: "chart_info",
  ChartInfo2: "-chart_info",
} as const;
export type IosSortEnum = (typeof IosSortEnum)[keyof typeof IosSortEnum] | (string & {});

export const iosSortEnumSchema: EnumSchema<IosSortEnum> = s.enumOf<IosSortEnum>(IosSortEnum);
