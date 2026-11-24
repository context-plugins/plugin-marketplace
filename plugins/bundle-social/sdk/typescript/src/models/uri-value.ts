import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UriValue = {
  uri: string;
};

export const uriValueSchema: Schema<UriValue> = s.object<UriValue>({
  uri: s.string(),
});
