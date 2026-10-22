import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  createCollectionResponseSchema,
  type CreateCollectionResponse,
} from "../create-collection-response.js";
import {
  createCollectionResponse1Schema,
  type CreateCollectionResponse1,
} from "../create-collection-response1.js";

export type CreateCollectionResponse2 = CreateCollectionResponse | CreateCollectionResponse1;

export const createCollectionResponse2Schema: Schema<CreateCollectionResponse2> =
  s.of<CreateCollectionResponse2>(
    s.union([s.lazy(() => createCollectionResponseSchema), s.lazy(() => createCollectionResponse1Schema)]),
  );
