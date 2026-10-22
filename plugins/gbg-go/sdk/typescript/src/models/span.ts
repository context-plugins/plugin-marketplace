import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Span = {
  id: string;
};

export const spanSchema: Schema<Span> = s.object<Span>({
  id: s.string(),
});
