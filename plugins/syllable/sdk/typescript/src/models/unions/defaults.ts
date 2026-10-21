import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { toolParameterDefaultSchema } from "../tool-parameter-default.js";

/** The default values for the parameters of the function/tool call. */
export type Defaults = Record<string, unknown>;

export const defaultsSchema: Schema<Defaults> = s.of<Defaults>(
  s.union([
    s.record(s.string(), s.unknown()),
    s.record(
      s.string(),
      s.lazy(() => toolParameterDefaultSchema),
    ),
  ]),
);
