import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type DeepcrawlRequest = {
  url: string;
  type?: Type;
};

const deepcrawlRequestProperties: s.Shape<DeepcrawlRequest> = {
  url: s.string(),
  type: s.optional(s.lazy(() => typeSchema)),
};

export const deepcrawlRequestInternalSchema: Schema<DeepcrawlRequest> =
  s.object<DeepcrawlRequest>(deepcrawlRequestProperties);

export const deepcrawlRequestSchema: Schema<DeepcrawlRequest> = s.lazySchema(() =>
  s.object<DeepcrawlRequest>({
    ...deepcrawlRequestProperties,
    url: s.string().check(s.url()),
  }),
);
