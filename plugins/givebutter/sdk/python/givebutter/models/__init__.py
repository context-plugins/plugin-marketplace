from . import enums, unions
from .address import Address, AddressDict
from .address1 import Address1, Address1Dict
from .address_resource import AddressResource, AddressResourceDict
from .app_http_resources_api_address_resource import (
    AppHttpResourcesApiAddressResource,
    AppHttpResourcesApiAddressResourceDict,
)
from .app_http_resources_api_household_resource import (
    AppHttpResourcesApiHouseholdResource,
    AppHttpResourcesApiHouseholdResourceDict,
)
from .associated_company_resource import AssociatedCompanyResource, AssociatedCompanyResourceDict
from .auction_tab_text import AuctionTabText, AuctionTabTextDict
from .authentication_exception import AuthenticationException, AuthenticationExceptionDict
from .authentication_exception1 import AuthenticationException1, AuthenticationException1Dict
from .authorization_exception import AuthorizationException, AuthorizationExceptionDict
from .authorization_exception1 import AuthorizationException1, AuthorizationException1Dict
from .campaign_discount_code_resource import CampaignDiscountCodeResource, CampaignDiscountCodeResourceDict
from .campaign_item_ticket_resource import CampaignItemTicketResource, CampaignItemTicketResourceDict
from .campaign_member_resource import CampaignMemberResource, CampaignMemberResourceDict
from .campaign_resource import CampaignResource, CampaignResourceDict
from .campaign_setting_resource import CampaignSettingResource, CampaignSettingResourceDict
from .campaign_team_resource import CampaignTeamResource, CampaignTeamResourceDict
from .contact import Contact, ContactDict
from .contact_activity_resource import ContactActivityResource, ContactActivityResourceDict
from .contact_resource import ContactResource, ContactResourceDict
from .cover import Cover, CoverDict
from .custom_donate_text import CustomDonateText, CustomDonateTextDict
from .custom_donation_amounts import CustomDonationAmounts, CustomDonationAmountsDict
from .custom_fee_text import CustomFeeText, CustomFeeTextDict
from .custom_field_response_resource import CustomFieldResponseResource, CustomFieldResponseResourceDict
from .custom_flow_heading import CustomFlowHeading, CustomFlowHeadingDict
from .custom_join_text import CustomJoinText, CustomJoinTextDict
from .custom_team_leaderboard_heading import CustomTeamLeaderboardHeading, CustomTeamLeaderboardHeadingDict
from .custom_team_members_heading import CustomTeamMembersHeading, CustomTeamMembersHeadingDict
from .dedication import Dedication, DedicationDict
from .dedication_resource import DedicationResource, DedicationResourceDict
from .default_frequency import DefaultFrequency, DefaultFrequencyDict
from .default_fund import DefaultFund, DefaultFundDict
from .disable_company_field import DisableCompanyField, DisableCompanyFieldDict
from .disable_dedications import DisableDedications, DisableDedicationsDict
from .disable_donations import DisableDonations, DisableDonationsDict
from .disable_embed_branding import DisableEmbedBranding, DisableEmbedBrandingDict
from .disable_public_join import DisablePublicJoin, DisablePublicJoinDict
from .disable_public_join_button import DisablePublicJoinButton, DisablePublicJoinButtonDict
from .disable_recurring import DisableRecurring, DisableRecurringDict
from .disable_team_fundraising import DisableTeamFundraising, DisableTeamFundraisingDict
from .disallow_new_teams import DisallowNewTeams, DisallowNewTeamsDict
from .display_frequencies import DisplayFrequencies, DisplayFrequenciesDict
from .email import Email, EmailDict
from .email_resource import EmailResource, EmailResourceDict
from .enable_event_reminders import EnableEventReminders, EnableEventRemindersDict
from .enable_registration_fundraising import EnableRegistrationFundraising, EnableRegistrationFundraisingDict
from .enforce_end_at import EnforceEndAt, EnforceEndAtDict
from .error import Error, ErrorDict
from .event_resource import EventResource, EventResourceDict
from .external_id_resource import ExternalIdResource, ExternalIdResourceDict
from .force_fee_collection import ForceFeeCollection, ForceFeeCollectionDict
from .fund_resource import FundResource, FundResourceDict
from .fund_sort_by import FundSortBy, FundSortByDict
from .giving_space_resource import GivingSpaceResource, GivingSpaceResourceDict
from .hide_auction_components import HideAuctionComponents, HideAuctionComponentsDict
from .hide_contact_information import HideContactInformation, HideContactInformationDict
from .hide_fee_collection import HideFeeCollection, HideFeeCollectionDict
from .hide_fund import HideFund, HideFundDict
from .hide_member_raised import HideMemberRaised, HideMemberRaisedDict
from .hide_money_raised import HideMoneyRaised, HideMoneyRaisedDict
from .hide_other_option import HideOtherOption, HideOtherOptionDict
from .hide_supporter_feed import HideSupporterFeed, HideSupporterFeedDict
from .hide_team_raised import HideTeamRaised, HideTeamRaisedDict
from .hide_time_remaining import HideTimeRemaining, HideTimeRemainingDict
from .household_resource import HouseholdResource, HouseholdResourceDict
from .household_store_request import HouseholdStoreRequest, HouseholdStoreRequestDict
from .household_update_request import HouseholdUpdateRequest, HouseholdUpdateRequestDict
from .links import Links, LinksDict
from .links1 import Links1, Links1Dict
from .message_resource import MessageResource, MessageResourceDict
from .meta import Meta, MetaDict
from .meta_givebutter_api_documentation_campaigns_api import (
    MetaGivebutterApiDocumentationCampaignsApi,
    MetaGivebutterApiDocumentationCampaignsApiDict,
)
from .meta_givebutter_api_documentation_transactions_api import (
    MetaGivebutterApiDocumentationTransactionsApi,
    MetaGivebutterApiDocumentationTransactionsApiDict,
)
from .meta_image_alt_text import MetaImageAltText, MetaImageAltTextDict
from .minimum_donation import MinimumDonation, MinimumDonationDict
from .model_not_found_exception import ModelNotFoundException, ModelNotFoundExceptionDict
from .model_not_found_exception1 import ModelNotFoundException1, ModelNotFoundException1Dict
from .multi_team_fundraising import MultiTeamFundraising, MultiTeamFundraisingDict
from .multi_team_fundraising_limit import MultiTeamFundraisingLimit, MultiTeamFundraisingLimitDict
from .not_found_http_exception import NotFoundHttpException, NotFoundHttpExceptionDict
from .not_found_http_exception1 import NotFoundHttpException1, NotFoundHttpException1Dict
from .payout_resource import PayoutResource, PayoutResourceDict
from .phone import Phone, PhoneDict
from .phone_resource import PhoneResource, PhoneResourceDict
from .pledge_resource import PledgeResource, PledgeResourceDict
from .point_of_contact_resource import PointOfContactResource, PointOfContactResourceDict
from .public_check_payments import PublicCheckPayments, PublicCheckPaymentsDict
from .public_user_resource import PublicUserResource, PublicUserResourceDict
from .recipient import Recipient, RecipientDict
from .recurring_plan_resource import RecurringPlanResource, RecurringPlanResourceDict
from .recurring_upsell import RecurringUpsell, RecurringUpsellDict
from .registration_thank_you_message import RegistrationThankYouMessage, RegistrationThankYouMessageDict
from .remove_tips_increase_fee import RemoveTipsIncreaseFee, RemoveTipsIncreaseFeeDict
from .require_address import RequireAddress, RequireAddressDict
from .require_donor_phone import RequireDonorPhone, RequireDonorPhoneDict
from .require_fund import RequireFund, RequireFundDict
from .require_team_for_members import RequireTeamForMembers, RequireTeamForMembersDict
from .require_ticket_phone import RequireTicketPhone, RequireTicketPhoneDict
from .resource import Resource, ResourceDict
from .show_countdown_clock import ShowCountdownClock, ShowCountdownClockDict
from .sso_account_resource import SsoAccountResource, SsoAccountResourceDict
from .stats import Stats, StatsDict
from .store_campaign_discount_code_request import StoreCampaignDiscountCodeRequest, StoreCampaignDiscountCodeRequestDict
from .store_campaign_item_ticket_request import StoreCampaignItemTicketRequest, StoreCampaignItemTicketRequestDict
from .store_campaign_request import StoreCampaignRequest, StoreCampaignRequestDict
from .store_contact_activity_request import StoreContactActivityRequest, StoreContactActivityRequestDict
from .store_contact_request import StoreContactRequest, StoreContactRequestDict
from .store_transaction_request import StoreTransactionRequest, StoreTransactionRequestDict
from .suggested_amounts_mode import SuggestedAmountsMode, SuggestedAmountsModeDict
from .team_order import TeamOrder, TeamOrderDict
from .thank_you_message import ThankYouMessage, ThankYouMessageDict
from .theme_color import ThemeColor, ThemeColorDict
from .ticket_resource import TicketResource, TicketResourceDict
from .transaction_line_item_resource import TransactionLineItemResource, TransactionLineItemResourceDict
from .transaction_resource import TransactionResource, TransactionResourceDict
from .transaction_resource1 import TransactionResource1, TransactionResource1Dict
from .unions import Resource1, Resource1Dict, Setting, SettingDict, TransactionResource2, TransactionResource2Dict
from .update_campaign_discount_code_request import (
    UpdateCampaignDiscountCodeRequest,
    UpdateCampaignDiscountCodeRequestDict,
)
from .update_campaign_request import UpdateCampaignRequest, UpdateCampaignRequestDict
from .update_contact_request import UpdateContactRequest, UpdateContactRequestDict
from .update_transaction_request import UpdateTransactionRequest, UpdateTransactionRequestDict
from .use_actual_cover_size import UseActualCoverSize, UseActualCoverSizeDict
from .v1_campaigns409_error import V1Campaigns409Error, V1Campaigns409ErrorDict
from .v1_campaigns409_error1 import V1Campaigns409Error1, V1Campaigns409Error1Dict
from .v1_campaigns_discount_codes422_error import V1CampaignsDiscountCodes422Error, V1CampaignsDiscountCodes422ErrorDict
from .v1_campaigns_discount_codes422_error1 import (
    V1CampaignsDiscountCodes422Error1,
    V1CampaignsDiscountCodes422Error1Dict,
)
from .v1_campaigns_discount_codes_response import V1CampaignsDiscountCodesResponse, V1CampaignsDiscountCodesResponseDict
from .v1_campaigns_items_tickets_response import V1CampaignsItemsTicketsResponse, V1CampaignsItemsTicketsResponseDict
from .v1_campaigns_members_response import V1CampaignsMembersResponse, V1CampaignsMembersResponseDict
from .v1_campaigns_response import V1CampaignsResponse, V1CampaignsResponseDict
from .v1_campaigns_teams_response import V1CampaignsTeamsResponse, V1CampaignsTeamsResponseDict
from .v1_contacts_activities_response import V1ContactsActivitiesResponse, V1ContactsActivitiesResponseDict
from .v1_contacts_request import V1ContactsRequest, V1ContactsRequestDict
from .v1_contacts_response import V1ContactsResponse, V1ContactsResponseDict
from .v1_contacts_tags_add_request import V1ContactsTagsAddRequest, V1ContactsTagsAddRequestDict
from .v1_contacts_tags_remove_request import V1ContactsTagsRemoveRequest, V1ContactsTagsRemoveRequestDict
from .v1_contacts_tags_sync_request import V1ContactsTagsSyncRequest, V1ContactsTagsSyncRequestDict
from .v1_funds_request import V1FundsRequest, V1FundsRequestDict
from .v1_funds_response import V1FundsResponse, V1FundsResponseDict
from .v1_households_contacts_request import V1HouseholdsContactsRequest, V1HouseholdsContactsRequestDict
from .v1_households_contacts_response import V1HouseholdsContactsResponse, V1HouseholdsContactsResponseDict
from .v1_messages_response import V1MessagesResponse, V1MessagesResponseDict
from .v1_payouts_response import V1PayoutsResponse, V1PayoutsResponseDict
from .v1_plans_response import V1PlansResponse, V1PlansResponseDict
from .v1_pledges_response import V1PledgesResponse, V1PledgesResponseDict
from .v1_tickets_response import V1TicketsResponse, V1TicketsResponseDict
from .v1_transactions_response import V1TransactionsResponse, V1TransactionsResponseDict
from .v1_webhooks_activities_response import V1WebhooksActivitiesResponse, V1WebhooksActivitiesResponseDict
from .v1_webhooks_request import V1WebhooksRequest, V1WebhooksRequestDict
from .v1_webhooks_request1 import V1WebhooksRequest1, V1WebhooksRequest1Dict
from .v1_webhooks_response import V1WebhooksResponse, V1WebhooksResponseDict
from .validation_exception import ValidationException, ValidationExceptionDict
from .validation_exception1 import ValidationException1, ValidationException1Dict
from .webhook_activity_resource import WebhookActivityResource, WebhookActivityResourceDict
from .webhook_resource import WebhookResource, WebhookResourceDict

