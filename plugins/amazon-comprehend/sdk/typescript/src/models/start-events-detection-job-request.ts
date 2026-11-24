import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputDataConfigSchema, type InputDataConfig } from "./input-data-config.js";
import { languageCode10Schema, type LanguageCode10 } from "./language-code10.js";
import { outputDataConfigSchema, type OutputDataConfig } from "./output-data-config.js";
import { tagSchema, type Tag } from "./tag.js";

export type StartEventsDetectionJobRequest = {
  inputDataConfig: InputDataConfig;
  outputDataConfig: OutputDataConfig;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to
   * your input data.
   */
  dataAccessRoleArn: string;
  /** The identifier of the events detection job. */
  jobName?: string;
  /** The language code of the input documents. */
  languageCode: LanguageCode10;
  /**
   * An unique identifier for the request. If you don't set the client request token, Amazon
   * Comprehend generates one.
   */
  clientRequestToken?: string;
  /** The types of events to detect in the input documents. */
  targetEventTypes: string[];
  /**
   * Tags to associate with the events detection job. A tag is a key-value pair that adds metadata
   * to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be
   * added to a resource to indicate its use by the sales department.
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startEventsDetectionJobRequestSchema: Schema<StartEventsDetectionJobRequest> =
  s.object<StartEventsDetectionJobRequest>(
    {
      inputDataConfig: inputDataConfigSchema,
      outputDataConfig: outputDataConfigSchema,
      dataAccessRoleArn: s.string(),
      jobName: s.optional(s.string()),
      languageCode: languageCode10Schema,
      clientRequestToken: s.optional(s.string()),
      targetEventTypes: s.array(s.string()),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      _keysMap: {
        inputDataConfig: "InputDataConfig",
        outputDataConfig: "OutputDataConfig",
        dataAccessRoleArn: "DataAccessRoleArn",
        jobName: "JobName",
        languageCode: "LanguageCode",
        clientRequestToken: "ClientRequestToken",
        targetEventTypes: "TargetEventTypes",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
