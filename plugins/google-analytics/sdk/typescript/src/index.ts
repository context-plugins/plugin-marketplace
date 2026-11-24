export { GoogleAnalyticsClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export {
  PkceMethod,
  type SecretProvider,
  type OAuth2AuthorizationCodeCredentials,
  type AuthorizationCodePrompt,
} from "./core/auth/credentials.js";
export type {
  OAuth2RefreshableTokenStrategy,
  OAuthToken,
  OAuth2CredentialPlacement,
  OAuthTokenRefreshable,
} from "./core/auth/oauth2-strategies.js";

export { ServerEnvironment } from "./servers.js";

export { Accounts } from "./resources/accounts.js";
export { AccountSummaries } from "./resources/account-summaries.js";
export { Properties } from "./resources/properties.js";

export { Action, actionSchema } from "./models/action.js";
export { Action1, action1Schema } from "./models/action1.js";
export {
  activeMetricRestrictionSchema,
  type ActiveMetricRestriction,
} from "./models/active-metric-restriction.js";
export { ActorType, actorTypeSchema } from "./models/actor-type.js";
export { audienceExportSchema, type AudienceExport } from "./models/audience-export.js";
export { audienceExport1Schema, type AudienceExport1 } from "./models/audience-export1.js";
export {
  batchRunPivotReportsRequestSchema,
  type BatchRunPivotReportsRequest,
} from "./models/batch-run-pivot-reports-request.js";
export {
  batchRunPivotReportsResponseSchema,
  type BatchRunPivotReportsResponse,
} from "./models/batch-run-pivot-reports-response.js";
export {
  batchRunReportsRequestSchema,
  type BatchRunReportsRequest,
} from "./models/batch-run-reports-request.js";
export {
  batchRunReportsResponseSchema,
  type BatchRunReportsResponse,
} from "./models/batch-run-reports-response.js";
export { betweenFilterSchema, type BetweenFilter } from "./models/between-filter.js";
export { betweenFilter2Schema, type BetweenFilter2 } from "./models/between-filter2.js";
export { BlockedReason, blockedReasonSchema } from "./models/blocked-reason.js";
export { caseExpressionSchema, type CaseExpression } from "./models/case-expression.js";
export { caseExpression1Schema, type CaseExpression1 } from "./models/case-expression1.js";
export { caseExpression3Schema, type CaseExpression3 } from "./models/case-expression3.js";
export {
  checkCompatibilityRequestSchema,
  type CheckCompatibilityRequest,
} from "./models/check-compatibility-request.js";
export {
  checkCompatibilityResponseSchema,
  type CheckCompatibilityResponse,
} from "./models/check-compatibility-response.js";
export { cohortSchema, type Cohort } from "./models/cohort.js";
export { cohortReportSettingsSchema, type CohortReportSettings } from "./models/cohort-report-settings.js";
export { cohortReportSettings2Schema, type CohortReportSettings2 } from "./models/cohort-report-settings2.js";
export { cohortSpecSchema, type CohortSpec } from "./models/cohort-spec.js";
export { cohortSpec1Schema, type CohortSpec1 } from "./models/cohort-spec1.js";
export { cohortsRangeSchema, type CohortsRange } from "./models/cohorts-range.js";
export { cohortsRange2Schema, type CohortsRange2 } from "./models/cohorts-range2.js";
export { comparisonSchema, type Comparison } from "./models/comparison.js";
export { comparisonMetadataSchema, type ComparisonMetadata } from "./models/comparison-metadata.js";
export { Compatibility, compatibilitySchema } from "./models/compatibility.js";
export { Compatibility1, compatibility1Schema } from "./models/compatibility1.js";
export { CompatibilityFilter, compatibilityFilterSchema } from "./models/compatibility-filter.js";
export { concatenateExpressionSchema, type ConcatenateExpression } from "./models/concatenate-expression.js";
export {
  concatenateExpression2Schema,
  type ConcatenateExpression2,
} from "./models/concatenate-expression2.js";
export { CountingMethod, countingMethodSchema } from "./models/counting-method.js";
export {
  CountingMethodGoogleAnalyticsPropertiesApi,
  countingMethodGoogleAnalyticsPropertiesApiSchema,
} from "./models/counting-method-google-analytics-properties-api.js";
export {
  dataTruncationDateRangeSchema,
  type DataTruncationDateRange,
} from "./models/data-truncation-date-range.js";
export { dataTruncationReasonSchema, type DataTruncationReason } from "./models/data-truncation-reason.js";
export { DataTruncationType, dataTruncationTypeSchema } from "./models/data-truncation-type.js";
export { dateRangeSchema, type DateRange } from "./models/date-range.js";
export { dateRange2Schema, type DateRange2 } from "./models/date-range2.js";
export { dimensionSchema, type Dimension } from "./models/dimension.js";
export {
  dimensionCompatibilitySchema,
  type DimensionCompatibility,
} from "./models/dimension-compatibility.js";
export { dimensionExpressionSchema, type DimensionExpression } from "./models/dimension-expression.js";
export { dimensionExpression2Schema, type DimensionExpression2 } from "./models/dimension-expression2.js";
export { dimensionHeaderSchema, type DimensionHeader } from "./models/dimension-header.js";
export { dimensionMetadataSchema, type DimensionMetadata } from "./models/dimension-metadata.js";
export { dimensionMetadata1Schema, type DimensionMetadata1 } from "./models/dimension-metadata1.js";
export { dimensionOrderBySchema, type DimensionOrderBy } from "./models/dimension-order-by.js";
export { dimensionOrderBy2Schema, type DimensionOrderBy2 } from "./models/dimension-order-by2.js";
export { dimensionValueSchema, type DimensionValue } from "./models/dimension-value.js";
export { errorSchema, type Error } from "./models/error.js";
export { EventDataRetention, eventDataRetentionSchema } from "./models/event-data-retention.js";
export { filterSchema, type Filter } from "./models/filter.js";
export { filter2Schema, type Filter2 } from "./models/filter2.js";
export { filterExpressionSchema, type FilterExpression } from "./models/filter-expression.js";
export { filterExpression1Schema, type FilterExpression1 } from "./models/filter-expression1.js";
export { filterExpression10Schema, type FilterExpression10 } from "./models/filter-expression10.js";
export { filterExpression2Schema, type FilterExpression2 } from "./models/filter-expression2.js";
export { filterExpression3Schema, type FilterExpression3 } from "./models/filter-expression3.js";
export { filterExpression4Schema, type FilterExpression4 } from "./models/filter-expression4.js";
export { filterExpression5Schema, type FilterExpression5 } from "./models/filter-expression5.js";
export { filterExpression6Schema, type FilterExpression6 } from "./models/filter-expression6.js";
export { filterExpression7Schema, type FilterExpression7 } from "./models/filter-expression7.js";
export { filterExpression8Schema, type FilterExpression8 } from "./models/filter-expression8.js";
export { filterExpression9Schema, type FilterExpression9 } from "./models/filter-expression9.js";
export { filterExpressionListSchema, type FilterExpressionList } from "./models/filter-expression-list.js";
export { filterExpressionList1Schema, type FilterExpressionList1 } from "./models/filter-expression-list1.js";
export { filterExpressionList2Schema, type FilterExpressionList2 } from "./models/filter-expression-list2.js";
export {
  googleAnalyticsAdminV1BetaAccessBetweenFilterSchema,
  type GoogleAnalyticsAdminV1BetaAccessBetweenFilter,
} from "./models/google-analytics-admin-v1-beta-access-between-filter.js";
export {
  googleAnalyticsAdminV1BetaAccessBetweenFilter2Schema,
  type GoogleAnalyticsAdminV1BetaAccessBetweenFilter2,
} from "./models/google-analytics-admin-v1-beta-access-between-filter2.js";
export {
  googleAnalyticsAdminV1BetaAccessDateRangeSchema,
  type GoogleAnalyticsAdminV1BetaAccessDateRange,
} from "./models/google-analytics-admin-v1-beta-access-date-range.js";
export {
  googleAnalyticsAdminV1BetaAccessDimensionSchema,
  type GoogleAnalyticsAdminV1BetaAccessDimension,
} from "./models/google-analytics-admin-v1-beta-access-dimension.js";
export {
  googleAnalyticsAdminV1BetaAccessDimensionHeaderSchema,
  type GoogleAnalyticsAdminV1BetaAccessDimensionHeader,
} from "./models/google-analytics-admin-v1-beta-access-dimension-header.js";
export {
  googleAnalyticsAdminV1BetaAccessDimensionValueSchema,
  type GoogleAnalyticsAdminV1BetaAccessDimensionValue,
} from "./models/google-analytics-admin-v1-beta-access-dimension-value.js";
export {
  googleAnalyticsAdminV1BetaAccessFilterSchema,
  type GoogleAnalyticsAdminV1BetaAccessFilter,
} from "./models/google-analytics-admin-v1-beta-access-filter.js";
export {
  googleAnalyticsAdminV1BetaAccessFilter2Schema,
  type GoogleAnalyticsAdminV1BetaAccessFilter2,
} from "./models/google-analytics-admin-v1-beta-access-filter2.js";
export {
  googleAnalyticsAdminV1BetaAccessFilterExpressionSchema,
  type GoogleAnalyticsAdminV1BetaAccessFilterExpression,
} from "./models/google-analytics-admin-v1-beta-access-filter-expression.js";
export {
  googleAnalyticsAdminV1BetaAccessFilterExpression2Schema,
  type GoogleAnalyticsAdminV1BetaAccessFilterExpression2,
} from "./models/google-analytics-admin-v1-beta-access-filter-expression2.js";
export {
  googleAnalyticsAdminV1BetaAccessFilterExpression3Schema,
  type GoogleAnalyticsAdminV1BetaAccessFilterExpression3,
} from "./models/google-analytics-admin-v1-beta-access-filter-expression3.js";
export {
  googleAnalyticsAdminV1BetaAccessFilterExpression4Schema,
  type GoogleAnalyticsAdminV1BetaAccessFilterExpression4,
} from "./models/google-analytics-admin-v1-beta-access-filter-expression4.js";
export {
  googleAnalyticsAdminV1BetaAccessFilterExpressionListSchema,
  type GoogleAnalyticsAdminV1BetaAccessFilterExpressionList,
} from "./models/google-analytics-admin-v1-beta-access-filter-expression-list.js";
export {
  googleAnalyticsAdminV1BetaAccessFilterExpressionList1Schema,
  type GoogleAnalyticsAdminV1BetaAccessFilterExpressionList1,
} from "./models/google-analytics-admin-v1-beta-access-filter-expression-list1.js";
export {
  googleAnalyticsAdminV1BetaAccessFilterExpressionList3Schema,
  type GoogleAnalyticsAdminV1BetaAccessFilterExpressionList3,
} from "./models/google-analytics-admin-v1-beta-access-filter-expression-list3.js";
export {
  googleAnalyticsAdminV1BetaAccessInListFilterSchema,
  type GoogleAnalyticsAdminV1BetaAccessInListFilter,
} from "./models/google-analytics-admin-v1-beta-access-in-list-filter.js";
export {
  googleAnalyticsAdminV1BetaAccessInListFilter1Schema,
  type GoogleAnalyticsAdminV1BetaAccessInListFilter1,
} from "./models/google-analytics-admin-v1-beta-access-in-list-filter1.js";
export {
  googleAnalyticsAdminV1BetaAccessMetricSchema,
  type GoogleAnalyticsAdminV1BetaAccessMetric,
} from "./models/google-analytics-admin-v1-beta-access-metric.js";
export {
  googleAnalyticsAdminV1BetaAccessMetricHeaderSchema,
  type GoogleAnalyticsAdminV1BetaAccessMetricHeader,
} from "./models/google-analytics-admin-v1-beta-access-metric-header.js";
export {
  googleAnalyticsAdminV1BetaAccessMetricValueSchema,
  type GoogleAnalyticsAdminV1BetaAccessMetricValue,
} from "./models/google-analytics-admin-v1-beta-access-metric-value.js";
export {
  googleAnalyticsAdminV1BetaAccessNumericFilterSchema,
  type GoogleAnalyticsAdminV1BetaAccessNumericFilter,
} from "./models/google-analytics-admin-v1-beta-access-numeric-filter.js";
export {
  googleAnalyticsAdminV1BetaAccessNumericFilter2Schema,
  type GoogleAnalyticsAdminV1BetaAccessNumericFilter2,
} from "./models/google-analytics-admin-v1-beta-access-numeric-filter2.js";
export {
  googleAnalyticsAdminV1BetaAccessOrderBySchema,
  type GoogleAnalyticsAdminV1BetaAccessOrderBy,
} from "./models/google-analytics-admin-v1-beta-access-order-by.js";
export {
  googleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBySchema,
  type GoogleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBy,
} from "./models/google-analytics-admin-v1-beta-access-order-by-dimension-order-by.js";
export {
  googleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBy1Schema,
  type GoogleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBy1,
} from "./models/google-analytics-admin-v1-beta-access-order-by-dimension-order-by1.js";
export {
  googleAnalyticsAdminV1BetaAccessOrderByMetricOrderBySchema,
  type GoogleAnalyticsAdminV1BetaAccessOrderByMetricOrderBy,
} from "./models/google-analytics-admin-v1-beta-access-order-by-metric-order-by.js";
export {
  googleAnalyticsAdminV1BetaAccessOrderByMetricOrderBy2Schema,
  type GoogleAnalyticsAdminV1BetaAccessOrderByMetricOrderBy2,
} from "./models/google-analytics-admin-v1-beta-access-order-by-metric-order-by2.js";
export {
  googleAnalyticsAdminV1BetaAccessQuotaSchema,
  type GoogleAnalyticsAdminV1BetaAccessQuota,
} from "./models/google-analytics-admin-v1-beta-access-quota.js";
export {
  googleAnalyticsAdminV1BetaAccessQuota2Schema,
  type GoogleAnalyticsAdminV1BetaAccessQuota2,
} from "./models/google-analytics-admin-v1-beta-access-quota2.js";
export {
  googleAnalyticsAdminV1BetaAccessQuotaStatusSchema,
  type GoogleAnalyticsAdminV1BetaAccessQuotaStatus,
} from "./models/google-analytics-admin-v1-beta-access-quota-status.js";
export {
  googleAnalyticsAdminV1BetaAccessQuotaStatus1Schema,
  type GoogleAnalyticsAdminV1BetaAccessQuotaStatus1,
} from "./models/google-analytics-admin-v1-beta-access-quota-status1.js";
export {
  googleAnalyticsAdminV1BetaAccessQuotaStatus2Schema,
  type GoogleAnalyticsAdminV1BetaAccessQuotaStatus2,
} from "./models/google-analytics-admin-v1-beta-access-quota-status2.js";
export {
  googleAnalyticsAdminV1BetaAccessQuotaStatus3Schema,
  type GoogleAnalyticsAdminV1BetaAccessQuotaStatus3,
} from "./models/google-analytics-admin-v1-beta-access-quota-status3.js";
export {
  googleAnalyticsAdminV1BetaAccessQuotaStatus4Schema,
  type GoogleAnalyticsAdminV1BetaAccessQuotaStatus4,
} from "./models/google-analytics-admin-v1-beta-access-quota-status4.js";
export {
  googleAnalyticsAdminV1BetaAccessQuotaStatus6Schema,
  type GoogleAnalyticsAdminV1BetaAccessQuotaStatus6,
} from "./models/google-analytics-admin-v1-beta-access-quota-status6.js";
export {
  googleAnalyticsAdminV1BetaAccessRowSchema,
  type GoogleAnalyticsAdminV1BetaAccessRow,
} from "./models/google-analytics-admin-v1-beta-access-row.js";
export {
  googleAnalyticsAdminV1BetaAccessStringFilterSchema,
  type GoogleAnalyticsAdminV1BetaAccessStringFilter,
} from "./models/google-analytics-admin-v1-beta-access-string-filter.js";
export {
  googleAnalyticsAdminV1BetaAccessStringFilter2Schema,
  type GoogleAnalyticsAdminV1BetaAccessStringFilter2,
} from "./models/google-analytics-admin-v1-beta-access-string-filter2.js";
export {
  googleAnalyticsAdminV1BetaAccountSchema,
  type GoogleAnalyticsAdminV1BetaAccount,
} from "./models/google-analytics-admin-v1-beta-account.js";
export {
  googleAnalyticsAdminV1BetaAccount2Schema,
  type GoogleAnalyticsAdminV1BetaAccount2,
} from "./models/google-analytics-admin-v1-beta-account2.js";
export {
  googleAnalyticsAdminV1BetaAccount3Schema,
  type GoogleAnalyticsAdminV1BetaAccount3,
} from "./models/google-analytics-admin-v1-beta-account3.js";
export {
  googleAnalyticsAdminV1BetaAccountSummarySchema,
  type GoogleAnalyticsAdminV1BetaAccountSummary,
} from "./models/google-analytics-admin-v1-beta-account-summary.js";
export {
  googleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequestSchema,
  type GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest,
} from "./models/google-analytics-admin-v1-beta-acknowledge-user-data-collection-request.js";
export {
  googleAnalyticsAdminV1BetaChangeHistoryChangeSchema,
  type GoogleAnalyticsAdminV1BetaChangeHistoryChange,
} from "./models/google-analytics-admin-v1-beta-change-history-change.js";
export {
  googleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResourceSchema,
  type GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource,
} from "./models/google-analytics-admin-v1-beta-change-history-change-change-history-resource.js";
export {
  googleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource1Schema,
  type GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource1,
} from "./models/google-analytics-admin-v1-beta-change-history-change-change-history-resource1.js";
export {
  googleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource3Schema,
  type GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource3,
} from "./models/google-analytics-admin-v1-beta-change-history-change-change-history-resource3.js";
export {
  googleAnalyticsAdminV1BetaChangeHistoryEventSchema,
  type GoogleAnalyticsAdminV1BetaChangeHistoryEvent,
} from "./models/google-analytics-admin-v1-beta-change-history-event.js";
export {
  googleAnalyticsAdminV1BetaConversionEventSchema,
  type GoogleAnalyticsAdminV1BetaConversionEvent,
} from "./models/google-analytics-admin-v1-beta-conversion-event.js";
export {
  googleAnalyticsAdminV1BetaConversionEvent2Schema,
  type GoogleAnalyticsAdminV1BetaConversionEvent2,
} from "./models/google-analytics-admin-v1-beta-conversion-event2.js";
export {
  googleAnalyticsAdminV1BetaConversionEventDefaultConversionValueSchema,
  type GoogleAnalyticsAdminV1BetaConversionEventDefaultConversionValue,
} from "./models/google-analytics-admin-v1-beta-conversion-event-default-conversion-value.js";
export {
  googleAnalyticsAdminV1BetaConversionEventDefaultConversionValue2Schema,
  type GoogleAnalyticsAdminV1BetaConversionEventDefaultConversionValue2,
} from "./models/google-analytics-admin-v1-beta-conversion-event-default-conversion-value2.js";
export {
  googleAnalyticsAdminV1BetaCustomDimensionSchema,
  type GoogleAnalyticsAdminV1BetaCustomDimension,
} from "./models/google-analytics-admin-v1-beta-custom-dimension.js";
export {
  googleAnalyticsAdminV1BetaCustomMetricSchema,
  type GoogleAnalyticsAdminV1BetaCustomMetric,
} from "./models/google-analytics-admin-v1-beta-custom-metric.js";
export {
  googleAnalyticsAdminV1BetaDataRetentionSettingsSchema,
  type GoogleAnalyticsAdminV1BetaDataRetentionSettings,
} from "./models/google-analytics-admin-v1-beta-data-retention-settings.js";
export {
  googleAnalyticsAdminV1BetaDataRetentionSettings2Schema,
  type GoogleAnalyticsAdminV1BetaDataRetentionSettings2,
} from "./models/google-analytics-admin-v1-beta-data-retention-settings2.js";
export {
  googleAnalyticsAdminV1BetaDataSharingSettingsSchema,
  type GoogleAnalyticsAdminV1BetaDataSharingSettings,
} from "./models/google-analytics-admin-v1-beta-data-sharing-settings.js";
export {
  googleAnalyticsAdminV1BetaDataStreamSchema,
  type GoogleAnalyticsAdminV1BetaDataStream,
} from "./models/google-analytics-admin-v1-beta-data-stream.js";
export {
  googleAnalyticsAdminV1BetaDataStream1Schema,
  type GoogleAnalyticsAdminV1BetaDataStream1,
} from "./models/google-analytics-admin-v1-beta-data-stream1.js";
export {
  googleAnalyticsAdminV1BetaDataStreamAndroidAppStreamDataSchema,
  type GoogleAnalyticsAdminV1BetaDataStreamAndroidAppStreamData,
} from "./models/google-analytics-admin-v1-beta-data-stream-android-app-stream-data.js";
export {
  googleAnalyticsAdminV1BetaDataStreamAndroidAppStreamData2Schema,
  type GoogleAnalyticsAdminV1BetaDataStreamAndroidAppStreamData2,
} from "./models/google-analytics-admin-v1-beta-data-stream-android-app-stream-data2.js";
export {
  googleAnalyticsAdminV1BetaDataStreamIosAppStreamDataSchema,
  type GoogleAnalyticsAdminV1BetaDataStreamIosAppStreamData,
} from "./models/google-analytics-admin-v1-beta-data-stream-ios-app-stream-data.js";
export {
  googleAnalyticsAdminV1BetaDataStreamIosAppStreamData2Schema,
  type GoogleAnalyticsAdminV1BetaDataStreamIosAppStreamData2,
} from "./models/google-analytics-admin-v1-beta-data-stream-ios-app-stream-data2.js";
export {
  googleAnalyticsAdminV1BetaDataStreamWebStreamDataSchema,
  type GoogleAnalyticsAdminV1BetaDataStreamWebStreamData,
} from "./models/google-analytics-admin-v1-beta-data-stream-web-stream-data.js";
export {
  googleAnalyticsAdminV1BetaDataStreamWebStreamData2Schema,
  type GoogleAnalyticsAdminV1BetaDataStreamWebStreamData2,
} from "./models/google-analytics-admin-v1-beta-data-stream-web-stream-data2.js";
export {
  googleAnalyticsAdminV1BetaFirebaseLinkSchema,
  type GoogleAnalyticsAdminV1BetaFirebaseLink,
} from "./models/google-analytics-admin-v1-beta-firebase-link.js";
export {
  googleAnalyticsAdminV1BetaFirebaseLink2Schema,
  type GoogleAnalyticsAdminV1BetaFirebaseLink2,
} from "./models/google-analytics-admin-v1-beta-firebase-link2.js";
export {
  googleAnalyticsAdminV1BetaGoogleAdsLinkSchema,
  type GoogleAnalyticsAdminV1BetaGoogleAdsLink,
} from "./models/google-analytics-admin-v1-beta-google-ads-link.js";
export {
  googleAnalyticsAdminV1BetaGoogleAdsLink2Schema,
  type GoogleAnalyticsAdminV1BetaGoogleAdsLink2,
} from "./models/google-analytics-admin-v1-beta-google-ads-link2.js";
export {
  googleAnalyticsAdminV1BetaKeyEventSchema,
  type GoogleAnalyticsAdminV1BetaKeyEvent,
} from "./models/google-analytics-admin-v1-beta-key-event.js";
export {
  googleAnalyticsAdminV1BetaKeyEventDefaultValueSchema,
  type GoogleAnalyticsAdminV1BetaKeyEventDefaultValue,
} from "./models/google-analytics-admin-v1-beta-key-event-default-value.js";
export {
  googleAnalyticsAdminV1BetaKeyEventDefaultValue2Schema,
  type GoogleAnalyticsAdminV1BetaKeyEventDefaultValue2,
} from "./models/google-analytics-admin-v1-beta-key-event-default-value2.js";
export {
  googleAnalyticsAdminV1BetaListAccountSummariesResponseSchema,
  type GoogleAnalyticsAdminV1BetaListAccountSummariesResponse,
} from "./models/google-analytics-admin-v1-beta-list-account-summaries-response.js";
export {
  googleAnalyticsAdminV1BetaListAccountsResponseSchema,
  type GoogleAnalyticsAdminV1BetaListAccountsResponse,
} from "./models/google-analytics-admin-v1-beta-list-accounts-response.js";
export {
  googleAnalyticsAdminV1BetaListConversionEventsResponseSchema,
  type GoogleAnalyticsAdminV1BetaListConversionEventsResponse,
} from "./models/google-analytics-admin-v1-beta-list-conversion-events-response.js";
export {
  googleAnalyticsAdminV1BetaListCustomDimensionsResponseSchema,
  type GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse,
} from "./models/google-analytics-admin-v1-beta-list-custom-dimensions-response.js";
export {
  googleAnalyticsAdminV1BetaListCustomMetricsResponseSchema,
  type GoogleAnalyticsAdminV1BetaListCustomMetricsResponse,
} from "./models/google-analytics-admin-v1-beta-list-custom-metrics-response.js";
export {
  googleAnalyticsAdminV1BetaListDataStreamsResponseSchema,
  type GoogleAnalyticsAdminV1BetaListDataStreamsResponse,
} from "./models/google-analytics-admin-v1-beta-list-data-streams-response.js";
export {
  googleAnalyticsAdminV1BetaListFirebaseLinksResponseSchema,
  type GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse,
} from "./models/google-analytics-admin-v1-beta-list-firebase-links-response.js";
export {
  googleAnalyticsAdminV1BetaListGoogleAdsLinksResponseSchema,
  type GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse,
} from "./models/google-analytics-admin-v1-beta-list-google-ads-links-response.js";
export {
  googleAnalyticsAdminV1BetaListKeyEventsResponseSchema,
  type GoogleAnalyticsAdminV1BetaListKeyEventsResponse,
} from "./models/google-analytics-admin-v1-beta-list-key-events-response.js";
export {
  googleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponseSchema,
  type GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse,
} from "./models/google-analytics-admin-v1-beta-list-measurement-protocol-secrets-response.js";
export {
  googleAnalyticsAdminV1BetaListPropertiesResponseSchema,
  type GoogleAnalyticsAdminV1BetaListPropertiesResponse,
} from "./models/google-analytics-admin-v1-beta-list-properties-response.js";
export {
  googleAnalyticsAdminV1BetaMeasurementProtocolSecretSchema,
  type GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret,
} from "./models/google-analytics-admin-v1-beta-measurement-protocol-secret.js";
export {
  googleAnalyticsAdminV1BetaMeasurementProtocolSecret1Schema,
  type GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret1,
} from "./models/google-analytics-admin-v1-beta-measurement-protocol-secret1.js";
export {
  googleAnalyticsAdminV1BetaNumericValueSchema,
  type GoogleAnalyticsAdminV1BetaNumericValue,
} from "./models/google-analytics-admin-v1-beta-numeric-value.js";
export {
  googleAnalyticsAdminV1BetaNumericValue1Schema,
  type GoogleAnalyticsAdminV1BetaNumericValue1,
} from "./models/google-analytics-admin-v1-beta-numeric-value1.js";
export {
  googleAnalyticsAdminV1BetaNumericValue2Schema,
  type GoogleAnalyticsAdminV1BetaNumericValue2,
} from "./models/google-analytics-admin-v1-beta-numeric-value2.js";
export {
  googleAnalyticsAdminV1BetaNumericValue4Schema,
  type GoogleAnalyticsAdminV1BetaNumericValue4,
} from "./models/google-analytics-admin-v1-beta-numeric-value4.js";
export {
  googleAnalyticsAdminV1BetaPropertySchema,
  type GoogleAnalyticsAdminV1BetaProperty,
} from "./models/google-analytics-admin-v1-beta-property.js";
export {
  googleAnalyticsAdminV1BetaProperty2Schema,
  type GoogleAnalyticsAdminV1BetaProperty2,
} from "./models/google-analytics-admin-v1-beta-property2.js";
export {
  googleAnalyticsAdminV1BetaPropertySummarySchema,
  type GoogleAnalyticsAdminV1BetaPropertySummary,
} from "./models/google-analytics-admin-v1-beta-property-summary.js";
export {
  googleAnalyticsAdminV1BetaProvisionAccountTicketRequestSchema,
  type GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest,
} from "./models/google-analytics-admin-v1-beta-provision-account-ticket-request.js";
export {
  googleAnalyticsAdminV1BetaProvisionAccountTicketResponseSchema,
  type GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse,
} from "./models/google-analytics-admin-v1-beta-provision-account-ticket-response.js";
export {
  googleAnalyticsAdminV1BetaRunAccessReportRequestSchema,
  type GoogleAnalyticsAdminV1BetaRunAccessReportRequest,
} from "./models/google-analytics-admin-v1-beta-run-access-report-request.js";
export {
  googleAnalyticsAdminV1BetaRunAccessReportResponseSchema,
  type GoogleAnalyticsAdminV1BetaRunAccessReportResponse,
} from "./models/google-analytics-admin-v1-beta-run-access-report-response.js";
export {
  googleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequestSchema,
  type GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest,
} from "./models/google-analytics-admin-v1-beta-search-change-history-events-request.js";
export {
  googleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponseSchema,
  type GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse,
} from "./models/google-analytics-admin-v1-beta-search-change-history-events-response.js";
export { googleRpcErrorSchema, type GoogleRpcError } from "./models/google-rpc-error.js";
export { googleRpcErrorErrorSchema, type GoogleRpcErrorError } from "./models/google-rpc-error-error.js";
export { Granularity, granularitySchema } from "./models/granularity.js";
export { inListFilterSchema, type InListFilter } from "./models/in-list-filter.js";
export { inListFilter2Schema, type InListFilter2 } from "./models/in-list-filter2.js";
export { IndustryCategory, industryCategorySchema } from "./models/industry-category.js";
export {
  listAudienceExportsResponseSchema,
  type ListAudienceExportsResponse,
} from "./models/list-audience-exports-response.js";
export { MatchType, matchTypeSchema } from "./models/match-type.js";
export { MeasurementUnit, measurementUnitSchema } from "./models/measurement-unit.js";
export { metadataSchema, type Metadata } from "./models/metadata.js";
export { metricSchema, type Metric } from "./models/metric.js";
export { MetricAggregation, metricAggregationSchema } from "./models/metric-aggregation.js";
export { metricCompatibilitySchema, type MetricCompatibility } from "./models/metric-compatibility.js";
export { metricHeaderSchema, type MetricHeader } from "./models/metric-header.js";
export { metricMetadataSchema, type MetricMetadata } from "./models/metric-metadata.js";
export { metricMetadata1Schema, type MetricMetadata1 } from "./models/metric-metadata1.js";
export { metricOrderBySchema, type MetricOrderBy } from "./models/metric-order-by.js";
export { metricOrderBy2Schema, type MetricOrderBy2 } from "./models/metric-order-by2.js";
export { metricValueSchema, type MetricValue } from "./models/metric-value.js";
export { minuteRangeSchema, type MinuteRange } from "./models/minute-range.js";
export { numericFilterSchema, type NumericFilter } from "./models/numeric-filter.js";
export { numericFilter2Schema, type NumericFilter2 } from "./models/numeric-filter2.js";
export { numericValueSchema, type NumericValue } from "./models/numeric-value.js";
export { numericValue1Schema, type NumericValue1 } from "./models/numeric-value1.js";
export { numericValue2Schema, type NumericValue2 } from "./models/numeric-value2.js";
export { numericValue4Schema, type NumericValue4 } from "./models/numeric-value4.js";
export { Operation, operationSchema } from "./models/operation.js";
export {
  operationGoogleAnalyticsPropertiesApiSchema,
  type OperationGoogleAnalyticsPropertiesApi,
} from "./models/operation-google-analytics-properties-api.js";
export { orderBySchema, type OrderBy } from "./models/order-by.js";
export { OrderType, orderTypeSchema } from "./models/order-type.js";
export { pivotSchema, type Pivot } from "./models/pivot.js";
export { pivotDimensionHeaderSchema, type PivotDimensionHeader } from "./models/pivot-dimension-header.js";
export { pivotHeaderSchema, type PivotHeader } from "./models/pivot-header.js";
export { pivotOrderBySchema, type PivotOrderBy } from "./models/pivot-order-by.js";
export { pivotOrderBy2Schema, type PivotOrderBy2 } from "./models/pivot-order-by2.js";
export { pivotSelectionSchema, type PivotSelection } from "./models/pivot-selection.js";
export { propertyQuotaSchema, type PropertyQuota } from "./models/property-quota.js";
export { propertyQuota1Schema, type PropertyQuota1 } from "./models/property-quota1.js";
export { propertyQuota3Schema, type PropertyQuota3 } from "./models/property-quota3.js";
export { PropertyType, propertyTypeSchema } from "./models/property-type.js";
export {
  PropertyTypeGoogleAnalyticsAdminAccountSummariesApi,
  propertyTypeGoogleAnalyticsAdminAccountSummariesApiSchema,
} from "./models/property-type-google-analytics-admin-account-summaries-api.js";
export {
  queryAudienceExportRequestSchema,
  type QueryAudienceExportRequest,
} from "./models/query-audience-export-request.js";
export {
  queryAudienceExportResponseSchema,
  type QueryAudienceExportResponse,
} from "./models/query-audience-export-response.js";
export { quotaStatusSchema, type QuotaStatus } from "./models/quota-status.js";
export { quotaStatus1Schema, type QuotaStatus1 } from "./models/quota-status1.js";
export { quotaStatus2Schema, type QuotaStatus2 } from "./models/quota-status2.js";
export { quotaStatus3Schema, type QuotaStatus3 } from "./models/quota-status3.js";
export { quotaStatus4Schema, type QuotaStatus4 } from "./models/quota-status4.js";
export { quotaStatus5Schema, type QuotaStatus5 } from "./models/quota-status5.js";
export { quotaStatus7Schema, type QuotaStatus7 } from "./models/quota-status7.js";
export { ResourceType, resourceTypeSchema } from "./models/resource-type.js";
export { responseMetaDataSchema, type ResponseMetaData } from "./models/response-meta-data.js";
export { responseMetaData2Schema, type ResponseMetaData2 } from "./models/response-meta-data2.js";
export { RestrictedMetricType, restrictedMetricTypeSchema } from "./models/restricted-metric-type.js";
export { rowSchema, type Row } from "./models/row.js";
export {
  runPivotReportRequestSchema,
  type RunPivotReportRequest,
} from "./models/run-pivot-report-request.js";
export {
  runPivotReportResponseSchema,
  type RunPivotReportResponse,
} from "./models/run-pivot-report-response.js";
export {
  runRealtimeReportRequestSchema,
  type RunRealtimeReportRequest,
} from "./models/run-realtime-report-request.js";
export {
  runRealtimeReportResponseSchema,
  type RunRealtimeReportResponse,
} from "./models/run-realtime-report-response.js";
export { runReportRequestSchema, type RunReportRequest } from "./models/run-report-request.js";
export { runReportResponseSchema, type RunReportResponse } from "./models/run-report-response.js";
export { samplingMetadataSchema, type SamplingMetadata } from "./models/sampling-metadata.js";
export {
  schemaRestrictionResponseSchema,
  type SchemaRestrictionResponse,
} from "./models/schema-restriction-response.js";
export {
  schemaRestrictionResponse2Schema,
  type SchemaRestrictionResponse2,
} from "./models/schema-restriction-response2.js";
export { Scope, scopeSchema } from "./models/scope.js";
export { Scope1, scope1Schema } from "./models/scope1.js";
export { ServiceLevel, serviceLevelSchema } from "./models/service-level.js";
export { State, stateSchema } from "./models/state.js";
export { statusSchema, type Status } from "./models/status.js";
export { status1Schema, type Status1 } from "./models/status1.js";
export { stringFilterSchema, type StringFilter } from "./models/string-filter.js";
export { stringFilter2Schema, type StringFilter2 } from "./models/string-filter2.js";
export { Type, typeSchema } from "./models/type.js";
export { Type1, type1Schema } from "./models/type1.js";
export { Type2, type2Schema } from "./models/type2.js";
export { UserDataRetention, userDataRetentionSchema } from "./models/user-data-retention.js";
export {
  v1BetaAudienceDimensionSchema,
  type V1BetaAudienceDimension,
} from "./models/v1-beta-audience-dimension.js";
export {
  v1BetaAudienceDimensionValueSchema,
  type V1BetaAudienceDimensionValue,
} from "./models/v1-beta-audience-dimension-value.js";
export { v1BetaAudienceRowSchema, type V1BetaAudienceRow } from "./models/v1-beta-audience-row.js";

export {
  CoreError as GoogleAnalyticsError,
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
