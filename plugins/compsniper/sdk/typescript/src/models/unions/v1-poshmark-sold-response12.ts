import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  v1PoshmarkSoldResponse1Schema,
  type V1PoshmarkSoldResponse1,
} from "../v1-poshmark-sold-response1.js";
import {
  v1PoshmarkSoldResponse11Schema,
  type V1PoshmarkSoldResponse11,
} from "../v1-poshmark-sold-response11.js";

export type V1PoshmarkSoldResponse12 = V1PoshmarkSoldResponse1 | V1PoshmarkSoldResponse11;

export const v1PoshmarkSoldResponse12Schema: Schema<V1PoshmarkSoldResponse12> =
  s.of<V1PoshmarkSoldResponse12>(
    s.union([s.lazy(() => v1PoshmarkSoldResponse1Schema), s.lazy(() => v1PoshmarkSoldResponse11Schema)]),
  );
