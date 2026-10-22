import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityDraftTransferResponseSchema,
  type EntityDraftTransferResponse,
} from "./entity-draft-transfer-response.js";

export type Embedded40 = {
  /** An array of draft transfer objects. */
  draftTransfers: EntityDraftTransferResponse[];
};

export const embedded40Schema: Schema<Embedded40> = s.object<Embedded40>({
  draftTransfers: s.array(s.lazy(() => entityDraftTransferResponseSchema)),
  _keysMap: {
    draftTransfers: "draft_transfers",
  },
});
