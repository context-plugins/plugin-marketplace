import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exportEntitySchema, type ExportEntity } from "./export-entity.js";
import { exportStatusSchema, type ExportStatus } from "./export-status.js";

/** Exports response. */
export type ExportResponseDto = {
  entity?: ExportEntity;
  /**
   * Exported record template name.
   *
   * In the BILL web app, if you create a template for exported records (**Settings > Import &
   * export > Custom File Integration > Teamplates**), `name` is set as the template name. If a
   * template is not created, `name` is set as a BILL-generated value.
   */
  name?: string;
  /** Export operation processed date and time */
  processedTime?: Date;
  status?: ExportStatus;
  /** Exported record file name */
  fileName?: string;
  /**
   * BILL-generated ID of the exported record file.
   *
   * Use this value to get the download URL for the exported record file with `GET
   * /v3/exports/{exportId}/download-link`.
   */
  exportId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exportResponseDtoSchema: Schema<ExportResponseDto> = s.object<ExportResponseDto>(
  {
    entity: s.optional(s.lazy(() => exportEntitySchema)),
    name: s.optional(s.string()),
    processedTime: s.optional(s.dateTime()),
    status: s.optional(s.lazy(() => exportStatusSchema)),
    fileName: s.optional(s.string()),
    exportId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