__all__ = [
    "enums",
    "unions",
    "Address",
    "Address1",
    "Address1Dict",
    "AddressDict",
    "AddressResource",
    "AddressResourceDict",
    "AppHttpResourcesApiAddressResource",
    "AppHttpResourcesApiAddressResourceDict",
    "AppHttpResourcesApiHouseholdResource",
    "AppHttpResourcesApiHouseholdResourceDict",
    "AssociatedCompanyResource",
    "AssociatedCompanyResourceDict",
    "AuctionTabText",
    "AuctionTabTextDict",
    "AuthenticationException",
    "AuthenticationException1",
    "AuthenticationException1Dict",
    "AuthenticationExceptionDict",
    "AuthorizationException",
    "AuthorizationException1",
    "AuthorizationException1Dict",
    "AuthorizationExceptionDict",
    "CampaignDiscountCodeResource",
    "CampaignDiscountCodeResourceDict",
    "CampaignItemTicketResource",
    "CampaignItemTicketResourceDict",
    "CampaignMemberResource",
    "CampaignMemberResourceDict",
    "CampaignResource",
    "CampaignResourceDict",
    "CampaignSettingResource",
    "CampaignSettingResourceDict",
    "CampaignTeamResource",
    "CampaignTeamResourceDict",
    "Contact",
    "ContactActivityResource",
    "ContactActivityResourceDict",
    "ContactDict",
    "ContactResource",
    "ContactResourceDict",
    "Cover",
    "CoverDict",
    "CustomDonateText",
    "CustomDonateTextDict",
    "CustomDonationAmounts",
    "CustomDonationAmountsDict",
    "CustomFeeText",
    "CustomFeeTextDict",
    "CustomFieldResponseResource",
    "CustomFieldResponseResourceDict",
    "CustomFlowHeading",
    "CustomFlowHeadingDict",
    "CustomJoinText",
    "CustomJoinTextDict",
    "CustomTeamLeaderboardHeading",
    "CustomTeamLeaderboardHeadingDict",
    "CustomTeamMembersHeading",
    "CustomTeamMembersHeadingDict",
    "Dedication",
    "DedicationDict",
    "DedicationResource",
    "DedicationResourceDict",
    "DefaultFrequency",
    "DefaultFrequencyDict",
    "DefaultFund",
    "DefaultFundDict",
    "DisableCompanyField",
    "DisableCompanyFieldDict",
    "DisableDedications",
    "DisableDedicationsDict",
    "DisableDonations",
    "DisableDonationsDict",
    "DisableEmbedBranding",
    "DisableEmbedBrandingDict",
    "DisablePublicJoin",
    "DisablePublicJoinButton",
    "DisablePublicJoinButtonDict",
    "DisablePublicJoinDict",
    "DisableRecurring",
    "DisableRecurringDict",
    "DisableTeamFundraising",
    "DisableTeamFundraisingDict",
    "DisallowNewTeams",
    "DisallowNewTeamsDict",
    "DisplayFrequencies",
    "DisplayFrequenciesDict",
    "Email",
    "EmailDict",
    "EmailResource",
    "EmailResourceDict",
    "EnableEventReminders",
    "EnableEventRemindersDict",
    "EnableRegistrationFundraising",
    "EnableRegistrationFundraisingDict",
    "EnforceEndAt",
    "EnforceEndAtDict",
    "Error",
    "ErrorDict",
    "EventResource",
    "EventResourceDict",
    "ExternalIdResource",
    "ExternalIdResourceDict",
    "ForceFeeCollection",
    "ForceFeeCollectionDict",
    "FundResource",
    "FundResourceDict",
    "FundSortBy",
    "FundSortByDict",
    "GivingSpaceResource",
    "GivingSpaceResourceDict",
    "HideAuctionComponents",
    "HideAuctionComponentsDict",
    "HideContactInformation",
    "HideContactInformationDict",
    "HideFeeCollection",
    "HideFeeCollectionDict",
    "HideFund",
    "HideFundDict",
    "HideMemberRaised",
    "HideMemberRaisedDict",
    "HideMoneyRaised",
    "HideMoneyRaisedDict",
    "HideOtherOption",
    "HideOtherOptionDict",
    "HideSupporterFeed",
    "HideSupporterFeedDict",
    "HideTeamRaised",
    "HideTeamRaisedDict",
    "HideTimeRemaining",
    "HideTimeRemainingDict",
    "HouseholdResource",
    "HouseholdResourceDict",
    "HouseholdStoreRequest",
    "HouseholdStoreRequestDict",
    "HouseholdUpdateRequest",
    "HouseholdUpdateRequestDict",
    "Links",
    "Links1",
    "Links1Dict",
    "LinksDict",
    "MessageResource",
    "MessageResourceDict",
    "Meta",
    "MetaDict",
    "MetaGivebutterApiDocumentationCampaignsApi",
    "MetaGivebutterApiDocumentationCampaignsApiDict",
    "MetaGivebutterApiDocumentationTransactionsApi",
    "MetaGivebutterApiDocumentationTransactionsApiDict",
    "MetaImageAltText",
    "MetaImageAltTextDict",
    "MinimumDonation",
    "MinimumDonationDict",
    "ModelNotFoundException",
    "ModelNotFoundException1",
    "ModelNotFoundException1Dict",
    "ModelNotFoundExceptionDict",
    "MultiTeamFundraising",
    "MultiTeamFundraisingDict",
    "MultiTeamFundraisingLimit",
    "MultiTeamFundraisingLimitDict",
    "NotFoundHttpException",
    "NotFoundHttpException1",
    "NotFoundHttpException1Dict",
    "NotFoundHttpExceptionDict",
    "PayoutResource",
    "PayoutResourceDict",
    "Phone",
    "PhoneDict",
    "PhoneResource",
    "PhoneResourceDict",
    "PledgeResource",
    "PledgeResourceDict",
    "PointOfContactResource",
    "PointOfContactResourceDict",
    "PublicCheckPayments",
    "PublicCheckPaymentsDict",
    "PublicUserResource",
    "PublicUserResourceDict",
    "Recipient",
    "RecipientDict",
    "RecurringPlanResource",
    "RecurringPlanResourceDict",
    "RecurringUpsell",
    "RecurringUpsellDict",
    "RegistrationThankYouMessage",
    "RegistrationThankYouMessageDict",
    "RemoveTipsIncreaseFee",
    "RemoveTipsIncreaseFeeDict",
    "RequireAddress",
    "RequireAddressDict",
    "RequireDonorPhone",
    "RequireDonorPhoneDict",
    "RequireFund",
    "RequireFundDict",
    "RequireTeamForMembers",
    "RequireTeamForMembersDict",
    "RequireTicketPhone",
    "RequireTicketPhoneDict",
    "Resource",
    "Resource1",
    "Resource1Dict",
    "ResourceDict",
    "Setting",
    "SettingDict",
    "ShowCountdownClock",
    "ShowCountdownClockDict",
    "SsoAccountResource",
    "SsoAccountResourceDict",
    "Stats",
    "StatsDict",
    "StoreCampaignDiscountCodeRequest",
    "StoreCampaignDiscountCodeRequestDict",
    "StoreCampaignItemTicketRequest",
    "StoreCampaignItemTicketRequestDict",
    "StoreCampaignRequest",
    "StoreCampaignRequestDict",
    "StoreContactActivityRequest",
    "StoreContactActivityRequestDict",
    "StoreContactRequest",
    "StoreContactRequestDict",
    "StoreTransactionRequest",
    "StoreTransactionRequestDict",
    "SuggestedAmountsMode",
    "SuggestedAmountsModeDict",
    "TeamOrder",
    "TeamOrderDict",
    "ThankYouMessage",
    "ThankYouMessageDict",
    "ThemeColor",
    "ThemeColorDict",
    "TicketResource",
    "TicketResourceDict",
    "TransactionLineItemResource",
    "TransactionLineItemResourceDict",
    "TransactionResource",
    "TransactionResource1",
    "TransactionResource1Dict",
    "TransactionResource2",
    "TransactionResource2Dict",
    "TransactionResourceDict",
    "UpdateCampaignDiscountCodeRequest",
    "UpdateCampaignDiscountCodeRequestDict",
    "UpdateCampaignRequest",
    "UpdateCampaignRequestDict",
    "UpdateContactRequest",
    "UpdateContactRequestDict",
    "UpdateTransactionRequest",
    "UpdateTransactionRequestDict",
    "UseActualCoverSize",
    "UseActualCoverSizeDict",
    "V1Campaigns409Error",
    "V1Campaigns409Error1",
    "V1Campaigns409Error1Dict",
    "V1Campaigns409ErrorDict",
    "V1CampaignsDiscountCodes422Error",
    "V1CampaignsDiscountCodes422Error1",
    "V1CampaignsDiscountCodes422Error1Dict",
    "V1CampaignsDiscountCodes422ErrorDict",
    "V1CampaignsDiscountCodesResponse",
    "V1CampaignsDiscountCodesResponseDict",
    "V1CampaignsItemsTicketsResponse",
    "V1CampaignsItemsTicketsResponseDict",
    "V1CampaignsMembersResponse",
    "V1CampaignsMembersResponseDict",
    "V1CampaignsResponse",
    "V1CampaignsResponseDict",
    "V1CampaignsTeamsResponse",
    "V1CampaignsTeamsResponseDict",
    "V1ContactsActivitiesResponse",
    "V1ContactsActivitiesResponseDict",
    "V1ContactsRequest",
    "V1ContactsRequestDict",
    "V1ContactsResponse",
    "V1ContactsResponseDict",
    "V1ContactsTagsAddRequest",
    "V1ContactsTagsAddRequestDict",
    "V1ContactsTagsRemoveRequest",
    "V1ContactsTagsRemoveRequestDict",
    "V1ContactsTagsSyncRequest",
    "V1ContactsTagsSyncRequestDict",
    "V1FundsRequest",
    "V1FundsRequestDict",
    "V1FundsResponse",
    "V1FundsResponseDict",
    "V1HouseholdsContactsRequest",
    "V1HouseholdsContactsRequestDict",
    "V1HouseholdsContactsResponse",
    "V1HouseholdsContactsResponseDict",
    "V1MessagesResponse",
    "V1MessagesResponseDict",
    "V1PayoutsResponse",
    "V1PayoutsResponseDict",
    "V1PlansResponse",
    "V1PlansResponseDict",
    "V1PledgesResponse",
    "V1PledgesResponseDict",
    "V1TicketsResponse",
    "V1TicketsResponseDict",
    "V1TransactionsResponse",
    "V1TransactionsResponseDict",
    "V1WebhooksActivitiesResponse",
    "V1WebhooksActivitiesResponseDict",
    "V1WebhooksRequest",
    "V1WebhooksRequest1",
    "V1WebhooksRequest1Dict",
    "V1WebhooksRequestDict",
    "V1WebhooksResponse",
    "V1WebhooksResponseDict",
    "ValidationException",
    "ValidationException1",
    "ValidationException1Dict",
    "ValidationExceptionDict",
    "WebhookActivityResource",
    "WebhookActivityResourceDict",
    "WebhookResource",
    "WebhookResourceDict",
]
