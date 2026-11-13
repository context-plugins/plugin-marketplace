import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request parameters for removing a Label from a Shortcut Story. */
export type RemoveLabelParams = {
  /** The name of the new Label to remove. */
  name: string;
};

const removeLabelParamsProperties: s.Shape<RemoveLabelParams> = {
  name: s.string(),
};

export const removeLabelParamsInternalSchema: Schema<RemoveLabelParams> =
  s.object<RemoveLabelParams>(removeLabelParamsProperties);

export const removeLabelParamsSchema: Schema<RemoveLabelParams> = s.lazySchema(() =>
  s.object<RemoveLabelParams>({
    ...removeLabelParamsProperties,
    name: s.string().check(s.minLength(1), s.maxLength(128)),
  }),
);
