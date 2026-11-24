export { GivebutterClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { CampaignDiscountCodes } from "./resources/campaign-discount-codes.js";
export { CampaignMembers } from "./resources/campaign-members.js";
export { CampaignTeams } from "./resources/campaign-teams.js";
export { CampaignTickets } from "./resources/campaign-tickets.js";
export { Campaigns } from "./resources/campaigns.js";
export { ContactActivities } from "./resources/contact-activities.js";
export { ContactTags } from "./resources/contact-tags.js";
export { Contacts } from "./resources/contacts.js";
export { Funds } from "./resources/funds.js";
export { HouseholdContacts } from "./resources/household-contacts.js";
export { Households } from "./resources/households.js";
export { Messages } from "./resources/messages.js";
export { Payouts } from "./resources/payouts.js";
export { Pledges } from "./resources/pledges.js";
export { RecurringPlans } from "./resources/recurring-plans.js";
export { SsoAccounts } from "./resources/sso-accounts.js";
export { SsoCampaigns } from "./resources/sso-campaigns.js";
export { Tickets } from "./resources/tickets.js";
export { Transactions } from "./resources/transactions.js";
export { WebhookActivities } from "./resources/webhook-activities.js";
export { Webhooks } from "./resources/webhooks.js";

export { addressSchema, type Address } from "./models/address.js";
export { address1Schema, type Address1 } from "./models/address1.js";
export { addressResourceSchema, type AddressResource } from "./models/address-resource.js";
export {
  appHttpResourcesApiAddressResourceSchema,
  type AppHttpResourcesApiAddressResource,
} from "./models/app-http-resources-api-address-resource.js";
export {
  appHttpResourcesApiHouseholdResourceSchema,
  type AppHttpResourcesApiHouseholdResource,
} from "./models/app-http-resources-api-household-resource.js";
export {
  associatedCompanyResourceSchema,
  type AssociatedCompanyResource,
} from "./models/associated-company-resource.js";
export {
  authenticationExceptionSchema,
  type AuthenticationException,
} from "./models/authentication-exception.js";
export {
  authenticationException1Schema,
  type AuthenticationException1,
} from "./models/authentication-exception1.js";
export {
  authorizationExceptionSchema,
  type AuthorizationException,
} from "./models/authorization-exception.js";
export {
  authorizationException1Schema,
  type AuthorizationException1,
} from "./models/authorization-exception1.js";
export {
  campaignDiscountCodeResourceSchema,
  type CampaignDiscountCodeResource,
} from "./models/campaign-discount-code-resource.js";
export {
  campaignItemTicketResourceSchema,
  type CampaignItemTicketResource,
} from "./models/campaign-item-ticket-resource.js";
export {
  campaignMemberResourceSchema,
  type CampaignMemberResource,
} from "./models/campaign-member-resource.js";
export { campaignResourceSchema, type CampaignResource } from "./models/campaign-resource.js";
export {
  campaignSettingResourceSchema,
  type CampaignSettingResource,
} from "./models/campaign-setting-resource.js";
export { campaignTeamResourceSchema, type CampaignTeamResource } from "./models/campaign-team-resource.js";
export { checkDepositedAtSchema, type CheckDepositedAt } from "./models/unions/check-deposited-at.js";
export { checkNumberSchema, type CheckNumber } from "./models/unions/check-number.js";
export { contactSchema, type Contact } from "./models/contact.js";
export {
  contactActivityResourceSchema,
  type ContactActivityResource,
} from "./models/contact-activity-resource.js";
export {
  ContactActivityTypeEnum,
  contactActivityTypeEnumSchema,
} from "./models/contact-activity-type-enum.js";
export { contactResourceSchema, type ContactResource } from "./models/contact-resource.js";
export { ContactType, contactTypeSchema } from "./models/contact-type.js";
export { ContactType1, contactType1Schema } from "./models/contact-type1.js";
export { coverSchema, type Cover } from "./models/cover.js";
export { Currency, currencySchema } from "./models/currency.js";
export {
  customFieldResponseResourceSchema,
  type CustomFieldResponseResource,
} from "./models/custom-field-response-resource.js";
export { dedicationSchema, type Dedication } from "./models/dedication.js";
export { dedicationResourceSchema, type DedicationResource } from "./models/dedication-resource.js";
export { DedicationType, dedicationTypeSchema } from "./models/dedication-type.js";
export {
  dedicationVariantQtelwfSchema,
  type DedicationVariantQtelwf,
} from "./models/unions/dedication-variant-qtelwf.js";
export { DiscountCodeType, discountCodeTypeSchema } from "./models/discount-code-type.js";
export { emailSchema, type Email } from "./models/email.js";
export { emailResourceSchema, type EmailResource } from "./models/email-resource.js";
export { errorSchema, type Error } from "./models/error.js";
export { Event, eventSchema } from "./models/event.js";
export { eventResourceSchema, type EventResource } from "./models/event-resource.js";
export { externalIdSchema, type ExternalId } from "./models/unions/external-id.js";
export { externalIdResourceSchema, type ExternalIdResource } from "./models/external-id-resource.js";
export { fundResourceSchema, type FundResource } from "./models/fund-resource.js";
export { GenderEnum, genderEnumSchema } from "./models/gender-enum.js";
export { givingSpaceSchema, type GivingSpace } from "./models/unions/giving-space.js";
export { givingSpaceResourceSchema, type GivingSpaceResource } from "./models/giving-space-resource.js";
export { householdResourceSchema, type HouseholdResource } from "./models/household-resource.js";
export { householdStoreRequestSchema, type HouseholdStoreRequest } from "./models/household-store-request.js";
export {
  householdUpdateRequestSchema,
  type HouseholdUpdateRequest,
} from "./models/household-update-request.js";
export { linksSchema, type Links } from "./models/links.js";
export { links1Schema, type Links1 } from "./models/links1.js";
export { messageResourceSchema, type MessageResource } from "./models/message-resource.js";
export { metaSchema, type Meta } from "./models/meta.js";
export {
  metaGivebutterApiDocumentationCampaignsApiSchema,
  type MetaGivebutterApiDocumentationCampaignsApi,
} from "./models/meta-givebutter-api-documentation-campaigns-api.js";
export {
  metaGivebutterApiDocumentationTransactionsApiSchema,
  type MetaGivebutterApiDocumentationTransactionsApi,
} from "./models/meta-givebutter-api-documentation-transactions-api.js";
export {
  modelNotFoundExceptionSchema,
  type ModelNotFoundException,
} from "./models/model-not-found-exception.js";
export {
  modelNotFoundException1Schema,
  type ModelNotFoundException1,
} from "./models/model-not-found-exception1.js";
export {
  notFoundHttpExceptionSchema,
  type NotFoundHttpException,
} from "./models/not-found-http-exception.js";
export {
  notFoundHttpException1Schema,
  type NotFoundHttpException1,
} from "./models/not-found-http-exception1.js";
export { PaymentMethodEnum, paymentMethodEnumSchema } from "./models/payment-method-enum.js";
export { payoutIdSchema, type PayoutId } from "./models/unions/payout-id.js";
export { payoutResourceSchema, type PayoutResource } from "./models/payout-resource.js";
export { phoneSchema, type Phone } from "./models/phone.js";
export { phoneResourceSchema, type PhoneResource } from "./models/phone-resource.js";
export { pledgeResourceSchema, type PledgeResource } from "./models/pledge-resource.js";
export { pointOfContactSchema, type PointOfContact } from "./models/unions/point-of-contact.js";
export {
  pointOfContactResourceSchema,
  type PointOfContactResource,
} from "./models/point-of-contact-resource.js";
export { primaryAddressSchema, type PrimaryAddress } from "./models/unions/primary-address.js";
export { publicUserResourceSchema, type PublicUserResource } from "./models/public-user-resource.js";
export { recipientSchema, type Recipient } from "./models/recipient.js";
export { recurringPlanResourceSchema, type RecurringPlanResource } from "./models/recurring-plan-resource.js";
export { resourceSchema, type Resource } from "./models/resource.js";
export { resource1Schema, type Resource1 } from "./models/unions/resource1.js";
export { ResourceType, resourceTypeSchema } from "./models/resource-type.js";
export { Scope, scopeSchema } from "./models/scope.js";
export { settingSchema, type Setting } from "./models/unions/setting.js";
export { Source, sourceSchema } from "./models/source.js";
export { ssoAccountResourceSchema, type SsoAccountResource } from "./models/sso-account-resource.js";
export { statsSchema, type Stats } from "./models/stats.js";
export {
  storeCampaignDiscountCodeRequestSchema,
  type StoreCampaignDiscountCodeRequest,
} from "./models/store-campaign-discount-code-request.js";
export {
  storeCampaignItemTicketRequestSchema,
  type StoreCampaignItemTicketRequest,
} from "./models/store-campaign-item-ticket-request.js";
export { storeCampaignRequestSchema, type StoreCampaignRequest } from "./models/store-campaign-request.js";
export {
  storeContactActivityRequestSchema,
  type StoreContactActivityRequest,
} from "./models/store-contact-activity-request.js";
export { storeContactRequestSchema, type StoreContactRequest } from "./models/store-contact-request.js";
export {
  storeTransactionRequestSchema,
  type StoreTransactionRequest,
} from "./models/store-transaction-request.js";
export { Subtype, subtypeSchema } from "./models/subtype.js";
export { ticketResourceSchema, type TicketResource } from "./models/ticket-resource.js";
export {
  transactionLineItemResourceSchema,
  type TransactionLineItemResource,
} from "./models/transaction-line-item-resource.js";
export { transactionResourceSchema, type TransactionResource } from "./models/transaction-resource.js";
export { transactionResource1Schema, type TransactionResource1 } from "./models/transaction-resource1.js";
export {
  transactionResource2Schema,
  type TransactionResource2,
} from "./models/unions/transaction-resource2.js";
export { Type, typeSchema } from "./models/type.js";
export { Type1, type1Schema } from "./models/type1.js";
export {
  TypeGivebutterApiDocumentationContactActivitiesApi,
  typeGivebutterApiDocumentationContactActivitiesApiSchema,
} from "./models/type-givebutter-api-documentation-contact-activities-api.js";
export {
  updateCampaignDiscountCodeRequestSchema,
  type UpdateCampaignDiscountCodeRequest,
} from "./models/update-campaign-discount-code-request.js";
export { updateCampaignRequestSchema, type UpdateCampaignRequest } from "./models/update-campaign-request.js";
export { updateContactRequestSchema, type UpdateContactRequest } from "./models/update-contact-request.js";
export {
  updateTransactionRequestSchema,
  type UpdateTransactionRequest,
} from "./models/update-transaction-request.js";
export { v1Campaigns409ErrorSchema, type V1Campaigns409Error } from "./models/v1-campaigns409-error.js";
export { v1Campaigns409Error1Schema, type V1Campaigns409Error1 } from "./models/v1-campaigns409-error1.js";
export {
  v1CampaignsDiscountCodes422ErrorSchema,
  type V1CampaignsDiscountCodes422Error,
} from "./models/v1-campaigns-discount-codes422-error.js";
export {
  v1CampaignsDiscountCodes422Error1Schema,
  type V1CampaignsDiscountCodes422Error1,
} from "./models/v1-campaigns-discount-codes422-error1.js";
export {
  v1CampaignsDiscountCodesResponseSchema,
  type V1CampaignsDiscountCodesResponse,
} from "./models/v1-campaigns-discount-codes-response.js";
export {
  v1CampaignsItemsTicketsResponseSchema,
  type V1CampaignsItemsTicketsResponse,
} from "./models/v1-campaigns-items-tickets-response.js";
export {
  v1CampaignsMembersResponseSchema,
  type V1CampaignsMembersResponse,
} from "./models/v1-campaigns-members-response.js";
export {
  v1CampaignsMembersResponse1Schema,
  type V1CampaignsMembersResponse1,
} from "./models/unions/v1-campaigns-members-response1.js";
export {
  v1CampaignsMembersResponse11Schema,
  type V1CampaignsMembersResponse11,
} from "./models/unions/v1-campaigns-members-response11.js";
export { v1CampaignsResponseSchema, type V1CampaignsResponse } from "./models/v1-campaigns-response.js";
export {
  v1CampaignsTeamsResponseSchema,
  type V1CampaignsTeamsResponse,
} from "./models/v1-campaigns-teams-response.js";
export {
  v1ContactsActivitiesResponseSchema,
  type V1ContactsActivitiesResponse,
} from "./models/v1-contacts-activities-response.js";
export { v1ContactsRequestSchema, type V1ContactsRequest } from "./models/v1-contacts-request.js";
export { v1ContactsResponseSchema, type V1ContactsResponse } from "./models/v1-contacts-response.js";
export {
  v1ContactsTagsAddRequestSchema,
  type V1ContactsTagsAddRequest,
} from "./models/v1-contacts-tags-add-request.js";
export {
  v1ContactsTagsRemoveRequestSchema,
  type V1ContactsTagsRemoveRequest,
} from "./models/v1-contacts-tags-remove-request.js";
export {
  v1ContactsTagsSyncRequestSchema,
  type V1ContactsTagsSyncRequest,
} from "./models/v1-contacts-tags-sync-request.js";
export { v1FundsRequestSchema, type V1FundsRequest } from "./models/v1-funds-request.js";
export { v1FundsResponseSchema, type V1FundsResponse } from "./models/v1-funds-response.js";
export {
  v1HouseholdsContactsRequestSchema,
  type V1HouseholdsContactsRequest,
} from "./models/v1-households-contacts-request.js";
export {
  v1HouseholdsContactsResponseSchema,
  type V1HouseholdsContactsResponse,
} from "./models/v1-households-contacts-response.js";
export { v1MessagesResponseSchema, type V1MessagesResponse } from "./models/v1-messages-response.js";
export { v1PayoutsResponseSchema, type V1PayoutsResponse } from "./models/v1-payouts-response.js";
export { v1PlansResponseSchema, type V1PlansResponse } from "./models/v1-plans-response.js";
export { v1PledgesResponseSchema, type V1PledgesResponse } from "./models/v1-pledges-response.js";
export { v1TicketsResponseSchema, type V1TicketsResponse } from "./models/v1-tickets-response.js";
export {
  v1TransactionsResponseSchema,
  type V1TransactionsResponse,
} from "./models/v1-transactions-response.js";
export {
  v1WebhooksActivitiesResponseSchema,
  type V1WebhooksActivitiesResponse,
} from "./models/v1-webhooks-activities-response.js";
export { v1WebhooksRequestSchema, type V1WebhooksRequest } from "./models/v1-webhooks-request.js";
export { v1WebhooksRequest1Schema, type V1WebhooksRequest1 } from "./models/v1-webhooks-request1.js";
export { v1WebhooksResponseSchema, type V1WebhooksResponse } from "./models/v1-webhooks-response.js";
export { validationExceptionSchema, type ValidationException } from "./models/validation-exception.js";
export { validationException1Schema, type ValidationException1 } from "./models/validation-exception1.js";
export { Value, valueSchema } from "./models/value.js";
export {
  webhookActivityResourceSchema,
  type WebhookActivityResource,
} from "./models/webhook-activity-resource.js";
export { webhookResourceSchema, type WebhookResource } from "./models/webhook-resource.js";
export { auctionTabTextSchema, type AuctionTabText } from "./models/auction-tab-text.js";
export { customDonateTextSchema, type CustomDonateText } from "./models/custom-donate-text.js";
export { customDonationAmountsSchema, type CustomDonationAmounts } from "./models/custom-donation-amounts.js";
export { customFeeTextSchema, type CustomFeeText } from "./models/custom-fee-text.js";
export { customFlowHeadingSchema, type CustomFlowHeading } from "./models/custom-flow-heading.js";
export { customJoinTextSchema, type CustomJoinText } from "./models/custom-join-text.js";
export {
  customTeamLeaderboardHeadingSchema,
  type CustomTeamLeaderboardHeading,
} from "./models/custom-team-leaderboard-heading.js";
export {
  customTeamMembersHeadingSchema,
  type CustomTeamMembersHeading,
} from "./models/custom-team-members-heading.js";
export { defaultFrequencySchema, type DefaultFrequency } from "./models/default-frequency.js";
export { defaultFundSchema, type DefaultFund } from "./models/default-fund.js";
export { disableCompanyFieldSchema, type DisableCompanyField } from "./models/disable-company-field.js";
export { disableDedicationsSchema, type DisableDedications } from "./models/disable-dedications.js";
export { disableDonationsSchema, type DisableDonations } from "./models/disable-donations.js";
export { disableEmbedBrandingSchema, type DisableEmbedBranding } from "./models/disable-embed-branding.js";
export { disablePublicJoinSchema, type DisablePublicJoin } from "./models/disable-public-join.js";
export {
  disablePublicJoinButtonSchema,
  type DisablePublicJoinButton,
} from "./models/disable-public-join-button.js";
export { disableRecurringSchema, type DisableRecurring } from "./models/disable-recurring.js";
export {
  disableTeamFundraisingSchema,
  type DisableTeamFundraising,
} from "./models/disable-team-fundraising.js";
export { disallowNewTeamsSchema, type DisallowNewTeams } from "./models/disallow-new-teams.js";
export { displayFrequenciesSchema, type DisplayFrequencies } from "./models/display-frequencies.js";
export { enableEventRemindersSchema, type EnableEventReminders } from "./models/enable-event-reminders.js";
export {
  enableRegistrationFundraisingSchema,
  type EnableRegistrationFundraising,
} from "./models/enable-registration-fundraising.js";
export { enforceEndAtSchema, type EnforceEndAt } from "./models/enforce-end-at.js";
export { forceFeeCollectionSchema, type ForceFeeCollection } from "./models/force-fee-collection.js";
export { fundSortBySchema, type FundSortBy } from "./models/fund-sort-by.js";
export { hideAuctionComponentsSchema, type HideAuctionComponents } from "./models/hide-auction-components.js";
export {
  hideContactInformationSchema,
  type HideContactInformation,
} from "./models/hide-contact-information.js";
export { hideFeeCollectionSchema, type HideFeeCollection } from "./models/hide-fee-collection.js";
export { hideFundSchema, type HideFund } from "./models/hide-fund.js";
export { hideMemberRaisedSchema, type HideMemberRaised } from "./models/hide-member-raised.js";
export { hideMoneyRaisedSchema, type HideMoneyRaised } from "./models/hide-money-raised.js";
export { hideOtherOptionSchema, type HideOtherOption } from "./models/hide-other-option.js";
export { hideSupporterFeedSchema, type HideSupporterFeed } from "./models/hide-supporter-feed.js";
export { hideTeamRaisedSchema, type HideTeamRaised } from "./models/hide-team-raised.js";
export { hideTimeRemainingSchema, type HideTimeRemaining } from "./models/hide-time-remaining.js";
export { metaImageAltTextSchema, type MetaImageAltText } from "./models/meta-image-alt-text.js";
export { minimumDonationSchema, type MinimumDonation } from "./models/minimum-donation.js";
export { multiTeamFundraisingSchema, type MultiTeamFundraising } from "./models/multi-team-fundraising.js";
export {
  multiTeamFundraisingLimitSchema,
  type MultiTeamFundraisingLimit,
} from "./models/multi-team-fundraising-limit.js";
export { publicCheckPaymentsSchema, type PublicCheckPayments } from "./models/public-check-payments.js";
export { recurringUpsellSchema, type RecurringUpsell } from "./models/recurring-upsell.js";
export {
  registrationThankYouMessageSchema,
  type RegistrationThankYouMessage,
} from "./models/registration-thank-you-message.js";
export {
  removeTipsIncreaseFeeSchema,
  type RemoveTipsIncreaseFee,
} from "./models/remove-tips-increase-fee.js";
export { requireAddressSchema, type RequireAddress } from "./models/require-address.js";
export { requireDonorPhoneSchema, type RequireDonorPhone } from "./models/require-donor-phone.js";
export { requireFundSchema, type RequireFund } from "./models/require-fund.js";
export {
  requireTeamForMembersSchema,
  type RequireTeamForMembers,
} from "./models/require-team-for-members.js";
export { requireTicketPhoneSchema, type RequireTicketPhone } from "./models/require-ticket-phone.js";
export {
  ScopeGivebutterApiDocumentationTransactionsApi,
  scopeGivebutterApiDocumentationTransactionsApiSchema,
} from "./models/scope-givebutter-api-documentation-transactions-api.js";
export { showCountdownClockSchema, type ShowCountdownClock } from "./models/show-countdown-clock.js";
export { SortBy, sortBySchema } from "./models/sort-by.js";
export { SortByDesc, sortByDescSchema } from "./models/sort-by-desc.js";
export {
  SortByDescGivebutterApiDocumentationTransactionsApi,
  sortByDescGivebutterApiDocumentationTransactionsApiSchema,
} from "./models/sort-by-desc-givebutter-api-documentation-transactions-api.js";
export {
  SortByGivebutterApiDocumentationTransactionsApi,
  sortByGivebutterApiDocumentationTransactionsApiSchema,
} from "./models/sort-by-givebutter-api-documentation-transactions-api.js";
export { suggestedAmountsModeSchema, type SuggestedAmountsMode } from "./models/suggested-amounts-mode.js";
export { teamOrderSchema, type TeamOrder } from "./models/team-order.js";
export { thankYouMessageSchema, type ThankYouMessage } from "./models/thank-you-message.js";
export { themeColorSchema, type ThemeColor } from "./models/theme-color.js";
export { useActualCoverSizeSchema, type UseActualCoverSize } from "./models/use-actual-cover-size.js";

export {
  CoreError as GivebutterError,
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
