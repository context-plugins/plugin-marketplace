import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { auctionTabTextSchema, type AuctionTabText } from "../auction-tab-text.js";
import {
  customDonateTextInternalSchema,
  customDonateTextSchema,
  type CustomDonateText,
} from "../custom-donate-text.js";
import { customDonationAmountsSchema, type CustomDonationAmounts } from "../custom-donation-amounts.js";
import { customFeeTextSchema, type CustomFeeText } from "../custom-fee-text.js";
import { customFlowHeadingSchema, type CustomFlowHeading } from "../custom-flow-heading.js";
import {
  customJoinTextInternalSchema,
  customJoinTextSchema,
  type CustomJoinText,
} from "../custom-join-text.js";
import {
  customTeamLeaderboardHeadingSchema,
  type CustomTeamLeaderboardHeading,
} from "../custom-team-leaderboard-heading.js";
import {
  customTeamMembersHeadingSchema,
  type CustomTeamMembersHeading,
} from "../custom-team-members-heading.js";
import { defaultFrequencySchema, type DefaultFrequency } from "../default-frequency.js";
import { defaultFundSchema, type DefaultFund } from "../default-fund.js";
import { disableCompanyFieldSchema, type DisableCompanyField } from "../disable-company-field.js";
import { disableDedicationsSchema, type DisableDedications } from "../disable-dedications.js";
import { disableDonationsSchema, type DisableDonations } from "../disable-donations.js";
import { disableEmbedBrandingSchema, type DisableEmbedBranding } from "../disable-embed-branding.js";
import {
  disablePublicJoinButtonSchema,
  type DisablePublicJoinButton,
} from "../disable-public-join-button.js";
import { disablePublicJoinSchema, type DisablePublicJoin } from "../disable-public-join.js";
import { disableRecurringSchema, type DisableRecurring } from "../disable-recurring.js";
import { disableTeamFundraisingSchema, type DisableTeamFundraising } from "../disable-team-fundraising.js";
import { disallowNewTeamsSchema, type DisallowNewTeams } from "../disallow-new-teams.js";
import { displayFrequenciesSchema, type DisplayFrequencies } from "../display-frequencies.js";
import { enableEventRemindersSchema, type EnableEventReminders } from "../enable-event-reminders.js";
import {
  enableRegistrationFundraisingSchema,
  type EnableRegistrationFundraising,
} from "../enable-registration-fundraising.js";
import { enforceEndAtSchema, type EnforceEndAt } from "../enforce-end-at.js";
import { forceFeeCollectionSchema, type ForceFeeCollection } from "../force-fee-collection.js";
import { fundSortBySchema, type FundSortBy } from "../fund-sort-by.js";
import { hideAuctionComponentsSchema, type HideAuctionComponents } from "../hide-auction-components.js";
import { hideContactInformationSchema, type HideContactInformation } from "../hide-contact-information.js";
import { hideFeeCollectionSchema, type HideFeeCollection } from "../hide-fee-collection.js";
import { hideFundSchema, type HideFund } from "../hide-fund.js";
import { hideMemberRaisedSchema, type HideMemberRaised } from "../hide-member-raised.js";
import { hideMoneyRaisedSchema, type HideMoneyRaised } from "../hide-money-raised.js";
import { hideOtherOptionSchema, type HideOtherOption } from "../hide-other-option.js";
import { hideSupporterFeedSchema, type HideSupporterFeed } from "../hide-supporter-feed.js";
import { hideTeamRaisedSchema, type HideTeamRaised } from "../hide-team-raised.js";
import { hideTimeRemainingSchema, type HideTimeRemaining } from "../hide-time-remaining.js";
import { metaImageAltTextSchema, type MetaImageAltText } from "../meta-image-alt-text.js";
import { minimumDonationSchema, type MinimumDonation } from "../minimum-donation.js";
import {
  multiTeamFundraisingLimitSchema,
  type MultiTeamFundraisingLimit,
} from "../multi-team-fundraising-limit.js";
import { multiTeamFundraisingSchema, type MultiTeamFundraising } from "../multi-team-fundraising.js";
import {
  publicCheckPaymentsInternalSchema,
  publicCheckPaymentsSchema,
  type PublicCheckPayments,
} from "../public-check-payments.js";
import { recurringUpsellSchema, type RecurringUpsell } from "../recurring-upsell.js";
import {
  registrationThankYouMessageSchema,
  type RegistrationThankYouMessage,
} from "../registration-thank-you-message.js";
import { removeTipsIncreaseFeeSchema, type RemoveTipsIncreaseFee } from "../remove-tips-increase-fee.js";
import { requireAddressSchema, type RequireAddress } from "../require-address.js";
import { requireDonorPhoneSchema, type RequireDonorPhone } from "../require-donor-phone.js";
import { requireFundSchema, type RequireFund } from "../require-fund.js";
import { requireTeamForMembersSchema, type RequireTeamForMembers } from "../require-team-for-members.js";
import { requireTicketPhoneSchema, type RequireTicketPhone } from "../require-ticket-phone.js";
import { showCountdownClockSchema, type ShowCountdownClock } from "../show-countdown-clock.js";
import { suggestedAmountsModeSchema, type SuggestedAmountsMode } from "../suggested-amounts-mode.js";
import { teamOrderSchema, type TeamOrder } from "../team-order.js";
import { thankYouMessageSchema, type ThankYouMessage } from "../thank-you-message.js";
import { themeColorInternalSchema, themeColorSchema, type ThemeColor } from "../theme-color.js";
import { useActualCoverSizeSchema, type UseActualCoverSize } from "../use-actual-cover-size.js";

