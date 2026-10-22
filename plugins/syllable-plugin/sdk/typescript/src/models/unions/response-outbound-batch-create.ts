import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { communicationBatchSchema, type CommunicationBatch } from "../communication-batch.js";

export type ResponseOutboundBatchCreate = CommunicationBatch;

export const responseOutboundBatchCreateSchema: Schema<ResponseOutboundBatchCreate> =
  s.of<ResponseOutboundBatchCreate>(s.union([s.lazy(() => communicationBatchSchema)]));
