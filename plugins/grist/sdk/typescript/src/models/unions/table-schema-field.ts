import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { anyFieldInternalSchema, anyFieldSchema, type AnyField } from "../any-field.js";
import { arrayFieldInternalSchema, arrayFieldSchema, type ArrayField } from "../array-field.js";
import { booleanFieldInternalSchema, booleanFieldSchema, type BooleanField } from "../boolean-field.js";
import { dateFieldInternalSchema, dateFieldSchema, type DateField } from "../date-field.js";
import { dateTimeFieldInternalSchema, dateTimeFieldSchema, type DateTimeField } from "../date-time-field.js";
import { durationFieldInternalSchema, durationFieldSchema, type DurationField } from "../duration-field.js";
import { geoJsonFieldInternalSchema, geoJsonFieldSchema, type GeoJsonField } from "../geo-json-field.js";
import { geoPointFieldInternalSchema, geoPointFieldSchema, type GeoPointField } from "../geo-point-field.js";
import { integerFieldInternalSchema, integerFieldSchema, type IntegerField } from "../integer-field.js";
import { numberFieldInternalSchema, numberFieldSchema, type NumberField } from "../number-field.js";
import { objectFieldInternalSchema, objectFieldSchema, type ObjectField } from "../object-field.js";
import { stringFieldInternalSchema, stringFieldSchema, type StringField } from "../string-field.js";
import { timeFieldInternalSchema, timeFieldSchema, type TimeField } from "../time-field.js";
import { yearFieldInternalSchema, yearFieldSchema, type YearField } from "../year-field.js";
import {
  yearMonthFieldInternalSchema,
  yearMonthFieldSchema,
  type YearMonthField,
} from "../year-month-field.js";

export type TableSchemaField =
  | StringField
  | NumberField
  | IntegerField
  | DateField
  | TimeField
  | DateTimeField
  | YearField
  | YearMonthField
  | BooleanField
  | ObjectField
  | GeoPointField
  | GeoJsonField
  | ArrayField
  | DurationField
  | AnyField;

export const tableSchemaFieldInternalSchema: Schema<TableSchemaField> = s.of<TableSchemaField>(
  s.union([
    s.lazy(() => stringFieldInternalSchema),
    s.lazy(() => numberFieldInternalSchema),
    s.lazy(() => integerFieldInternalSchema),
    s.lazy(() => dateFieldInternalSchema),
    s.lazy(() => timeFieldInternalSchema),
    s.lazy(() => dateTimeFieldInternalSchema),
    s.lazy(() => yearFieldInternalSchema),
    s.lazy(() => yearMonthFieldInternalSchema),
    s.lazy(() => booleanFieldInternalSchema),
    s.lazy(() => objectFieldInternalSchema),
    s.lazy(() => geoPointFieldInternalSchema),
    s.lazy(() => geoJsonFieldInternalSchema),
    s.lazy(() => arrayFieldInternalSchema),
    s.lazy(() => durationFieldInternalSchema),
    s.lazy(() => anyFieldInternalSchema),
  ]),
);

export const tableSchemaFieldSchema: Schema<TableSchemaField> = s.lazySchema(() =>
  s.of<TableSchemaField>(
    s.union([
      s.lazy(() => stringFieldSchema),
      s.lazy(() => numberFieldSchema),
      s.lazy(() => integerFieldSchema),
      s.lazy(() => dateFieldSchema),
      s.lazy(() => timeFieldSchema),
      s.lazy(() => dateTimeFieldSchema),
      s.lazy(() => yearFieldSchema),
      s.lazy(() => yearMonthFieldSchema),
      s.lazy(() => booleanFieldSchema),
      s.lazy(() => objectFieldSchema),
      s.lazy(() => geoPointFieldSchema),
      s.lazy(() => geoJsonFieldSchema),
      s.lazy(() => arrayFieldSchema),
      s.lazy(() => durationFieldSchema),
      s.lazy(() => anyFieldSchema),
    ]),
  ),
);
