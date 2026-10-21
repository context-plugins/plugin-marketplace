import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  deleteResourceByPublicIdsRequestSchema,
  type DeleteResourceByPublicIdsRequest,
} from "../delete-resource-by-public-ids-request.js";
import {
  deleteResourceByPublicIdsRequest1Schema,
  type DeleteResourceByPublicIdsRequest1,
} from "../delete-resource-by-public-ids-request1.js";
import {
  deleteResourceByPublicIdsRequest2Schema,
  type DeleteResourceByPublicIdsRequest2,
} from "../delete-resource-by-public-ids-request2.js";

/** The delete request specifying which resources to delete. */
export type DeleteResourceByPublicIdsRequest3 =
  | DeleteResourceByPublicIdsRequest
  | DeleteResourceByPublicIdsRequest1
  | DeleteResourceByPublicIdsRequest2;

export const deleteResourceByPublicIdsRequest3Schema: Schema<DeleteResourceByPublicIdsRequest3> =
  s.of<DeleteResourceByPublicIdsRequest3>(
    s.union([
      s.lazy(() => deleteResourceByPublicIdsRequestSchema),
      s.lazy(() => deleteResourceByPublicIdsRequest1Schema),
      s.lazy(() => deleteResourceByPublicIdsRequest2Schema),
    ]),
  );