/** A campaign setting. The `name` field determines the expected shape of `value`. */
export type Setting =
  | HideTimeRemaining
  | ShowCountdownClock
  | HideMoneyRaised
  | ThemeColor
  | UseActualCoverSize
  | DisableEmbedBranding
  | CustomDonateText
  | HideSupporterFeed
  | AuctionTabText
  | HideAuctionComponents
  | HideContactInformation
  | MetaImageAltText
  | DisableDonations
  | MinimumDonation
  | RequireDonorPhone
  | EnforceEndAt
  | DisableRecurring
  | ThankYouMessage
  | DefaultFund
  | HideFund
  | RequireAddress
  | DefaultFrequency
  | DisplayFrequencies
  | PublicCheckPayments
  | RecurringUpsell
  | DisableCompanyField
  | HideFeeCollection
  | ForceFeeCollection
  | CustomDonationAmounts
  | DisableDedications
  | HideOtherOption
  | RemoveTipsIncreaseFee
  | CustomFeeText
  | CustomFlowHeading
  | FundSortBy
  | RequireFund
  | SuggestedAmountsMode
  | DisableTeamFundraising
  | DisablePublicJoin
  | DisablePublicJoinButton
  | CustomTeamMembersHeading
  | CustomJoinText
  | DisallowNewTeams
  | HideMemberRaised
  | CustomTeamLeaderboardHeading
  | EnableRegistrationFundraising
  | RegistrationThankYouMessage
  | MultiTeamFundraising
  | MultiTeamFundraisingLimit
  | HideTeamRaised
  | RequireTeamForMembers
  | TeamOrder
  | RequireTicketPhone
  | EnableEventReminders;

export const settingInternalSchema: Schema<Setting> = s.of<Setting>(
  s.union([
    s.lazy(() => hideTimeRemainingSchema),
    s.lazy(() => showCountdownClockSchema),
    s.lazy(() => hideMoneyRaisedSchema),
    s.lazy(() => themeColorInternalSchema),
    s.lazy(() => useActualCoverSizeSchema),
    s.lazy(() => disableEmbedBrandingSchema),
    s.lazy(() => customDonateTextInternalSchema),
    s.lazy(() => hideSupporterFeedSchema),
    s.lazy(() => auctionTabTextSchema),
    s.lazy(() => hideAuctionComponentsSchema),
    s.lazy(() => hideContactInformationSchema),
    s.lazy(() => metaImageAltTextSchema),
    s.lazy(() => disableDonationsSchema),
    s.lazy(() => minimumDonationSchema),
    s.lazy(() => requireDonorPhoneSchema),
    s.lazy(() => enforceEndAtSchema),
    s.lazy(() => disableRecurringSchema),
    s.lazy(() => thankYouMessageSchema),
    s.lazy(() => defaultFundSchema),
    s.lazy(() => hideFundSchema),
    s.lazy(() => requireAddressSchema),
    s.lazy(() => defaultFrequencySchema),
    s.lazy(() => displayFrequenciesSchema),
    s.lazy(() => publicCheckPaymentsInternalSchema),
    s.lazy(() => recurringUpsellSchema),
    s.lazy(() => disableCompanyFieldSchema),
    s.lazy(() => hideFeeCollectionSchema),
    s.lazy(() => forceFeeCollectionSchema),
    s.lazy(() => customDonationAmountsSchema),
    s.lazy(() => disableDedicationsSchema),
    s.lazy(() => hideOtherOptionSchema),
    s.lazy(() => removeTipsIncreaseFeeSchema),
    s.lazy(() => customFeeTextSchema),
    s.lazy(() => customFlowHeadingSchema),
    s.lazy(() => fundSortBySchema),
    s.lazy(() => requireFundSchema),
    s.lazy(() => suggestedAmountsModeSchema),
    s.lazy(() => disableTeamFundraisingSchema),
    s.lazy(() => disablePublicJoinSchema),
    s.lazy(() => disablePublicJoinButtonSchema),
    s.lazy(() => customTeamMembersHeadingSchema),
    s.lazy(() => customJoinTextInternalSchema),
    s.lazy(() => disallowNewTeamsSchema),
    s.lazy(() => hideMemberRaisedSchema),
    s.lazy(() => customTeamLeaderboardHeadingSchema),
    s.lazy(() => enableRegistrationFundraisingSchema),
    s.lazy(() => registrationThankYouMessageSchema),
    s.lazy(() => multiTeamFundraisingSchema),
    s.lazy(() => multiTeamFundraisingLimitSchema),
    s.lazy(() => hideTeamRaisedSchema),
    s.lazy(() => requireTeamForMembersSchema),
    s.lazy(() => teamOrderSchema),
    s.lazy(() => requireTicketPhoneSchema),
    s.lazy(() => enableEventRemindersSchema),
  ]),
);

