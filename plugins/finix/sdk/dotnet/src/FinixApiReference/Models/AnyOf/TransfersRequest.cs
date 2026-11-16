using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(TransfersRequestConverter))]
public record TransfersRequest
{
    private readonly Optional<TransferMinimalFields> _transferMinimalFieldsValue;

    private readonly Optional<TransferAllFields> _transferAllFieldsValue;

    private readonly Optional<Transfer3DSecure> _transfer3DSecureValue;

    private readonly Optional<Transfer3DSecureSession> _transfer3DSecureSessionValue;

    private readonly Optional<TransferBankPayout> _transferBankPayoutValue;

    private readonly Optional<TransferBankPayoutSameDay> _transferBankPayoutSameDayValue;

    private readonly Optional<TransferCardPayout> _transferCardPayoutValue;

    private readonly Optional<TransferCardPresent> _transferCardPresentValue;

    private readonly Optional<TransferCardPresentUnreferencedRefund> _transferCardPresentUnreferencedRefundValue;

    private readonly Optional<TransferCardVerificationChecks> _transferCardVerificationChecksValue;

    private readonly Optional<TransferConvenienceFee> _transferConvenienceFeeValue;

    private readonly Optional<TransferFeeProfile> _transferFeeProfileValue;

    private readonly Optional<TransferMotorVehicleRental> _transferMotorVehicleRentalValue;

    private readonly Optional<TransferLodging> _transferLodgingValue;

    private readonly Optional<TransferGaming> _transferGamingValue;

    private readonly Optional<TransferLevel2Processing> _transferLevel2ProcessingValue;

    private readonly Optional<TransferLevel3Processing> _transferLevel3ProcessingValue;

    private readonly Optional<TransferPartialAuthorization> _transferPartialAuthorizationValue;

    private readonly Optional<TransferRecurringOrUnscheduled> _transferRecurringOrUnscheduledValue;

    private readonly Optional<TransferRentSurcharge> _transferRentSurchargeValue;

    private readonly Optional<TransferSplitTransaction> _transferSplitTransactionValue;

    private readonly Optional<TransferSurcharge> _transferSurchargeValue;

    private readonly Optional<TransferMeToMePullCard> _transferMeToMePullCardValue;

    private readonly Optional<TransferMeToMePullBank> _transferMeToMePullBankValue;

    private readonly Optional<TransferMeToMePullBankSameDay> _transferMeToMePullBankSameDayValue;

    private readonly Optional<TransferMeToMePayoutCard> _transferMeToMePayoutCardValue;

    private readonly Optional<TransferMeToMePayoutBank> _transferMeToMePayoutBankValue;

    private readonly Optional<TransferMeToMePayoutBankSameDay> _transferMeToMePayoutBankSameDayValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private TransfersRequest(Optional<TransferMinimalFields> transferMinimalFieldsValue,
        Optional<TransferAllFields> transferAllFieldsValue,
        Optional<Transfer3DSecure> transfer3DSecureValue,
        Optional<Transfer3DSecureSession> transfer3DSecureSessionValue,
        Optional<TransferBankPayout> transferBankPayoutValue,
        Optional<TransferBankPayoutSameDay> transferBankPayoutSameDayValue,
        Optional<TransferCardPayout> transferCardPayoutValue,
        Optional<TransferCardPresent> transferCardPresentValue,
        Optional<TransferCardPresentUnreferencedRefund> transferCardPresentUnreferencedRefundValue,
        Optional<TransferCardVerificationChecks> transferCardVerificationChecksValue,
        Optional<TransferConvenienceFee> transferConvenienceFeeValue,
        Optional<TransferFeeProfile> transferFeeProfileValue,
        Optional<TransferMotorVehicleRental> transferMotorVehicleRentalValue,
        Optional<TransferLodging> transferLodgingValue,
        Optional<TransferGaming> transferGamingValue,
        Optional<TransferLevel2Processing> transferLevel2ProcessingValue,
        Optional<TransferLevel3Processing> transferLevel3ProcessingValue,
        Optional<TransferPartialAuthorization> transferPartialAuthorizationValue,
        Optional<TransferRecurringOrUnscheduled> transferRecurringOrUnscheduledValue,
        Optional<TransferRentSurcharge> transferRentSurchargeValue,
        Optional<TransferSplitTransaction> transferSplitTransactionValue,
        Optional<TransferSurcharge> transferSurchargeValue,
        Optional<TransferMeToMePullCard> transferMeToMePullCardValue,
        Optional<TransferMeToMePullBank> transferMeToMePullBankValue,
        Optional<TransferMeToMePullBankSameDay> transferMeToMePullBankSameDayValue,
        Optional<TransferMeToMePayoutCard> transferMeToMePayoutCardValue,
        Optional<TransferMeToMePayoutBank> transferMeToMePayoutBankValue,
        Optional<TransferMeToMePayoutBankSameDay> transferMeToMePayoutBankSameDayValue,
        Optional<UnknownArm> unknownValue)
    {
        _transferMinimalFieldsValue = transferMinimalFieldsValue;
        _transferAllFieldsValue = transferAllFieldsValue;
        _transfer3DSecureValue = transfer3DSecureValue;
        _transfer3DSecureSessionValue = transfer3DSecureSessionValue;
        _transferBankPayoutValue = transferBankPayoutValue;
        _transferBankPayoutSameDayValue = transferBankPayoutSameDayValue;
        _transferCardPayoutValue = transferCardPayoutValue;
        _transferCardPresentValue = transferCardPresentValue;
        _transferCardPresentUnreferencedRefundValue = transferCardPresentUnreferencedRefundValue;
        _transferCardVerificationChecksValue = transferCardVerificationChecksValue;
        _transferConvenienceFeeValue = transferConvenienceFeeValue;
        _transferFeeProfileValue = transferFeeProfileValue;
        _transferMotorVehicleRentalValue = transferMotorVehicleRentalValue;
        _transferLodgingValue = transferLodgingValue;
        _transferGamingValue = transferGamingValue;
        _transferLevel2ProcessingValue = transferLevel2ProcessingValue;
        _transferLevel3ProcessingValue = transferLevel3ProcessingValue;
        _transferPartialAuthorizationValue = transferPartialAuthorizationValue;
        _transferRecurringOrUnscheduledValue = transferRecurringOrUnscheduledValue;
        _transferRentSurchargeValue = transferRentSurchargeValue;
        _transferSplitTransactionValue = transferSplitTransactionValue;
        _transferSurchargeValue = transferSurchargeValue;
        _transferMeToMePullCardValue = transferMeToMePullCardValue;
        _transferMeToMePullBankValue = transferMeToMePullBankValue;
        _transferMeToMePullBankSameDayValue = transferMeToMePullBankSameDayValue;
        _transferMeToMePayoutCardValue = transferMeToMePayoutCardValue;
        _transferMeToMePayoutBankValue = transferMeToMePayoutBankValue;
        _transferMeToMePayoutBankSameDayValue = transferMeToMePayoutBankSameDayValue;
        _unknownValue = unknownValue;
    }

