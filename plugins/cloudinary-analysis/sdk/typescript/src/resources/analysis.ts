import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  analyzeAiVisionGeneralRequestSchema,
  type AnalyzeAiVisionGeneralRequest,
} from "../models/analyze-ai-vision-general-request.js";
import {
  analyzeAiVisionGeneralResponseSchema,
  type AnalyzeAiVisionGeneralResponse,
} from "../models/analyze-ai-vision-general-response.js";
import {
  analyzeAiVisionModerationRequestSchema,
  type AnalyzeAiVisionModerationRequest,
} from "../models/analyze-ai-vision-moderation-request.js";
import {
  analyzeAiVisionModerationResponseSchema,
  type AnalyzeAiVisionModerationResponse,
} from "../models/analyze-ai-vision-moderation-response.js";
import {
  analyzeAiVisionTaggingRequestSchema,
  type AnalyzeAiVisionTaggingRequest,
} from "../models/analyze-ai-vision-tagging-request.js";
import {
  analyzeAiVisionTaggingResponseSchema,
  type AnalyzeAiVisionTaggingResponse,
} from "../models/analyze-ai-vision-tagging-response.js";
import {
  analyzeCaptioningResponseSchema,
  type AnalyzeCaptioningResponse,
} from "../models/analyze-captioning-response.js";
import {
  analyzeCldFashionResponseSchema,
  type AnalyzeCldFashionResponse,
} from "../models/analyze-cld-fashion-response.js";
import {
  analyzeCldTextResponseSchema,
  type AnalyzeCldTextResponse,
} from "../models/analyze-cld-text-response.js";
import { analyzeCocoResponseSchema, type AnalyzeCocoResponse } from "../models/analyze-coco-response.js";
import {
  analyzeGoogleLogoDetectionResponseSchema,
  type AnalyzeGoogleLogoDetectionResponse,
} from "../models/analyze-google-logo-detection-response.js";
import {
  analyzeGoogleTaggingResponseSchema,
  type AnalyzeGoogleTaggingResponse,
} from "../models/analyze-google-tagging-response.js";
import {
  analyzeHumanAnatomyResponseSchema,
  type AnalyzeHumanAnatomyResponse,
} from "../models/analyze-human-anatomy-response.js";
import {
  analyzeImageQualityResponseSchema,
  type AnalyzeImageQualityResponse,
} from "../models/analyze-image-quality-response.js";
import { analyzeLvisResponseSchema, type AnalyzeLvisResponse } from "../models/analyze-lvis-response.js";
import {
  analyzeShopClassifierResponseSchema,
  type AnalyzeShopClassifierResponse,
} from "../models/analyze-shop-classifier-response.js";
import {
  analyzeUnidetResponseSchema,
  type AnalyzeUnidetResponse,
} from "../models/analyze-unidet-response.js";
import {
  analyzeWatermarkDetectionResponseSchema,
  type AnalyzeWatermarkDetectionResponse,
} from "../models/analyze-watermark-detection-response.js";
import { baseAnalyzeRequestSchema, type BaseAnalyzeRequest } from "../models/base-analyze-request.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { rateLimitedResponse1Schema, type RateLimitedResponse1 } from "../models/rate-limited-response1.js";
import type { Servers } from "../servers.js";

/**
 * Use the Analyze API to analyze any external asset and return details based on the type of
 * analysis requested.
 */
