import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  kindDeliverdDevFlowsApiSchema,
  type KindDeliverdDevFlowsApi,
} from "./kind-deliverd-dev-flows-api.js";

export type Member = {
  kind: KindDeliverdDevFlowsApi;
  id: string;
  title: string;
  status: string;
  open: boolean;
  createdAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const memberSchema: Schema<Member> = s.object<Member>(
  {
    kind: kindDeliverdDevFlowsApiSchema,
    id: s.string(),
    title: s.string(),
    status: s.string(),
    open: s.boolean(),
    createdAt: s.string(),
  },
  { additionalProperties: s.json() },
);
