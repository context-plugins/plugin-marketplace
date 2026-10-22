import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  achAddendaEntriesNotEnabledForAccountErrorSchema,
  type AchAddendaEntriesNotEnabledForAccountError,
} from "../ach-addenda-entries-not-enabled-for-account-error.js";
import { cannotParseAmountErrorSchema, type CannotParseAmountError } from "../cannot-parse-amount-error.js";
import {
  cardSourceNotAllowedErrorSchema,
  type CardSourceNotAllowedError,
} from "../card-source-not-allowed-error.js";
import {
  depositAccountRestrictedErrorSchema,
  type DepositAccountRestrictedError,
} from "../deposit-account-restricted-error.js";
import {
  destinationAddendaMaxLengthErrorSchema,
  type DestinationAddendaMaxLengthError,
} from "../destination-addenda-max-length-error.js";
import {
  destinationProcessingChannelNotSupportedErrorSchema,
  type DestinationProcessingChannelNotSupportedError,
} from "../destination-processing-channel-not-supported-error.js";
import {
  destinationRemittanceDataMaxLengthErrorSchema,
  type DestinationRemittanceDataMaxLengthError,
} from "../destination-remittance-data-max-length-error.js";
import {
  directAccountWithoutBankErrorSchema,
  type DirectAccountWithoutBankError,
} from "../direct-account-without-bank-error.js";
import {
  facilitatorFeeAccountNotFoundErrorSchema,
  type FacilitatorFeeAccountNotFoundError,
} from "../facilitator-fee-account-not-found-error.js";
import {
  facilitatorFeeBelowMinimumErrorSchema,
  type FacilitatorFeeBelowMinimumError,
} from "../facilitator-fee-below-minimum-error.js";
import {
  facilitatorFeeSumTooLargeErrorSchema,
  type FacilitatorFeeSumTooLargeError,
} from "../facilitator-fee-sum-too-large-error.js";
import { highRiskErrorSchema, type HighRiskError } from "../high-risk-error.js";
import {
  incompatibleAddendaEntriesErrorSchema,
  type IncompatibleAddendaEntriesError,
} from "../incompatible-addenda-entries-error.js";
import {
  incompatibleHoldingsErrorSchema,
  type IncompatibleHoldingsError,
} from "../incompatible-holdings-error.js";
import {
  incompatibleSourceAndDestinationTypesErrorSchema,
  type IncompatibleSourceAndDestinationTypesError,
} from "../incompatible-source-and-destination-types-error.js";
import {
  incompatibleSourceForRtpDestinationErrorSchema,
  type IncompatibleSourceForRtpDestinationError,
} from "../incompatible-source-for-rtp-destination-error.js";
import { insufficientFundsErrorSchema, type InsufficientFundsError } from "../insufficient-funds-error.js";
import {
  invalidAmountForDestinationClearingTypeErrorSchema,
  type InvalidAmountForDestinationClearingTypeError,
} from "../invalid-amount-for-destination-clearing-type-error.js";
import {
  invalidAmountForDestinationProcessingChannelErrorSchema,
  type InvalidAmountForDestinationProcessingChannelError,
} from "../invalid-amount-for-destination-processing-channel-error.js";
import {
  invalidAmountLimitErrorSchema,
  type InvalidAmountLimitError,
} from "../invalid-amount-limit-error.js";
import {
  invalidBankAccountTypeErrorSchema,
  type InvalidBankAccountTypeError,
} from "../invalid-bank-account-type-error.js";
import {
  invalidCorrelationIdErrorSchema,
  type InvalidCorrelationIdError,
} from "../invalid-correlation-id-error.js";
import {
  invalidDestinationBankAccountTypeErrorSchema,
  type InvalidDestinationBankAccountTypeError,
} from "../invalid-destination-bank-account-type-error.js";
import {
  invalidDestinationClearingTypeErrorSchema,
  type InvalidDestinationClearingTypeError,
} from "../invalid-destination-clearing-type-error.js";
import {
  invalidDestinationFundingSourceErrorSchema,
  type InvalidDestinationFundingSourceError,
} from "../invalid-destination-funding-source-error.js";
import { invalidFacilitatorErrorSchema, type InvalidFacilitatorError } from "../invalid-facilitator-error.js";
import {
  invalidFacilitatorFeeAmountErrorSchema,
  type InvalidFacilitatorFeeAmountError,
} from "../invalid-facilitator-fee-amount-error.js";
import {
  invalidFacilitatorFeeCollectFromCombinationErrorSchema,
  type InvalidFacilitatorFeeCollectFromCombinationError,
} from "../invalid-facilitator-fee-collect-from-combination-error.js";
import {
  invalidFacilitatorFeeCollectFromErrorSchema,
  type InvalidFacilitatorFeeCollectFromError,
} from "../invalid-facilitator-fee-collect-from-error.js";
import { invalidFeeOdfiErrorSchema, type InvalidFeeOdfiError } from "../invalid-fee-odfi-error.js";
import { invalidMetadataErrorSchema, type InvalidMetadataError } from "../invalid-metadata-error.js";
import {
  invalidOrRemovedCardDestinationErrorSchema,
  type InvalidOrRemovedCardDestinationError,
} from "../invalid-or-removed-card-destination-error.js";
import {
  invalidPointOfSaleAddendaAddressErrorSchema,
  type InvalidPointOfSaleAddendaAddressError,
} from "../invalid-point-of-sale-addenda-address-error.js";
import {
  invalidPointOfSaleAddendaCityErrorSchema,
  type InvalidPointOfSaleAddendaCityError,
} from "../invalid-point-of-sale-addenda-city-error.js";
import {
  invalidPointOfSaleAddendaDateErrorSchema,
  type InvalidPointOfSaleAddendaDateError,
} from "../invalid-point-of-sale-addenda-date-error.js";
import {
  invalidPointOfSaleAddendaIdentificationCodeErrorSchema,
  type InvalidPointOfSaleAddendaIdentificationCodeError,
} from "../invalid-point-of-sale-addenda-identification-code-error.js";
import {
  invalidPointOfSaleAddendaSerialNumberErrorSchema,
  type InvalidPointOfSaleAddendaSerialNumberError,
} from "../invalid-point-of-sale-addenda-serial-number-error.js";
import {
  invalidPointOfSaleAddendaStateErrorSchema,
  type InvalidPointOfSaleAddendaStateError,
} from "../invalid-point-of-sale-addenda-state-error.js";
import {
  invalidSourceFundingSourceErrorSchema,
  type InvalidSourceFundingSourceError,
} from "../invalid-source-funding-source-error.js";
import { operationBlockedErrorSchema, type OperationBlockedError } from "../operation-blocked-error.js";
import {
  pointOfSaleAddendaEntriesNotEnabledForAccountErrorSchema,
  type PointOfSaleAddendaEntriesNotEnabledForAccountError,
} from "../point-of-sale-addenda-entries-not-enabled-for-account-error.js";
import {
  prefundingSourceNotAllowedErrorSchema,
  type PrefundingSourceNotAllowedError,
} from "../prefunding-source-not-allowed-error.js";
import { receiverNotFoundErrorSchema, type ReceiverNotFoundError } from "../receiver-not-found-error.js";
import { receiverRestrictedErrorSchema, type ReceiverRestrictedError } from "../receiver-restricted-error.js";
import {
  rtpFacilitatorFeeNotSupportedErrorSchema,
  type RtpFacilitatorFeeNotSupportedError,
} from "../rtp-facilitator-fee-not-supported-error.js";
import {
  rtpPersonalToPersonalNotSupportedErrorSchema,
  type RtpPersonalToPersonalNotSupportedError,
} from "../rtp-personal-to-personal-not-supported-error.js";
import {
  rtpUnverifiedSenderNotSupportedErrorSchema,
  type RtpUnverifiedSenderNotSupportedError,
} from "../rtp-unverified-sender-not-supported-error.js";
import { senderRestrictedErrorSchema, type SenderRestrictedError } from "../sender-restricted-error.js";
import {
  sourceAddendaMaxLengthErrorSchema,
  type SourceAddendaMaxLengthError,
} from "../source-addenda-max-length-error.js";
import {
  sourceNotCardNetworkSettlementErrorSchema,
  type SourceNotCardNetworkSettlementError,
} from "../source-not-card-network-settlement-error.js";
import { sourceNotFoundErrorSchema, type SourceNotFoundError } from "../source-not-found-error.js";
import {
  sourceSameAsDestinationErrorSchema,
  type SourceSameAsDestinationError,
} from "../source-same-as-destination-error.js";
import {
  transferExpiredForFeeErrorSchema,
  type TransferExpiredForFeeError,
} from "../transfer-expired-for-fee-error.js";
import {
  weeklyReceiveLimitReachedErrorSchema,
  type WeeklyReceiveLimitReachedError,
} from "../weekly-receive-limit-reached-error.js";
import {
  wireAccountNotFoundErrorSchema,
  type WireAccountNotFoundError,
} from "../wire-account-not-found-error.js";
import {
  wireAccountRestrictedErrorSchema,
  type WireAccountRestrictedError,
} from "../wire-account-restricted-error.js";
import { wireInvalidImadErrorSchema, type WireInvalidImadError } from "../wire-invalid-imad-error.js";
import { wireNotEnabledErrorSchema, type WireNotEnabledError } from "../wire-not-enabled-error.js";
import {
  withdrawAccountRestrictedErrorSchema,
  type WithdrawAccountRestrictedError,
} from "../withdraw-account-restricted-error.js";
import {
  withdrawInvalidAmountErrorSchema,
  type WithdrawInvalidAmountError,
} from "../withdraw-invalid-amount-error.js";
import {
  withdrawInvalidAmountForClearingTypeErrorSchema,
  type WithdrawInvalidAmountForClearingTypeError,
} from "../withdraw-invalid-amount-for-clearing-type-error.js";
import {
  withdrawInvalidFundingSourceErrorSchema,
  type WithdrawInvalidFundingSourceError,
} from "../withdraw-invalid-funding-source-error.js";
import {
  withdrawInvalidWireBeneficiaryCountryErrorSchema,
  type WithdrawInvalidWireBeneficiaryCountryError,
} from "../withdraw-invalid-wire-beneficiary-country-error.js";
import {
  withdrawInvalidWireBeneficiaryLocalityErrorSchema,
  type WithdrawInvalidWireBeneficiaryLocalityError,
} from "../withdraw-invalid-wire-beneficiary-locality-error.js";
import {
  withdrawInvalidWireBeneficiaryRegionErrorSchema,
  type WithdrawInvalidWireBeneficiaryRegionError,
} from "../withdraw-invalid-wire-beneficiary-region-error.js";
import {
  withdrawInvalidWireOriginatorToBeneficiaryErrorSchema,
  type WithdrawInvalidWireOriginatorToBeneficiaryError,
} from "../withdraw-invalid-wire-originator-to-beneficiary-error.js";
import {
  withdrawProcessingChannelNotSupportedErrorSchema,
  type WithdrawProcessingChannelNotSupportedError,
} from "../withdraw-processing-channel-not-supported-error.js";
import {
  withdrawRtpPersonalWithdrawalNotSupportedErrorSchema,
  type WithdrawRtpPersonalWithdrawalNotSupportedError,
} from "../withdraw-rtp-personal-withdrawal-not-supported-error.js";
import {
  withdrawRtpUnverifiedSenderNotSupportedErrorSchema,
  type WithdrawRtpUnverifiedSenderNotSupportedError,
} from "../withdraw-rtp-unverified-sender-not-supported-error.js";