    public static TransfersRequest TransferMinimalFields(TransferMinimalFields value) =>
        new(
            Optional<TransferMinimalFields>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferAllFields(TransferAllFields value) =>
        new(
            default,
            Optional<TransferAllFields>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest Transfer3DSecure(Transfer3DSecure value) =>
        new(
            default,
            default,
            Optional<Transfer3DSecure>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest Transfer3DSecureSession(Transfer3DSecureSession value) =>
        new(
            default,
            default,
            default,
            Optional<Transfer3DSecureSession>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferBankPayout(TransferBankPayout value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<TransferBankPayout>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferBankPayoutSameDay(TransferBankPayoutSameDay value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<TransferBankPayoutSameDay>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferCardPayout(TransferCardPayout value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TransferCardPayout>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferCardPresent(TransferCardPresent value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TransferCardPresent>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferCardPresentUnreferencedRefund(TransferCardPresentUnreferencedRefund value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TransferCardPresentUnreferencedRefund>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferCardVerificationChecks(TransferCardVerificationChecks value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TransferCardVerificationChecks>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferConvenienceFee(TransferConvenienceFee value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TransferConvenienceFee>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferFeeProfile(TransferFeeProfile value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TransferFeeProfile>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferMotorVehicleRental(TransferMotorVehicleRental value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TransferMotorVehicleRental>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferLodging(TransferLodging value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TransferLodging>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferGaming(TransferGaming value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TransferGaming>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferLevel2Processing(TransferLevel2Processing value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TransferLevel2Processing>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferLevel3Processing(TransferLevel3Processing value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TransferLevel3Processing>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferPartialAuthorization(TransferPartialAuthorization value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TransferPartialAuthorization>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferRecurringOrUnscheduled(TransferRecurringOrUnscheduled value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TransferRecurringOrUnscheduled>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferRentSurcharge(TransferRentSurcharge value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TransferRentSurcharge>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferSplitTransaction(TransferSplitTransaction value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TransferSplitTransaction>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferSurcharge(TransferSurcharge value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TransferSurcharge>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferMeToMePullCard(TransferMeToMePullCard value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TransferMeToMePullCard>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferMeToMePullBank(TransferMeToMePullBank value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TransferMeToMePullBank>.Some(value),
            default,
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferMeToMePullBankSameDay(TransferMeToMePullBankSameDay value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TransferMeToMePullBankSameDay>.Some(value),
            default,
            default,
            default,
            default);

    public static TransfersRequest TransferMeToMePayoutCard(TransferMeToMePayoutCard value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TransferMeToMePayoutCard>.Some(value),
            default,
            default,
            default);

    public static TransfersRequest TransferMeToMePayoutBank(TransferMeToMePayoutBank value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TransferMeToMePayoutBank>.Some(value),
            default,
            default);

    public static TransfersRequest TransferMeToMePayoutBankSameDay(TransferMeToMePayoutBankSameDay value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<TransferMeToMePayoutBankSameDay>.Some(value),
            default);

    internal static TransfersRequest Unknown(JsonElement value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTransferMinimalFields([NotNullWhen(true)] out TransferMinimalFields? value) =>
        _transferMinimalFieldsValue.TryGetValue(out value);

    public bool TryGetTransferAllFields([NotNullWhen(true)] out TransferAllFields? value) =>
        _transferAllFieldsValue.TryGetValue(out value);

    public bool TryGetTransfer3DSecure([NotNullWhen(true)] out Transfer3DSecure? value) =>
        _transfer3DSecureValue.TryGetValue(out value);

    public bool TryGetTransfer3DSecureSession([NotNullWhen(true)] out Transfer3DSecureSession? value) =>
        _transfer3DSecureSessionValue.TryGetValue(out value);

    public bool TryGetTransferBankPayout([NotNullWhen(true)] out TransferBankPayout? value) =>
        _transferBankPayoutValue.TryGetValue(out value);

    public bool TryGetTransferBankPayoutSameDay([NotNullWhen(true)] out TransferBankPayoutSameDay? value) =>
        _transferBankPayoutSameDayValue.TryGetValue(out value);

    public bool TryGetTransferCardPayout([NotNullWhen(true)] out TransferCardPayout? value) =>
        _transferCardPayoutValue.TryGetValue(out value);

    public bool TryGetTransferCardPresent([NotNullWhen(true)] out TransferCardPresent? value) =>
        _transferCardPresentValue.TryGetValue(out value);

    public bool TryGetTransferCardPresentUnreferencedRefund([NotNullWhen(true)] out TransferCardPresentUnreferencedRefund? value) =>
        _transferCardPresentUnreferencedRefundValue.TryGetValue(out value);

    public bool TryGetTransferCardVerificationChecks([NotNullWhen(true)] out TransferCardVerificationChecks? value) =>
        _transferCardVerificationChecksValue.TryGetValue(out value);

    public bool TryGetTransferConvenienceFee([NotNullWhen(true)] out TransferConvenienceFee? value) =>
        _transferConvenienceFeeValue.TryGetValue(out value);

    public bool TryGetTransferFeeProfile([NotNullWhen(true)] out TransferFeeProfile? value) =>
        _transferFeeProfileValue.TryGetValue(out value);

    public bool TryGetTransferMotorVehicleRental([NotNullWhen(true)] out TransferMotorVehicleRental? value) =>
        _transferMotorVehicleRentalValue.TryGetValue(out value);

    public bool TryGetTransferLodging([NotNullWhen(true)] out TransferLodging? value) =>
        _transferLodgingValue.TryGetValue(out value);

    public bool TryGetTransferGaming([NotNullWhen(true)] out TransferGaming? value) =>
        _transferGamingValue.TryGetValue(out value);

    public bool TryGetTransferLevel2Processing([NotNullWhen(true)] out TransferLevel2Processing? value) =>
        _transferLevel2ProcessingValue.TryGetValue(out value);

    public bool TryGetTransferLevel3Processing([NotNullWhen(true)] out TransferLevel3Processing? value) =>
        _transferLevel3ProcessingValue.TryGetValue(out value);

    public bool TryGetTransferPartialAuthorization([NotNullWhen(true)] out TransferPartialAuthorization? value) =>
        _transferPartialAuthorizationValue.TryGetValue(out value);

    public bool TryGetTransferRecurringOrUnscheduled([NotNullWhen(true)] out TransferRecurringOrUnscheduled? value) =>
        _transferRecurringOrUnscheduledValue.TryGetValue(out value);

    public bool TryGetTransferRentSurcharge([NotNullWhen(true)] out TransferRentSurcharge? value) =>
        _transferRentSurchargeValue.TryGetValue(out value);

    public bool TryGetTransferSplitTransaction([NotNullWhen(true)] out TransferSplitTransaction? value) =>
        _transferSplitTransactionValue.TryGetValue(out value);

    public bool TryGetTransferSurcharge([NotNullWhen(true)] out TransferSurcharge? value) =>
        _transferSurchargeValue.TryGetValue(out value);

    public bool TryGetTransferMeToMePullCard([NotNullWhen(true)] out TransferMeToMePullCard? value) =>
        _transferMeToMePullCardValue.TryGetValue(out value);

    public bool TryGetTransferMeToMePullBank([NotNullWhen(true)] out TransferMeToMePullBank? value) =>
        _transferMeToMePullBankValue.TryGetValue(out value);

    public bool TryGetTransferMeToMePullBankSameDay([NotNullWhen(true)] out TransferMeToMePullBankSameDay? value) =>
        _transferMeToMePullBankSameDayValue.TryGetValue(out value);

    public bool TryGetTransferMeToMePayoutCard([NotNullWhen(true)] out TransferMeToMePayoutCard? value) =>
        _transferMeToMePayoutCardValue.TryGetValue(out value);

    public bool TryGetTransferMeToMePayoutBank([NotNullWhen(true)] out TransferMeToMePayoutBank? value) =>
        _transferMeToMePayoutBankValue.TryGetValue(out value);

    public bool TryGetTransferMeToMePayoutBankSameDay([NotNullWhen(true)] out TransferMeToMePayoutBankSameDay? value) =>
        _transferMeToMePayoutBankSameDayValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator TransfersRequest(TransferMinimalFields value) => TransferMinimalFields(value);

    public static implicit operator TransfersRequest(TransferAllFields value) => TransferAllFields(value);

    public static implicit operator TransfersRequest(Transfer3DSecure value) => Transfer3DSecure(value);

    public static implicit operator TransfersRequest(Transfer3DSecureSession value) => Transfer3DSecureSession(value);

    public static implicit operator TransfersRequest(TransferBankPayout value) => TransferBankPayout(value);

    public static implicit operator TransfersRequest(TransferBankPayoutSameDay value) =>
        TransferBankPayoutSameDay(value);

    public static implicit operator TransfersRequest(TransferCardPayout value) => TransferCardPayout(value);

    public static implicit operator TransfersRequest(TransferCardPresent value) => TransferCardPresent(value);

    public static implicit operator TransfersRequest(TransferCardPresentUnreferencedRefund value) =>
        TransferCardPresentUnreferencedRefund(value);

    public static implicit operator TransfersRequest(TransferCardVerificationChecks value) =>
        TransferCardVerificationChecks(value);

    public static implicit operator TransfersRequest(TransferConvenienceFee value) => TransferConvenienceFee(value);

    public static implicit operator TransfersRequest(TransferFeeProfile value) => TransferFeeProfile(value);

    public static implicit operator TransfersRequest(TransferMotorVehicleRental value) =>
        TransferMotorVehicleRental(value);

    public static implicit operator TransfersRequest(TransferLodging value) => TransferLodging(value);

    public static implicit operator TransfersRequest(TransferGaming value) => TransferGaming(value);

    public static implicit operator TransfersRequest(TransferLevel2Processing value) => TransferLevel2Processing(value);

    public static implicit operator TransfersRequest(TransferLevel3Processing value) => TransferLevel3Processing(value);

    public static implicit operator TransfersRequest(TransferPartialAuthorization value) =>
        TransferPartialAuthorization(value);

    public static implicit operator TransfersRequest(TransferRecurringOrUnscheduled value) =>
        TransferRecurringOrUnscheduled(value);

    public static implicit operator TransfersRequest(TransferRentSurcharge value) => TransferRentSurcharge(value);

    public static implicit operator TransfersRequest(TransferSplitTransaction value) => TransferSplitTransaction(value);

    public static implicit operator TransfersRequest(TransferSurcharge value) => TransferSurcharge(value);

    public static implicit operator TransfersRequest(TransferMeToMePullCard value) => TransferMeToMePullCard(value);

    public static implicit operator TransfersRequest(TransferMeToMePullBank value) => TransferMeToMePullBank(value);

    public static implicit operator TransfersRequest(TransferMeToMePullBankSameDay value) =>
        TransferMeToMePullBankSameDay(value);

    public static implicit operator TransfersRequest(TransferMeToMePayoutCard value) => TransferMeToMePayoutCard(value);

    public static implicit operator TransfersRequest(TransferMeToMePayoutBank value) => TransferMeToMePayoutBank(value);

    public static implicit operator TransfersRequest(TransferMeToMePayoutBankSameDay value) =>
        TransferMeToMePayoutBankSameDay(value);

    public TResult Match<TResult>(Func<TransferMinimalFields, TResult> onTransferMinimalFields,
        Func<TransferAllFields, TResult> onTransferAllFields,
        Func<Transfer3DSecure, TResult> onTransfer3DSecure,
        Func<Transfer3DSecureSession, TResult> onTransfer3DSecureSession,
        Func<TransferBankPayout, TResult> onTransferBankPayout,
        Func<TransferBankPayoutSameDay, TResult> onTransferBankPayoutSameDay,
        Func<TransferCardPayout, TResult> onTransferCardPayout,
        Func<TransferCardPresent, TResult> onTransferCardPresent,
        Func<TransferCardPresentUnreferencedRefund, TResult> onTransferCardPresentUnreferencedRefund,
        Func<TransferCardVerificationChecks, TResult> onTransferCardVerificationChecks,
        Func<TransferConvenienceFee, TResult> onTransferConvenienceFee,
        Func<TransferFeeProfile, TResult> onTransferFeeProfile,
        Func<TransferMotorVehicleRental, TResult> onTransferMotorVehicleRental,
        Func<TransferLodging, TResult> onTransferLodging,
        Func<TransferGaming, TResult> onTransferGaming,
        Func<TransferLevel2Processing, TResult> onTransferLevel2Processing,
        Func<TransferLevel3Processing, TResult> onTransferLevel3Processing,
        Func<TransferPartialAuthorization, TResult> onTransferPartialAuthorization,
        Func<TransferRecurringOrUnscheduled, TResult> onTransferRecurringOrUnscheduled,
        Func<TransferRentSurcharge, TResult> onTransferRentSurcharge,
        Func<TransferSplitTransaction, TResult> onTransferSplitTransaction,
        Func<TransferSurcharge, TResult> onTransferSurcharge,
        Func<TransferMeToMePullCard, TResult> onTransferMeToMePullCard,
        Func<TransferMeToMePullBank, TResult> onTransferMeToMePullBank,
        Func<TransferMeToMePullBankSameDay, TResult> onTransferMeToMePullBankSameDay,
        Func<TransferMeToMePayoutCard, TResult> onTransferMeToMePayoutCard,
        Func<TransferMeToMePayoutBank, TResult> onTransferMeToMePayoutBank,
        Func<TransferMeToMePayoutBankSameDay, TResult> onTransferMeToMePayoutBankSameDay,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTransferMinimalFields(out var transferMinimalFieldsValue) => onTransferMinimalFields(
                transferMinimalFieldsValue),
            _ when TryGetTransferAllFields(out var transferAllFieldsValue) => onTransferAllFields(
                transferAllFieldsValue),
            _ when TryGetTransfer3DSecure(out var transfer3DSecureValue) => onTransfer3DSecure(transfer3DSecureValue),
            _ when TryGetTransfer3DSecureSession(out var transfer3DSecureSessionValue) => onTransfer3DSecureSession(
                transfer3DSecureSessionValue),
            _ when TryGetTransferBankPayout(out var transferBankPayoutValue) => onTransferBankPayout(
                transferBankPayoutValue),
            _ when TryGetTransferBankPayoutSameDay(
                out var transferBankPayoutSameDayValue) => onTransferBankPayoutSameDay(transferBankPayoutSameDayValue),
            _ when TryGetTransferCardPayout(out var transferCardPayoutValue) => onTransferCardPayout(
                transferCardPayoutValue),
            _ when TryGetTransferCardPresent(out var transferCardPresentValue) => onTransferCardPresent(
                transferCardPresentValue),
            _ when TryGetTransferCardPresentUnreferencedRefund(
                out var transferCardPresentUnreferencedRefundValue) => onTransferCardPresentUnreferencedRefund(
                transferCardPresentUnreferencedRefundValue),
            _ when TryGetTransferCardVerificationChecks(
                out var transferCardVerificationChecksValue) => onTransferCardVerificationChecks(
                transferCardVerificationChecksValue),
            _ when TryGetTransferConvenienceFee(out var transferConvenienceFeeValue) => onTransferConvenienceFee(
                transferConvenienceFeeValue),
            _ when TryGetTransferFeeProfile(out var transferFeeProfileValue) => onTransferFeeProfile(
                transferFeeProfileValue),
            _ when TryGetTransferMotorVehicleRental(
                out var transferMotorVehicleRentalValue) => onTransferMotorVehicleRental(
                transferMotorVehicleRentalValue),
            _ when TryGetTransferLodging(out var transferLodgingValue) => onTransferLodging(transferLodgingValue),
            _ when TryGetTransferGaming(out var transferGamingValue) => onTransferGaming(transferGamingValue),
            _ when TryGetTransferLevel2Processing(out var transferLevel2ProcessingValue) => onTransferLevel2Processing(
                transferLevel2ProcessingValue),
            _ when TryGetTransferLevel3Processing(out var transferLevel3ProcessingValue) => onTransferLevel3Processing(
                transferLevel3ProcessingValue),
            _ when TryGetTransferPartialAuthorization(
                out var transferPartialAuthorizationValue) => onTransferPartialAuthorization(
                transferPartialAuthorizationValue),
            _ when TryGetTransferRecurringOrUnscheduled(
                out var transferRecurringOrUnscheduledValue) => onTransferRecurringOrUnscheduled(
                transferRecurringOrUnscheduledValue),
            _ when TryGetTransferRentSurcharge(out var transferRentSurchargeValue) => onTransferRentSurcharge(
                transferRentSurchargeValue),
            _ when TryGetTransferSplitTransaction(out var transferSplitTransactionValue) => onTransferSplitTransaction(
                transferSplitTransactionValue),
            _ when TryGetTransferSurcharge(out var transferSurchargeValue) => onTransferSurcharge(
                transferSurchargeValue),
            _ when TryGetTransferMeToMePullCard(out var transferMeToMePullCardValue) => onTransferMeToMePullCard(
                transferMeToMePullCardValue),
            _ when TryGetTransferMeToMePullBank(out var transferMeToMePullBankValue) => onTransferMeToMePullBank(
                transferMeToMePullBankValue),
            _ when TryGetTransferMeToMePullBankSameDay(
                out var transferMeToMePullBankSameDayValue) => onTransferMeToMePullBankSameDay(
                transferMeToMePullBankSameDayValue),
            _ when TryGetTransferMeToMePayoutCard(out var transferMeToMePayoutCardValue) => onTransferMeToMePayoutCard(
                transferMeToMePayoutCardValue),
            _ when TryGetTransferMeToMePayoutBank(out var transferMeToMePayoutBankValue) => onTransferMeToMePayoutBank(
                transferMeToMePayoutBankValue),
            _ when TryGetTransferMeToMePayoutBankSameDay(
                out var transferMeToMePayoutBankSameDayValue) => onTransferMeToMePayoutBankSameDay(
                transferMeToMePayoutBankSameDayValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(TransfersRequest)} holds no value.")
        };

    public void Match(Action<TransferMinimalFields> onTransferMinimalFields,
        Action<TransferAllFields> onTransferAllFields,
        Action<Transfer3DSecure> onTransfer3DSecure,
        Action<Transfer3DSecureSession> onTransfer3DSecureSession,
        Action<TransferBankPayout> onTransferBankPayout,
        Action<TransferBankPayoutSameDay> onTransferBankPayoutSameDay,
        Action<TransferCardPayout> onTransferCardPayout,
        Action<TransferCardPresent> onTransferCardPresent,
        Action<TransferCardPresentUnreferencedRefund> onTransferCardPresentUnreferencedRefund,
        Action<TransferCardVerificationChecks> onTransferCardVerificationChecks,
        Action<TransferConvenienceFee> onTransferConvenienceFee,
        Action<TransferFeeProfile> onTransferFeeProfile,
        Action<TransferMotorVehicleRental> onTransferMotorVehicleRental,
        Action<TransferLodging> onTransferLodging,
        Action<TransferGaming> onTransferGaming,
        Action<TransferLevel2Processing> onTransferLevel2Processing,
        Action<TransferLevel3Processing> onTransferLevel3Processing,
        Action<TransferPartialAuthorization> onTransferPartialAuthorization,
        Action<TransferRecurringOrUnscheduled> onTransferRecurringOrUnscheduled,
        Action<TransferRentSurcharge> onTransferRentSurcharge,
        Action<TransferSplitTransaction> onTransferSplitTransaction,
        Action<TransferSurcharge> onTransferSurcharge,
        Action<TransferMeToMePullCard> onTransferMeToMePullCard,
        Action<TransferMeToMePullBank> onTransferMeToMePullBank,
        Action<TransferMeToMePullBankSameDay> onTransferMeToMePullBankSameDay,
        Action<TransferMeToMePayoutCard> onTransferMeToMePayoutCard,
        Action<TransferMeToMePayoutBank> onTransferMeToMePayoutBank,
        Action<TransferMeToMePayoutBankSameDay> onTransferMeToMePayoutBankSameDay,
        Action<JsonElement> otherwise)
    {
        if (TryGetTransferMinimalFields(out var transferMinimalFieldsValue)) onTransferMinimalFields(
            transferMinimalFieldsValue);
        else if (TryGetTransferAllFields(out var transferAllFieldsValue)) onTransferAllFields(transferAllFieldsValue);
        else if (TryGetTransfer3DSecure(out var transfer3DSecureValue)) onTransfer3DSecure(transfer3DSecureValue);
        else if (TryGetTransfer3DSecureSession(out var transfer3DSecureSessionValue)) onTransfer3DSecureSession(
            transfer3DSecureSessionValue);
        else if (TryGetTransferBankPayout(out var transferBankPayoutValue)) onTransferBankPayout(
            transferBankPayoutValue);
        else if (TryGetTransferBankPayoutSameDay(out var transferBankPayoutSameDayValue)) onTransferBankPayoutSameDay(
            transferBankPayoutSameDayValue);
        else if (TryGetTransferCardPayout(out var transferCardPayoutValue)) onTransferCardPayout(
            transferCardPayoutValue);
        else if (TryGetTransferCardPresent(out var transferCardPresentValue)) onTransferCardPresent(
            transferCardPresentValue);
        else if (TryGetTransferCardPresentUnreferencedRefund(
            out var transferCardPresentUnreferencedRefundValue)) onTransferCardPresentUnreferencedRefund(
            transferCardPresentUnreferencedRefundValue);
        else if (TryGetTransferCardVerificationChecks(
            out var transferCardVerificationChecksValue)) onTransferCardVerificationChecks(
            transferCardVerificationChecksValue);
        else if (TryGetTransferConvenienceFee(out var transferConvenienceFeeValue)) onTransferConvenienceFee(
            transferConvenienceFeeValue);
        else if (TryGetTransferFeeProfile(out var transferFeeProfileValue)) onTransferFeeProfile(
            transferFeeProfileValue);
        else if (TryGetTransferMotorVehicleRental(
            out var transferMotorVehicleRentalValue)) onTransferMotorVehicleRental(transferMotorVehicleRentalValue);
        else if (TryGetTransferLodging(out var transferLodgingValue)) onTransferLodging(transferLodgingValue);
        else if (TryGetTransferGaming(out var transferGamingValue)) onTransferGaming(transferGamingValue);
        else if (TryGetTransferLevel2Processing(out var transferLevel2ProcessingValue)) onTransferLevel2Processing(
            transferLevel2ProcessingValue);
        else if (TryGetTransferLevel3Processing(out var transferLevel3ProcessingValue)) onTransferLevel3Processing(
            transferLevel3ProcessingValue);
        else if (TryGetTransferPartialAuthorization(
            out var transferPartialAuthorizationValue)) onTransferPartialAuthorization(
            transferPartialAuthorizationValue);
        else if (TryGetTransferRecurringOrUnscheduled(
            out var transferRecurringOrUnscheduledValue)) onTransferRecurringOrUnscheduled(
            transferRecurringOrUnscheduledValue);
        else if (TryGetTransferRentSurcharge(out var transferRentSurchargeValue)) onTransferRentSurcharge(
            transferRentSurchargeValue);
        else if (TryGetTransferSplitTransaction(out var transferSplitTransactionValue)) onTransferSplitTransaction(
            transferSplitTransactionValue);
        else if (TryGetTransferSurcharge(out var transferSurchargeValue)) onTransferSurcharge(transferSurchargeValue);
        else if (TryGetTransferMeToMePullCard(out var transferMeToMePullCardValue)) onTransferMeToMePullCard(
            transferMeToMePullCardValue);
        else if (TryGetTransferMeToMePullBank(out var transferMeToMePullBankValue)) onTransferMeToMePullBank(
            transferMeToMePullBankValue);
        else if (TryGetTransferMeToMePullBankSameDay(
            out var transferMeToMePullBankSameDayValue)) onTransferMeToMePullBankSameDay(
            transferMeToMePullBankSameDayValue);
        else if (TryGetTransferMeToMePayoutCard(out var transferMeToMePayoutCardValue)) onTransferMeToMePayoutCard(
            transferMeToMePayoutCardValue);
        else if (TryGetTransferMeToMePayoutBank(out var transferMeToMePayoutBankValue)) onTransferMeToMePayoutBank(
            transferMeToMePayoutBankValue);
        else if (TryGetTransferMeToMePayoutBankSameDay(
            out var transferMeToMePayoutBankSameDayValue)) onTransferMeToMePayoutBankSameDay(
            transferMeToMePayoutBankSameDayValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(TransfersRequest)} holds no value.");
    }
}

file sealed class TransfersRequestConverter : JsonConverter<TransfersRequest>
{
    public override TransfersRequest Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<TransferMinimalFields>(root, options, out var transferMinimalFieldsValue))
        {
            return TransfersRequest.TransferMinimalFields(transferMinimalFieldsValue);
        }
        if (JsonSerializer.TryDeserialize<TransferAllFields>(root, options, out var transferAllFieldsValue))
        {
            return TransfersRequest.TransferAllFields(transferAllFieldsValue);
        }
        if (JsonSerializer.TryDeserialize<Transfer3DSecure>(root, options, out var transfer3DSecureValue))
        {
            return TransfersRequest.Transfer3DSecure(transfer3DSecureValue);
        }
        if (JsonSerializer.TryDeserialize<Transfer3DSecureSession>(root, options, out var transfer3DSecureSessionValue))
        {
            return TransfersRequest.Transfer3DSecureSession(transfer3DSecureSessionValue);
        }
        if (JsonSerializer.TryDeserialize<TransferBankPayout>(root, options, out var transferBankPayoutValue))
        {
            return TransfersRequest.TransferBankPayout(transferBankPayoutValue);
        }
        if (JsonSerializer.TryDeserialize<TransferBankPayoutSameDay>(
            root,
            options,
            out var transferBankPayoutSameDayValue))
        {
            return TransfersRequest.TransferBankPayoutSameDay(transferBankPayoutSameDayValue);
        }
        if (JsonSerializer.TryDeserialize<TransferCardPayout>(root, options, out var transferCardPayoutValue))
        {
            return TransfersRequest.TransferCardPayout(transferCardPayoutValue);
        }
        if (JsonSerializer.TryDeserialize<TransferCardPresent>(root, options, out var transferCardPresentValue))
        {
            return TransfersRequest.TransferCardPresent(transferCardPresentValue);
        }
        if (JsonSerializer.TryDeserialize<TransferCardPresentUnreferencedRefund>(
            root,
            options,
            out var transferCardPresentUnreferencedRefundValue))
        {
            return TransfersRequest.TransferCardPresentUnreferencedRefund(transferCardPresentUnreferencedRefundValue);
        }
        if (JsonSerializer.TryDeserialize<TransferCardVerificationChecks>(
            root,
            options,
            out var transferCardVerificationChecksValue))
        {
            return TransfersRequest.TransferCardVerificationChecks(transferCardVerificationChecksValue);
        }
        if (JsonSerializer.TryDeserialize<TransferConvenienceFee>(root, options, out var transferConvenienceFeeValue))
        {
            return TransfersRequest.TransferConvenienceFee(transferConvenienceFeeValue);
        }
        if (JsonSerializer.TryDeserialize<TransferFeeProfile>(root, options, out var transferFeeProfileValue))
        {
            return TransfersRequest.TransferFeeProfile(transferFeeProfileValue);
        }
        if (JsonSerializer.TryDeserialize<TransferMotorVehicleRental>(
            root,
            options,
            out var transferMotorVehicleRentalValue))
        {
            return TransfersRequest.TransferMotorVehicleRental(transferMotorVehicleRentalValue);
        }
        if (JsonSerializer.TryDeserialize<TransferLodging>(root, options, out var transferLodgingValue))
        {
            return TransfersRequest.TransferLodging(transferLodgingValue);
        }
        if (JsonSerializer.TryDeserialize<TransferGaming>(root, options, out var transferGamingValue))
        {
            return TransfersRequest.TransferGaming(transferGamingValue);
        }
        if (JsonSerializer.TryDeserialize<TransferLevel2Processing>(
            root,
            options,
            out var transferLevel2ProcessingValue))
        {
            return TransfersRequest.TransferLevel2Processing(transferLevel2ProcessingValue);
        }
        if (JsonSerializer.TryDeserialize<TransferLevel3Processing>(
            root,
            options,
            out var transferLevel3ProcessingValue))
        {
            return TransfersRequest.TransferLevel3Processing(transferLevel3ProcessingValue);
        }
        if (JsonSerializer.TryDeserialize<TransferPartialAuthorization>(
            root,
            options,
            out var transferPartialAuthorizationValue))
        {
            return TransfersRequest.TransferPartialAuthorization(transferPartialAuthorizationValue);
        }
        if (JsonSerializer.TryDeserialize<TransferRecurringOrUnscheduled>(
            root,
            options,
            out var transferRecurringOrUnscheduledValue))
        {
            return TransfersRequest.TransferRecurringOrUnscheduled(transferRecurringOrUnscheduledValue);
        }
        if (JsonSerializer.TryDeserialize<TransferRentSurcharge>(root, options, out var transferRentSurchargeValue))
        {
            return TransfersRequest.TransferRentSurcharge(transferRentSurchargeValue);
        }
        if (JsonSerializer.TryDeserialize<TransferSplitTransaction>(
            root,
            options,
            out var transferSplitTransactionValue))
        {
            return TransfersRequest.TransferSplitTransaction(transferSplitTransactionValue);
        }
        if (JsonSerializer.TryDeserialize<TransferSurcharge>(root, options, out var transferSurchargeValue))
        {
            return TransfersRequest.TransferSurcharge(transferSurchargeValue);
        }
        if (JsonSerializer.TryDeserialize<TransferMeToMePullCard>(root, options, out var transferMeToMePullCardValue))
        {
            return TransfersRequest.TransferMeToMePullCard(transferMeToMePullCardValue);
        }
        if (JsonSerializer.TryDeserialize<TransferMeToMePullBank>(root, options, out var transferMeToMePullBankValue))
        {
            return TransfersRequest.TransferMeToMePullBank(transferMeToMePullBankValue);
        }
        if (JsonSerializer.TryDeserialize<TransferMeToMePullBankSameDay>(
            root,
            options,
            out var transferMeToMePullBankSameDayValue))
        {
            return TransfersRequest.TransferMeToMePullBankSameDay(transferMeToMePullBankSameDayValue);
        }
        if (JsonSerializer.TryDeserialize<TransferMeToMePayoutCard>(
            root,
            options,
            out var transferMeToMePayoutCardValue))
        {
            return TransfersRequest.TransferMeToMePayoutCard(transferMeToMePayoutCardValue);
        }
        if (JsonSerializer.TryDeserialize<TransferMeToMePayoutBank>(
            root,
            options,
            out var transferMeToMePayoutBankValue))
        {
            return TransfersRequest.TransferMeToMePayoutBank(transferMeToMePayoutBankValue);
        }
        if (JsonSerializer.TryDeserialize<TransferMeToMePayoutBankSameDay>(
            root,
            options,
            out var transferMeToMePayoutBankSameDayValue))
        {
            return TransfersRequest.TransferMeToMePayoutBankSameDay(transferMeToMePayoutBankSameDayValue);
        }
        return TransfersRequest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, TransfersRequest value, JsonSerializerOptions options)
    {
        if (value.TryGetTransferMinimalFields(out var transferMinimalFieldsValue))
        {
            JsonSerializer.Serialize(writer, transferMinimalFieldsValue, options);
        }
        else if (value.TryGetTransferAllFields(out var transferAllFieldsValue))
        {
            JsonSerializer.Serialize(writer, transferAllFieldsValue, options);
        }
        else if (value.TryGetTransfer3DSecure(out var transfer3DSecureValue))
        {
            JsonSerializer.Serialize(writer, transfer3DSecureValue, options);
        }
        else if (value.TryGetTransfer3DSecureSession(out var transfer3DSecureSessionValue))
        {
            JsonSerializer.Serialize(writer, transfer3DSecureSessionValue, options);
        }
        else if (value.TryGetTransferBankPayout(out var transferBankPayoutValue))
        {
            JsonSerializer.Serialize(writer, transferBankPayoutValue, options);
        }
        else if (value.TryGetTransferBankPayoutSameDay(out var transferBankPayoutSameDayValue))
        {
            JsonSerializer.Serialize(writer, transferBankPayoutSameDayValue, options);
        }
        else if (value.TryGetTransferCardPayout(out var transferCardPayoutValue))
        {
            JsonSerializer.Serialize(writer, transferCardPayoutValue, options);
        }
        else if (value.TryGetTransferCardPresent(out var transferCardPresentValue))
        {
            JsonSerializer.Serialize(writer, transferCardPresentValue, options);
        }
        else if (value.TryGetTransferCardPresentUnreferencedRefund(out var transferCardPresentUnreferencedRefundValue))
        {
            JsonSerializer.Serialize(writer, transferCardPresentUnreferencedRefundValue, options);
        }
        else if (value.TryGetTransferCardVerificationChecks(out var transferCardVerificationChecksValue))
        {
            JsonSerializer.Serialize(writer, transferCardVerificationChecksValue, options);
        }
        else if (value.TryGetTransferConvenienceFee(out var transferConvenienceFeeValue))
        {
            JsonSerializer.Serialize(writer, transferConvenienceFeeValue, options);
        }
        else if (value.TryGetTransferFeeProfile(out var transferFeeProfileValue))
        {
            JsonSerializer.Serialize(writer, transferFeeProfileValue, options);
        }
        else if (value.TryGetTransferMotorVehicleRental(out var transferMotorVehicleRentalValue))
        {
            JsonSerializer.Serialize(writer, transferMotorVehicleRentalValue, options);
        }
        else if (value.TryGetTransferLodging(out var transferLodgingValue))
        {
            JsonSerializer.Serialize(writer, transferLodgingValue, options);
        }
        else if (value.TryGetTransferGaming(out var transferGamingValue))
        {
            JsonSerializer.Serialize(writer, transferGamingValue, options);
        }
        else if (value.TryGetTransferLevel2Processing(out var transferLevel2ProcessingValue))
        {
            JsonSerializer.Serialize(writer, transferLevel2ProcessingValue, options);
        }
        else if (value.TryGetTransferLevel3Processing(out var transferLevel3ProcessingValue))
        {
            JsonSerializer.Serialize(writer, transferLevel3ProcessingValue, options);
        }
        else if (value.TryGetTransferPartialAuthorization(out var transferPartialAuthorizationValue))
        {
            JsonSerializer.Serialize(writer, transferPartialAuthorizationValue, options);
        }
        else if (value.TryGetTransferRecurringOrUnscheduled(out var transferRecurringOrUnscheduledValue))
        {
            JsonSerializer.Serialize(writer, transferRecurringOrUnscheduledValue, options);
        }
        else if (value.TryGetTransferRentSurcharge(out var transferRentSurchargeValue))
        {
            JsonSerializer.Serialize(writer, transferRentSurchargeValue, options);
        }
        else if (value.TryGetTransferSplitTransaction(out var transferSplitTransactionValue))
        {
            JsonSerializer.Serialize(writer, transferSplitTransactionValue, options);
        }
        else if (value.TryGetTransferSurcharge(out var transferSurchargeValue))
        {
            JsonSerializer.Serialize(writer, transferSurchargeValue, options);
        }
        else if (value.TryGetTransferMeToMePullCard(out var transferMeToMePullCardValue))
        {
            JsonSerializer.Serialize(writer, transferMeToMePullCardValue, options);
        }
        else if (value.TryGetTransferMeToMePullBank(out var transferMeToMePullBankValue))
        {
            JsonSerializer.Serialize(writer, transferMeToMePullBankValue, options);
        }
        else if (value.TryGetTransferMeToMePullBankSameDay(out var transferMeToMePullBankSameDayValue))
        {
            JsonSerializer.Serialize(writer, transferMeToMePullBankSameDayValue, options);
        }
        else if (value.TryGetTransferMeToMePayoutCard(out var transferMeToMePayoutCardValue))
        {
            JsonSerializer.Serialize(writer, transferMeToMePayoutCardValue, options);
        }
        else if (value.TryGetTransferMeToMePayoutBank(out var transferMeToMePayoutBankValue))
        {
            JsonSerializer.Serialize(writer, transferMeToMePayoutBankValue, options);
        }
        else if (value.TryGetTransferMeToMePayoutBankSameDay(out var transferMeToMePayoutBankSameDayValue))
        {
            JsonSerializer.Serialize(writer, transferMeToMePayoutBankSameDayValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(TransfersRequest)} contains no valid value to serialize.");
        }
    }
}
