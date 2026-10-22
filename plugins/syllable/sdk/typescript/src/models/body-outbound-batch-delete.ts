import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BodyOutboundBatchDelete = {
  deleteReason: string;
};

export const bodyOutboundBatchDeleteSchema: Schema<BodyOutboundBatchDelete> =
  s.object<BodyOutboundBatchDelete>({
    deleteReason: s.string(),
    _keysMap: {
      deleteReason: "delete_reason",
    },
  });
