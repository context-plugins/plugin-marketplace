export { FacebookBusinessManagerClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { AdAccounts } from "./resources/ad-accounts.js";
export { AdCreatives } from "./resources/ad-creatives.js";
export { AdImages } from "./resources/ad-images.js";
export { AdSets } from "./resources/ad-sets.js";
export { Ads } from "./resources/ads.js";
export { Campaigns } from "./resources/campaigns.js";
export { CommentsApi } from "./resources/comments-api.js";
export { CustomAudiences } from "./resources/custom-audiences.js";
export { Insights } from "./resources/insights.js";
export { PageInsights } from "./resources/page-insights.js";
export { Pages } from "./resources/pages.js";
export { Photos } from "./resources/photos.js";
export { Posts } from "./resources/posts.js";
export { Videos } from "./resources/videos.js";

export { actAdimagesResponseSchema, type ActAdimagesResponse } from "./models/act-adimages-response.js";
export { actionSchema, type Action } from "./models/action.js";
export { adSchema, type Ad } from "./models/ad.js";
export { adAccountSchema, type AdAccount } from "./models/ad-account.js";
export { adCreateSchema, type AdCreate } from "./models/ad-create.js";
export { adCreativeSchema, type AdCreative } from "./models/ad-creative.js";
export { adCreativeCreateSchema, type AdCreativeCreate } from "./models/ad-creative-create.js";
export { adCreativeListSchema, type AdCreativeList } from "./models/ad-creative-list.js";
export { adListSchema, type AdList } from "./models/ad-list.js";
export { adSetSchema, type AdSet } from "./models/ad-set.js";
export { adSetCreateSchema, type AdSetCreate } from "./models/ad-set-create.js";
export { adSetListSchema, type AdSetList } from "./models/ad-set-list.js";
export { adSetUpdateSchema, type AdSetUpdate } from "./models/ad-set-update.js";
export { BidStrategy, bidStrategySchema } from "./models/bid-strategy.js";
export { BidStrategy1, bidStrategy1Schema } from "./models/bid-strategy1.js";
export { BillingEvent, billingEventSchema } from "./models/billing-event.js";
export { BillingEvent1, billingEvent1Schema } from "./models/billing-event1.js";
export { businessSchema, type Business } from "./models/business.js";
export { BuyingType, buyingTypeSchema } from "./models/buying-type.js";
export { BuyingType1, buyingType1Schema } from "./models/buying-type1.js";
export { CallToActionType, callToActionTypeSchema } from "./models/call-to-action-type.js";
export { CallToActionType1, callToActionType1Schema } from "./models/call-to-action-type1.js";
export { campaignSchema, type Campaign } from "./models/campaign.js";
export { campaignCreateSchema, type CampaignCreate } from "./models/campaign-create.js";
export { campaignListSchema, type CampaignList } from "./models/campaign-list.js";
export { campaignUpdateSchema, type CampaignUpdate } from "./models/campaign-update.js";
export { categoryListSchema, type CategoryList } from "./models/category-list.js";
export { commentSchema, type Comment } from "./models/comment.js";
export { commentListSchema, type CommentList } from "./models/comment-list.js";
export { commentsSchema, type Comments } from "./models/comments.js";
export { commentsRequestSchema, type CommentsRequest } from "./models/comments-request.js";
export { conversionSchema, type Conversion } from "./models/conversion.js";
export { coverSchema, type Cover } from "./models/cover.js";
export { createResponseSchema, type CreateResponse } from "./models/create-response.js";
export { creativeSchema, type Creative } from "./models/creative.js";
export { creative1Schema, type Creative1 } from "./models/creative1.js";
export { cursorsSchema, type Cursors } from "./models/cursors.js";
export { customAudienceSchema, type CustomAudience } from "./models/custom-audience.js";
export { customAudienceCreateSchema, type CustomAudienceCreate } from "./models/custom-audience-create.js";
export { customAudienceListSchema, type CustomAudienceList } from "./models/custom-audience-list.js";
export { dataSchema, type Data } from "./models/data.js";
export { dataSourceSchema, type DataSource } from "./models/data-source.js";
export { datumSchema, type Datum } from "./models/datum.js";
export { deliveryStatusSchema, type DeliveryStatus } from "./models/delivery-status.js";
export { errorSchema, type Error } from "./models/error.js";
export { error1Schema, type Error1 } from "./models/error1.js";
export {
  error1FacebookBusinessManagerFacebookPagesCommentsApiSchema,
  type Error1FacebookBusinessManagerFacebookPagesCommentsApi,
} from "./models/error1-facebook-business-manager-facebook-pages-comments-api.js";
export { errorErrorSchema, type ErrorError } from "./models/error-error.js";
export { fromSchema, type From } from "./models/from.js";
export { geoLocationsSchema, type GeoLocations } from "./models/geo-locations.js";
export { insightsDataSchema, type InsightsData } from "./models/insights-data.js";
export { insightsResponseSchema, type InsightsResponse } from "./models/insights-response.js";
export { interestSchema, type Interest } from "./models/interest.js";
export { likesSchema, type Likes } from "./models/likes.js";
export { locationSchema, type Location } from "./models/location.js";
export { lookalikeSpecSchema, type LookalikeSpec } from "./models/lookalike-spec.js";
export { Objective, objectiveSchema } from "./models/objective.js";
export { operationStatusSchema, type OperationStatus } from "./models/operation-status.js";
export { OptimizationGoal, optimizationGoalSchema } from "./models/optimization-goal.js";
export { OptimizationGoal1, optimizationGoal1Schema } from "./models/optimization-goal1.js";
export { pageSchema, type Page } from "./models/page.js";
export { pageInsightsResponseSchema, type PageInsightsResponse } from "./models/page-insights-response.js";
export { pagingSchema, type Paging } from "./models/paging.js";
export { pagingCursorsSchema, type PagingCursors } from "./models/paging-cursors.js";
export {
  pagingFacebookBusinessManagerFacebookPagesCommentsApiSchema,
  type PagingFacebookBusinessManagerFacebookPagesCommentsApi,
} from "./models/paging-facebook-business-manager-facebook-pages-comments-api.js";
export { photosRequestSchema, type PhotosRequest } from "./models/photos-request.js";
export { pictureSchema, type Picture } from "./models/picture.js";
export { postSchema, type Post } from "./models/post.js";
export { postCreateSchema, type PostCreate } from "./models/post-create.js";
export { postListSchema, type PostList } from "./models/post-list.js";
export { requestSchema, type Request } from "./models/request.js";
export { sharesSchema, type Shares } from "./models/shares.js";
export { Status, statusSchema } from "./models/status.js";
export { Status1, status1Schema } from "./models/status1.js";
export {
  Status1FacebookBusinessManagerFacebookMarketingAdsApi,
  status1FacebookBusinessManagerFacebookMarketingAdsApiSchema,
} from "./models/status1-facebook-business-manager-facebook-marketing-ads-api.js";
export {
  Status1FacebookBusinessManagerFacebookMarketingCampaignsApi,
  status1FacebookBusinessManagerFacebookMarketingCampaignsApiSchema,
} from "./models/status1-facebook-business-manager-facebook-marketing-campaigns-api.js";
export { Status2, status2Schema } from "./models/status2.js";
export {
  StatusFacebookBusinessManagerFacebookMarketingAdsApi,
  statusFacebookBusinessManagerFacebookMarketingAdsApiSchema,
} from "./models/status-facebook-business-manager-facebook-marketing-ads-api.js";
export { subscribedAppsRequestSchema, type SubscribedAppsRequest } from "./models/subscribed-apps-request.js";
export { Subtype, subtypeSchema } from "./models/subtype.js";
export { Subtype1, subtype1Schema } from "./models/subtype1.js";
export { successResponseSchema, type SuccessResponse } from "./models/success-response.js";
export {
  successResponseFacebookBusinessManagerFacebookPagesCommentsApiSchema,
  type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi,
} from "./models/success-response-facebook-business-manager-facebook-pages-comments-api.js";
export { summarySchema, type Summary } from "./models/summary.js";
export { targetingSchema, type Targeting } from "./models/targeting.js";
export { Type, typeSchema } from "./models/type.js";
export { valueSchema, type Value } from "./models/value.js";
export { videosRequestSchema, type VideosRequest } from "./models/videos-request.js";
export { Filter, filterSchema } from "./models/filter.js";
export { Level, levelSchema } from "./models/level.js";
export { Order, orderSchema } from "./models/order.js";
export { Period, periodSchema } from "./models/period.js";

export {
  CoreError as FacebookBusinessManagerError,
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
