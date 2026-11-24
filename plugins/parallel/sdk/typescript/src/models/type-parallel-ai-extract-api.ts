import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of warning. Note that adding new warning types is considered a backward-compatible change.
 */
export const TypeParallelAiExtractApi = {
  SpecValidationWarning: "spec_validation_warning",
  InputValidationWarning: "input_validation_warning",
  Warning: "warning",
} as const;
export type TypeParallelAiExtractApi =
  | (typeof TypeParallelAiExtractApi)[keyof typeof TypeParallelAiExtractApi]
  | (string & {});

export const typeParallelAiExtractApiSchema: EnumSchema<TypeParallelAiExtractApi> =
  s.enumOf<TypeParallelAiExtractApi>(TypeParallelAiExtractApi);
