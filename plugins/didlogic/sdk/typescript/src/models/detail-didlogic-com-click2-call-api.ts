import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DetailDidlogicComClick2CallApi = {
  code: string;
  message: string;
  field: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detailDidlogicComClick2CallApiSchema: Schema<DetailDidlogicComClick2CallApi> =
  s.object<DetailDidlogicComClick2CallApi>(
    {
      code: s.string(),
      message: s.string(),
      field: s.nullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
