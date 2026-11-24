import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateEndpointRequest = {
  /**
   * This is the descriptive suffix that becomes part of the EndpointArn used for all subsequent
   * requests to this resource.
   */
  endpointName: string;
  /** The Amazon Resource Number (ARN) of the model to which the endpoint will be attached. */
  modelArn?: string;
  /**
   * The desired number of inference units to be used by the model using this endpoint. Each
   * inference unit represents of a throughput of 100 characters per second.
   */
  desiredInferenceUnits: number;
  /**
   * An idempotency token provided by the customer. If this token matches a previous endpoint
   * creation request, Amazon Comprehend will not return a ResourceInUseException.
   */
  clientRequestToken?: string;
  /**
   * Tags to associate with the endpoint. A tag is a key-value pair that adds metadata to the
   * endpoint. For example, a tag with "Sales" as the key might be added to an endpoint to indicate
   * its use by the sales department.
   */
  tags?: Tag[];
  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to
   * trained custom models encrypted with a customer managed key (ModelKmsKeyId).
   */
  dataAccessRoleArn?: string;
  /** The Amazon Resource Number (ARN) of the flywheel to which the endpoint will be attached. */
  flywheelArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createEndpointRequestSchema: Schema<CreateEndpointRequest> = s.object<CreateEndpointRequest>(
  {
    endpointName: s.string(),
    modelArn: s.optional(s.string()),
    desiredInferenceUnits: s.int(),
    clientRequestToken: s.optional(s.string()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    dataAccessRoleArn: s.optional(s.string()),
    flywheelArn: s.optional(s.string()),
    _keysMap: {
      endpointName: "EndpointName",
      modelArn: "ModelArn",
      desiredInferenceUnits: "DesiredInferenceUnits",
      clientRequestToken: "ClientRequestToken",
      tags: "Tags",
      dataAccessRoleArn: "DataAccessRoleArn",
      flywheelArn: "FlywheelArn",
    },
  },
  { additionalProperties: s.json() },
);
