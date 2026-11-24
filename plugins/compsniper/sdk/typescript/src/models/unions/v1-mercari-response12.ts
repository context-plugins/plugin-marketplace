import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { v1MercariResponse1Schema, type V1MercariResponse1 } from "../v1-mercari-response1.js";
import { v1MercariResponse11Schema, type V1MercariResponse11 } from "../v1-mercari-response11.js";

export type V1MercariResponse12 = V1MercariResponse1 | V1MercariResponse11;

export const v1MercariResponse12Schema: Schema<V1MercariResponse12> = s.of<V1MercariResponse12>(
  s.union([s.lazy(() => v1MercariResponse1Schema), s.lazy(() => v1MercariResponse11Schema)]),
);
