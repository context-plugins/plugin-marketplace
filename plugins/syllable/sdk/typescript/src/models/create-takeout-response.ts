import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateTakeoutResponse = {
  jobId: string;
  createdAt: Date;
};

export const createTakeoutResponseSchema: Schema<CreateTakeoutResponse> = s.object<CreateTakeoutResponse>({
  jobId: s.string(),
  createdAt: s.dateTime(),
  _keysMap: {
    jobId: "job_id",
    createdAt: "created_at",
  },
});
