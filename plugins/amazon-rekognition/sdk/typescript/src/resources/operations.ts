import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonRekognitionFacialAnalysisApiSchema,
  type XAmzTargetAmazonRekognitionFacialAnalysisApi,
} from "../models/xamz-target-amazon-rekognition-facial-analysis-api.js";
import {
  xAmzTarget1AmazonRekognitionOperationsApiSchema,
  type XAmzTarget1AmazonRekognitionOperationsApi,
} from "../models/xamz-target1-amazon-rekognition-operations-api.js";
import { xAmzTarget11Schema, type XAmzTarget11 } from "../models/xamz-target11.js";
import { xAmzTarget12Schema, type XAmzTarget12 } from "../models/xamz-target12.js";
import { xAmzTarget13Schema, type XAmzTarget13 } from "../models/xamz-target13.js";
import { xAmzTarget14Schema, type XAmzTarget14 } from "../models/xamz-target14.js";
import { xAmzTarget15Schema, type XAmzTarget15 } from "../models/xamz-target15.js";
import { xAmzTarget16Schema, type XAmzTarget16 } from "../models/xamz-target16.js";
import { xAmzTarget17Schema, type XAmzTarget17 } from "../models/xamz-target17.js";
import { xAmzTarget18Schema, type XAmzTarget18 } from "../models/xamz-target18.js";
import { xAmzTarget19Schema, type XAmzTarget19 } from "../models/xamz-target19.js";
import {
  xAmzTarget2AmazonRekognitionOperationsApiSchema,
  type XAmzTarget2AmazonRekognitionOperationsApi,
} from "../models/xamz-target2-amazon-rekognition-operations-api.js";
import { xAmzTarget2Schema, type XAmzTarget2 } from "../models/xamz-target2.js";
import { xAmzTarget20Schema, type XAmzTarget20 } from "../models/xamz-target20.js";
import { xAmzTarget21Schema, type XAmzTarget21 } from "../models/xamz-target21.js";
import { xAmzTarget22Schema, type XAmzTarget22 } from "../models/xamz-target22.js";
import { xAmzTarget23Schema, type XAmzTarget23 } from "../models/xamz-target23.js";
import { xAmzTarget24Schema, type XAmzTarget24 } from "../models/xamz-target24.js";
import { xAmzTarget25Schema, type XAmzTarget25 } from "../models/xamz-target25.js";
import {
  xAmzTarget3AmazonRekognitionOperationsApiSchema,
  type XAmzTarget3AmazonRekognitionOperationsApi,
} from "../models/xamz-target3-amazon-rekognition-operations-api.js";
import {
  xAmzTarget4AmazonRekognitionOperationsApiSchema,
  type XAmzTarget4AmazonRekognitionOperationsApi,
} from "../models/xamz-target4-amazon-rekognition-operations-api.js";
import {
  xAmzTarget5AmazonRekognitionOperationsApiSchema,
  type XAmzTarget5AmazonRekognitionOperationsApi,
} from "../models/xamz-target5-amazon-rekognition-operations-api.js";
import { xAmzTarget6Schema, type XAmzTarget6 } from "../models/xamz-target6.js";
import { xAmzTarget7Schema, type XAmzTarget7 } from "../models/xamz-target7.js";
import { xAmzTarget8Schema, type XAmzTarget8 } from "../models/xamz-target8.js";
import { xAmzTarget9Schema, type XAmzTarget9 } from "../models/xamz-target9.js";
import type { Servers } from "../servers.js";

