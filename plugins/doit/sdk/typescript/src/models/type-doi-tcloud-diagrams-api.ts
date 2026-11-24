import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Component type. */
export const TypeDoiTCloudDiagramsApi = {
  Attachment: "attachment",
  Combiner: "combiner",
  Element: "element",
  Group: "group",
  Link: "link",
  Node: "node",
  Note: "note",
  Scheme: "scheme",
  Statussheet: "statussheet",
} as const;
export type TypeDoiTCloudDiagramsApi =
  | (typeof TypeDoiTCloudDiagramsApi)[keyof typeof TypeDoiTCloudDiagramsApi]
  | (string & {});

export const typeDoiTCloudDiagramsApiSchema: EnumSchema<TypeDoiTCloudDiagramsApi> =
  s.enumOf<TypeDoiTCloudDiagramsApi>(TypeDoiTCloudDiagramsApi);
