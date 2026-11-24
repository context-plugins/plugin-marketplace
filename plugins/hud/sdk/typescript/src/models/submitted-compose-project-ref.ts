import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Build-context location inside the selected environment source artifact. */
export type SubmittedComposeProjectRef = {
  composePath: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const submittedComposeProjectRefProperties: s.Shape<SubmittedComposeProjectRef> = {
  composePath: s.string(),
  _keysMap: {
    composePath: "compose_path",
  },
};

export const submittedComposeProjectRefInternalSchema: Schema<SubmittedComposeProjectRef> =
  s.object<SubmittedComposeProjectRef>(submittedComposeProjectRefProperties, {
    additionalProperties: s.json(),
  });

export const submittedComposeProjectRefSchema: Schema<SubmittedComposeProjectRef> = s.lazySchema(() =>
  s.object<SubmittedComposeProjectRef>(
    {
      ...submittedComposeProjectRefProperties,
      composePath: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
