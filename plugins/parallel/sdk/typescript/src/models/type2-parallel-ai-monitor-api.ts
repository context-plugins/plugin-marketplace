import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of monitor to create. `event_stream` monitors a search query for material changes;
 * `snapshot` monitors a specific task run's output. Determines the expected shape of `settings`.
 */
export const Type2ParallelAiMonitorApi = {
  EventStream: "event_stream",
  Snapshot: "snapshot",
} as const;
export type Type2ParallelAiMonitorApi =
  | (typeof Type2ParallelAiMonitorApi)[keyof typeof Type2ParallelAiMonitorApi]
  | (string & {});

export const type2ParallelAiMonitorApiSchema: EnumSchema<Type2ParallelAiMonitorApi> =
  s.enumOf<Type2ParallelAiMonitorApi>(Type2ParallelAiMonitorApi);
