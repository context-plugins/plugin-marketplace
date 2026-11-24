import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  newsParametersInternalSchema,
  newsParametersSchema,
  type NewsParameters,
} from "../news-parameters.js";

export type NewsRequest = NewsParameters | NewsParameters[];

export const newsRequestInternalSchema: Schema<NewsRequest> = s.of<NewsRequest>(
  s.union([s.lazy(() => newsParametersInternalSchema), s.array(s.lazy(() => newsParametersInternalSchema))]),
);

export const newsRequestSchema: Schema<NewsRequest> = s.lazySchema(() =>
  s.of<NewsRequest>(
    s.union([
      s.lazy(() => newsParametersSchema),
      s.array(s.lazy(() => newsParametersSchema)).check(s.minLength(1)),
    ]),
  ),
);
