import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonRekognitionCustomLabelsApiSchema,
  type XAmzTargetAmazonRekognitionCustomLabelsApi,
} from "../models/xamz-target-amazon-rekognition-custom-labels-api.js";
import type { Servers } from "../servers.js";

export class CustomLabels {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Detect Custom Labels
   *
   * @remarks
   * This operation applies only to Amazon Rekognition Custom Labels. Detects custom labels in a
   * supplied image by using an Amazon Rekognition Custom Labels model. You specify which version of
   * a model version to use by using the ProjectVersionArn input parameter. You pass the input image
   * as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use
   * the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The
   * image must be either a PNG or JPEG formatted file. For each object that the model version
   * detects on an image, the API returns a (CustomLabel) object in an array (CustomLabels). Each
   * CustomLabel object provides the label name (Name), the level of confidence that the image
   * contains the object (Confidence), and object location information, if it exists, for the label
   * on the image (Geometry). To filter labels that are returned, specify a value for MinConfidence.
   * DetectCustomLabelsLabels only returns labels with a confidence that's higher than the specified
   * value. The value of MinConfidence maps to the assumed threshold values created during training.
   * For more information, see Assumed threshold in the Amazon Rekognition Cu
   *
   * @returns Success
   *
   * @throws {@link CustomLabels.DetectCustomLabelsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectCustomLabels(
    request: CustomLabels.DetectCustomLabelsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, CustomLabels.DetectCustomLabelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectCustomLabels"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonRekognitionCustomLabelsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CustomLabels.DetectCustomLabelsError,
      },
      options,
    );
  }
}

export namespace CustomLabels {
  export type DetectCustomLabelsRequestParams = {
    xAmzTarget: XAmzTargetAmazonRekognitionCustomLabelsApi;
  };

  export class DetectCustomLabelsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetectCustomLabelsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
