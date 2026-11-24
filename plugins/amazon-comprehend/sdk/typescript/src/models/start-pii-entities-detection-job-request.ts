import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputDataConfigSchema, type InputDataConfig } from "./input-data-config.js";
import { languageCode26Schema, type LanguageCode26 } from "./language-code26.js";
import { mode3Schema, type Mode3 } from "./mode3.js";
import { outputDataConfigSchema, type OutputDataConfig } from "./output-data-config.js";
import { redactionConfigSchema, type RedactionConfig } from "./redaction-config.js";
import { tagSchema, type Tag } from "./tag.js";

export type StartPiiEntitiesDetectionJobRequest = {
  inputDataConfig: InputDataConfig;
  outputDataConfig: OutputDataConfig;
  /**
   * Specifies whether the output provides the locations (offsets) of PII entities or a file in
   * which PII entities are redacted.
   */
  mode: Mode3;
  redactionConfig?: RedactionConfig;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to
   * your input data.
   */
  dataAccessRoleArn: string;
  /** The identifier of the job. */
  jobName?: string;
  /**
   * The language of the input documents. Enter the language code for English (en) or Spanish (es).
   */
  languageCode: LanguageCode26;
  /**
   * A unique identifier for the request. If you don't set the client request token, Amazon
   * Comprehend generates one.
   */
  clientRequestToken?: string;
  /**
   * Tags to associate with the PII entities detection job. A tag is a key-value pair that adds
   * metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key
   * might be added to a resource to indicate its use by the sales department.
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startPiiEntitiesDetectionJobRequestSchema: Schema<StartPiiEntitiesDetectionJobRequest> =
  s.object<StartPiiEntitiesDetectionJobRequest>(
    {
      inputDataConfig: inputDataConfigSchema,
      outputDataConfig: outputDataConfigSchema,
      mode: mode3Schema,
      redactionConfig: s.optional(s.lazy(() => redactionConfigSchema)),
      dataAccessRoleArn: s.string(),
      jobName: s.optional(s.string()),
      languageCode: languageCode26Schema,
      clientRequestToken: s.optional(s.string()),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      _keysMap: {
        inputDataConfig: "InputDataConfig",
        outputDataConfig: "OutputDataConfig",
        mode: "Mode",
        redactionConfig: "RedactionConfig",
        dataAccessRoleArn: "DataAccessRoleArn",
        jobName: "JobName",
        languageCode: "LanguageCode",
        clientRequestToken: "ClientRequestToken",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
