export { LushaClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { Account } from "./resources/account.js";
export { AccountManagement } from "./resources/account-management.js";
export { BuyingGroup } from "./resources/buying-group.js";
export { CompaniesTables } from "./resources/companies-tables.js";
export { CompanyFiltersApi } from "./resources/company-filters-api.js";
export { ContactFiltersApi } from "./resources/contact-filters-api.js";
export { ContactsTables } from "./resources/contacts-tables.js";
export { Enrich } from "./resources/enrich.js";
export { Enrichment } from "./resources/enrichment.js";
export { FiltersApi } from "./resources/filters-api.js";
export { Lookalikes } from "./resources/lookalikes.js";
export { Prospecting } from "./resources/prospecting.js";
export { ProspectingSearchEnrich } from "./resources/prospecting-search-enrich.js";
export { Search } from "./resources/search.js";
export { SearchEnrich } from "./resources/search-enrich.js";
export { SignalsApi } from "./resources/signals-api.js";
export { Webhooks } from "./resources/webhooks.js";
export { WebsiteVisits } from "./resources/website-visits.js";

export { accountUsageResponseSchema, type AccountUsageResponse } from "./models/account-usage-response.js";
export {
  accountUsageStatsResponseSchema,
  type AccountUsageStatsResponse,
} from "./models/account-usage-stats-response.js";
export { addedBySchema, type AddedBy } from "./models/added-by.js";
export { additionalIndustrySchema, type AdditionalIndustry } from "./models/additional-industry.js";
export {
  apiAccountSecretRegenerateResponseSchema,
  type ApiAccountSecretRegenerateResponse,
} from "./models/api-account-secret-regenerate-response.js";
export {
  apiAccountSecretResponseSchema,
  type ApiAccountSecretResponse,
} from "./models/api-account-secret-response.js";
export {
  apiSignalsFiltersResponseSchema,
  type ApiSignalsFiltersResponse,
} from "./models/api-signals-filters-response.js";
export {
  apiSubscriptionsDeleteRequestSchema,
  type ApiSubscriptionsDeleteRequest,
} from "./models/api-subscriptions-delete-request.js";
export { auditLogEntrySchema, type AuditLogEntry } from "./models/audit-log-entry.js";
export {
  auditLogStatsResponseSchema,
  type AuditLogStatsResponse,
} from "./models/audit-log-stats-response.js";
export { auditLogsResponseSchema, type AuditLogsResponse } from "./models/audit-logs-response.js";
export { availableFilterSchema, type AvailableFilter } from "./models/available-filter.js";
export { bulkPersonResponseSchema, type BulkPersonResponse } from "./models/bulk-person-response.js";
export { BusinessModel, businessModelSchema } from "./models/business-model.js";
export { buyerIntentSchema, type BuyerIntent } from "./models/buyer-intent.js";
export { CellStatus, cellStatusSchema } from "./models/cell-status.js";
export { Code, codeSchema } from "./models/code.js";
export { Code1, code1Schema } from "./models/code1.js";
export { CodeLushaWebhooksApi, codeLushaWebhooksApiSchema } from "./models/code-lusha-webhooks-api.js";
export { columnSummarySchema, type ColumnSummary } from "./models/column-summary.js";
export { columnsListResponseSchema, type ColumnsListResponse } from "./models/columns-list-response.js";
export { columnsRunRequestSchema, type ColumnsRunRequest } from "./models/columns-run-request.js";
export { columnsRunResponseSchema, type ColumnsRunResponse } from "./models/columns-run-response.js";
export { companiesSchema, type Companies } from "./models/companies.js";
export { companies1Schema, type Companies1 } from "./models/companies1.js";
export { companiesBulkRequestSchema, type CompaniesBulkRequest } from "./models/companies-bulk-request.js";
export { companySchema, type Company } from "./models/company.js";
export { company1Schema, type Company1 } from "./models/company1.js";
export {
  company1LushaSignalsApiSchema,
  type Company1LushaSignalsApi,
} from "./models/company1-lusha-signals-api.js";
export { companyBulkRequestSchema, type CompanyBulkRequest } from "./models/company-bulk-request.js";
export { companyBulkResponseSchema, type CompanyBulkResponse } from "./models/company-bulk-response.js";
export {
  companyCrunchbaseResponseSchema,
  type CompanyCrunchbaseResponse,
} from "./models/company-crunchbase-response.js";
export { companyEnrichDataSchema, type CompanyEnrichData } from "./models/company-enrich-data.js";
export { companyEnrichRequestSchema, type CompanyEnrichRequest } from "./models/company-enrich-request.js";
export { companyEnrichResponseSchema, type CompanyEnrichResponse } from "./models/company-enrich-response.js";
export { companyErrorResponseSchema, type CompanyErrorResponse } from "./models/company-error-response.js";
export { companyFiltersSchema, type CompanyFilters } from "./models/company-filters.js";
export { companyFundingSchema, type CompanyFunding } from "./models/company-funding.js";
export { companyFunding1Schema, type CompanyFunding1 } from "./models/company-funding1.js";
export { companyFundingRoundSchema, type CompanyFundingRound } from "./models/company-funding-round.js";
export {
  companyHeadcountChangeSignalSchema,
  type CompanyHeadcountChangeSignal,
} from "./models/company-headcount-change-signal.js";
export {
  companyIdentifiersBatchSchema,
  type CompanyIdentifiersBatch,
} from "./models/company-identifiers-batch.js";
export { companyIndustryDataSchema, type CompanyIndustryData } from "./models/company-industry-data.js";
export {
  companyIndustryPrimaryGroupDetailsSchema,
  type CompanyIndustryPrimaryGroupDetails,
} from "./models/company-industry-primary-group-details.js";
export { companyIntentSchema, type CompanyIntent } from "./models/company-intent.js";
export { companyIntent1Schema, type CompanyIntent1 } from "./models/company-intent1.js";
export { companyIntentTopicSchema, type CompanyIntentTopic } from "./models/company-intent-topic.js";
export {
  companyIntentTopicMetadataSchema,
  type CompanyIntentTopicMetadata,
} from "./models/company-intent-topic-metadata.js";
export { companyItSpendSignalSchema, type CompanyItSpendSignal } from "./models/company-it-spend-signal.js";
export {
  companyLinkedinResponseSchema,
  type CompanyLinkedinResponse,
} from "./models/company-linkedin-response.js";
export { companyLocationSchema, type CompanyLocation } from "./models/company-location.js";
export { companyLocationFilterSchema, type CompanyLocationFilter } from "./models/company-location-filter.js";
export {
  companyLocationFilter2Schema,
  type CompanyLocationFilter2,
} from "./models/company-location-filter2.js";
export {
  companyLocationResponseSchema,
  type CompanyLocationResponse,
} from "./models/company-location-response.js";
export { companyLookalikesMetaSchema, type CompanyLookalikesMeta } from "./models/company-lookalikes-meta.js";
export {
  companyLookalikesRequestSchema,
  type CompanyLookalikesRequest,
} from "./models/company-lookalikes-request.js";
export {
  companyLookalikesRequest2Schema,
  type CompanyLookalikesRequest2,
} from "./models/company-lookalikes-request2.js";
export {
  companyLookalikesResponseSchema,
  type CompanyLookalikesResponse,
} from "./models/company-lookalikes-response.js";
export {
  companyLookalikesResponse2Schema,
  type CompanyLookalikesResponse2,
} from "./models/company-lookalikes-response2.js";
export { companyNaicsSchema, type CompanyNaics } from "./models/company-naics.js";
export { companyNameResultSchema, type CompanyNameResult } from "./models/company-name-result.js";
export {
  companyNameSearchRequestSchema,
  type CompanyNameSearchRequest,
} from "./models/company-name-search-request.js";
export { companyNewsSignalSchema, type CompanyNewsSignal } from "./models/company-news-signal.js";
export { companyResponseSchema, type CompanyResponse } from "./models/company-response.js";
export { companySearchDataSchema, type CompanySearchData } from "./models/company-search-data.js";
export { companySearchRequestSchema, type CompanySearchRequest } from "./models/company-search-request.js";
export { companySearchResponseSchema, type CompanySearchResponse } from "./models/company-search-response.js";
export { companySicSchema, type CompanySic } from "./models/company-sic.js";
export { companySignalDataSchema, type CompanySignalData } from "./models/company-signal-data.js";
export {
  companySignalFiltersIncludeSchema,
  type CompanySignalFiltersInclude,
} from "./models/company-signal-filters-include.js";
export {
  companySignalTypesResponseSchema,
  type CompanySignalTypesResponse,
} from "./models/company-signal-types-response.js";
export {
  companySignalsByIdRequestSchema,
  type CompanySignalsByIdRequest,
} from "./models/company-signals-by-id-request.js";
export {
  companySignalsByIdResponseSchema,
  type CompanySignalsByIdResponse,
} from "./models/company-signals-by-id-response.js";
export {
  companySignalsSearchRequestSchema,
  type CompanySignalsSearchRequest,
} from "./models/company-signals-search-request.js";
export { companySingleResponseSchema, type CompanySingleResponse } from "./models/company-single-response.js";
export {
  companySingleResponseDataSchema,
  type CompanySingleResponseData,
} from "./models/company-single-response-data.js";
export { companySizeSchema, type CompanySize } from "./models/company-size.js";
export { companySizeRangeSchema, type CompanySizeRange } from "./models/company-size-range.js";
export {
  companySizeLushaApiDocumentationProspectingSearchEnrichApiSchema,
  type CompanySizeLushaApiDocumentationProspectingSearchEnrichApi,
} from "./models/company-size-lusha-api-documentation-prospecting-search-enrich-api.js";
export { companySocialResponseSchema, type CompanySocialResponse } from "./models/company-social-response.js";
export {
  companySocialResponse1Schema,
  type CompanySocialResponse1,
} from "./models/company-social-response1.js";
export {
  companySurgeInHiringByDepartmentSignalSchema,
  type CompanySurgeInHiringByDepartmentSignal,
} from "./models/company-surge-in-hiring-by-department-signal.js";
export {
  companySurgeInHiringByLocationSignalSchema,
  type CompanySurgeInHiringByLocationSignal,
} from "./models/company-surge-in-hiring-by-location-signal.js";
export {
  companySurgeInHiringSignalSchema,
  type CompanySurgeInHiringSignal,
} from "./models/company-surge-in-hiring-signal.js";
export { companyTechnologySchema, type CompanyTechnology } from "./models/company-technology.js";
export { CompanyType, companyTypeSchema } from "./models/company-type.js";
export {
  companyWebsiteTrafficSignalSchema,
  type CompanyWebsiteTrafficSignal,
} from "./models/company-website-traffic-signal.js";
export {
  companyLushaApiDocumentationEnrichApiSchema,
  type CompanyLushaApiDocumentationEnrichApi,
} from "./models/company-lusha-api-documentation-enrich-api.js";
export {
  companyLushaApiDocumentationEnrichmentApiSchema,
  type CompanyLushaApiDocumentationEnrichmentApi,
} from "./models/company-lusha-api-documentation-enrichment-api.js";
export {
  companyLushaApiDocumentationProspectingSearchEnrichApiSchema,
  type CompanyLushaApiDocumentationProspectingSearchEnrichApi,
} from "./models/company-lusha-api-documentation-prospecting-search-enrich-api.js";
export {
  companyLushaSignalsApiSchema,
  type CompanyLushaSignalsApi,
} from "./models/company-lusha-signals-api.js";
export { competitorSchema, type Competitor } from "./models/competitor.js";
export { contactSchema, type Contact } from "./models/contact.js";
export { contactEnrichDataSchema, type ContactEnrichData } from "./models/contact-enrich-data.js";
export { contactEnrichRequestSchema, type ContactEnrichRequest } from "./models/contact-enrich-request.js";
export { contactEnrichResponseSchema, type ContactEnrichResponse } from "./models/contact-enrich-response.js";
export { contactErrorSchema, type ContactError } from "./models/contact-error.js";
export { contactFiltersSchema, type ContactFilters } from "./models/contact-filters.js";
export {
  contactIdentifiersBatchSchema,
  type ContactIdentifiersBatch,
} from "./models/contact-identifiers-batch.js";
export {
  contactIdentifiersBatch2Schema,
  type ContactIdentifiersBatch2,
} from "./models/contact-identifiers-batch2.js";
export { contactItemSchema, type ContactItem } from "./models/contact-item.js";
export { contactItem2Schema, type ContactItem2 } from "./models/contact-item2.js";
export { contactLocationSchema, type ContactLocation } from "./models/contact-location.js";
export { contactLookalikesMetaSchema, type ContactLookalikesMeta } from "./models/contact-lookalikes-meta.js";
export {
  contactLookalikesRequestSchema,
  type ContactLookalikesRequest,
} from "./models/contact-lookalikes-request.js";
export {
  contactLookalikesRequest2Schema,
  type ContactLookalikesRequest2,
} from "./models/contact-lookalikes-request2.js";
export {
  contactLookalikesResponseSchema,
  type ContactLookalikesResponse,
} from "./models/contact-lookalikes-response.js";
export {
  contactLookalikesResponse2Schema,
  type ContactLookalikesResponse2,
} from "./models/contact-lookalikes-response2.js";
export { contactResponseSchema, type ContactResponse } from "./models/contact-response.js";
export { contactSearchBulkSchema, type ContactSearchBulk } from "./models/contact-search-bulk.js";
export { contactSearchDataSchema, type ContactSearchData } from "./models/contact-search-data.js";
export { contactSearchRequestSchema, type ContactSearchRequest } from "./models/contact-search-request.js";
export { contactSearchResponseSchema, type ContactSearchResponse } from "./models/contact-search-response.js";
export { contactSignalSchema, type ContactSignal } from "./models/contact-signal.js";
export { contactSignalDataSchema, type ContactSignalData } from "./models/contact-signal-data.js";
export {
  contactSignalTypesResponseSchema,
  type ContactSignalTypesResponse,
} from "./models/contact-signal-types-response.js";
export {
  contactSignalsByIdRequestSchema,
  type ContactSignalsByIdRequest,
} from "./models/contact-signals-by-id-request.js";
export {
  contactSignalsByIdResponseSchema,
  type ContactSignalsByIdResponse,
} from "./models/contact-signals-by-id-response.js";
export {
  contactSignalsSearchRequestSchema,
  type ContactSignalsSearchRequest,
} from "./models/contact-signals-search-request.js";
export {
  contactSignalsSearchResponseSchema,
  type ContactSignalsSearchResponse,
} from "./models/contact-signals-search-response.js";
export { contactSingleResponseSchema, type ContactSingleResponse } from "./models/contact-single-response.js";
export { contactTagSchema, type ContactTag } from "./models/contact-tag.js";
export { contactWithCompanySchema, type ContactWithCompany } from "./models/contact-with-company.js";
export {
  contactLushaApiDocumentationProspectingSearchEnrichApiSchema,
  type ContactLushaApiDocumentationProspectingSearchEnrichApi,
} from "./models/contact-lusha-api-documentation-prospecting-search-enrich-api.js";
export {
  contactLushaSignalsApiSchema,
  type ContactLushaSignalsApi,
} from "./models/contact-lusha-signals-api.js";
export { contactsSchema, type Contacts } from "./models/contacts.js";
export { contacts1Schema, type Contacts1 } from "./models/contacts1.js";
export { countryFilterSchema, type CountryFilter } from "./models/country-filter.js";
export { Coverage, coverageSchema } from "./models/coverage.js";
export {
  createOptOutSubscriptionRequestSchema,
  type CreateOptOutSubscriptionRequest,
} from "./models/create-opt-out-subscription-request.js";
export {
  createSubscriptionErrorResultSchema,
  type CreateSubscriptionErrorResult,
} from "./models/create-subscription-error-result.js";
export {
  createSubscriptionRequestSchema,
  type CreateSubscriptionRequest,
} from "./models/create-subscription-request.js";
export {
  createSubscriptionRequest2Schema,
  type CreateSubscriptionRequest2,
} from "./models/create-subscription-request2.js";
export {
  createSubscriptionResponseSchema,
  type CreateSubscriptionResponse,
} from "./models/create-subscription-response.js";
export {
  createSubscriptionSuccessResultSchema,
  type CreateSubscriptionSuccessResult,
} from "./models/create-subscription-success-result.js";
export { createdBySchema, type CreatedBy } from "./models/created-by.js";
export { creditsUsageSchema, type CreditsUsage } from "./models/credits-usage.js";
export { dataSchema, type Data } from "./models/data.js";
export { data1Schema, type Data1 } from "./models/data1.js";
export { data2Schema, type Data2 } from "./models/data2.js";
export { dateModelSchema, type DateModel } from "./models/date-model.js";
export { dateDaySchema, type DateDay } from "./models/unions/date-day.js";
export { dateMonthSchema, type DateMonth } from "./models/unions/date-month.js";
export { dateMonth1Schema, type DateMonth1 } from "./models/unions/date-month1.js";
export { dateYearSchema, type DateYear } from "./models/unions/date-year.js";
export { dateYear1Schema, type DateYear1 } from "./models/unions/date-year1.js";
export {
  dedupeSessionInvalidErrorSchema,
  type DedupeSessionInvalidError,
} from "./models/dedupe-session-invalid-error.js";
export {
  dedupeSessionInvalidErrorErrorSchema,
  type DedupeSessionInvalidErrorError,
} from "./models/dedupe-session-invalid-error-error.js";
export { defaultsSchema, type Defaults } from "./models/defaults.js";
export { defaults1Schema, type Defaults1 } from "./models/defaults1.js";
export {
  deleteSubscriptionErrorResultSchema,
  type DeleteSubscriptionErrorResult,
} from "./models/delete-subscription-error-result.js";
export {
  deleteSubscriptionResponseSchema,
  type DeleteSubscriptionResponse,
} from "./models/delete-subscription-response.js";
export {
  deleteSubscriptionSuccessResultSchema,
  type DeleteSubscriptionSuccessResult,
} from "./models/delete-subscription-success-result.js";
export { domainsSchema, type Domains } from "./models/domains.js";
export { educationSchema, type Education } from "./models/education.js";
export { emailAddressSchema, type EmailAddress } from "./models/email-address.js";
export { EmailType, emailTypeSchema } from "./models/email-type.js";
export { employeeCountSchema, type EmployeeCount } from "./models/employee-count.js";
export {
  employeeCountLushaLookalikesApiSchema,
  type EmployeeCountLushaLookalikesApi,
} from "./models/employee-count-lusha-lookalikes-api.js";
export { employeesByDepartmentSchema, type EmployeesByDepartment } from "./models/employees-by-department.js";
export { employeesByLocationSchema, type EmployeesByLocation } from "./models/employees-by-location.js";
export { employeesBySenioritySchema, type EmployeesBySeniority } from "./models/employees-by-seniority.js";
export {
  employeesInLinkedInFilterSchema,
  type EmployeesInLinkedInFilter,
} from "./models/employees-in-linked-in-filter.js";
export { endDateMonthSchema, type EndDateMonth } from "./models/unions/end-date-month.js";
export { endDateYearSchema, type EndDateYear } from "./models/unions/end-date-year.js";
export { entitiesAddRequestSchema, type EntitiesAddRequest } from "./models/entities-add-request.js";
export { entitiesAddResponseSchema, type EntitiesAddResponse } from "./models/entities-add-response.js";
export { entitiesGetResponseSchema, type EntitiesGetResponse } from "./models/entities-get-response.js";
export { entitiesRemoveRequestSchema, type EntitiesRemoveRequest } from "./models/entities-remove-request.js";
export {
  entitiesRemoveResponseSchema,
  type EntitiesRemoveResponse,
} from "./models/entities-remove-response.js";
export { entityColumnValueSchema, type EntityColumnValue } from "./models/entity-column-value.js";
export { EntityType, entityTypeSchema } from "./models/entity-type.js";
export { EntityType2, entityType2Schema } from "./models/entity-type2.js";
export { EntityType3, entityType3Schema } from "./models/entity-type3.js";
export {
  EntityTypeLushaWebhooksApi,
  entityTypeLushaWebhooksApiSchema,
} from "./models/entity-type-lusha-webhooks-api.js";
export { errorSchema, type Error } from "./models/error.js";
export { error1Schema, type Error1 } from "./models/error1.js";
export { errorResponseSchema, type ErrorResponse } from "./models/error-response.js";
export { errorResponseErrorSchema, type ErrorResponseError } from "./models/error-response-error.js";
export {
  estimatedAnnualItSpendSchema,
  type EstimatedAnnualItSpend,
} from "./models/estimated-annual-it-spend.js";
export {
  ExistingDataPointsCondition,
  existingDataPointsConditionSchema,
} from "./models/existing-data-points-condition.js";
export { expireDateMonthSchema, type ExpireDateMonth } from "./models/unions/expire-date-month.js";
export { expireDateYearSchema, type ExpireDateYear } from "./models/unions/expire-date-year.js";
export { Field, fieldSchema } from "./models/field.js";
export { fieldOfStudySchema, type FieldOfStudy } from "./models/field-of-study.js";
export { filterByDepartmentSchema, type FilterByDepartment } from "./models/filter-by-department.js";
export { filterByLocationSchema, type FilterByLocation } from "./models/filter-by-location.js";
export { filterOptionsSchema, type FilterOptions } from "./models/filter-options.js";
export {
  filterTypesDiscoveryResponseSchema,
  type FilterTypesDiscoveryResponse,
} from "./models/filter-types-discovery-response.js";
export { filterValuesResponseSchema, type FilterValuesResponse } from "./models/filter-values-response.js";
export { filtersSchema, type Filters } from "./models/filters.js";
export { filters1Schema, type Filters1 } from "./models/filters1.js";
export {
  filters1LushaSignalsApiSchema,
  type Filters1LushaSignalsApi,
} from "./models/filters1-lusha-signals-api.js";
export {
  filtersLushaApiDocumentationProspectingSearchEnrichApiSchema,
  type FiltersLushaApiDocumentationProspectingSearchEnrichApi,
} from "./models/filters-lusha-api-documentation-prospecting-search-enrich-api.js";
export {
  filtersLushaSignalsApiSchema,
  type FiltersLushaSignalsApi,
} from "./models/filters-lusha-signals-api.js";
export { flowCheckSchema, type FlowCheck } from "./models/flow-check.js";
export { foundedYearSchema, type FoundedYear } from "./models/founded-year.js";
export { fundingSchema, type Funding } from "./models/funding.js";
export { fundingDataSchema, type FundingData } from "./models/funding-data.js";
export { fundingDataRoundSchema, type FundingDataRound } from "./models/funding-data-round.js";
export { geographicDetailSchema, type GeographicDetail } from "./models/geographic-detail.js";
export { headquarterZipcodeSchema, type HeadquarterZipcode } from "./models/headquarter-zipcode.js";
export { HiringByDepartment, hiringByDepartmentSchema } from "./models/hiring-by-department.js";
export { includeSchema, type Include } from "./models/include.js";
export { include1Schema, type Include1 } from "./models/include1.js";
export {
  includeLushaSignalsApiSchema,
  type IncludeLushaSignalsApi,
} from "./models/include-lusha-signals-api.js";
export { industryLabelSchema, type IndustryLabel } from "./models/industry-label.js";
export {
  industryPrimaryGroupDetailsResponseSchema,
  type IndustryPrimaryGroupDetailsResponse,
} from "./models/industry-primary-group-details-response.js";
export { IntentTopicsCondition, intentTopicsConditionSchema } from "./models/intent-topics-condition.js";
export { IntentTopicsOperator, intentTopicsOperatorSchema } from "./models/intent-topics-operator.js";
export { jobTitleSchema, type JobTitle } from "./models/job-title.js";
export { jobTitle1Schema, type JobTitle1 } from "./models/job-title1.js";
export {
  jobTitleLushaApiDocumentationEnrichmentApiSchema,
  type JobTitleLushaApiDocumentationEnrichmentApi,
} from "./models/job-title-lusha-api-documentation-enrichment-api.js";
export {
  linkedinActivityIntentCompanyMentionSchema,
  type LinkedinActivityIntentCompanyMention,
} from "./models/linkedin-activity-intent-company-mention.js";
export {
  linkedinActivityIntentItemSchema,
  type LinkedinActivityIntentItem,
} from "./models/linkedin-activity-intent-item.js";
export {
  linkedinActivityIntentPersonSchema,
  type LinkedinActivityIntentPerson,
} from "./models/linkedin-activity-intent-person.js";
export {
  linkedinActivityIntentTopicSchema,
  type LinkedinActivityIntentTopic,
} from "./models/linkedin-activity-intent-topic.js";
export { linkedinAwardSchema, type LinkedinAward } from "./models/linkedin-award.js";
export { linkedinCertificationSchema, type LinkedinCertification } from "./models/linkedin-certification.js";
export { linkedinCourseSchema, type LinkedinCourse } from "./models/linkedin-course.js";
export { locationSchema, type Location } from "./models/location.js";
export { location1Schema, type Location1 } from "./models/location1.js";
export {
  location1LushaApiDocumentationProspectingSearchEnrichApiSchema,
  type Location1LushaApiDocumentationProspectingSearchEnrichApi,
} from "./models/location1-lusha-api-documentation-prospecting-search-enrich-api.js";
export { location2Schema, type Location2 } from "./models/location2.js";
export { locationFilterSchema, type LocationFilter } from "./models/location-filter.js";
export { locationResponseSchema, type LocationResponse } from "./models/location-response.js";
export { locationSearchRequestSchema, type LocationSearchRequest } from "./models/location-search-request.js";
export {
  locationLushaApiDocumentationEnrichApiSchema,
  type LocationLushaApiDocumentationEnrichApi,
} from "./models/location-lusha-api-documentation-enrich-api.js";
export {
  locationLushaApiDocumentationProspectingSearchEnrichApiSchema,
  type LocationLushaApiDocumentationProspectingSearchEnrichApi,
} from "./models/location-lusha-api-documentation-prospecting-search-enrich-api.js";
export {
  locationLushaApiDocumentationWebsiteVisitsApiSchema,
  type LocationLushaApiDocumentationWebsiteVisitsApi,
} from "./models/location-lusha-api-documentation-website-visits-api.js";
export { locationsZipcodeSchema, type LocationsZipcode } from "./models/locations-zipcode.js";
export {
  lookalikeCompanyResultSchema,
  type LookalikeCompanyResult,
} from "./models/lookalike-company-result.js";
export {
  lookalikeContactResultSchema,
  type LookalikeContactResult,
} from "./models/lookalike-contact-result.js";
export { metadataSchema, type Metadata } from "./models/metadata.js";
export { metadata2Schema, type Metadata2 } from "./models/metadata2.js";
export { Mode, modeSchema } from "./models/mode.js";
export { monthlyWebsiteTrafficSchema, type MonthlyWebsiteTraffic } from "./models/monthly-website-traffic.js";
export { naicsCodeSchema, type NaicsCode } from "./models/naics-code.js";
export { nameSchema, type Name } from "./models/name.js";
export { Name1, name1Schema } from "./models/name1.js";
export {
  Name1LushaApiDocumentationProspectingSearchEnrichApi,
  name1LushaApiDocumentationProspectingSearchEnrichApiSchema,
} from "./models/name1-lusha-api-documentation-prospecting-search-enrich-api.js";
export {
  NameLushaApiDocumentationProspectingSearchEnrichApi,
  nameLushaApiDocumentationProspectingSearchEnrichApiSchema,
} from "./models/name-lusha-api-documentation-prospecting-search-enrich-api.js";
export { NewsEventType, newsEventTypeSchema } from "./models/news-event-type.js";
export {
  optOutSubscriptionResponseSchema,
  type OptOutSubscriptionResponse,
} from "./models/opt-out-subscription-response.js";
export { optionsSchema, type Options } from "./models/options.js";
export { options1Schema, type Options1 } from "./models/options1.js";
export { Order, orderSchema } from "./models/order.js";
export { ownerInfoSchema, type OwnerInfo } from "./models/owner-info.js";
export { paginationSchema, type Pagination } from "./models/pagination.js";
export { paginationParamsSchema, type PaginationParams } from "./models/pagination-params.js";
export { paginationResponseSchema, type PaginationResponse } from "./models/pagination-response.js";
export { paginationResponse2Schema, type PaginationResponse2 } from "./models/pagination-response2.js";
export {
  paginationLushaApiDocumentationWebsiteVisitsApiSchema,
  type PaginationLushaApiDocumentationWebsiteVisitsApi,
} from "./models/pagination-lusha-api-documentation-website-visits-api.js";
export { Persona, personaSchema } from "./models/persona.js";
export { phoneNumbersSchema, type PhoneNumbers } from "./models/phone-numbers.js";
export { PhoneType, phoneTypeSchema } from "./models/phone-type.js";
export { planInfoSchema, type PlanInfo } from "./models/plan-info.js";
export { previousEmploymentSchema, type PreviousEmployment } from "./models/previous-employment.js";
export { previousJobResponseSchema, type PreviousJobResponse } from "./models/previous-job-response.js";
export { pricingEntrySchema, type PricingEntry } from "./models/pricing-entry.js";
export { rangeSchema, type Range } from "./models/range.js";
export { rateLimitTierSchema, type RateLimitTier } from "./models/rate-limit-tier.js";
export { rateLimitsSchema, type RateLimits } from "./models/rate-limits.js";
export { resultSchema, type Result } from "./models/result.js";
export { result1Schema, type Result1 } from "./models/result1.js";
export {
  result1LushaWebhooksApiSchema,
  type Result1LushaWebhooksApi,
} from "./models/unions/result1-lusha-webhooks-api.js";
export {
  resultLushaWebhooksApiSchema,
  type ResultLushaWebhooksApi,
} from "./models/unions/result-lusha-webhooks-api.js";
export { Reveal, revealSchema } from "./models/reveal.js";
export { Reveal1, reveal1Schema } from "./models/reveal1.js";
export { revenueRangeSchema, type RevenueRange } from "./models/revenue-range.js";
export { Role, roleSchema } from "./models/role.js";
export { roundSchema, type Round } from "./models/round.js";
export { Round1, round1Schema } from "./models/round1.js";
export { RunScope, runScopeSchema } from "./models/run-scope.js";
export { schoolSchema, type School } from "./models/school.js";
export { scoreSchema, type Score } from "./models/score.js";
export { ScoreBand, scoreBandSchema } from "./models/score-band.js";
export { ScoreBand1, scoreBand1Schema } from "./models/score-band1.js";
export {
  searchBulkContactsRequestSchema,
  type SearchBulkContactsRequest,
} from "./models/search-bulk-contacts-request.js";
export { senioritySchema, type Seniority } from "./models/seniority.js";
export { sicCodeSchema, type SicCode } from "./models/sic-code.js";
export { Signal, signalSchema } from "./models/signal.js";
export { Signal1, signal1Schema } from "./models/signal1.js";
export {
  signal1LushaApiDocumentationProspectingSearchEnrichApiSchema,
  type Signal1LushaApiDocumentationProspectingSearchEnrichApi,
} from "./models/signal1-lusha-api-documentation-prospecting-search-enrich-api.js";
export { signalFilterLocationSchema, type SignalFilterLocation } from "./models/signal-filter-location.js";
export { SignalType, signalTypeSchema } from "./models/signal-type.js";
export { SignalType1, signalType1Schema } from "./models/signal-type1.js";
export {
  signalLushaApiDocumentationProspectingSearchEnrichApiSchema,
  type SignalLushaApiDocumentationProspectingSearchEnrichApi,
} from "./models/signal-lusha-api-documentation-prospecting-search-enrich-api.js";
export { signalsSchema, type Signals } from "./models/signals.js";
export { signals1Schema, type Signals1 } from "./models/signals1.js";
export { signalsFiltersSchema, type SignalsFilters } from "./models/signals-filters.js";
export { singleContactResponseSchema, type SingleContactResponse } from "./models/single-contact-response.js";
export { socialSchema, type Social } from "./models/social.js";
export { socialLinksSchema, type SocialLinks } from "./models/social-links.js";
export { socialLinks1Schema, type SocialLinks1 } from "./models/social-links1.js";
export { socialLinks2Schema, type SocialLinks2 } from "./models/social-links2.js";
export {
  socialLinksLushaApiDocumentationEnrichApiSchema,
  type SocialLinksLushaApiDocumentationEnrichApi,
} from "./models/social-links-lusha-api-documentation-enrich-api.js";
export {
  socialLinksLushaApiDocumentationEnrichmentApiSchema,
  type SocialLinksLushaApiDocumentationEnrichmentApi,
} from "./models/social-links-lusha-api-documentation-enrichment-api.js";
export { socialResponseSchema, type SocialResponse } from "./models/social-response.js";
export { sortSchema, type Sort } from "./models/sort.js";
export { startDateMonthSchema, type StartDateMonth } from "./models/unions/start-date-month.js";
export { startDateYearSchema, type StartDateYear } from "./models/unions/start-date-year.js";
export { Status, statusSchema } from "./models/status.js";
export { Status1, status1Schema } from "./models/status1.js";
export { StatusLushaWebhooksApi, statusLushaWebhooksApiSchema } from "./models/status-lusha-webhooks-api.js";
export { subIndustrySchema, type SubIndustry } from "./models/sub-industry.js";
export { subscriptionSchema, type Subscription } from "./models/subscription.js";
export { subscription1Schema, type Subscription1 } from "./models/subscription1.js";
export { subscription2Schema, type Subscription2 } from "./models/subscription2.js";
export {
  subscriptionListResponseSchema,
  type SubscriptionListResponse,
} from "./models/subscription-list-response.js";
export { subscriptionResponseSchema, type SubscriptionResponse } from "./models/subscription-response.js";
export { subscriptionResponse2Schema, type SubscriptionResponse2 } from "./models/subscription-response2.js";
export {
  subscriptionWithoutSecretSchema,
  type SubscriptionWithoutSecret,
} from "./models/subscription-without-secret.js";
export {
  subscriptionWithoutSecret2Schema,
  type SubscriptionWithoutSecret2,
} from "./models/subscription-without-secret2.js";
export { Surface, surfaceSchema } from "./models/surface.js";
export { tableCreateRequestSchema, type TableCreateRequest } from "./models/table-create-request.js";
export { tableEntitySchema, type TableEntity } from "./models/table-entity.js";
export { tableListRequestSchema, type TableListRequest } from "./models/table-list-request.js";
export { tableListResponseSchema, type TableListResponse } from "./models/table-list-response.js";
export { tableMetadataSchema, type TableMetadata } from "./models/table-metadata.js";
export { tableOwnerSchema, type TableOwner } from "./models/table-owner.js";
export { tableResponseSchema, type TableResponse } from "./models/table-response.js";
export { tableStatusDataSchema, type TableStatusData } from "./models/table-status-data.js";
export { tableUpdateRequestSchema, type TableUpdateRequest } from "./models/table-update-request.js";
export { tableWriteSchema, type TableWrite } from "./models/table-write.js";
export { TechnologiesCondition, technologiesConditionSchema } from "./models/technologies-condition.js";
export { technologySchema, type Technology } from "./models/technology.js";
export {
  technologySearchRequestSchema,
  type TechnologySearchRequest,
} from "./models/technology-search-request.js";
export { testPayloadSchema, type TestPayload } from "./models/test-payload.js";
export {
  testSubscriptionResponseSchema,
  type TestSubscriptionResponse,
} from "./models/test-subscription-response.js";
export { Type, typeSchema } from "./models/type.js";
export { Type1, type1Schema } from "./models/type1.js";
export {
  Type1LushaApiDocumentationSearchApi,
  type1LushaApiDocumentationSearchApiSchema,
} from "./models/type1-lusha-api-documentation-search-api.js";
export {
  TypeLushaApiDocumentationEnrichApi,
  typeLushaApiDocumentationEnrichApiSchema,
} from "./models/type-lusha-api-documentation-enrich-api.js";
export {
  TypeLushaApiDocumentationProspectingApi,
  typeLushaApiDocumentationProspectingApiSchema,
} from "./models/type-lusha-api-documentation-prospecting-api.js";
export {
  TypeLushaApiDocumentationSearchApi,
  typeLushaApiDocumentationSearchApiSchema,
} from "./models/type-lusha-api-documentation-search-api.js";
export {
  updateSubscriptionRequestSchema,
  type UpdateSubscriptionRequest,
} from "./models/update-subscription-request.js";
export {
  updateSubscriptionRequest2Schema,
  type UpdateSubscriptionRequest2,
} from "./models/update-subscription-request2.js";
export { usageStatsSchema, type UsageStats } from "./models/usage-stats.js";
export {
  v3CompaniesTablesColumnsResponseSchema,
  type V3CompaniesTablesColumnsResponse,
} from "./models/v3-companies-tables-columns-response.js";
export {
  v3CompaniesTablesResponseSchema,
  type V3CompaniesTablesResponse,
} from "./models/v3-companies-tables-response.js";
export {
  v3ContactsTablesColumnsResponseSchema,
  type V3ContactsTablesColumnsResponse,
} from "./models/v3-contacts-tables-columns-response.js";
export {
  v3ContactsTablesResponseSchema,
  type V3ContactsTablesResponse,
} from "./models/v3-contacts-tables-response.js";
export { v3BillingSchema, type V3Billing } from "./models/v3-billing.js";
export {
  v3BuyingGroupCompanyItemSchema,
  type V3BuyingGroupCompanyItem,
} from "./models/v3-buying-group-company-item.js";
export {
  v3BuyingGroupCompanyResultSchema,
  type V3BuyingGroupCompanyResult,
} from "./models/v3-buying-group-company-result.js";
export { v3BuyingGroupContactSchema, type V3BuyingGroupContact } from "./models/v3-buying-group-contact.js";
export { v3BuyingGroupRequestSchema, type V3BuyingGroupRequest } from "./models/v3-buying-group-request.js";
export {
  v3BuyingGroupResponseSchema,
  type V3BuyingGroupResponse,
} from "./models/v3-buying-group-response.js";
export { v3CanRevealItemSchema, type V3CanRevealItem } from "./models/v3-can-reveal-item.js";
export {
  v3CompaniesEnrichRequestSchema,
  type V3CompaniesEnrichRequest,
} from "./models/v3-companies-enrich-request.js";
export {
  v3CompaniesEnrichResponseSchema,
  type V3CompaniesEnrichResponse,
} from "./models/v3-companies-enrich-response.js";
export {
  v3CompaniesSearchAndEnrichRequestSchema,
  type V3CompaniesSearchAndEnrichRequest,
} from "./models/v3-companies-search-and-enrich-request.js";
export {
  v3CompaniesSearchAndEnrichResponseSchema,
  type V3CompaniesSearchAndEnrichResponse,
} from "./models/v3-companies-search-and-enrich-response.js";
export {
  v3CompaniesSearchRequestSchema,
  type V3CompaniesSearchRequest,
} from "./models/v3-companies-search-request.js";
export {
  v3CompaniesSearchResponseSchema,
  type V3CompaniesSearchResponse,
} from "./models/v3-companies-search-response.js";
export {
  v3CompanyFilterCriteriaSchema,
  type V3CompanyFilterCriteria,
} from "./models/v3-company-filter-criteria.js";
export { v3CompanyLocationSchema, type V3CompanyLocation } from "./models/v3-company-location.js";
export { v3CompanyPreviewSchema, type V3CompanyPreview } from "./models/v3-company-preview.js";
export {
  v3CompanyPreviewLushaApiDocumentationWebsiteVisitsApiSchema,
  type V3CompanyPreviewLushaApiDocumentationWebsiteVisitsApi,
} from "./models/v3-company-preview-lusha-api-documentation-website-visits-api.js";
export {
  v3CompanyProspectingFiltersSchema,
  type V3CompanyProspectingFilters,
} from "./models/v3-company-prospecting-filters.js";
export { v3CompanySearchItemSchema, type V3CompanySearchItem } from "./models/v3-company-search-item.js";
export { v3CompanySignalsDtoSchema, type V3CompanySignalsDto } from "./models/v3-company-signals-dto.js";
export {
  v3CompanySignalsRequestSchema,
  type V3CompanySignalsRequest,
} from "./models/v3-company-signals-request.js";
export {
  v3CompanySignalsResponseSchema,
  type V3CompanySignalsResponse,
} from "./models/v3-company-signals-response.js";
export {
  v3ContactFilterCriteriaSchema,
  type V3ContactFilterCriteria,
} from "./models/v3-contact-filter-criteria.js";
export { v3ContactPreviewSchema, type V3ContactPreview } from "./models/v3-contact-preview.js";
export { v3ContactSearchItemSchema, type V3ContactSearchItem } from "./models/v3-contact-search-item.js";
export { v3ContactSignalsDtoSchema, type V3ContactSignalsDto } from "./models/v3-contact-signals-dto.js";
export {
  v3ContactSignalsRequestSchema,
  type V3ContactSignalsRequest,
} from "./models/v3-contact-signals-request.js";
export {
  v3ContactSignalsResponseSchema,
  type V3ContactSignalsResponse,
} from "./models/v3-contact-signals-response.js";
export { v3ContactTagSchema, type V3ContactTag } from "./models/v3-contact-tag.js";
export {
  v3ContactsEnrichRequestSchema,
  type V3ContactsEnrichRequest,
} from "./models/v3-contacts-enrich-request.js";
export {
  v3ContactsEnrichResponseSchema,
  type V3ContactsEnrichResponse,
} from "./models/v3-contacts-enrich-response.js";
export {
  v3ContactsOnCompanySearchFiltersSchema,
  type V3ContactsOnCompanySearchFilters,
} from "./models/v3-contacts-on-company-search-filters.js";
export {
  v3ContactsSearchAndEnrichRequestSchema,
  type V3ContactsSearchAndEnrichRequest,
} from "./models/v3-contacts-search-and-enrich-request.js";
export {
  v3ContactsSearchAndEnrichResponseSchema,
  type V3ContactsSearchAndEnrichResponse,
} from "./models/v3-contacts-search-and-enrich-response.js";
export {
  v3ContactsSearchRequestSchema,
  type V3ContactsSearchRequest,
} from "./models/v3-contacts-search-request.js";
export {
  v3ContactsSearchResponseSchema,
  type V3ContactsSearchResponse,
} from "./models/v3-contacts-search-response.js";
export { v3EmailAddressSchema, type V3EmailAddress } from "./models/v3-email-address.js";
export { v3EnrichedCompanySchema, type V3EnrichedCompany } from "./models/v3-enriched-company.js";
export { v3EnrichedContactSchema, type V3EnrichedContact } from "./models/v3-enriched-contact.js";
export {
  v3EnrichedContactCompanyRefSchema,
  type V3EnrichedContactCompanyRef,
} from "./models/v3-enriched-contact-company-ref.js";
export { v3ItemErrorSchema, type V3ItemError } from "./models/v3-item-error.js";
export { v3LocationSchema, type V3Location } from "./models/v3-location.js";
export {
  v3LookAlikeCompanyResultSchema,
  type V3LookAlikeCompanyResult,
} from "./models/v3-look-alike-company-result.js";
export {
  v3LookAlikeContactResultSchema,
  type V3LookAlikeContactResult,
} from "./models/v3-look-alike-contact-result.js";
export { v3NaicsCodeSchema, type V3NaicsCode } from "./models/v3-naics-code.js";
export { v3PaginationRequestSchema, type V3PaginationRequest } from "./models/v3-pagination-request.js";
export { v3PaginationResponseSchema, type V3PaginationResponse } from "./models/v3-pagination-response.js";
export { v3PhoneNumberSchema, type V3PhoneNumber } from "./models/v3-phone-number.js";
export {
  v3ProspectingCompaniesRequestSchema,
  type V3ProspectingCompaniesRequest,
} from "./models/v3-prospecting-companies-request.js";
export {
  v3ProspectingCompaniesResponseSchema,
  type V3ProspectingCompaniesResponse,
} from "./models/v3-prospecting-companies-response.js";
export {
  v3ProspectingContactFiltersSchema,
  type V3ProspectingContactFilters,
} from "./models/v3-prospecting-contact-filters.js";
export {
  v3ProspectingContactsRequestSchema,
  type V3ProspectingContactsRequest,
} from "./models/v3-prospecting-contacts-request.js";
export {
  v3ProspectingContactsResponseSchema,
  type V3ProspectingContactsResponse,
} from "./models/v3-prospecting-contacts-response.js";
export { v3RangeSchema, type V3Range } from "./models/v3-range.js";
export {
  v3SearchAndEnrichCompanyResultSchema,
  type V3SearchAndEnrichCompanyResult,
} from "./models/v3-search-and-enrich-company-result.js";
export {
  v3SearchAndEnrichContactResultSchema,
  type V3SearchAndEnrichContactResult,
} from "./models/v3-search-and-enrich-contact-result.js";
export { v3SearchOptionsSchema, type V3SearchOptions } from "./models/v3-search-options.js";
export { v3SicCodeSchema, type V3SicCode } from "./models/v3-sic-code.js";
export {
  v3SignalScoreCompaniesRequestSchema,
  type V3SignalScoreCompaniesRequest,
} from "./models/v3-signal-score-companies-request.js";
export {
  v3SignalScoreCompaniesResponseSchema,
  type V3SignalScoreCompaniesResponse,
} from "./models/v3-signal-score-companies-response.js";
export {
  v3SignalScoreCompanyItemSchema,
  type V3SignalScoreCompanyItem,
} from "./models/v3-signal-score-company-item.js";
export {
  v3SignalScoreCompanyResultSchema,
  type V3SignalScoreCompanyResult,
} from "./models/v3-signal-score-company-result.js";
export {
  v3SignalScoreContactCompanyRefSchema,
  type V3SignalScoreContactCompanyRef,
} from "./models/v3-signal-score-contact-company-ref.js";
export {
  v3SignalScoreContactItemSchema,
  type V3SignalScoreContactItem,
} from "./models/v3-signal-score-contact-item.js";
export {
  v3SignalScoreContactResultSchema,
  type V3SignalScoreContactResult,
} from "./models/v3-signal-score-contact-result.js";
export {
  v3SignalScoreContactsRequestSchema,
  type V3SignalScoreContactsRequest,
} from "./models/v3-signal-score-contacts-request.js";
export {
  v3SignalScoreContactsResponseSchema,
  type V3SignalScoreContactsResponse,
} from "./models/v3-signal-score-contacts-response.js";
export { Visibility, visibilitySchema } from "./models/visibility.js";
export { visitorCountriesSchema, type VisitorCountries } from "./models/visitor-countries.js";
export {
  websiteVisitsCompanyResultSchema,
  type WebsiteVisitsCompanyResult,
} from "./models/website-visits-company-result.js";
export { websiteVisitsFiltersSchema, type WebsiteVisitsFilters } from "./models/website-visits-filters.js";
export {
  websiteVisitsFloatRangeSchema,
  type WebsiteVisitsFloatRange,
} from "./models/website-visits-float-range.js";
export {
  websiteVisitsIntRangeSchema,
  type WebsiteVisitsIntRange,
} from "./models/website-visits-int-range.js";
export {
  websiteVisitsPaginationSchema,
  type WebsiteVisitsPagination,
} from "./models/website-visits-pagination.js";
export { websiteVisitsRequestSchema, type WebsiteVisitsRequest } from "./models/website-visits-request.js";
export { websiteVisitsResponseSchema, type WebsiteVisitsResponse } from "./models/website-visits-response.js";
export { FilterBy, filterBySchema } from "./models/filter-by.js";
export { FilterType, filterTypeSchema } from "./models/filter-type.js";
export { FilterType1, filterType1Schema } from "./models/filter-type1.js";
export {
  FilterTypeLushaSignalsApi,
  filterTypeLushaSignalsApiSchema,
} from "./models/filter-type-lusha-signals-api.js";
export { ObjectType, objectTypeSchema } from "./models/object-type.js";

export {
  CoreError as LushaError,
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
