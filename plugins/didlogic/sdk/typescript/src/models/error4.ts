import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  detailDidlogicComClick2CallApiSchema,
  type DetailDidlogicComClick2CallApi,
} from "./detail-didlogic-com-click2-call-api.js";

export type Error4 = {
  code: string;
  message: string;
  details: DetailDidlogicComClick2CallApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error4Schema: Schema<Error4> = s.object<Error4>(
  {
    code: s.string(),
    message: s.string(),
    details: s.array(s.lazy(() => detailDidlogicComClick2CallApiSchema)),
  },
  { additionalProperties: s.json() },
);
