import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BodyDirectoryMemberBulkLoad = {
  file: Uint8Array;
};

export const bodyDirectoryMemberBulkLoadSchema: Schema<BodyDirectoryMemberBulkLoad> =
  s.object<BodyDirectoryMemberBulkLoad>({
    file: s.bytes(),
  });
