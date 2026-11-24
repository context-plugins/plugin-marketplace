import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonRekognitionImageAnalysisApiSchema,
  type XAmzTargetAmazonRekognitionImageAnalysisApi,
} from "../models/xamz-target-amazon-rekognition-image-analysis-api.js";
import type { Servers } from "../servers.js";

export class ImageAnalysis {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Detect Labels
   *
   * @remarks
   * Detects instances of real-world entities within an image (JPEG or PNG) provided as input. This
   * includes objects like flower, tree, and table; events like wedding, graduation, and birthday
   * party; and concepts like landscape, evening, and nature. For an example, see Analyzing images
   * stored in an Amazon S3 bucket in the Amazon Rekognition Developer Guide. You pass the input
   * image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If
   * you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not
   * supported. The image must be either a PNG or JPEG formatted file. Optional Parameters You can
   * specify one or both of the GENERAL_LABELS and IMAGE_PROPERTIES feature types when calling the
   * DetectLabels API. Including GENERAL_LABELS will ensure the response includes the labels
   * detected in the input image, while including IMAGE_PROPERTIES will ensure the response includes
   * information about the image quality and color. When using GENERAL_LABELS and/or
   * IMAGE_PROPERTIES you can provide filtering criteria to the Settings parameter. You can filter
   * with sets of individual labels or with label categories. You can specify inclusive filters,
   * exclusive
   *
   * @returns Success
   *
   * @throws {@link ImageAnalysis.DetectLabelsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectLabels(
    request: ImageAnalysis.DetectLabelsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ImageAnalysis.DetectLabelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectLabels"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonRekognitionImageAnalysisApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ImageAnalysis.DetectLabelsError,
      },
      options,
    );
  }
}

export namespace ImageAnalysis {
  export type DetectLabelsRequestParams = {
    xAmzTarget: XAmzTargetAmazonRekognitionImageAnalysisApi;
  };

  export class DetectLabelsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetectLabelsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
