import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sdkVersionRepSchema, type SdkVersionRep } from "./sdk-version-rep.js";

export type SdkVersionListRep = {
  /** The location and content type of related resources */
  links: Record<string, Record<string, unknown>>;
  /** The list of SDK names and versions */
  sdkVersions: SdkVersionRep[];
};

export const sdkVersionListRepSchema: Schema<SdkVersionListRep> = s.object<SdkVersionListRep>({
  links: s.record(s.string(), s.record(s.string(), s.unknown())),
  sdkVersions: s.array(s.lazy(() => sdkVersionRepSchema)),
  _keysMap: {
    links: "_links",
  },
});
