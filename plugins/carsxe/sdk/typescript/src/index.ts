export { CarsXeClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { Auth } from "./resources/auth.js";
export { History } from "./resources/history.js";
export { Images } from "./resources/images.js";
export { LienTheft } from "./resources/lien-theft.js";
export { MarketValue } from "./resources/market-value.js";
export { PlateDecoder } from "./resources/plate-decoder.js";
export { Recalls } from "./resources/recalls.js";
export { Recognition } from "./resources/recognition.js";
export { Specifications } from "./resources/specifications.js";
export { YearMakeModel } from "./resources/year-make-model.js";

export { colorSchema, type Color } from "./models/color.js";
export { dataSchema, type Data } from "./models/data.js";
export { data1Schema, type Data1 } from "./models/data1.js";
export { data2Schema, type Data2 } from "./models/data2.js";
export { data3Schema, type Data3 } from "./models/data3.js";
export { errorSchema, type Error } from "./models/error.js";
export { errorErrorSchema, type ErrorError } from "./models/error-error.js";
export { historyResponseSchema, type HistoryResponse } from "./models/history-response.js";
export { imageSchema, type Image } from "./models/image.js";
export { imagesResponseSchema, type ImagesResponse } from "./models/images-response.js";
export { inputSchema, type Input } from "./models/input.js";
export {
  inputCarsXeRecallsApiSchema,
  type InputCarsXeRecallsApi,
} from "./models/input-cars-xe-recalls-api.js";
export { marketvalueResponseSchema, type MarketvalueResponse } from "./models/marketvalue-response.js";
export {
  obdcodesdecoderResponseSchema,
  type ObdcodesdecoderResponse,
} from "./models/obdcodesdecoder-response.js";
export { platedecoderResponseSchema, type PlatedecoderResponse } from "./models/platedecoder-response.js";
export {
  platerecognitionRequestSchema,
  type PlaterecognitionRequest,
} from "./models/platerecognition-request.js";
export {
  platerecognitionResponseSchema,
  type PlaterecognitionResponse,
} from "./models/platerecognition-response.js";
export { resultSchema, type Result } from "./models/result.js";
export {
  resultCarsXeRecognitionApiSchema,
  type ResultCarsXeRecognitionApi,
} from "./models/result-cars-xe-recognition-api.js";
export { specsResponseSchema, type SpecsResponse } from "./models/specs-response.js";
export { specsResponse1Schema, type SpecsResponse1 } from "./models/specs-response1.js";
export { successEnvelopeSchema, type SuccessEnvelope } from "./models/success-envelope.js";
export { tradeInValueSchema, type TradeInValue } from "./models/trade-in-value.js";
export { usageSchema, type Usage } from "./models/usage.js";
export { usageLimitErrorSchema, type UsageLimitError } from "./models/usage-limit-error.js";
export { usageLimitErrorErrorSchema, type UsageLimitErrorError } from "./models/usage-limit-error-error.js";
export {
  v1InternationalVinDecoderResponseSchema,
  type V1InternationalVinDecoderResponse,
} from "./models/v1-international-vin-decoder-response.js";
export { v1LienTheftResponseSchema, type V1LienTheftResponse } from "./models/v1-lien-theft-response.js";
export {
  v1RecallsBatchResultsResponseSchema,
  type V1RecallsBatchResultsResponse,
} from "./models/v1-recalls-batch-results-response.js";
export {
  v1RecallsBatchStatusResponseSchema,
  type V1RecallsBatchStatusResponse,
} from "./models/v1-recalls-batch-status-response.js";
export {
  v1RecallsBatchSubmitRequestSchema,
  type V1RecallsBatchSubmitRequest,
} from "./models/v1-recalls-batch-submit-request.js";
export {
  v1RecallsBatchSubmitResponseSchema,
  type V1RecallsBatchSubmitResponse,
} from "./models/v1-recalls-batch-submit-response.js";
export { v1RecallsResponseSchema, type V1RecallsResponse } from "./models/v1-recalls-response.js";
export { v1RecallsYmmResponseSchema, type V1RecallsYmmResponse } from "./models/v1-recalls-ymm-response.js";
export {
  v1UsPlatedecoderResponseSchema,
  type V1UsPlatedecoderResponse,
} from "./models/v1-us-platedecoder-response.js";
export { v1VinocrRequestSchema, type V1VinocrRequest } from "./models/v1-vinocr-request.js";
export { v1VinocrResponseSchema, type V1VinocrResponse } from "./models/v1-vinocr-response.js";
export { v1YmmOptionsResponseSchema, type V1YmmOptionsResponse } from "./models/v1-ymm-options-response.js";
export { v1YmmResponseSchema, type V1YmmResponse } from "./models/v1-ymm-response.js";
export { v2MarketvalueResponseSchema, type V2MarketvalueResponse } from "./models/v2-marketvalue-response.js";
export {
  v2PlatedecoderResponseSchema,
  type V2PlatedecoderResponse,
} from "./models/v2-platedecoder-response.js";
export { warrantySchema, type Warranty } from "./models/warranty.js";
export { AllTrimOptions, allTrimOptionsSchema } from "./models/all-trim-options.js";
export { Angle, angleSchema } from "./models/angle.js";
export { Condition, conditionSchema } from "./models/condition.js";
export { DecodeVin, decodeVinSchema } from "./models/decode-vin.js";
export { Deepdata, deepdataSchema } from "./models/deepdata.js";
export { Dimension, dimensionSchema } from "./models/dimension.js";
export { DisableIntVinDecoding, disableIntVinDecodingSchema } from "./models/disable-int-vin-decoding.js";
export { Format, formatSchema } from "./models/format.js";
export { License, licenseSchema } from "./models/license.js";
export { PhotoType, photoTypeSchema } from "./models/photo-type.js";
export { Size, sizeSchema } from "./models/size.js";

export {
  CoreError as CarsXeError,
  ResponseError,
  DecodeError,
  EncodeError,
  ConnectionError,
  TimeoutError,
  AuthError,
  PaginationError,
  ConfigurationError,
} from "./core/errors.js";
export { ApiError } from "./core/api-error.js";
export { SchemaError } from "./core/validation/schema-error.js";
export {
  defaultLoggingOptions,
  type LoggingOptions,
  type RequestLoggingOptions,
  type Logger,
  type LogDetails,
  type HttpRequestDetails,
  type RequestHeadersDetails,
  type RequestBodyDetails,
  type HttpResponseDetails,
  type ResponseHeadersDetails,
  type HttpRetryingDetails,
  type HttpFailedDetails,
  type LogLevel,
} from "./core/logging.js";
export type { ApiPromise, ApiResult } from "./core/api-promise.js";
export type { Pageable, PageableApiResult } from "./core/pagination/pageable.js";
export type { HttpMethod, RequestOptions } from "./core/api-request.js";
export type { RetryOptions, RequestRetryOptions, RetryAttempt, RetryReason } from "./core/retry.js";
export type { HookOptions, BeforeRequestHook, AfterResponseHook, HookContext } from "./core/hooks.js";
export type { BinaryContent, BinaryData, BinaryErrorContent, FileData, FileInput } from "./core/binary.js";
export type { ErrorKind } from "./core/errors.js";
export type { Declared, Undeclared } from "./core/api-error.js";
export type { Schema, EnumSchema, Encoded, ValidationResult, JsonValue } from "./core/validation/schema.js";
