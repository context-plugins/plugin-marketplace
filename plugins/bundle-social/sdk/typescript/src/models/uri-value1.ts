import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UriValue1 = {
  uri: string;
};

const uriValue1Properties: s.Shape<UriValue1> = {
  uri: s.string(),
};

export const uriValue1InternalSchema: Schema<UriValue1> = s.object<UriValue1>(uriValue1Properties);

export const uriValue1Schema: Schema<UriValue1> = s.lazySchema(() =>
  s.object<UriValue1>({
    ...uriValue1Properties,
    uri: s.string().check(s.minLength(1)),
  }),
);
