import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  systemSettingsConfResponseSchema,
  type SystemSettingsConfResponse,
} from "./system-settings-conf-response.js";

export type CountedSystemSettingsConfResponse = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: SystemSettingsConfResponse[];
};

export const countedSystemSettingsConfResponseSchema: Schema<CountedSystemSettingsConfResponse> =
  s.object<CountedSystemSettingsConfResponse>({
    count: s.int(),
    items: s.array(s.lazy(() => systemSettingsConfResponseSchema)),
  });
