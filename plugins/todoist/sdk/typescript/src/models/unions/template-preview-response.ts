import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  projectTemplatePreviewResponseSchema,
  type ProjectTemplatePreviewResponse,
} from "../project-template-preview-response.js";
import {
  setupTemplatePreviewResponseInternalSchema,
  setupTemplatePreviewResponseSchema,
  type SetupTemplatePreviewResponse,
} from "../setup-template-preview-response.js";

export type TemplatePreviewResponse = ProjectTemplatePreviewResponse | SetupTemplatePreviewResponse;

export const templatePreviewResponseInternalSchema: Schema<TemplatePreviewResponse> =
  s.of<TemplatePreviewResponse>(
    s.union([
      s.lazy(() => projectTemplatePreviewResponseSchema),
      s.lazy(() => setupTemplatePreviewResponseInternalSchema),
    ]),
  );

export const templatePreviewResponseSchema: Schema<TemplatePreviewResponse> = s.lazySchema(() =>
  s.of<TemplatePreviewResponse>(
    s.union([
      s.lazy(() => projectTemplatePreviewResponseSchema),
      s.lazy(() => setupTemplatePreviewResponseSchema),
    ]),
  ),
);
