import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StartAudienceSizeJobOutput = {
  jobId: string;
};

export const startAudienceSizeJobOutputSchema: Schema<StartAudienceSizeJobOutput> =
  s.object<StartAudienceSizeJobOutput>({
    jobId: s.string(),
  });