export type TransfersResponse =
  | SourceNotFoundError
  | ReceiverNotFoundError
  | InvalidSourceFundingSourceError
  | SenderRestrictedError
  | ReceiverRestrictedError
  | InvalidMetadataError
  | OperationBlockedError
  | InvalidAmountLimitError
  | CannotParseAmountError
  | InsufficientFundsError
  | FacilitatorFeeAccountNotFoundError
  | FacilitatorFeeSumTooLargeError
  | FacilitatorFeeBelowMinimumError
  | HighRiskError
  | IncompatibleHoldingsError
  | DirectAccountWithoutBankError
  | SourceSameAsDestinationError
  | InvalidFacilitatorError
  | InvalidFacilitatorFeeCollectFromError
  | InvalidFacilitatorFeeCollectFromCombinationError
  | InvalidDestinationFundingSourceError
  | InvalidOrRemovedCardDestinationError
  | InvalidFacilitatorFeeAmountError
  | WeeklyReceiveLimitReachedError
  | InvalidDestinationClearingTypeError
  | InvalidAmountForDestinationClearingTypeError
  | InvalidCorrelationIdError
  | SourceAddendaMaxLengthError
  | DestinationAddendaMaxLengthError
  | AchAddendaEntriesNotEnabledForAccountError
  | PointOfSaleAddendaEntriesNotEnabledForAccountError
  | IncompatibleAddendaEntriesError
  | InvalidPointOfSaleAddendaIdentificationCodeError
  | InvalidPointOfSaleAddendaSerialNumberError
  | InvalidPointOfSaleAddendaDateError
  | InvalidPointOfSaleAddendaAddressError
  | InvalidPointOfSaleAddendaCityError
  | InvalidPointOfSaleAddendaStateError
  | TransferExpiredForFeeError
  | InvalidFeeOdfiError
  | InvalidBankAccountTypeError
  | InvalidDestinationBankAccountTypeError
  | IncompatibleSourceAndDestinationTypesError
  | SourceNotCardNetworkSettlementError
  | CardSourceNotAllowedError
  | IncompatibleSourceForRtpDestinationError
  | InvalidAmountForDestinationProcessingChannelError
  | RtpFacilitatorFeeNotSupportedError
  | RtpUnverifiedSenderNotSupportedError
  | RtpPersonalToPersonalNotSupportedError
  | DestinationProcessingChannelNotSupportedError
  | DestinationRemittanceDataMaxLengthError
  | WithdrawInvalidAmountError
  | WithdrawInvalidFundingSourceError
  | WithdrawAccountRestrictedError
  | WithdrawInvalidAmountForClearingTypeError
  | WithdrawInvalidWireBeneficiaryLocalityError
  | WithdrawInvalidWireBeneficiaryRegionError
  | WithdrawInvalidWireBeneficiaryCountryError
  | WithdrawInvalidWireOriginatorToBeneficiaryError
  | WithdrawProcessingChannelNotSupportedError
  | WithdrawRtpUnverifiedSenderNotSupportedError
  | WithdrawRtpPersonalWithdrawalNotSupportedError
  | DepositAccountRestrictedError
  | WireInvalidImadError
  | WireAccountRestrictedError
  | WireNotEnabledError
  | WireAccountNotFoundError
  | PrefundingSourceNotAllowedError;

