import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SearchFilterConfInputPrometheus = {
  /**
   * See https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html for
   * information. Attributes can be manually entered if not present in the list.
   */
  name: string;
  /**
   * Values to match within this row's attribute. If empty, search will return only running EC2
   * instances.
   */
  values: string[];
};

export const searchFilterConfInputPrometheusSchema: Schema<SearchFilterConfInputPrometheus> =
  s.object<SearchFilterConfInputPrometheus>({
    name: s.string(),
    values: s.array(s.string()),
    _keysMap: {
      name: "Name",
      values: "Values",
    },
  });
