import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  googleLogoDetectionAnalysisDataSchema,
  type GoogleLogoDetectionAnalysisData,
} from "./google-logo-detection-analysis-data.js";

export type Data8 = {
  entity?: string;
  analysis?: GoogleLogoDetectionAnalysisData;
};

export const data8Schema: Schema<Data8> = s.object<Data8>({
  entity: s.optional(s.string()),
  analysis: s.optional(s.lazy(() => googleLogoDetectionAnalysisDataSchema)),
});
