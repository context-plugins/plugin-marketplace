from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..auction_tab_text import AuctionTabText, AuctionTabTextDict
from ..custom_donate_text import CustomDonateText, CustomDonateTextDict
from ..custom_donation_amounts import CustomDonationAmounts, CustomDonationAmountsDict
from ..custom_fee_text import CustomFeeText, CustomFeeTextDict
from ..custom_flow_heading import CustomFlowHeading, CustomFlowHeadingDict
from ..custom_join_text import CustomJoinText, CustomJoinTextDict
from ..custom_team_leaderboard_heading import CustomTeamLeaderboardHeading, CustomTeamLeaderboardHeadingDict
from ..custom_team_members_heading import CustomTeamMembersHeading, CustomTeamMembersHeadingDict
from ..default_frequency import DefaultFrequency, DefaultFrequencyDict
from ..default_fund import DefaultFund, DefaultFundDict
from ..disable_company_field import DisableCompanyField, DisableCompanyFieldDict
from ..disable_dedications import DisableDedications, DisableDedicationsDict
from ..disable_donations import DisableDonations, DisableDonationsDict
from ..disable_embed_branding import DisableEmbedBranding, DisableEmbedBrandingDict
from ..disable_public_join import DisablePublicJoin, DisablePublicJoinDict
from ..disable_public_join_button import DisablePublicJoinButton, DisablePublicJoinButtonDict
from ..disable_recurring import DisableRecurring, DisableRecurringDict
from ..disable_team_fundraising import DisableTeamFundraising, DisableTeamFundraisingDict
from ..disallow_new_teams import DisallowNewTeams, DisallowNewTeamsDict
from ..display_frequencies import DisplayFrequencies, DisplayFrequenciesDict
from ..enable_event_reminders import EnableEventReminders, EnableEventRemindersDict
from ..enable_registration_fundraising import EnableRegistrationFundraising, EnableRegistrationFundraisingDict
from ..enforce_end_at import EnforceEndAt, EnforceEndAtDict
from ..force_fee_collection import ForceFeeCollection, ForceFeeCollectionDict
from ..fund_sort_by import FundSortBy, FundSortByDict
from ..hide_auction_components import HideAuctionComponents, HideAuctionComponentsDict
from ..hide_contact_information import HideContactInformation, HideContactInformationDict
from ..hide_fee_collection import HideFeeCollection, HideFeeCollectionDict
from ..hide_fund import HideFund, HideFundDict
from ..hide_member_raised import HideMemberRaised, HideMemberRaisedDict
from ..hide_money_raised import HideMoneyRaised, HideMoneyRaisedDict
from ..hide_other_option import HideOtherOption, HideOtherOptionDict
from ..hide_supporter_feed import HideSupporterFeed, HideSupporterFeedDict
from ..hide_team_raised import HideTeamRaised, HideTeamRaisedDict
from ..hide_time_remaining import HideTimeRemaining, HideTimeRemainingDict
from ..meta_image_alt_text import MetaImageAltText, MetaImageAltTextDict
from ..minimum_donation import MinimumDonation, MinimumDonationDict
from ..multi_team_fundraising import MultiTeamFundraising, MultiTeamFundraisingDict
from ..multi_team_fundraising_limit import MultiTeamFundraisingLimit, MultiTeamFundraisingLimitDict
from ..public_check_payments import PublicCheckPayments, PublicCheckPaymentsDict
from ..recurring_upsell import RecurringUpsell, RecurringUpsellDict
from ..registration_thank_you_message import RegistrationThankYouMessage, RegistrationThankYouMessageDict
from ..remove_tips_increase_fee import RemoveTipsIncreaseFee, RemoveTipsIncreaseFeeDict
from ..require_address import RequireAddress, RequireAddressDict
from ..require_donor_phone import RequireDonorPhone, RequireDonorPhoneDict
from ..require_fund import RequireFund, RequireFundDict
from ..require_team_for_members import RequireTeamForMembers, RequireTeamForMembersDict
from ..require_ticket_phone import RequireTicketPhone, RequireTicketPhoneDict
from ..show_countdown_clock import ShowCountdownClock, ShowCountdownClockDict
from ..suggested_amounts_mode import SuggestedAmountsMode, SuggestedAmountsModeDict
from ..team_order import TeamOrder, TeamOrderDict
from ..thank_you_message import ThankYouMessage, ThankYouMessageDict
from ..theme_color import ThemeColor, ThemeColorDict
from ..use_actual_cover_size import UseActualCoverSize, UseActualCoverSizeDict

