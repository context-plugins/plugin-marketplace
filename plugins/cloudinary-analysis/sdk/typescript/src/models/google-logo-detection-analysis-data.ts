import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { logoAnnotationSchema, type LogoAnnotation } from "./logo-annotation.js";

export type GoogleLogoDetectionAnalysisData = {
  logoAnnotations: LogoAnnotation[];
};

export const googleLogoDetectionAnalysisDataSchema: Schema<GoogleLogoDetectionAnalysisData> =
  s.object<GoogleLogoDetectionAnalysisData>({
    logoAnnotations: s.array(s.lazy(() => logoAnnotationSchema)),
    _keysMap: {
      logoAnnotations: "logo_annotations",
    },
  });
