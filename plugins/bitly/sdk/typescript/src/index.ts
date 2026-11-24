export { BitlyClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { Apps } from "./resources/apps.js";
export { BitlinksApi } from "./resources/bitlinks-api.js";
export { BsDs } from "./resources/bs-ds.js";
export { CampaignsApi } from "./resources/campaigns-api.js";
export { CustomBitlinks } from "./resources/custom-bitlinks.js";
export { GroupsApi } from "./resources/groups-api.js";
export { OrganizationsApi } from "./resources/organizations-api.js";
export { QrCodes } from "./resources/qr-codes.js";
export { UserApi } from "./resources/user-api.js";
export { WebhooksApi } from "./resources/webhooks-api.js";

export { Accept, acceptSchema } from "./models/accept.js";
export { Action, actionSchema } from "./models/action.js";
export { addCustomBitlinkSchema, type AddCustomBitlink } from "./models/add-custom-bitlink.js";
export { ArchivedBitlyGroupsApi, archivedBitlyGroupsApiSchema } from "./models/archived-bitly-groups-api.js";
export { bsDsResponseSchema, type BsDsResponse } from "./models/bs-ds-response.js";
export { baseChannelSchema, type BaseChannel } from "./models/base-channel.js";
export { baseChannelBitlinkSchema, type BaseChannelBitlink } from "./models/base-channel-bitlink.js";
export { baseMetricsSchema, type BaseMetrics } from "./models/base-metrics.js";
export {
  baseMetricsBitlyCustomBitlinksApiSchema,
  type BaseMetricsBitlyCustomBitlinksApi,
} from "./models/base-metrics-bitly-custom-bitlinks-api.js";
export { baseScanMetricsSchema, type BaseScanMetrics } from "./models/base-scan-metrics.js";
export { bitlinkBodySchema, type BitlinkBody } from "./models/bitlink-body.js";
export { bitlinkScansSchema, type BitlinkScans } from "./models/bitlink-scans.js";
export { bitlinkScansSummarySchema, type BitlinkScansSummary } from "./models/bitlink-scans-summary.js";
export { bitlinkUpdateSchema, type BitlinkUpdate } from "./models/bitlink-update.js";
export { bitlinkUpdateBodySchema, type BitlinkUpdateBody } from "./models/bitlink-update-body.js";
export { bitlinksSchema, type Bitlinks } from "./models/bitlinks.js";
export { bitlinksPaginationSchema, type BitlinksPagination } from "./models/bitlinks-pagination.js";
export { bulkUpdateSchema, type BulkUpdate } from "./models/bulk-update.js";
export { bulkUpdateRequestSchema, type BulkUpdateRequest } from "./models/bulk-update-request.js";
export { campaignSchema, type Campaign } from "./models/campaign.js";
export { campaignModifySchema, type CampaignModify } from "./models/campaign-modify.js";
export { campaignsSchema, type Campaigns } from "./models/campaigns.js";
export { channelSchema, type Channel } from "./models/channel.js";
export { channelModifySchema, type ChannelModify } from "./models/channel-modify.js";
export { channelsSchema, type Channels } from "./models/channels.js";
export { cityMetricSchema, type CityMetric } from "./models/city-metric.js";
export { cityMetricsSchema, type CityMetrics } from "./models/city-metrics.js";
export {
  cityMetricsBitlyGroupsApiSchema,
  type CityMetricsBitlyGroupsApi,
} from "./models/city-metrics-bitly-groups-api.js";
export { cityScanMetricSchema, type CityScanMetric } from "./models/city-scan-metric.js";
export { cityScanMetricsSchema, type CityScanMetrics } from "./models/city-scan-metrics.js";
export { clickLinkSchema, type ClickLink } from "./models/click-link.js";
export { clickMetricSchema, type ClickMetric } from "./models/click-metric.js";
export { clickMetricsSchema, type ClickMetrics } from "./models/click-metrics.js";
export {
  clickMetricsBitlyCustomBitlinksApiSchema,
  type ClickMetricsBitlyCustomBitlinksApi,
} from "./models/click-metrics-bitly-custom-bitlinks-api.js";
export { clicksSchema, type Clicks } from "./models/clicks.js";
export { clicksSummarySchema, type ClicksSummary } from "./models/clicks-summary.js";
export { colorsSchema, type Colors } from "./models/colors.js";
export { countItemSchema, type CountItem } from "./models/count-item.js";
export { customBitlinkHistorySchema, type CustomBitlinkHistory } from "./models/custom-bitlink-history.js";
export {
  customBitlinkBitlyCustomBitlinksApiSchema,
  type CustomBitlinkBitlyCustomBitlinksApi,
} from "./models/custom-bitlink-bitly-custom-bitlinks-api.js";
export { deeplinkSchema, type Deeplink } from "./models/deeplink.js";
export { deeplinkRuleSchema, type DeeplinkRule } from "./models/deeplink-rule.js";
export { deletedLinkSchema, type DeletedLink } from "./models/deleted-link.js";
export { deletedQrCodeSchema, type DeletedQrCode } from "./models/deleted-qr-code.js";
export { deviceMetricSchema, type DeviceMetric } from "./models/device-metric.js";
export { deviceMetricsSchema, type DeviceMetrics } from "./models/device-metrics.js";
export {
  deviceMetricsBitlyGroupsApiSchema,
  type DeviceMetricsBitlyGroupsApi,
} from "./models/device-metrics-bitly-groups-api.js";
export {
  DynamicRoutingDeviceEnum,
  dynamicRoutingDeviceEnumSchema,
} from "./models/dynamic-routing-device-enum.js";
export {
  DynamicRoutingPlatformEnum,
  dynamicRoutingPlatformEnumSchema,
} from "./models/dynamic-routing-platform-enum.js";
export { dynamicRoutingRuleSchema, type DynamicRoutingRule } from "./models/dynamic-routing-rule.js";
export { emailSchema, type Email } from "./models/email.js";
export { engagementSchema, type Engagement } from "./models/engagement.js";
export { engagementSubtotalSchema, type EngagementSubtotal } from "./models/engagement-subtotal.js";
export { engagementsSchema, type Engagements } from "./models/engagements.js";
export { errorSchema, type Error } from "./models/error.js";
export { errorErrorSchema, type ErrorError } from "./models/error-error.js";
export { expandBitlinkSchema, type ExpandBitlink } from "./models/expand-bitlink.js";
export { expandedBitlinkSchema, type ExpandedBitlink } from "./models/expanded-bitlink.js";
export { ExportType, exportTypeSchema } from "./models/export-type.js";
export { ExportType1, exportType1Schema } from "./models/export-type1.js";
export { Facet, facetSchema } from "./models/facet.js";
export { Facet1, facet1Schema } from "./models/facet1.js";
export { Facet1BitlyGroupsApi, facet1BitlyGroupsApiSchema } from "./models/facet1-bitly-groups-api.js";
export {
  FacetBitlyCustomBitlinksApi,
  facetBitlyCustomBitlinksApiSchema,
} from "./models/facet-bitly-custom-bitlinks-api.js";
export { FacetBitlyQrCodesApi, facetBitlyQrCodesApiSchema } from "./models/facet-bitly-qr-codes-api.js";
export { fieldErrorSchema, type FieldError } from "./models/field-error.js";
export { fullShortenSchema, type FullShorten } from "./models/full-shorten.js";
export { gs1MetadataSchema, type Gs1Metadata } from "./models/gs1-metadata.js";
export { gs1ValueSchema, type Gs1Value } from "./models/gs1-value.js";
export { gradientColorSchema, type GradientColor } from "./models/gradient-color.js";
export { groupSchema, type Group } from "./models/group.js";
export { groupClicksSchema, type GroupClicks } from "./models/group-clicks.js";
export {
  groupConsumableFeatureUsageSchema,
  type GroupConsumableFeatureUsage,
} from "./models/group-consumable-feature-usage.js";
export { groupExportFilterSchema, type GroupExportFilter } from "./models/group-export-filter.js";
export {
  groupExportRequestBodySchema,
  type GroupExportRequestBody,
} from "./models/group-export-request-body.js";
export { groupExportResponseSchema, type GroupExportResponse } from "./models/group-export-response.js";
export { groupFeatureUsageSchema, type GroupFeatureUsage } from "./models/group-feature-usage.js";
export { groupHistoricalUsageSchema, type GroupHistoricalUsage } from "./models/group-historical-usage.js";
export { groupPreferencesSchema, type GroupPreferences } from "./models/group-preferences.js";
export { groupUpdateSchema, type GroupUpdate } from "./models/group-update.js";
export { groupsSchema, type Groups } from "./models/groups.js";
export {
  groupsCodesScansTopResponseSchema,
  type GroupsCodesScansTopResponse,
} from "./models/unions/groups-codes-scans-top-response.js";
export {
  groupsLinksClicksDevicesResponseSchema,
  type GroupsLinksClicksDevicesResponse,
} from "./models/groups-links-clicks-devices-response.js";
export { hasReferencesSchema, type HasReferences } from "./models/has-references.js";
export {
  historicalFeatureUsageSchema,
  type HistoricalFeatureUsage,
} from "./models/historical-feature-usage.js";
export { historicalUsageSchema, type HistoricalUsage } from "./models/historical-usage.js";
export { InstallPreference, installPreferenceSchema } from "./models/install-preference.js";
export { linkClicksSchema, type LinkClicks } from "./models/link-clicks.js";
export { linkDeletionResponseSchema, type LinkDeletionResponse } from "./models/link-deletion-response.js";
export { methodLimitSchema, type MethodLimit } from "./models/method-limit.js";
export { metricSchema, type Metric } from "./models/metric.js";
export { metricsSchema, type Metrics } from "./models/metrics.js";
export { MobileOs, mobileOsSchema } from "./models/mobile-os.js";
export { oAuthAppSchema, type OAuthApp } from "./models/oauth-app.js";
export { organizationSchema, type Organization } from "./models/organization.js";
export { organizationsSchema, type Organizations } from "./models/organizations.js";
export { otherMetricsSchema, type OtherMetrics } from "./models/other-metrics.js";
export { otherScanMetricsSchema, type OtherScanMetrics } from "./models/other-scan-metrics.js";
export { planLimitSchema, type PlanLimit } from "./models/plan-limit.js";
export { planLimitsSchema, type PlanLimits } from "./models/plan-limits.js";
export { platformLimitSchema, type PlatformLimit } from "./models/platform-limit.js";
export { platformLimitsSchema, type PlatformLimits } from "./models/platform-limits.js";
export {
  publicCreateQrCodeRequestSchema,
  type PublicCreateQrCodeRequest,
} from "./models/public-create-qr-code-request.js";
export {
  publicCreateStaticQrCodeRequestSchema,
  type PublicCreateStaticQrCodeRequest,
} from "./models/public-create-static-qr-code-request.js";
export {
  publicDeleteQrCodeResponseSchema,
  type PublicDeleteQrCodeResponse,
} from "./models/public-delete-qr-code-response.js";
export {
  publicQrCodeImageResponseSchema,
  type PublicQrCodeImageResponse,
} from "./models/public-qr-code-image-response.js";
export {
  publicStaticQrCodeResponseSchema,
  type PublicStaticQrCodeResponse,
} from "./models/public-static-qr-code-response.js";
export {
  publicUpdateQrCodeRequestSchema,
  type PublicUpdateQrCodeRequest,
} from "./models/public-update-qr-code-request.js";
export { qrcBulkUpdateSchema, type QrcBulkUpdate } from "./models/qrc-bulk-update.js";
export { qrcBulkUpdateRequestSchema, type QrcBulkUpdateRequest } from "./models/qrc-bulk-update-request.js";
export { qrCodeBrandingSchema, type QrCodeBranding } from "./models/qr-code-branding.js";
export { qrCodeCornerSchema, type QrCodeCorner } from "./models/qr-code-corner.js";
export { qrCodeCornersSchema, type QrCodeCorners } from "./models/qr-code-corners.js";
export {
  qrCodeCustomizationsPublicSchema,
  type QrCodeCustomizationsPublic,
} from "./models/qr-code-customizations-public.js";
export {
  qrCodeCustomizationsStaticPublicSchema,
  type QrCodeCustomizationsStaticPublic,
} from "./models/qr-code-customizations-static-public.js";
export { qrCodeDestinationSchema, type QrCodeDestination } from "./models/qr-code-destination.js";
export { qrCodeDetailsSchema, type QrCodeDetails } from "./models/qr-code-details.js";
export { QrCodeDotPatternType, qrCodeDotPatternTypeSchema } from "./models/qr-code-dot-pattern-type.js";
export { qrCodeFrameRequestSchema, type QrCodeFrameRequest } from "./models/qr-code-frame-request.js";
export { QrCodeFrameType, qrCodeFrameTypeSchema } from "./models/qr-code-frame-type.js";
export { QrCodeFrameType2, qrCodeFrameType2Schema } from "./models/qr-code-frame-type2.js";
export { qrCodeGradientSchema, type QrCodeGradient } from "./models/qr-code-gradient.js";
export { qrCodeLogoPublicSchema, type QrCodeLogoPublic } from "./models/qr-code-logo-public.js";
export { qrCodeMinimalSchema, type QrCodeMinimal } from "./models/qr-code-minimal.js";
export {
  qrCodeSpecSettingsPublicSchema,
  type QrCodeSpecSettingsPublic,
} from "./models/qr-code-spec-settings-public.js";
export { qrCodeTextSchema, type QrCodeText } from "./models/qr-code-text.js";
export { QrCodeTypeEnum, qrCodeTypeEnumSchema } from "./models/qr-code-type-enum.js";
export { qrCodesMinimalSchema, type QrCodesMinimal } from "./models/qr-codes-minimal.js";
export { qrPaginationSchema, type QrPagination } from "./models/qr-pagination.js";
export { qrScansSchema, type QrScans } from "./models/qr-scans.js";
export {
  redirectQrCodeRequestSchema,
  type RedirectQrCodeRequest,
} from "./models/redirect-qr-code-request.js";
export { referrersByDomainSchema, type ReferrersByDomain } from "./models/referrers-by-domain.js";
export { referrersByDomainsSchema, type ReferrersByDomains } from "./models/referrers-by-domains.js";
export { Require2Fa, require2FaSchema } from "./models/require2-fa.js";
export { RequireSso, requireSsoSchema } from "./models/require-sso.js";
export { scanMetricSchema, type ScanMetric } from "./models/scan-metric.js";
export { scanMetricsSchema, type ScanMetrics } from "./models/scan-metrics.js";
export { Shape, shapeSchema } from "./models/shape.js";
export { shortenSchema, type Shorten } from "./models/shorten.js";
export { shortenBitlinkBodySchema, type ShortenBitlinkBody } from "./models/shorten-bitlink-body.js";
export { simplifiedErrorSchema, type SimplifiedError } from "./models/simplified-error.js";
export { simplifiedErrorErrorSchema, type SimplifiedErrorError } from "./models/simplified-error-error.js";
export { sortedLinksSchema, type SortedLinks } from "./models/sorted-links.js";
export { Style, styleSchema } from "./models/style.js";
export { tagsSchema, type Tags } from "./models/tags.js";
export { textSchema, type Text } from "./models/text.js";
export { text1Schema, type Text1 } from "./models/text1.js";
export { TimeUnit, timeUnitSchema } from "./models/time-unit.js";
export { TimeUnitDwm, timeUnitDwmSchema } from "./models/time-unit-dwm.js";
export { topLinksAndQrCodesSchema, type TopLinksAndQrCodes } from "./models/top-links-and-qr-codes.js";
export { totalEngagementsSchema, type TotalEngagements } from "./models/total-engagements.js";
export {
  totalEngagementsSummarySchema,
  type TotalEngagementsSummary,
} from "./models/total-engagements-summary.js";
export { Unit, unitSchema } from "./models/unit.js";
export { updateCustomBitlinkSchema, type UpdateCustomBitlink } from "./models/update-custom-bitlink.js";
export { userSchema, type User } from "./models/user.js";
export { userUpdateSchema, type UserUpdate } from "./models/user-update.js";
export { webhookSchema, type Webhook } from "./models/webhook.js";
export { webhookCreateSchema, type WebhookCreate } from "./models/webhook-create.js";
export { webhookUpdateSchema, type WebhookUpdate } from "./models/webhook-update.js";
export { webhooksSchema, type Webhooks } from "./models/webhooks.js";
export { Archived, archivedSchema } from "./models/archived.js";
export { CustomBitlink, customBitlinkSchema } from "./models/custom-bitlink.js";
export { Deeplinks, deeplinksSchema } from "./models/deeplinks.js";
export { DomainDeeplinks, domainDeeplinksSchema } from "./models/domain-deeplinks.js";
export { Format, formatSchema } from "./models/format.js";
export { HasDynamicRouting, hasDynamicRoutingSchema } from "./models/has-dynamic-routing.js";
export { HasExpiration, hasExpirationSchema } from "./models/has-expiration.js";
export { HasQrCodes, hasQrCodesSchema } from "./models/has-qr-codes.js";
export {
  HasRenderCustomizations,
  hasRenderCustomizationsSchema,
} from "./models/has-render-customizations.js";
export { IsExpired, isExpiredSchema } from "./models/is-expired.js";
export { IsGs1, isGs1Schema } from "./models/is-gs1.js";
export { QrcType, qrcTypeSchema } from "./models/qrc-type.js";
export { Sort, sortSchema } from "./models/sort.js";
export { Type, typeSchema } from "./models/type.js";

export {
  CoreError as BitlyError,
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