export class Operations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Compare Faces
   *
   * @remarks
   * Compares a face in the source input image with each of the 100 largest faces detected in the
   * target input image. If the source image contains multiple faces, the service detects the
   * largest face and compares it with each face detected in the target image. CompareFaces uses
   * machine learning algorithms, which are probabilistic. A false negative is an incorrect
   * prediction that a face in the target image has a low similarity confidence score when compared
   * to the face in the source image. To reduce the probability of false negatives, we recommend
   * that you compare the target image against multiple source images. If you plan to use
   * CompareFaces to make a decision that impacts an individual's rights, privacy, or access to
   * services, we recommend that you pass the result to a human for review and further validation
   * before taking action. You pass the input and target images either as base64-encoded image bytes
   * or as references to images in an Amazon S3 bucket. If you use the AWS CLI to call Amazon
   * Rekognition operations, passing image bytes isn't supported. The image must be formatted as a
   * PNG or JPEG file. In response, the operation returns an array of face matches ordered by
   * similarity scor
   *
   * @returns Success
   *
   * @throws {@link Operations.CompareFaces2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  compareFaces2(
    request: Operations.CompareFaces2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.CompareFaces2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CompareFaces"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonRekognitionFacialAnalysisApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.CompareFaces2Error,
      },
      options,
    );
  }

  /**
   * Copy Project Version
   *
   * @remarks
   * This operation applies only to Amazon Rekognition Custom Labels. Copies a version of an Amazon
   * Rekognition Custom Labels model from a source project to a destination project. The source and
   * destination projects can be in different AWS accounts but must be in the same AWS Region. You
   * can't copy a model to another AWS service. To copy a model version to a different AWS account,
   * you need to create a resource-based policy known as a project policy. You attach the project
   * policy to the source project by calling PutProjectPolicy. The project policy gives permission
   * to copy the model version from a trusting AWS account to a trusted account. For more
   * information creating and attaching a project policy, see Attaching a project policy (SDK) in
   * the Amazon Rekognition Custom Labels Developer Guide. If you are copying a model version to a
   * project in the same AWS account, you don't need to create a project policy. Copying project
   * versions is supported only for Custom Labels models. To copy a model, the destination project,
   * source project, and source model version must already exist. Copying a model version takes a
   * while to complete. To get the current status, call DescribeProjectVersions and che
   *
   * @returns Success
   *
   * @throws {@link Operations.CopyProjectVersionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  copyProjectVersion(
    request: Operations.CopyProjectVersionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.CopyProjectVersionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CopyProjectVersion"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonRekognitionOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.CopyProjectVersionError,
      },
      options,
    );
  }

  /**
   * Delete Collection
   *
   * @remarks
   * Deletes the specified collection. Note that this operation removes all faces in the collection.
   * For an example, see Deleting a collection. This operation requires permissions to perform the
   * rekognition:DeleteCollection action.
   *
   * @returns Success
   *
   * @throws {@link Operations.DeleteCollectionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteCollection(
    request: Operations.DeleteCollectionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DeleteCollectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteCollection"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget11Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.DeleteCollectionError,
      },
      options,
    );
  }

  /**
   * Describe Collection
   *
   * @remarks
   * Describes the specified collection. You can use DescribeCollection to get information, such as
   * the number of faces indexed into a collection and the version of the model used by the
   * collection for face detection. For more information, see Describing a Collection in the Amazon
   * Rekognition Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link Operations.DescribeCollectionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeCollection(
    request: Operations.DescribeCollectionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DescribeCollectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeCollection"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget12Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.DescribeCollectionError,
      },
      options,
    );
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
   * @throws {@link Operations.DetectCustomLabels2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectCustomLabels2(
    request: Operations.DetectCustomLabels2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DetectCustomLabels2Error> {
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
            schema: xAmzTarget2AmazonRekognitionOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.DetectCustomLabels2Error,
      },
      options,
    );
  }

  /**
   * Detect Faces
   *
   * @remarks
   * Detects faces within an image that is provided as input. DetectFaces detects the 100 largest
   * faces in the image. For each face detected, the operation returns face details. These details
   * include a bounding box of the face, a confidence value (that the bounding box contains a face),
   * and a fixed set of attributes such as facial landmarks (for example, coordinates of eye and
   * mouth), pose, presence of facial occlusion, and so on. The face-detection algorithm is most
   * effective on frontal faces. For non-frontal or obscured faces, the algorithm might not detect
   * the faces or might detect faces with lower confidence. You pass the input image either as
   * base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the
   * AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image
   * must be either a PNG or JPEG formatted file. This is a stateless API operation. That is, the
   * operation does not persist any data. This operation requires permissions to perform the
   * rekognition:DetectFaces action.
   *
   * @returns Success
   *
   * @throws {@link Operations.DetectFaces2Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectFaces2(
    request: Operations.DetectFaces2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DetectFaces2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectFaces"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonRekognitionOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.DetectFaces2Error,
      },
      options,
    );
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
   * @throws {@link Operations.DetectLabels2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectLabels2(
    request: Operations.DetectLabels2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DetectLabels2Error> {
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
            schema: xAmzTarget4AmazonRekognitionOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.DetectLabels2Error,
      },
      options,
    );
  }

  /**
   * Detect Moderation Labels
   *
   * @remarks
   * Detects unsafe content in a specified JPEG or PNG format image. Use DetectModerationLabels to
   * moderate images depending on your requirements. For example, you might want to filter images
   * that contain nudity, but not images containing suggestive content. To filter images, use the
   * labels returned by DetectModerationLabels to determine which types of content are appropriate.
   * For information about moderation labels, see Detecting Unsafe Content in the Amazon Rekognition
   * Developer Guide. You pass the input image either as base64-encoded image bytes or as a
   * reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition
   * operations, passing image bytes is not supported. The image must be either a PNG or JPEG
   * formatted file. You can specify an adapter to use when retrieving label predictions by
   * providing a ProjectVersionArn to the ProjectVersion argument.
   *
   * @returns Success
   *
   * @throws {@link Operations.DetectModerationLabels2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectModerationLabels2(
    request: Operations.DetectModerationLabels2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DetectModerationLabels2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectModerationLabels"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget5AmazonRekognitionOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.DetectModerationLabels2Error,
      },
      options,
    );
  }

  /**
   * Detect Protective Equipment
   *
   * @remarks
   * Detects Personal Protective Equipment (PPE) worn by people detected in an image. Amazon
   * Rekognition can detect the following types of PPE. Face cover Hand cover Head cover You pass
   * the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3
   * bucket. The image must be either a PNG or JPG formatted file. DetectProtectiveEquipment detects
   * PPE worn by up to 15 persons detected in an image. For each person detected in the image the
   * API returns an array of body parts (face, head, left-hand, right-hand). For each body part, an
   * array of detected items of PPE is returned, including an indicator of whether or not the PPE
   * covers the body part. The API returns the confidence it has in each detection (person, PPE,
   * body part and body part coverage). It also returns a bounding box (BoundingBox) for each
   * detected person and each detected item of PPE. You can optionally request a summary of detected
   * PPE items with the SummarizationAttributes input parameter. The summary provides the following
   * information. The persons detected as wearing all of the types of PPE that you specify. The
   * persons detected as not wearing all of the types PPE that you specify. The persons dete
   *
   * @returns Success
   *
   * @throws {@link Operations.DetectProtectiveEquipmentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectProtectiveEquipment(
    request: Operations.DetectProtectiveEquipmentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DetectProtectiveEquipmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectProtectiveEquipment"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget6Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.DetectProtectiveEquipmentError,
      },
      options,
    );
  }

  /**
   * Detect Text
   *
   * @remarks
   * Detects text in the input image and converts it into machine-readable text. Pass the input
   * image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If
   * you use the AWS CLI to call Amazon Rekognition operations, you must pass it as a reference to
   * an image in an Amazon S3 bucket. For the AWS CLI, passing image bytes is not supported. The
   * image must be either a .png or .jpeg formatted file. The DetectText operation returns text in
   * an array of TextDetection elements, TextDetections. Each TextDetection element provides
   * information about a single word or line of text that was detected in the image. A word is one
   * or more script characters that are not separated by spaces. DetectText can detect up to 100
   * words in an image. A line is a string of equally spaced words. A line isn't necessarily a
   * complete sentence. For example, a driver's license number is detected as a line. A line ends
   * when there is no aligned text after it. Also, a line ends when there is a large gap between
   * words, relative to the length of the words. This means, depending on the gap between words,
   * Amazon Rekognition may detect multiple lines in text aligned in the same direction. Periods don
   *
   * @returns Success
   *
   * @throws {@link Operations.DetectTextError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectText(
    request: Operations.DetectTextRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DetectTextError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectText"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget7Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.DetectTextError,
      },
      options,
    );
  }

  /**
   * Distribute Dataset Entries
   *
   * @remarks
   * This operation applies only to Amazon Rekognition Custom Labels. Distributes the entries
   * (images) in a training dataset across the training dataset and the test dataset for a project.
   * DistributeDatasetEntries moves 20% of the training dataset images to the test dataset. An entry
   * is a JSON Line that describes an image. You supply the Amazon Resource Names (ARN) of a
   * project's training dataset and test dataset. The training dataset must contain the images that
   * you want to split. The test dataset must be empty. The datasets must belong to the same
   * project. To create training and test datasets for a project, call CreateDataset. Distributing a
   * dataset takes a while to complete. To check the status call DescribeDataset. The operation is
   * complete when the Status field for the training dataset and the test dataset is
   * UPDATE_COMPLETE. If the dataset split fails, the value of Status is UPDATE_FAILED. This
   * operation requires permissions to perform the rekognition:DistributeDatasetEntries action.
   *
   * @returns Success
   *
   * @throws {@link Operations.DistributeDatasetEntriesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  distributeDatasetEntries(
    request: Operations.DistributeDatasetEntriesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DistributeDatasetEntriesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DistributeDatasetEntries"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget8Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.DistributeDatasetEntriesError,
      },
      options,
    );
  }

  /**
   * Get Celebrity Info
   *
   * @remarks
   * Gets the name and additional information about a celebrity based on their Amazon Rekognition
   * ID. The additional information is returned as an array of URLs. If there is no additional
   * information about the celebrity, this list is empty. For more information, see Getting
   * information about a celebrity in the Amazon Rekognition Developer Guide. This operation
   * requires permissions to perform the rekognition:GetCelebrityInfo action.
   *
   * @returns Success
   *
   * @throws {@link Operations.GetCelebrityInfoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getCelebrityInfo(
    request: Operations.GetCelebrityInfoRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.GetCelebrityInfoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetCelebrityInfo"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget13Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.GetCelebrityInfoError,
      },
      options,
    );
  }

  /**
   * Get Face Detection
   *
   * @remarks
   * Gets face detection results for a Amazon Rekognition Video analysis started by
   * StartFaceDetection. Face detection with Amazon Rekognition Video is an asynchronous operation.
   * You start face detection by calling StartFaceDetection which returns a job identifier (JobId).
   * When the face detection operation finishes, Amazon Rekognition Video publishes a completion
   * status to the Amazon Simple Notification Service topic registered in the initial call to
   * StartFaceDetection. To get the results of the face detection operation, first check that the
   * status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceDetection and
   * pass the job identifier (JobId) from the initial call to StartFaceDetection. GetFaceDetection
   * returns an array of detected faces (Faces) sorted by the time the faces were detected. Use
   * MaxResults parameter to limit the number of labels returned. If there are more results than
   * specified in MaxResults, the value of NextToken in the operation response contains a pagination
   * token for getting the next set of results. To get the next page of results, call
   * GetFaceDetection and populate the NextToken request parameter with the token value returned
   * from the previous
   *
   * @returns Success
   *
   * @throws {@link Operations.GetFaceDetectionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFaceDetection(
    request: Operations.GetFaceDetectionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.GetFaceDetectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetFaceDetection"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget14Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.GetFaceDetectionError,
      },
      options,
    );
  }

  /**
   * Get Person Tracking
   *
   * @remarks
   * End of support notice: On October 31, 2025, AWS will discontinue support for Amazon Rekognition
   * People Pathing. After October 31, 2025, you will no longer be able to use the Rekognition
   * People Pathing capability. For more information, visit this blog post. Gets the path tracking
   * results of a Amazon Rekognition Video analysis started by StartPersonTracking. The person path
   * tracking operation is started by a call to StartPersonTracking which returns a job identifier
   * (JobId). When the operation finishes, Amazon Rekognition Video publishes a completion status to
   * the Amazon Simple Notification Service topic registered in the initial call to
   * StartPersonTracking. To get the results of the person path tracking operation, first check that
   * the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetPersonTracking
   * and pass the job identifier (JobId) from the initial call to StartPersonTracking.
   * GetPersonTracking returns an array, Persons, of tracked persons and the time(s) their paths
   * were tracked in the video. GetPersonTracking only returns the default facial attributes
   * (BoundingBox, Confidence, Landmarks, Pose, and Quality). The other facial attributes listed in
   * the Face
   *
   * @returns Success
   *
   * @throws {@link Operations.GetPersonTrackingError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getPersonTracking(
    request: Operations.GetPersonTrackingRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.GetPersonTrackingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetPersonTracking"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget16Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.GetPersonTrackingError,
      },
      options,
    );
  }

  /**
   * Get Segment Detection
   *
   * @remarks
   * Gets the segment detection results of a Amazon Rekognition Video analysis started by
   * StartSegmentDetection. Segment detection with Amazon Rekognition Video is an asynchronous
   * operation. You start segment detection by calling StartSegmentDetection which returns a job
   * identifier (JobId). When the segment detection operation finishes, Amazon Rekognition publishes
   * a completion status to the Amazon Simple Notification Service topic registered in the initial
   * call to StartSegmentDetection. To get the results of the segment detection operation, first
   * check that the status value published to the Amazon SNS topic is SUCCEEDED. if so, call
   * GetSegmentDetection and pass the job identifier (JobId) from the initial call of
   * StartSegmentDetection. GetSegmentDetection returns detected segments in an array (Segments) of
   * SegmentDetection objects. Segments is sorted by the segment types specified in the SegmentTypes
   * input parameter of StartSegmentDetection. Each element of the array includes the detected
   * segment, the precentage confidence in the acuracy of the detected segment, the type of the
   * segment, and the frame in which the segment was detected. Use SelectedSegmentTypes to find out
   * the type of seg
   *
   * @returns Success
   *
   * @throws {@link Operations.GetSegmentDetectionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getSegmentDetection(
    request: Operations.GetSegmentDetectionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.GetSegmentDetectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetSegmentDetection"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget18Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.GetSegmentDetectionError,
      },
      options,
    );
  }

  /**
   * Index Faces
   *
   * @remarks
   * Detects faces in the input image and adds them to the specified collection. Amazon Rekognition
   * doesn't save the actual faces that are detected. Instead, the underlying detection algorithm
   * first detects the faces in the input image. For each face, the algorithm extracts facial
   * features into a feature vector, and stores it in the backend database. Amazon Rekognition uses
   * feature vectors when it performs face match and search operations using the SearchFaces and
   * SearchFacesByImage operations. For more information, see Adding faces to a collection in the
   * Amazon Rekognition Developer Guide. To get the number of faces in a collection, call
   * DescribeCollection. If you're using version 1.0 of the face detection model, IndexFaces indexes
   * the 15 largest faces in the input image. Later versions of the face detection model index the
   * 100 largest faces in the input image. If you're using version 4 or later of the face model,
   * image orientation information is not returned in the OrientationCorrection field. To determine
   * which version of the model you're using, call DescribeCollection and supply the collection ID.
   * You can also get the model version from the value of FaceModelVersion in the response
   *
   * @returns Success
   *
   * @throws {@link Operations.IndexFaces2Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  indexFaces2(
    request: Operations.IndexFaces2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.IndexFaces2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#IndexFaces"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget9Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.IndexFaces2Error,
      },
      options,
    );
  }

  /**
   * List Dataset Entries
   *
   * @remarks
   * This operation applies only to Amazon Rekognition Custom Labels. Lists the entries (images)
   * within a dataset. An entry is a JSON Line that contains the information for a single image,
   * including the image location, assigned labels, and object location bounding boxes. For more
   * information, see Creating a manifest file. JSON Lines in the response include information about
   * non-terminal errors found in the dataset. Non terminal errors are reported in errors lists
   * within each JSON Line. The same information is reported in the training and testing validation
   * result manifests that Amazon Rekognition Custom Labels creates during model training. You can
   * filter the response in variety of ways, such as choosing which labels to return and returning
   * JSON Lines created after a specific date. This operation requires permissions to perform the
   * rekognition:ListDatasetEntries action.
   *
   * @returns Success
   *
   * @throws {@link Operations.ListDatasetEntriesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listDatasetEntries(
    request: Operations.ListDatasetEntriesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.ListDatasetEntriesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListDatasetEntries"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget20Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.ListDatasetEntriesError,
      },
      options,
    );
  }

  /**
   * List Dataset Labels
   *
   * @remarks
   * This operation applies only to Amazon Rekognition Custom Labels. Lists the labels in a dataset.
   * Amazon Rekognition Custom Labels uses labels to describe images. For more information, see
   * Labeling images. Lists the labels in a dataset. Amazon Rekognition Custom Labels uses labels to
   * describe images. For more information, see Labeling images in the Amazon Rekognition Custom
   * Labels Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link Operations.ListDatasetLabelsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listDatasetLabels(
    request: Operations.ListDatasetLabelsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.ListDatasetLabelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListDatasetLabels"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget22Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.ListDatasetLabelsError,
      },
      options,
    );
  }

  /**
   * List Tags For Resource
   *
   * @remarks
   * Returns a list of tags in an Amazon Rekognition collection, stream processor, or Custom Labels
   * model. This operation requires permissions to perform the rekognition:ListTagsForResource
   * action.
   *
   * @returns Success
   *
   * @throws {@link Operations.ListTagsForResourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listTagsForResource(
    request: Operations.ListTagsForResourceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.ListTagsForResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListTagsForResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget23Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.ListTagsForResourceError,
      },
      options,
    );
  }

  /**
   * Recognize Celebrities
   *
   * @remarks
   * Returns an array of celebrities recognized in the input image. For more information, see
   * Recognizing celebrities in the Amazon Rekognition Developer Guide. RecognizeCelebrities returns
   * the 64 largest faces in the image. It lists the recognized celebrities in the CelebrityFaces
   * array and any unrecognized faces in the UnrecognizedFaces array. RecognizeCelebrities doesn't
   * return celebrities whose faces aren't among the largest 64 faces in the image. For each
   * celebrity recognized, RecognizeCelebrities returns a Celebrity object. The Celebrity object
   * contains the celebrity name, ID, URL links to additional information, match confidence, and a
   * ComparedFace object that you can use to locate the celebrity's face on the image. Amazon
   * Rekognition doesn't retain information about which images a celebrity has been recognized in.
   * Your application must store this information and use the Celebrity ID property as a unique
   * identifier for the celebrity. If you don't store the celebrity name or additional information
   * URLs returned by RecognizeCelebrities, you will need the ID to identify the celebrity in a call
   * to the GetCelebrityInfo operation. You pass the input image either as base64-encoded image
   *
   * @returns Success
   *
   * @throws {@link Operations.RecognizeCelebrities2Error} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  recognizeCelebrities2(
    request: Operations.RecognizeCelebrities2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.RecognizeCelebrities2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RecognizeCelebrities"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget2Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.RecognizeCelebrities2Error,
      },
      options,
    );
  }

  /**
   * Start Face Detection
   *
   * @remarks
   * Starts asynchronous detection of faces in a stored video. Amazon Rekognition Video can detect
   * faces in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the
   * filename of the video. StartFaceDetection returns a job identifier (JobId) that you use to get
   * the results of the operation. When face detection is finished, Amazon Rekognition Video
   * publishes a completion status to the Amazon Simple Notification Service topic that you specify
   * in NotificationChannel. To get the results of the face detection operation, first check that
   * the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceDetection
   * and pass the job identifier (JobId) from the initial call to StartFaceDetection. For more
   * information, see Detecting faces in a stored video in the Amazon Rekognition Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link Operations.StartFaceDetectionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startFaceDetection(
    request: Operations.StartFaceDetectionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.StartFaceDetectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartFaceDetection"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget15Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.StartFaceDetectionError,
      },
      options,
    );
  }

  /**
   * Start Person Tracking
   *
   * @remarks
   * End of support notice: On October 31, 2025, AWS will discontinue support for Amazon Rekognition
   * People Pathing. After October 31, 2025, you will no longer be able to use the Rekognition
   * People Pathing capability. For more information, visit this blog post. Starts the asynchronous
   * tracking of a person's path in a stored video. Amazon Rekognition Video can track the path of
   * people in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the
   * filename of the video. StartPersonTracking returns a job identifier (JobId) which you use to
   * get the results of the operation. When label detection is finished, Amazon Rekognition
   * publishes a completion status to the Amazon Simple Notification Service topic that you specify
   * in NotificationChannel. To get the results of the person detection operation, first check that
   * the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetPersonTracking
   * and pass the job identifier (JobId) from the initial call to StartPersonTracking.
   *
   * @returns Success
   *
   * @throws {@link Operations.StartPersonTrackingError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startPersonTracking(
    request: Operations.StartPersonTrackingRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.StartPersonTrackingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartPersonTracking"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget17Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.StartPersonTrackingError,
      },
      options,
    );
  }

  /**
   * Start Segment Detection
   *
   * @remarks
   * Starts asynchronous detection of segment detection in a stored video. Amazon Rekognition Video
   * can detect segments in a video stored in an Amazon S3 bucket. Use Video to specify the bucket
   * name and the filename of the video. StartSegmentDetection returns a job identifier (JobId)
   * which you use to get the results of the operation. When segment detection is finished, Amazon
   * Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic
   * that you specify in NotificationChannel. You can use the Filters (StartSegmentDetectionFilters)
   * input parameter to specify the minimum detection confidence returned in the response. Within
   * Filters, use ShotFilter (StartShotDetectionFilter) to filter detected shots. Use
   * TechnicalCueFilter (StartTechnicalCueDetectionFilter) to filter technical cues. To get the
   * results of the segment detection operation, first check that the status value published to the
   * Amazon SNS topic is SUCCEEDED. if so, call GetSegmentDetection and pass the job identifier
   * (JobId) from the initial call to StartSegmentDetection. For more information, see Detecting
   * video segments in stored video in the Amazon Rekognition Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link Operations.StartSegmentDetectionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startSegmentDetection(
    request: Operations.StartSegmentDetectionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.StartSegmentDetectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartSegmentDetection"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget19Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.StartSegmentDetectionError,
      },
      options,
    );
  }

  /**
   * Tag Resource
   *
   * @remarks
   * Adds one or more key-value tags to an Amazon Rekognition collection, stream processor, or
   * Custom Labels model. For more information, see Tagging AWS Resources. This operation requires
   * permissions to perform the rekognition:TagResource action.
   *
   * @returns Success
   *
   * @throws {@link Operations.TagResourceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  tagResource(
    request: Operations.TagResourceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.TagResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#TagResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget24Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.TagResourceError,
      },
      options,
    );
  }

  /**
   * Untag Resource
   *
   * @remarks
   * Removes one or more tags from an Amazon Rekognition collection, stream processor, or Custom
   * Labels model. This operation requires permissions to perform the rekognition:UntagResource
   * action.
   *
   * @returns Success
   *
   * @throws {@link Operations.UntagResourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  untagResource(
    request: Operations.UntagResourceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.UntagResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UntagResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget25Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.UntagResourceError,
      },
      options,
    );
  }

  /**
   * Update Dataset Entries
   *
   * @remarks
   * This operation applies only to Amazon Rekognition Custom Labels. Adds or updates one or more
   * entries (images) in a dataset. An entry is a JSON Line which contains the information for a
   * single image, including the image location, assigned labels, and object location bounding
   * boxes. For more information, see Image-Level labels in manifest files and Object localization
   * in manifest files in the Amazon Rekognition Custom Labels Developer Guide. If the source-ref
   * field in the JSON line references an existing image, the existing image in the dataset is
   * updated. If source-ref field doesn't reference an existing image, the image is added as a new
   * image to the dataset. You specify the changes that you want to make in the Changes input
   * parameter. There isn't a limit to the number JSON Lines that you can change, but the size of
   * Changes must be less than 5MB. UpdateDatasetEntries returns immediatly, but the dataset update
   * might take a while to complete. Use DescribeDataset to check the current status. The dataset
   * updated successfully if the value of Status is UPDATE_COMPLETE. To check if any non-terminal
   * errors occured, call ListDatasetEntries and check for the presence of errors lists in the J
   *
   * @returns Success
   *
   * @throws {@link Operations.UpdateDatasetEntriesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonRekognitionError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateDatasetEntries(
    request: Operations.UpdateDatasetEntriesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.UpdateDatasetEntriesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateDatasetEntries"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget21Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.UpdateDatasetEntriesError,
      },
      options,
    );
  }
}

export namespace Operations {
  export type CompareFaces2Request = {
    xAmzTarget: XAmzTargetAmazonRekognitionFacialAnalysisApi;
  };

  export class CompareFaces2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CompareFaces2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CopyProjectVersionRequestParams = {
    xAmzTarget: XAmzTarget1AmazonRekognitionOperationsApi;
  };

  export class CopyProjectVersionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CopyProjectVersionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteCollectionRequestParams = {
    xAmzTarget: XAmzTarget11;
  };

  export class DeleteCollectionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCollectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeCollectionRequestParams = {
    xAmzTarget: XAmzTarget12;
  };

  export class DescribeCollectionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeCollectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DetectCustomLabels2Request = {
    xAmzTarget: XAmzTarget2AmazonRekognitionOperationsApi;
  };

  export class DetectCustomLabels2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetectCustomLabels2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DetectFaces2Request = {
    xAmzTarget: XAmzTarget3AmazonRekognitionOperationsApi;
  };

  export class DetectFaces2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetectFaces2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DetectLabels2Request = {
    xAmzTarget: XAmzTarget4AmazonRekognitionOperationsApi;
  };

  export class DetectLabels2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetectLabels2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DetectModerationLabels2Request = {
    xAmzTarget: XAmzTarget5AmazonRekognitionOperationsApi;
  };

  export class DetectModerationLabels2Error extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error402", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DetectModerationLabels2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 402, kind: "error402", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DetectProtectiveEquipmentRequestParams = {
    xAmzTarget: XAmzTarget6;
  };

  export class DetectProtectiveEquipmentError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetectProtectiveEquipmentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DetectTextRequestParams = {
    xAmzTarget: XAmzTarget7;
  };

  export class DetectTextError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetectTextError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DistributeDatasetEntriesRequestParams = {
    xAmzTarget: XAmzTarget8;
  };

  export class DistributeDatasetEntriesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DistributeDatasetEntriesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GetCelebrityInfoRequestParams = {
    xAmzTarget: XAmzTarget13;
  };

  export class GetCelebrityInfoError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetCelebrityInfoError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GetFaceDetectionRequestParams = {
    xAmzTarget: XAmzTarget14;
  };

  export class GetFaceDetectionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetFaceDetectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GetPersonTrackingRequestParams = {
    xAmzTarget: XAmzTarget16;
  };

  export class GetPersonTrackingError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetPersonTrackingError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GetSegmentDetectionRequestParams = {
    xAmzTarget: XAmzTarget18;
  };

  export class GetSegmentDetectionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetSegmentDetectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type IndexFaces2Request = {
    xAmzTarget: XAmzTarget9;
  };

  export class IndexFaces2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<IndexFaces2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ListDatasetEntriesRequestParams = {
    xAmzTarget: XAmzTarget20;
  };

  export class ListDatasetEntriesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListDatasetEntriesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ListDatasetLabelsRequestParams = {
    xAmzTarget: XAmzTarget22;
  };

  export class ListDatasetLabelsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListDatasetLabelsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ListTagsForResourceRequestParams = {
    xAmzTarget: XAmzTarget23;
  };

  export class ListTagsForResourceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListTagsForResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type RecognizeCelebrities2Request = {
    xAmzTarget: XAmzTarget2;
  };

  export class RecognizeCelebrities2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RecognizeCelebrities2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type StartFaceDetectionRequestParams = {
    xAmzTarget: XAmzTarget15;
  };

  export class StartFaceDetectionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartFaceDetectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type StartPersonTrackingRequestParams = {
    xAmzTarget: XAmzTarget17;
  };

  export class StartPersonTrackingError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartPersonTrackingError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type StartSegmentDetectionRequestParams = {
    xAmzTarget: XAmzTarget19;
  };

  export class StartSegmentDetectionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartSegmentDetectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TagResourceRequestParams = {
    xAmzTarget: XAmzTarget24;
  };

  export class TagResourceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<TagResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UntagResourceRequestParams = {
    xAmzTarget: XAmzTarget25;
  };

  export class UntagResourceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UntagResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UpdateDatasetEntriesRequestParams = {
    xAmzTarget: XAmzTarget21;
  };

  export class UpdateDatasetEntriesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateDatasetEntriesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
