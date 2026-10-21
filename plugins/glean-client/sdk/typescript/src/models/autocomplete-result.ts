import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentSchema, type Document } from "./document.js";
import { operatorMetadataSchema, type OperatorMetadata } from "./operator-metadata.js";
import { quicklinkSchema, type Quicklink } from "./quicklink.js";
import { resultTypeSchema, type ResultType } from "./result-type.js";
import { structuredResultSchema, type StructuredResult } from "./structured-result.js";
import { textRangeSchema, type TextRange } from "./text-range.js";
import { ugcActionSchema, type UgcAction } from "./ugc-action.js";

export type AutocompleteResult = {
  result: string;
  /** A list of all possible keywords for given result. */
  keywords?: string[];
  resultType?: ResultType;
  /** Higher indicates a more confident match. */
  score?: number;
  operatorMetadata?: OperatorMetadata;
  /**
   * An action for a specific datasource that will show up in autocomplete and app card, e.g.
   * "Create new issue" for jira.
   */
  quicklink?: Quicklink;
  document?: Document;
  url?: string;
  /**
   * A single object that can support any object in the work graph. Only a single object will be
   * populated.
   */
  structuredResult?: StructuredResult;
  /**
   * An action to perform on user-generated content. This may be accompanied by `text` on the
   * ChatMessageFragment, which acts as the display name content of the pill.
   */
  ugcAction?: UgcAction;
  /** A token to be passed in /feedback events associated with this autocomplete result. */
  trackingToken?: string;
  /**
   * Subsections of the result string to which some special formatting should be applied (eg. bold)
   */
  ranges?: TextRange[];
};

export const autocompleteResultSchema: Schema<AutocompleteResult> = s.object<AutocompleteResult>({
  result: s.string(),
  keywords: s.optional(s.array(s.string())),
  resultType: s.optional(s.lazy(() => resultTypeSchema)),
  score: s.optional(s.float64()),
  operatorMetadata: s.optional(s.lazy(() => operatorMetadataSchema)),
  quicklink: s.optional(s.lazy(() => quicklinkSchema)),
  document: s.optional(s.lazy(() => documentSchema)),
  url: s.optional(s.string()),
  structuredResult: s.optional(s.lazy(() => structuredResultSchema)),
  ugcAction: s.optional(s.lazy(() => ugcActionSchema)),
  trackingToken: s.optional(s.string()),
  ranges: s.optional(s.array(s.lazy(() => textRangeSchema))),
});