Setting: TypeAlias = Annotated[
    (
        Annotated[HideTimeRemaining, Tag("hide_time_remaining")]
        | Annotated[ShowCountdownClock, Tag("show_countdown_clock")]
        | Annotated[HideMoneyRaised, Tag("hide_money_raised")]
        | Annotated[ThemeColor, Tag("theme_color")]
        | Annotated[UseActualCoverSize, Tag("use_actual_cover_size")]
        | Annotated[DisableEmbedBranding, Tag("disable_embed_branding")]
        | Annotated[CustomDonateText, Tag("custom_donate_text")]
        | Annotated[HideSupporterFeed, Tag("hide_supporter_feed")]
        | Annotated[AuctionTabText, Tag("auction_tab_text")]
        | Annotated[HideAuctionComponents, Tag("hide_auction_components")]
        | Annotated[HideContactInformation, Tag("hide_contact_information")]
        | Annotated[MetaImageAltText, Tag("meta_image_alt_text")]
        | Annotated[DisableDonations, Tag("disable_donations")]
        | Annotated[MinimumDonation, Tag("minimum_donation")]
        | Annotated[RequireDonorPhone, Tag("require_donor_phone")]
        | Annotated[EnforceEndAt, Tag("enforce_end_at")]
        | Annotated[DisableRecurring, Tag("disable_recurring")]
        | Annotated[ThankYouMessage, Tag("thank_you_message")]
        | Annotated[DefaultFund, Tag("default_fund")]
        | Annotated[HideFund, Tag("hide_fund")]
        | Annotated[RequireAddress, Tag("require_address")]
        | Annotated[DefaultFrequency, Tag("default_frequency")]
        | Annotated[DisplayFrequencies, Tag("display_frequencies")]
        | Annotated[PublicCheckPayments, Tag("public_check_payments")]
        | Annotated[RecurringUpsell, Tag("recurring_upsell")]
        | Annotated[DisableCompanyField, Tag("disable_company_field")]
        | Annotated[HideFeeCollection, Tag("hide_fee_collection")]
        | Annotated[ForceFeeCollection, Tag("force_fee_collection")]
        | Annotated[CustomDonationAmounts, Tag("custom_donation_amounts")]
        | Annotated[DisableDedications, Tag("disable_dedications")]
        | Annotated[HideOtherOption, Tag("hide_other_option")]
        | Annotated[RemoveTipsIncreaseFee, Tag("remove_tips_increase_fee")]
        | Annotated[CustomFeeText, Tag("custom_fee_text")]
        | Annotated[CustomFlowHeading, Tag("custom_flow_heading")]
        | Annotated[FundSortBy, Tag("fund_sort_by")]
        | Annotated[RequireFund, Tag("require_fund")]
        | Annotated[SuggestedAmountsMode, Tag("suggested_amounts_mode")]
        | Annotated[DisableTeamFundraising, Tag("disable_team_fundraising")]
        | Annotated[DisablePublicJoin, Tag("disable_public_join")]
        | Annotated[DisablePublicJoinButton, Tag("disable_public_join_button")]
        | Annotated[CustomTeamMembersHeading, Tag("custom_team_members_heading")]
        | Annotated[CustomJoinText, Tag("custom_join_text")]
        | Annotated[DisallowNewTeams, Tag("disallow_new_teams")]
        | Annotated[HideMemberRaised, Tag("hide_member_raised")]
        | Annotated[CustomTeamLeaderboardHeading, Tag("custom_team_leaderboard_heading")]
        | Annotated[EnableRegistrationFundraising, Tag("enable_registration_fundraising")]
        | Annotated[RegistrationThankYouMessage, Tag("registration_thank_you_message")]
        | Annotated[MultiTeamFundraising, Tag("multi_team_fundraising")]
        | Annotated[MultiTeamFundraisingLimit, Tag("multi_team_fundraising_limit")]
        | Annotated[HideTeamRaised, Tag("hide_team_raised")]
        | Annotated[RequireTeamForMembers, Tag("require_team_for_members")]
        | Annotated[TeamOrder, Tag("team_order")]
        | Annotated[RequireTicketPhone, Tag("require_ticket_phone")]
        | Annotated[EnableEventReminders, Tag("enable_event_reminders")]
    ),
    WireDiscriminator("name"),
]
"""A campaign setting. The ``name`` field determines the expected shape of ``value``."""

SettingDict: TypeAlias = (
    HideTimeRemainingDict
    | ShowCountdownClockDict
    | HideMoneyRaisedDict
    | ThemeColorDict
    | UseActualCoverSizeDict
    | DisableEmbedBrandingDict
    | CustomDonateTextDict
    | HideSupporterFeedDict
    | AuctionTabTextDict
    | HideAuctionComponentsDict
    | HideContactInformationDict
    | MetaImageAltTextDict
    | DisableDonationsDict
    | MinimumDonationDict
    | RequireDonorPhoneDict
    | EnforceEndAtDict
    | DisableRecurringDict
    | ThankYouMessageDict
    | DefaultFundDict
    | HideFundDict
    | RequireAddressDict
    | DefaultFrequencyDict
    | DisplayFrequenciesDict
    | PublicCheckPaymentsDict
    | RecurringUpsellDict
    | DisableCompanyFieldDict
    | HideFeeCollectionDict
    | ForceFeeCollectionDict
    | CustomDonationAmountsDict
    | DisableDedicationsDict
    | HideOtherOptionDict
    | RemoveTipsIncreaseFeeDict
    | CustomFeeTextDict
    | CustomFlowHeadingDict
    | FundSortByDict
    | RequireFundDict
    | SuggestedAmountsModeDict
    | DisableTeamFundraisingDict
    | DisablePublicJoinDict
    | DisablePublicJoinButtonDict
    | CustomTeamMembersHeadingDict
    | CustomJoinTextDict
    | DisallowNewTeamsDict
    | HideMemberRaisedDict
    | CustomTeamLeaderboardHeadingDict
    | EnableRegistrationFundraisingDict
    | RegistrationThankYouMessageDict
    | MultiTeamFundraisingDict
    | MultiTeamFundraisingLimitDict
    | HideTeamRaisedDict
    | RequireTeamForMembersDict
    | TeamOrderDict
    | RequireTicketPhoneDict
    | EnableEventRemindersDict
)