export const settingSchema: Schema<Setting> = s.lazySchema(() =>
  s.of<Setting>(
    s.union([
      s.lazy(() => hideTimeRemainingSchema),
      s.lazy(() => showCountdownClockSchema),
      s.lazy(() => hideMoneyRaisedSchema),
      s.lazy(() => themeColorSchema),
      s.lazy(() => useActualCoverSizeSchema),
      s.lazy(() => disableEmbedBrandingSchema),
      s.lazy(() => customDonateTextSchema),
      s.lazy(() => hideSupporterFeedSchema),
      s.lazy(() => auctionTabTextSchema),
      s.lazy(() => hideAuctionComponentsSchema),
      s.lazy(() => hideContactInformationSchema),
      s.lazy(() => metaImageAltTextSchema),
      s.lazy(() => disableDonationsSchema),
      s.lazy(() => minimumDonationSchema),
      s.lazy(() => requireDonorPhoneSchema),
      s.lazy(() => enforceEndAtSchema),
      s.lazy(() => disableRecurringSchema),
      s.lazy(() => thankYouMessageSchema),
      s.lazy(() => defaultFundSchema),
      s.lazy(() => hideFundSchema),
      s.lazy(() => requireAddressSchema),
      s.lazy(() => defaultFrequencySchema),
      s.lazy(() => displayFrequenciesSchema),
      s.lazy(() => publicCheckPaymentsSchema),
      s.lazy(() => recurringUpsellSchema),
      s.lazy(() => disableCompanyFieldSchema),
      s.lazy(() => hideFeeCollectionSchema),
      s.lazy(() => forceFeeCollectionSchema),
      s.lazy(() => customDonationAmountsSchema),
      s.lazy(() => disableDedicationsSchema),
      s.lazy(() => hideOtherOptionSchema),
      s.lazy(() => removeTipsIncreaseFeeSchema),
      s.lazy(() => customFeeTextSchema),
      s.lazy(() => customFlowHeadingSchema),
      s.lazy(() => fundSortBySchema),
      s.lazy(() => requireFundSchema),
      s.lazy(() => suggestedAmountsModeSchema),
      s.lazy(() => disableTeamFundraisingSchema),
      s.lazy(() => disablePublicJoinSchema),
      s.lazy(() => disablePublicJoinButtonSchema),
      s.lazy(() => customTeamMembersHeadingSchema),
      s.lazy(() => customJoinTextSchema),
      s.lazy(() => disallowNewTeamsSchema),
      s.lazy(() => hideMemberRaisedSchema),
      s.lazy(() => customTeamLeaderboardHeadingSchema),
      s.lazy(() => enableRegistrationFundraisingSchema),
      s.lazy(() => registrationThankYouMessageSchema),
      s.lazy(() => multiTeamFundraisingSchema),
      s.lazy(() => multiTeamFundraisingLimitSchema),
      s.lazy(() => hideTeamRaisedSchema),
      s.lazy(() => requireTeamForMembersSchema),
      s.lazy(() => teamOrderSchema),
      s.lazy(() => requireTicketPhoneSchema),
      s.lazy(() => enableEventRemindersSchema),
    ]),
  ),
);
