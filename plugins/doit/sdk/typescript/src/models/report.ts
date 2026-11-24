import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { labelInfoSchema, type LabelInfo } from "./label-info.js";
import { typeDoiTReportsApiSchema, type TypeDoiTReportsApi } from "./type-doi-treports-api.js";

/** Report metadata and the console URL. */
export type Report = {
  /** Report ID. */
  id?: string;
  /** The name of the report. */
  reportName?: string;
  /** Email address of the report owner. */
  owner?: string;
  type?: TypeDoiTReportsApi;
  /** The creation time of the report, in milliseconds since the epoch. */
  createTime?: number;
  /** The time when this report was last updated, in milliseconds since the epoch. */
  updateTime?: number;
  /** The URL of the report in DoiT console. */
  urlUi?: string;
  /** List of labels associated with the report. */
  labels?: LabelInfo[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reportSchema: Schema<Report> = s.object<Report>(
  {
    id: s.optional(s.string()),
    reportName: s.optional(s.string()),
    owner: s.optional(s.string()),
    type: s.optional(s.lazy(() => typeDoiTReportsApiSchema)),
    createTime: s.optional(s.int()),
    updateTime: s.optional(s.int()),
    urlUi: s.optional(s.string()),
    labels: s.optional(s.array(s.lazy(() => labelInfoSchema))),
    _keysMap: {
      urlUi: "urlUI",
    },
  },
  { additionalProperties: s.json() },
);
