import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { logoName1Schema, type LogoName1 } from "./logo-name1.js";

export type DatahubV1DatasetsRequest2 = {
  /**
   * Must match the dataset name in the URL path. Included for idempotency; the name cannot be
   * changed.
   */
  name?: string;
  /**
   * The new description for the dataset. Omit to keep the current description; send an empty string
   * to clear it.
   */
  description?: string;
  /**
   * Human-readable name shown in the DoiT console and in report results instead of `name`. 1-64
   * characters after trimming; must not be unique. Omit to keep the current display name; send an
   * empty string to clear it and fall back to `name`.
   */
  displayName?: string;
  /**
   * The preset logo shown next to the dataset in the DoiT console. Omit to keep the current logo;
   * send an empty string to clear it.
   */
  logoName?: LogoName1;
};

const datahubV1DatasetsRequest2Properties: s.Shape<DatahubV1DatasetsRequest2> = {
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  displayName: s.optional(s.string()),
  logoName: s.optional(s.lazy(() => logoName1Schema)),
};

export const datahubV1DatasetsRequest2InternalSchema: Schema<DatahubV1DatasetsRequest2> =
  s.object<DatahubV1DatasetsRequest2>(datahubV1DatasetsRequest2Properties);

export const datahubV1DatasetsRequest2Schema: Schema<DatahubV1DatasetsRequest2> = s.lazySchema(() =>
  s.object<DatahubV1DatasetsRequest2>({
    ...datahubV1DatasetsRequest2Properties,
    displayName: s.optional(s.string().check(s.maxLength(64))),
  }),
);
