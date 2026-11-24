import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { purviewInternalSchema, purviewSchema, type Purview } from "./purview.js";
import { termClassificationSchema, type TermClassification } from "./term-classification.js";

export type ApiV1ScreenRequest = {
  /** The text about to be sent to a model. Screened in memory and never stored */
  text?: string;
  /**
   * What was found, by kind, when the text was screened where it is (the SDKs do this) and is not
   * being sent
   */
  counts?: Record<string, number>;
  /** With counts: the strictest classification among the terms found */
  termClassification?: TermClassification;
  /** The AI register's record for the model it is going to */
  aiSystemId?: string;
  /** What the text is for, for the person asked: 'Summarise a claim file' */
  purpose?: string;
  /** Your own reference, kept on any approval this asks for */
  externalId?: string;
  /**
   * Microsoft Purview's answer on the text, from the SDKs' purviewCheck: the strictest restriction
   * its DLP policies returned (block, warn, audit or none). The text itself went to Microsoft,
   * never here
   */
  purview?: Purview;
  /** Whether an `ask` verdict creates an approval for a person. Default true */
  ask?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ScreenRequestProperties: s.Shape<ApiV1ScreenRequest> = {
  text: s.optional(s.string()),
  counts: s.optional(s.record(s.string(), s.int())),
  termClassification: s.optional(s.lazy(() => termClassificationSchema)),
  aiSystemId: s.optional(s.string()),
  purpose: s.optional(s.string()),
  externalId: s.optional(s.string()),
  purview: s.optional(s.lazy(() => purviewInternalSchema)),
  ask: s.optional(s.boolean()),
};

export const apiV1ScreenRequestInternalSchema: Schema<ApiV1ScreenRequest> = s.object<ApiV1ScreenRequest>(
  apiV1ScreenRequestProperties,
  { additionalProperties: s.json() },
);

export const apiV1ScreenRequestSchema: Schema<ApiV1ScreenRequest> = s.lazySchema(() =>
  s.object<ApiV1ScreenRequest>(
    {
      ...apiV1ScreenRequestProperties,
      text: s.optional(s.string().check(s.maxLength(200000))),
      counts: s.optional(s.record(s.string(), s.int().check(s.gte(0), s.lte(1000000)))),
      purpose: s.optional(s.string().check(s.maxLength(500))),
      externalId: s.optional(s.string().check(s.maxLength(200))),
      purview: s.optional(s.lazy(() => purviewSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
