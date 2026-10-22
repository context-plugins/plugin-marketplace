import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SdkListRep = {
  /** The location and content type of related resources */
  links: Record<string, Record<string, unknown>>;
  /** The list of SDK names */
  sdks: string[];
};

export const sdkListRepSchema: Schema<SdkListRep> = s.object<SdkListRep>({
  links: s.record(s.string(), s.record(s.string(), s.unknown())),
  sdks: s.array(s.string()),
  _keysMap: {
    links: "_links",
  },
});