export const transfersResponseSchema: Schema<TransfersResponse> = s.of<TransfersResponse>(
  s.union([
    s.lazy(() => sourceNotFoundErrorSchema),
    s.lazy(() => receiverNotFoundErrorSchema),
    s.lazy(() => invalidSourceFundingSourceErrorSchema),
    s.lazy(() => senderRestrictedErrorSchema),
    s.lazy(() => receiverRestrictedErrorSchema),
    s.lazy(() => invalidMetadataErrorSchema),
    s.lazy(() => operationBlockedErrorSchema),
    s.lazy(() => invalidAmountLimitErrorSchema),
    s.lazy(() => cannotParseAmountErrorSchema),
    s.lazy(() => insufficientFundsErrorSchema),
    s.lazy(() => facilitatorFeeAccountNotFoundErrorSchema),
    s.lazy(() => facilitatorFeeSumTooLargeErrorSchema),
    s.lazy(() => facilitatorFeeBelowMinimumErrorSchema),
    s.lazy(() => highRiskErrorSchema),
    s.lazy(() => incompatibleHoldingsErrorSchema),
    s.lazy(() => directAccountWithoutBankErrorSchema),
    s.lazy(() => sourceSameAsDestinationErrorSchema),
    s.lazy(() => invalidFacilitatorErrorSchema),
    s.lazy(() => invalidFacilitatorFeeCollectFromErrorSchema),
    s.lazy(() => invalidFacilitatorFeeCollectFromCombinationErrorSchema),
    s.lazy(() => invalidDestinationFundingSourceErrorSchema),
    s.lazy(() => invalidOrRemovedCardDestinationErrorSchema),
    s.lazy(() => invalidFacilitatorFeeAmountErrorSchema),
    s.lazy(() => weeklyReceiveLimitReachedErrorSchema),
    s.lazy(() => invalidDestinationClearingTypeErrorSchema),
    s.lazy(() => invalidAmountForDestinationClearingTypeErrorSchema),
    s.lazy(() => invalidCorrelationIdErrorSchema),
    s.lazy(() => sourceAddendaMaxLengthErrorSchema),
    s.lazy(() => destinationAddendaMaxLengthErrorSchema),
    s.lazy(() => achAddendaEntriesNotEnabledForAccountErrorSchema),
    s.lazy(() => pointOfSaleAddendaEntriesNotEnabledForAccountErrorSchema),
    s.lazy(() => incompatibleAddendaEntriesErrorSchema),
    s.lazy(() => invalidPointOfSaleAddendaIdentificationCodeErrorSchema),
    s.lazy(() => invalidPointOfSaleAddendaSerialNumberErrorSchema),
    s.lazy(() => invalidPointOfSaleAddendaDateErrorSchema),
    s.lazy(() => invalidPointOfSaleAddendaAddressErrorSchema),
    s.lazy(() => invalidPointOfSaleAddendaCityErrorSchema),
    s.lazy(() => invalidPointOfSaleAddendaStateErrorSchema),
    s.lazy(() => transferExpiredForFeeErrorSchema),
    s.lazy(() => invalidFeeOdfiErrorSchema),
    s.lazy(() => invalidBankAccountTypeErrorSchema),
    s.lazy(() => invalidDestinationBankAccountTypeErrorSchema),
    s.lazy(() => incompatibleSourceAndDestinationTypesErrorSchema),
    s.lazy(() => sourceNotCardNetworkSettlementErrorSchema),
    s.lazy(() => cardSourceNotAllowedErrorSchema),
    s.lazy(() => incompatibleSourceForRtpDestinationErrorSchema),
    s.lazy(() => invalidAmountForDestinationProcessingChannelErrorSchema),
    s.lazy(() => rtpFacilitatorFeeNotSupportedErrorSchema),
    s.lazy(() => rtpUnverifiedSenderNotSupportedErrorSchema),
    s.lazy(() => rtpPersonalToPersonalNotSupportedErrorSchema),
    s.lazy(() => destinationProcessingChannelNotSupportedErrorSchema),
    s.lazy(() => destinationRemittanceDataMaxLengthErrorSchema),
    s.lazy(() => withdrawInvalidAmountErrorSchema),
    s.lazy(() => withdrawInvalidFundingSourceErrorSchema),
    s.lazy(() => withdrawAccountRestrictedErrorSchema),
    s.lazy(() => withdrawInvalidAmountForClearingTypeErrorSchema),
    s.lazy(() => withdrawInvalidWireBeneficiaryLocalityErrorSchema),
    s.lazy(() => withdrawInvalidWireBeneficiaryRegionErrorSchema),
    s.lazy(() => withdrawInvalidWireBeneficiaryCountryErrorSchema),
    s.lazy(() => withdrawInvalidWireOriginatorToBeneficiaryErrorSchema),
    s.lazy(() => withdrawProcessingChannelNotSupportedErrorSchema),
    s.lazy(() => withdrawRtpUnverifiedSenderNotSupportedErrorSchema),
    s.lazy(() => withdrawRtpPersonalWithdrawalNotSupportedErrorSchema),
    s.lazy(() => depositAccountRestrictedErrorSchema),
    s.lazy(() => wireInvalidImadErrorSchema),
    s.lazy(() => wireAccountRestrictedErrorSchema),
    s.lazy(() => wireNotEnabledErrorSchema),
    s.lazy(() => wireAccountNotFoundErrorSchema),
    s.lazy(() => prefundingSourceNotAllowedErrorSchema),
  ]),
);
