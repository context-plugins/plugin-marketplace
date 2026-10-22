import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { schemasSchema, type Schemas } from "./schemas.js";
import { statusSchema, type Status } from "./status.js";
import { task1Schema, type Task1 } from "./task1.js";

export type JourneyTaskListSchemaResponse = {
  /** Journey Instance Id, a unique identifier for a started journey instance. */
  instanceId: string;
  status: Status;
  tasks: Task1[];
  schemas: Record<string, Schemas>;
};

export const journeyTaskListSchemaResponseSchema: Schema<JourneyTaskListSchemaResponse> =
  s.object<JourneyTaskListSchemaResponse>({
    instanceId: s.string(),
    status: statusSchema,
    tasks: s.array(s.lazy(() => task1Schema)),
    schemas: s.record(
      s.string(),
      s.lazy(() => schemasSchema),
    ),
  });
