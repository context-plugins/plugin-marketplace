export { CodeQrClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { Analytics } from "./resources/analytics.js";
export { Domains } from "./resources/domains.js";
export { Events } from "./resources/events.js";
export { Folders } from "./resources/folders.js";
export { Links } from "./resources/links.js";
export { Projects } from "./resources/projects.js";
export { QrCodes } from "./resources/qr-codes.js";
export { Tags } from "./resources/tags.js";
export { Track } from "./resources/track.js";

export { AccessLevel, accessLevelSchema } from "./models/access-level.js";
export { analyticsResponseSchema, type AnalyticsResponse } from "./models/unions/analytics-response.js";
export { analyticsBrowsersSchema, type AnalyticsBrowsers } from "./models/analytics-browsers.js";
export { analyticsCitiesSchema, type AnalyticsCities } from "./models/analytics-cities.js";
export { analyticsContinentsSchema, type AnalyticsContinents } from "./models/analytics-continents.js";
export { analyticsCountSchema, type AnalyticsCount } from "./models/analytics-count.js";
export { analyticsCountriesSchema, type AnalyticsCountries } from "./models/analytics-countries.js";
export { analyticsDevicesSchema, type AnalyticsDevices } from "./models/analytics-devices.js";
export { analyticsOsSchema, type AnalyticsOs } from "./models/analytics-os.js";
export { analyticsRefererUrlsSchema, type AnalyticsRefererUrls } from "./models/analytics-referer-urls.js";
export { analyticsReferersSchema, type AnalyticsReferers } from "./models/analytics-referers.js";
export { analyticsRegionsSchema, type AnalyticsRegions } from "./models/analytics-regions.js";
export { analyticsTimeseriesSchema, type AnalyticsTimeseries } from "./models/analytics-timeseries.js";
export { analyticsTopLinksSchema, type AnalyticsTopLinks } from "./models/analytics-top-links.js";
export { analyticsTopUrlsSchema, type AnalyticsTopUrls } from "./models/analytics-top-urls.js";
export { Attribute, attributeSchema } from "./models/attribute.js";
export { clickSchema, type Click } from "./models/click.js";
export { clickEventSchema, type ClickEvent } from "./models/click-event.js";
export {
  clickCodeqrIoTrackApiSchema,
  type ClickCodeqrIoTrackApi,
} from "./models/click-codeqr-io-track-api.js";
export { Code, codeSchema } from "./models/code.js";
export { Color, colorSchema } from "./models/color.js";
export { Color1, color1Schema } from "./models/color1.js";
export { Color2, color2Schema } from "./models/color2.js";
export { Continent, continentSchema } from "./models/continent.js";
export { Country, countrySchema } from "./models/country.js";
export { Country1, country1Schema } from "./models/country1.js";
export { Country2, country2Schema } from "./models/country2.js";
export { customerSchema, type Customer } from "./models/customer.js";
export { customer1Schema, type Customer1 } from "./models/customer1.js";
export {
  customerCodeqrIoTrackApiSchema,
  type CustomerCodeqrIoTrackApi,
} from "./models/customer-codeqr-io-track-api.js";
export { domainSchema, type Domain } from "./models/domain.js";
export { domainSchemaSchema, type DomainSchema } from "./models/domain-schema.js";
export { domainsRequestSchema, type DomainsRequest } from "./models/domains-request.js";
export { domainsRequest1Schema, type DomainsRequest1 } from "./models/domains-request1.js";
export { domainsResponseSchema, type DomainsResponse } from "./models/domains-response.js";
export { errorSchema, type Error } from "./models/error.js";
export { eventsResponseSchema, type EventsResponse } from "./models/unions/events-response.js";
export { Family, familySchema } from "./models/family.js";
export { Family1, family1Schema } from "./models/family1.js";
export { folderSchemaSchema, type FolderSchema } from "./models/folder-schema.js";
export { foldersRequestSchema, type FoldersRequest } from "./models/folders-request.js";
export { foldersRequest1Schema, type FoldersRequest1 } from "./models/folders-request1.js";
export { foldersResponseSchema, type FoldersResponse } from "./models/folders-response.js";
export { frameTextStylesSchema, type FrameTextStyles } from "./models/frame-text-styles.js";
export { frameTextStyles1Schema, type FrameTextStyles1 } from "./models/frame-text-styles1.js";
export { geoSchema, type Geo } from "./models/geo.js";
export {
  geoCodeqrIoQrCodesApiSchema,
  type GeoCodeqrIoQrCodesApi,
} from "./models/geo-codeqr-io-qr-codes-api.js";
export { lastClickedSchema, type LastClicked } from "./models/unions/last-clicked.js";
export { leadEventSchema, type LeadEvent } from "./models/lead-event.js";
export { linkSchema, type Link } from "./models/link.js";
export { link2Schema, type Link2 } from "./models/link2.js";
export { linkErrorSchema, type LinkError } from "./models/link-error.js";
export { linkCodeqrIoLinksApiSchema, type LinkCodeqrIoLinksApi } from "./models/link-codeqr-io-links-api.js";
export { linksBulkRequestSchema, type LinksBulkRequest } from "./models/links-bulk-request.js";
export { linksBulkResponseSchema, type LinksBulkResponse } from "./models/links-bulk-response.js";
export { linksBulkResponse1Schema, type LinksBulkResponse1 } from "./models/unions/links-bulk-response1.js";
export { linksRequestSchema, type LinksRequest } from "./models/links-request.js";
export { linksRequest1Schema, type LinksRequest1 } from "./models/links-request1.js";
export { linksResponseSchema, type LinksResponse } from "./models/links-response.js";
export { metadataSchema, type Metadata } from "./models/metadata.js";
export { Mode, modeSchema } from "./models/mode.js";
export { Operator, operatorSchema } from "./models/operator.js";
export { PaymentProcessor, paymentProcessorSchema } from "./models/payment-processor.js";
export { Plan, planSchema } from "./models/plan.js";
export { projectSchema, type Project } from "./models/project.js";
export { qrCodeSchema, type QrCode } from "./models/qr-code.js";
export { qrCodeErrorSchema, type QrCodeError } from "./models/qr-code-error.js";
export { qrcodesBulkRequestSchema, type QrcodesBulkRequest } from "./models/qrcodes-bulk-request.js";
export { qrcodesBulkResponseSchema, type QrcodesBulkResponse } from "./models/qrcodes-bulk-response.js";
export {
  qrcodesBulkResponse1Schema,
  type QrcodesBulkResponse1,
} from "./models/unions/qrcodes-bulk-response1.js";
export { qrcodesRequestSchema, type QrcodesRequest } from "./models/qrcodes-request.js";
export { qrcodesRequest1Schema, type QrcodesRequest1 } from "./models/qrcodes-request1.js";
export { qrcodesResponseSchema, type QrcodesResponse } from "./models/qrcodes-response.js";
export { Role, roleSchema } from "./models/role.js";
export { ruleSchema, type Rule } from "./models/rule.js";
export { rule1Schema, type Rule1 } from "./models/rule1.js";
export { saleSchema, type Sale } from "./models/sale.js";
export { saleEventSchema, type SaleEvent } from "./models/sale-event.js";
export { Size, sizeSchema } from "./models/size.js";
export { Size1, size1Schema } from "./models/size1.js";
export { Style, styleSchema } from "./models/style.js";
export { Style1, style1Schema } from "./models/style1.js";
export { tagSchema, type Tag } from "./models/tag.js";
export { tagIdsSchema, type TagIds } from "./models/unions/tag-ids.js";
export { tagNamesSchema, type TagNames } from "./models/unions/tag-names.js";
export { tagsRequestSchema, type TagsRequest } from "./models/tags-request.js";
export { tagsRequest1Schema, type TagsRequest1 } from "./models/tags-request1.js";
export { tagsResponseSchema, type TagsResponse } from "./models/tags-response.js";
export { trackLeadRequestSchema, type TrackLeadRequest } from "./models/track-lead-request.js";
export { trackLeadResponseSchema, type TrackLeadResponse } from "./models/track-lead-response.js";
export { trackSaleRequestSchema, type TrackSaleRequest } from "./models/track-sale-request.js";
export { trackSaleResponseSchema, type TrackSaleResponse } from "./models/track-sale-response.js";
export { Type, typeSchema } from "./models/type.js";
export { Type1, type1Schema } from "./models/type1.js";
export { TypeCodeqrIoFoldersApi, typeCodeqrIoFoldersApiSchema } from "./models/type-codeqr-io-folders-api.js";
export {
  TypeCodeqrIoQrCodesApi,
  typeCodeqrIoQrCodesApiSchema,
} from "./models/type-codeqr-io-qr-codes-api.js";
export { userSchema, type User } from "./models/user.js";
export { Weight, weightSchema } from "./models/weight.js";
export { Weight1, weight1Schema } from "./models/weight1.js";
export { whatsappSchema, type Whatsapp } from "./models/whatsapp.js";
export { ContinentCode, continentCodeSchema } from "./models/continent-code.js";
export { CountryCode, countryCodeSchema } from "./models/country-code.js";
export { Event, eventSchema } from "./models/event.js";
export { EventCodeqrIoEventsApi, eventCodeqrIoEventsApiSchema } from "./models/event-codeqr-io-events-api.js";
export { Format, formatSchema } from "./models/format.js";
export { geo1Schema, type Geo1 } from "./models/geo1.js";
export { GroupBy, groupBySchema } from "./models/group-by.js";
export { GroupBy1, groupBy1Schema } from "./models/group-by1.js";
export { GroupBy2, groupBy2Schema } from "./models/group-by2.js";
export { GroupBy3, groupBy3Schema } from "./models/group-by3.js";
export { groupBy4Schema, type GroupBy4 } from "./models/unions/group-by4.js";
export {
  groupBy4CodeqrIoQrCodesApiSchema,
  type GroupBy4CodeqrIoQrCodesApi,
} from "./models/unions/group-by4-codeqr-io-qr-codes-api.js";
export {
  GroupByCodeqrIoLinksApi,
  groupByCodeqrIoLinksApiSchema,
} from "./models/group-by-codeqr-io-links-api.js";
export { idsSchema, type Ids } from "./models/unions/ids.js";
export { Interval, intervalSchema } from "./models/interval.js";
export {
  IntervalCodeqrIoEventsApi,
  intervalCodeqrIoEventsApiSchema,
} from "./models/interval-codeqr-io-events-api.js";
export { linkIdsSchema, type LinkIds } from "./models/unions/link-ids.js";
export { m400Schema, type M400 } from "./models/m400.js";
export { m4001Schema, type M4001 } from "./models/m4001.js";
export { Order, orderSchema } from "./models/order.js";
export { Sort, sortSchema } from "./models/sort.js";
export { SortBy, sortBySchema } from "./models/sort-by.js";
export { SortByCodeqrIoTagsApi, sortByCodeqrIoTagsApiSchema } from "./models/sort-by-codeqr-io-tags-api.js";
export { SortOrder, sortOrderSchema } from "./models/sort-order.js";
export {
  SortCodeqrIoQrCodesApi,
  sortCodeqrIoQrCodesApiSchema,
} from "./models/sort-codeqr-io-qr-codes-api.js";
export { tagIdsModelSchema, type TagIdsModel } from "./models/unions/tag-ids-model.js";
export { Type2, type2Schema } from "./models/type2.js";

export {
  CoreError as CodeQrError,
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
