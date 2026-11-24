import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NotificationFilterFieldTypeDto = {
  DatasourceId: "datasourceId",
  DatasourceLabel: "datasourceLabel",
  DatasetId: "datasetId",
  DatasetLabel: "datasetLabel",
  DatasetOwnerId: "datasetOwnerId",
  DatasetTags: "datasetTags",
  CheckId: "checkId",
  CheckName: "checkName",
  CheckOwnerId: "checkOwnerId",
  ColumnId: "columnId",
  MetricType: "metricType",
  DatasetResourceAttribute: "datasetResourceAttribute",
  CheckResourceAttribute: "checkResourceAttribute",
} as const;
export type NotificationFilterFieldTypeDto =
  | (typeof NotificationFilterFieldTypeDto)[keyof typeof NotificationFilterFieldTypeDto]
  | (string & {});

export const notificationFilterFieldTypeDtoSchema: EnumSchema<NotificationFilterFieldTypeDto> =
  s.enumOf<NotificationFilterFieldTypeDto>(NotificationFilterFieldTypeDto);
