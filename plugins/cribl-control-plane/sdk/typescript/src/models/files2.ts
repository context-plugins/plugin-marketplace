import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Files2 = {
  /** Status code for the file in the index (staging area), using Git short-format notation. */
  index: string;
  /** File path relative to the configuration root. */
  path: string;
  /** Status code for the file in the working directory, using Git short-format notation. */
  workingDir: string;
};

export const files2Schema: Schema<Files2> = s.object<Files2>({
  index: s.string(),
  path: s.string(),
  workingDir: s.string(),
  _keysMap: {
    workingDir: "working_dir",
  },
});
