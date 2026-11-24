import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { environmentConfig3Schema, type EnvironmentConfig3 } from "./environment-config3.js";
import { pySparkBatch1Schema, type PySparkBatch1 } from "./py-spark-batch1.js";
import { pySparkNotebookBatch1Schema, type PySparkNotebookBatch1 } from "./py-spark-notebook-batch1.js";
import { runtimeConfig3Schema, type RuntimeConfig3 } from "./runtime-config3.js";
import { runtimeInfo2Schema, type RuntimeInfo2 } from "./runtime-info2.js";
import { sparkBatch2Schema, type SparkBatch2 } from "./spark-batch2.js";
import { sparkRBatch2Schema, type SparkRBatch2 } from "./spark-rbatch2.js";
import { sparkSqlBatch1Schema, type SparkSqlBatch1 } from "./spark-sql-batch1.js";
import { stateHistorySchema, type StateHistory } from "./state-history.js";
import { state7Schema, type State7 } from "./state7.js";

/** A representation of a batch workload in the service. */
export type Batch = {
  /** Optional. PySpark notebook batch config. */
  pysparkNotebookBatch?: PySparkNotebookBatch1;
  /** Output only. The time when the batch was created. */
  createTime?: string;
  /** Optional. Environment configuration for the batch execution. */
  environmentConfig?: EnvironmentConfig3;
  /** Optional. Spark batch config. */
  sparkBatch?: SparkBatch2;
  /** Optional. PySpark batch config. */
  pysparkBatch?: PySparkBatch1;
  /** Output only. Historical state information for the batch. */
  stateHistory?: StateHistory[];
  /** Optional. SparkSql batch config. */
  sparkSqlBatch?: SparkSqlBatch1;
  /** Output only. Runtime information about batch execution. */
  runtimeInfo?: RuntimeInfo2;
  /** Output only. The resource name of the operation associated with this batch. */
  operation?: string;
  /** Output only. The email address of the user who created the batch. */
  creator?: string;
  /** Output only. The time when the batch entered a current state. */
  stateTime?: string;
  /** Output only. The resource name of the batch. */
  name?: string;
  /** Optional. SparkR batch config. */
  sparkRBatch?: SparkRBatch2;
  /**
   * Output only. A batch UUID (Unique Universal Identifier). The service generates this value when
   * it creates the batch.
   */
  uuid?: string;
  /** Output only. The state of the batch. */
  state?: State7;
  /**
   * Optional. The labels to associate with this batch. Label keys must contain 1 to 63 characters,
   * and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty,
   * but, if present, must contain 1 to 63 characters, and must conform to RFC 1035
   * (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a batch.
   */
  labels?: Record<string, string>;
  /** Optional. Runtime configuration for the batch execution. */
  runtimeConfig?: RuntimeConfig3;
  /** Output only. Batch state details, such as a failure description if the state is FAILED. */
  stateMessage?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchSchema: Schema<Batch> = s.object<Batch>(
  {
    pysparkNotebookBatch: s.optional(s.lazy(() => pySparkNotebookBatch1Schema)),
    createTime: s.optional(s.string()),
    environmentConfig: s.optional(s.lazy(() => environmentConfig3Schema)),
    sparkBatch: s.optional(s.lazy(() => sparkBatch2Schema)),
    pysparkBatch: s.optional(s.lazy(() => pySparkBatch1Schema)),
    stateHistory: s.optional(s.array(s.lazy(() => stateHistorySchema))),
    sparkSqlBatch: s.optional(s.lazy(() => sparkSqlBatch1Schema)),
    runtimeInfo: s.optional(s.lazy(() => runtimeInfo2Schema)),
    operation: s.optional(s.string()),
    creator: s.optional(s.string()),
    stateTime: s.optional(s.string()),
    name: s.optional(s.string()),
    sparkRBatch: s.optional(s.lazy(() => sparkRBatch2Schema)),
    uuid: s.optional(s.string()),
    state: s.optional(s.lazy(() => state7Schema)),
    labels: s.optional(s.record(s.string(), s.string())),
    runtimeConfig: s.optional(s.lazy(() => runtimeConfig3Schema)),
    stateMessage: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
