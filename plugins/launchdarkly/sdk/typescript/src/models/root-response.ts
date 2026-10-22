import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type RootResponse = {
  links: Record<string, Link>;
};

export const rootResponseSchema: Schema<RootResponse> = s.object<RootResponse>({
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
});