export class Analysis {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Analyze - AI Vision General
   *
   * @remarks
   * The General mode serves a wide array of applications by providing detailed answers to diverse
   * questions about an image. Users can inquire about any aspect of an image, such as identifying
   * objects, understanding scenes, or interpreting text within the image.
   *
   * @returns Analysis succeeded
   *
   * @throws {@link Analysis.AnalyzeAiVisionGeneralError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AnalyzeApiBetaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyzeAiVisionGeneral(
    request: Analysis.AnalyzeAiVisionGeneralRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AnalyzeAiVisionGeneralResponse | null, Analysis.AnalyzeAiVisionGeneralError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analyze/ai_vision_general"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oAuth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: analyzeAiVisionGeneralRequestSchema },
      },
      {
        success: { kind: "json", schema: s.nullable(s.lazy(() => analyzeAiVisionGeneralResponseSchema)) },
        errorFactory: Analysis.AnalyzeAiVisionGeneralError,
      },
      options,
    );
  }

  /**
   * Analyze - AI Vision Moderation
   *
   * @remarks
   * The Moderation mode accepts multiple questions about an image, to which the response provides
   * concise answers of "yes," "no," or "unknown." This functionality allows for a nuanced
   * evaluation of whether the image adheres to specific content policies, creative specs, or
   * aesthetic criteria.
   *
   * @returns Analysis succeeded
   *
   * @throws {@link Analysis.AnalyzeAiVisionModerationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AnalyzeApiBetaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyzeAiVisionModeration(
    request: Analysis.AnalyzeAiVisionModerationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AnalyzeAiVisionModerationResponse | null, Analysis.AnalyzeAiVisionModerationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analyze/ai_vision_moderation"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oAuth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: analyzeAiVisionModerationRequestSchema },
      },
      {
        success: { kind: "json", schema: s.nullable(s.lazy(() => analyzeAiVisionModerationResponseSchema)) },
        errorFactory: Analysis.AnalyzeAiVisionModerationError,
      },
      options,
    );
  }

  /**
   * Analyze - AI Vision Tagging
   *
   * @remarks
   * The Tagging mode accepts a list of tag names along with their corresponding descriptions. If
   * the image matches the description, which may encompass various elements, it will be
   * appropriately tagged. This approach enables customers to align with their own brand taxonomy,
   * offering a dynamic, flexible, and open method for image classification.
   *
   * @returns Analysis succeeded
   *
   * @throws {@link Analysis.AnalyzeAiVisionTaggingError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AnalyzeApiBetaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyzeAiVisionTagging(
    request: Analysis.AnalyzeAiVisionTaggingRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AnalyzeAiVisionTaggingResponse | null, Analysis.AnalyzeAiVisionTaggingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analyze/ai_vision_tagging"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oAuth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: analyzeAiVisionTaggingRequestSchema },
      },
      {
        success: { kind: "json", schema: s.nullable(s.lazy(() => analyzeAiVisionTaggingResponseSchema)) },
        errorFactory: Analysis.AnalyzeAiVisionTaggingError,
      },
      options,
    );
  }

  /**
   * Analyze - Captioning
   *
   * @remarks
   * Provides a caption for an image.
   *
   * @returns Analysis succeeded
   *
   * @throws {@link Analysis.AnalyzeCaptioningError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AnalyzeApiBetaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyzeCaptioning(
    request: Analysis.AnalyzeCaptioningRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyzeCaptioningResponse | null, Analysis.AnalyzeCaptioningError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analyze/captioning"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oAuth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: baseAnalyzeRequestSchema },
      },
      {
        success: { kind: "json", schema: s.nullable(s.lazy(() => analyzeCaptioningResponseSchema)) },
        errorFactory: Analysis.AnalyzeCaptioningError,
      },
      options,
    );
  }

  /**
   * Analyze - Cld-Fashion
   *
   * @remarks
   * Analyze an image using the
   * [Cld-Fashion](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning)
   * content-aware detection model. Cloudinary's fashion model is specifically dedicated to items of
   * clothing. The response includes attributes of the clothing identified, for example whether the
   * garment contains pockets, its material and the fastenings used.
   *
   * @returns Analysis succeeded
   *
   * @throws {@link Analysis.AnalyzeCldFashionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AnalyzeApiBetaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyzeCldFashion(
    request: Analysis.AnalyzeCldFashionRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyzeCldFashionResponse | null, Analysis.AnalyzeCldFashionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analyze/cld_fashion"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oAuth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: baseAnalyzeRequestSchema },
      },
      {
        success: { kind: "json", schema: s.nullable(s.lazy(() => analyzeCldFashionResponseSchema)) },
        errorFactory: Analysis.AnalyzeCldFashionError,
      },
      options,
    );
  }

  /**
   * Analyze - Cld-Text
   *
   * @remarks
   * Analyze an image using the
   * [Cld-Text](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning)
   * content-aware detection model. Cloudinary's text model tells you if your image includes text,
   * and where it's located. Used with image tagging, you can then search for images that contain
   * blocks of text. Used with object-aware cropping, you can choose to keep only the text part, or
   * specify a crop that avoids the text.
   *
   * @returns Analysis succeeded
   *
   * @throws {@link Analysis.AnalyzeCldTextError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AnalyzeApiBetaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyzeCldText(
    request: Analysis.AnalyzeCldTextRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyzeCldTextResponse | null, Analysis.AnalyzeCldTextError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analyze/cld_text"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oAuth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: baseAnalyzeRequestSchema },
      },
      {
        success: { kind: "json", schema: s.nullable(s.lazy(() => analyzeCldTextResponseSchema)) },
        errorFactory: Analysis.AnalyzeCldTextError,
      },
      options,
    );
  }

  /**
   * Analyze - Coco
   *
   * @remarks
   * Analyze an image using the
   * [Coco](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning)
   * content-aware detection model. The [Common Objects in Context](https://cocodataset.org/) model
   * contains just 80 common objects.
   *
   * @returns Analysis succeeded
   *
   * @throws {@link Analysis.AnalyzeCocoError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AnalyzeApiBetaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyzeCoco(
    request: Analysis.AnalyzeCocoRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyzeCocoResponse | null, Analysis.AnalyzeCocoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analyze/coco"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oAuth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: baseAnalyzeRequestSchema },
      },
      {
        success: { kind: "json", schema: s.nullable(s.lazy(() => analyzeCocoResponseSchema)) },
        errorFactory: Analysis.AnalyzeCocoError,
      },
      options,
    );
  }

  /**
   * Analyze - Google Logo Detection
   *
   * @remarks
   * Detects popular product logos within an image.
   *
   * @returns Analysis succeeded
   *
   * @throws {@link Analysis.AnalyzeGoogleLogoDetectionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AnalyzeApiBetaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyzeGoogleLogoDetection(
    request: Analysis.AnalyzeGoogleLogoDetectionRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyzeGoogleLogoDetectionResponse | null, Analysis.AnalyzeGoogleLogoDetectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analyze/google_logo_detection"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oAuth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: baseAnalyzeRequestSchema },
      },
      {
        success: { kind: "json", schema: s.nullable(s.lazy(() => analyzeGoogleLogoDetectionResponseSchema)) },
        errorFactory: Analysis.AnalyzeGoogleLogoDetectionError,
      },
      options,
    );
  }

  /**
   * Analyze - Google Tagging
   *
   * @remarks
   * Provides tags for an image using Google's tagging service.
   *
   * @returns Analysis succeeded
   *
   * @throws {@link Analysis.AnalyzeGoogleTaggingError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AnalyzeApiBetaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyzeGoogleTagging(
    request: Analysis.AnalyzeGoogleTaggingRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyzeGoogleTaggingResponse | null, Analysis.AnalyzeGoogleTaggingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analyze/google_tagging"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oAuth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: baseAnalyzeRequestSchema },
      },
      {
        success: { kind: "json", schema: s.nullable(s.lazy(() => analyzeGoogleTaggingResponseSchema)) },
        errorFactory: Analysis.AnalyzeGoogleTaggingError,
      },
      options,
    );
  }

  /**
   * Analyze - Human Anatomy
   *
   * @remarks
   * Analyze an image using the [Human
   * Anatomy](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning)
   * content-aware detection model. Cloudinary's human anatomy model identifies parts of the human
   * body in an image. It works best when the majority of a human body is detected in the image.
   *
   * @returns Analysis succeeded
   *
   * @throws {@link Analysis.AnalyzeHumanAnatomyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AnalyzeApiBetaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyzeHumanAnatomy(
    request: Analysis.AnalyzeHumanAnatomyRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyzeHumanAnatomyResponse | null, Analysis.AnalyzeHumanAnatomyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analyze/human_anatomy"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oAuth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: baseAnalyzeRequestSchema },
      },
      {
        success: { kind: "json", schema: s.nullable(s.lazy(() => analyzeHumanAnatomyResponseSchema)) },
        errorFactory: Analysis.AnalyzeHumanAnatomyError,
      },
      options,
    );
  }

  /**
   * Analyze - Image Quality Analysis
   *
   * @remarks
   * Analyze an image using the [Image Quality
   * Analysis](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#image_quality_analysis)
   * model.
   *
   * @returns Analysis succeeded
   *
   * @throws {@link Analysis.AnalyzeImageQualityError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AnalyzeApiBetaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyzeImageQuality(
    request: Analysis.AnalyzeImageQualityRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyzeImageQualityResponse | null, Analysis.AnalyzeImageQualityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analyze/image_quality"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oAuth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: baseAnalyzeRequestSchema },
      },
      {
        success: { kind: "json", schema: s.nullable(s.lazy(() => analyzeImageQualityResponseSchema)) },
        errorFactory: Analysis.AnalyzeImageQualityError,
      },
      options,
    );
  }

  /**
   * Analyze - Lvis
   *
   * @remarks
   * Analyze an image using the
   * [Lvis](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning)
   * content-aware detection model. The [Large Vocabulary Instance
   * Segmentation](https://www.lvisdataset.org/) model contains thousands of general objects.
   *
   * @returns Analysis succeeded
   *
   * @throws {@link Analysis.AnalyzeLvisError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AnalyzeApiBetaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyzeLvis(
    request: Analysis.AnalyzeLvisRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyzeLvisResponse | null, Analysis.AnalyzeLvisError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analyze/lvis"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oAuth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: baseAnalyzeRequestSchema },
      },
      {
        success: { kind: "json", schema: s.nullable(s.lazy(() => analyzeLvisResponseSchema)) },
        errorFactory: Analysis.AnalyzeLvisError,
      },
      options,
    );
  }

  /**
   * Analyze - Shop Classifier
   *
   * @remarks
   * Analyze an image using the [Shop
   * Classifier](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning)
   * content-aware detection model. Cloudinary's shop classifier model detects if the image is a
   * product image taken in a studio, or if it's a natural image.
   *
   * @returns Analysis succeeded
   *
   * @throws {@link Analysis.AnalyzeShopClassifierError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AnalyzeApiBetaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyzeShopClassifier(
    request: Analysis.AnalyzeShopClassifierRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyzeShopClassifierResponse | null, Analysis.AnalyzeShopClassifierError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analyze/shop_classifier"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oAuth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: baseAnalyzeRequestSchema },
      },
      {
        success: { kind: "json", schema: s.nullable(s.lazy(() => analyzeShopClassifierResponseSchema)) },
        errorFactory: Analysis.AnalyzeShopClassifierError,
      },
      options,
    );
  }

  /**
   * Analyze - Unidet
   *
   * @remarks
   * Analyze an image using the
   * [Unidet](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning)
   * content-aware detection model. The [UniDet](https://github.com/xingyizhou/UniDet) model is a
   * unified model, combining a number of object models, including
   * [Objects365](https://www.objects365.org/overview.html), which focuses on diverse objects in the
   * wild.
   *
   * @returns Analysis succeeded
   *
   * @throws {@link Analysis.AnalyzeUnidetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AnalyzeApiBetaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyzeUnidet(
    request: Analysis.AnalyzeUnidetRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyzeUnidetResponse | null, Analysis.AnalyzeUnidetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analyze/unidet"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oAuth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: baseAnalyzeRequestSchema },
      },
      {
        success: { kind: "json", schema: s.nullable(s.lazy(() => analyzeUnidetResponseSchema)) },
        errorFactory: Analysis.AnalyzeUnidetError,
      },
      options,
    );
  }

  /**
   * Analyze - Watermark Detection
   *
   * @remarks
   * Analyze an image using the [Watermark
   * Detection](https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#watermark_detection)
   * detection model.
   *
   * @returns Analysis succeeded
   *
   * @throws {@link Analysis.AnalyzeWatermarkDetectionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AnalyzeApiBetaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  analyzeWatermarkDetection(
    request: Analysis.AnalyzeWatermarkDetectionRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyzeWatermarkDetectionResponse | null, Analysis.AnalyzeWatermarkDetectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analyze/watermark_detection"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oAuth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: baseAnalyzeRequestSchema },
      },
      {
        success: { kind: "json", schema: s.nullable(s.lazy(() => analyzeWatermarkDetectionResponseSchema)) },
        errorFactory: Analysis.AnalyzeWatermarkDetectionError,
      },
      options,
    );
  }
}

export namespace Analysis {
  export type AnalyzeAiVisionGeneralRequestParams = {
    /** A JSON object containing request parameters */
    body: AnalyzeAiVisionGeneralRequest;
  };

  export class AnalyzeAiVisionGeneralError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"rateLimitedResponse1", RateLimitedResponse1 | null>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnalyzeAiVisionGeneralError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 429,
        kind: "rateLimitedResponse1",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => rateLimitedResponse1Schema)) },
      },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AnalyzeAiVisionModerationRequestParams = {
    /** A JSON object containing request parameters */
    body: AnalyzeAiVisionModerationRequest;
  };

  export class AnalyzeAiVisionModerationError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"rateLimitedResponse1", RateLimitedResponse1 | null>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnalyzeAiVisionModerationError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 429,
        kind: "rateLimitedResponse1",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => rateLimitedResponse1Schema)) },
      },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AnalyzeAiVisionTaggingRequestParams = {
    /** A JSON object containing request parameters */
    body: AnalyzeAiVisionTaggingRequest;
  };

  export class AnalyzeAiVisionTaggingError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"rateLimitedResponse1", RateLimitedResponse1 | null>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnalyzeAiVisionTaggingError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 429,
        kind: "rateLimitedResponse1",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => rateLimitedResponse1Schema)) },
      },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AnalyzeCaptioningRequest = {
    /** A JSON object containing request parameters */
    body: BaseAnalyzeRequest;
  };

  export class AnalyzeCaptioningError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"rateLimitedResponse1", RateLimitedResponse1 | null>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnalyzeCaptioningError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 429,
        kind: "rateLimitedResponse1",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => rateLimitedResponse1Schema)) },
      },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AnalyzeCldFashionRequest = {
    /** A JSON object containing request parameters */
    body: BaseAnalyzeRequest;
  };

  export class AnalyzeCldFashionError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"rateLimitedResponse1", RateLimitedResponse1 | null>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnalyzeCldFashionError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 429,
        kind: "rateLimitedResponse1",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => rateLimitedResponse1Schema)) },
      },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AnalyzeCldTextRequest = {
    /** A JSON object containing request parameters */
    body: BaseAnalyzeRequest;
  };

  export class AnalyzeCldTextError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"rateLimitedResponse1", RateLimitedResponse1 | null>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnalyzeCldTextError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 429,
        kind: "rateLimitedResponse1",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => rateLimitedResponse1Schema)) },
      },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AnalyzeCocoRequest = {
    /** A JSON object containing request parameters */
    body: BaseAnalyzeRequest;
  };

  export class AnalyzeCocoError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"rateLimitedResponse1", RateLimitedResponse1 | null>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnalyzeCocoError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 429,
        kind: "rateLimitedResponse1",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => rateLimitedResponse1Schema)) },
      },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AnalyzeGoogleLogoDetectionRequest = {
    /** A JSON object containing request parameters */
    body: BaseAnalyzeRequest;
  };

  export class AnalyzeGoogleLogoDetectionError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"rateLimitedResponse1", RateLimitedResponse1 | null>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnalyzeGoogleLogoDetectionError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 429,
        kind: "rateLimitedResponse1",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => rateLimitedResponse1Schema)) },
      },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AnalyzeGoogleTaggingRequest = {
    /** A JSON object containing request parameters */
    body: BaseAnalyzeRequest;
  };

  export class AnalyzeGoogleTaggingError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"rateLimitedResponse1", RateLimitedResponse1 | null>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnalyzeGoogleTaggingError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 429,
        kind: "rateLimitedResponse1",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => rateLimitedResponse1Schema)) },
      },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AnalyzeHumanAnatomyRequest = {
    /** A JSON object containing request parameters */
    body: BaseAnalyzeRequest;
  };

  export class AnalyzeHumanAnatomyError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"rateLimitedResponse1", RateLimitedResponse1 | null>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnalyzeHumanAnatomyError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 429,
        kind: "rateLimitedResponse1",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => rateLimitedResponse1Schema)) },
      },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AnalyzeImageQualityRequest = {
    /** A JSON object containing request parameters */
    body: BaseAnalyzeRequest;
  };

  export class AnalyzeImageQualityError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"rateLimitedResponse1", RateLimitedResponse1 | null>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnalyzeImageQualityError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 429,
        kind: "rateLimitedResponse1",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => rateLimitedResponse1Schema)) },
      },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AnalyzeLvisRequest = {
    /** A JSON object containing request parameters */
    body: BaseAnalyzeRequest;
  };

  export class AnalyzeLvisError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"rateLimitedResponse1", RateLimitedResponse1 | null>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnalyzeLvisError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 429,
        kind: "rateLimitedResponse1",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => rateLimitedResponse1Schema)) },
      },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AnalyzeShopClassifierRequest = {
    /** A JSON object containing request parameters */
    body: BaseAnalyzeRequest;
  };

  export class AnalyzeShopClassifierError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"rateLimitedResponse1", RateLimitedResponse1 | null>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnalyzeShopClassifierError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 429,
        kind: "rateLimitedResponse1",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => rateLimitedResponse1Schema)) },
      },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AnalyzeUnidetRequest = {
    /** A JSON object containing request parameters */
    body: BaseAnalyzeRequest;
  };

  export class AnalyzeUnidetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"rateLimitedResponse1", RateLimitedResponse1 | null>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnalyzeUnidetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 429,
        kind: "rateLimitedResponse1",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => rateLimitedResponse1Schema)) },
      },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AnalyzeWatermarkDetectionRequest = {
    /** A JSON object containing request parameters */
    body: BaseAnalyzeRequest;
  };

  export class AnalyzeWatermarkDetectionError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"rateLimitedResponse1", RateLimitedResponse1 | null>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnalyzeWatermarkDetectionError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 429,
        kind: "rateLimitedResponse1",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => rateLimitedResponse1Schema)) },
      },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
