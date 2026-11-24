import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { brandingInternalSchema, brandingSchema, type Branding } from "./branding.js";
import { format4Schema, type Format4 } from "./format4.js";
import { InputFormat, inputFormatSchema } from "./input-format.js";
import { pageSetupInternalSchema, pageSetupSchema, type PageSetup } from "./page-setup.js";

export type V1ArtifactRequest = {
  /** The Markdown or HTML body to render. Up to ~4MB. */
  content: string;
  /**
   * How to interpret `content`. 'markdown' is converted to styled HTML; 'html' is used as a body
   * fragment.
   *
   * @default InputFormat.Markdown
   */
  inputFormat?: InputFormat;
  /** Which artifact formats to produce. Each format charges 1 credit. */
  formats?: Format4[];
  /** Optional theme applied to the artifact header, body, and footer. */
  branding?: Branding;
  /** Optional paper/viewport setup for the PDF and PNG. */
  pageSetup?: PageSetup;
  /**
   * Optional Mustache data. When present, `content` is rendered as a logic-less Mustache template
   * (plus the branding fields) before conversion.
   */
  data?: Record<string, unknown>;
  /** Seconds until the hosted URLs expire (3600–2592000). Default 86400 (24h). @default 86400 */
  expiresIn?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1ArtifactRequestProperties: s.Shape<V1ArtifactRequest> = {
  content: s.string(),
  inputFormat: s.defaulted(inputFormatSchema, InputFormat.Markdown),
  formats: s.optional(s.array(s.lazy(() => format4Schema))),
  branding: s.optional(s.lazy(() => brandingInternalSchema)),
  pageSetup: s.optional(s.lazy(() => pageSetupInternalSchema)),
  data: s.optional(s.record(s.string(), s.unknown())),
  expiresIn: s.defaulted(s.int(), 86400),
};

export const v1ArtifactRequestInternalSchema: Schema<V1ArtifactRequest> = s.object<V1ArtifactRequest>(
  v1ArtifactRequestProperties,
  { additionalProperties: s.json() },
);

export const v1ArtifactRequestSchema: Schema<V1ArtifactRequest> = s.lazySchema(() =>
  s.object<V1ArtifactRequest>(
    {
      ...v1ArtifactRequestProperties,
      formats: s.optional(s.array(s.lazy(() => format4Schema)).check(s.minLength(1), s.maxLength(2))),
      branding: s.optional(s.lazy(() => brandingSchema)),
      pageSetup: s.optional(s.lazy(() => pageSetupSchema)),
      expiresIn: s.defaulted(s.int().check(s.gte(3600), s.lte(2592000)), 86400),
    },
    { additionalProperties: s.json() },
  ),
);
