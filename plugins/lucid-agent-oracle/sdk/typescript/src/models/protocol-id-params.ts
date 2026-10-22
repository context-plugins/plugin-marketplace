import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProtocolIdParams = {
  id: string;
};

export const protocolIdParamsSchema: Schema<ProtocolIdParams> = s.object<ProtocolIdParams>({
  id: s.string(),
});
