using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(TransfersReversalsRequestConverter))]
public record TransfersReversalsRequest
{
    private readonly Optional<RefundTransfer> _refundTransferValue;

    private readonly Optional<RefundTransferSplitTransaction> _refundTransferSplitTransactionValue;

    private readonly Optional<RefundCardPresentTransferReferenced> _refundCardPresentTransferReferencedValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private TransfersReversalsRequest(Optional<RefundTransfer> refundTransferValue,
        Optional<RefundTransferSplitTransaction> refundTransferSplitTransactionValue,
        Optional<RefundCardPresentTransferReferenced> refundCardPresentTransferReferencedValue,
        Optional<UnknownArm> unknownValue)
    {
        _refundTransferValue = refundTransferValue;
        _refundTransferSplitTransactionValue = refundTransferSplitTransactionValue;
        _refundCardPresentTransferReferencedValue = refundCardPresentTransferReferencedValue;
        _unknownValue = unknownValue;
    }

    public static TransfersReversalsRequest RefundTransfer(RefundTransfer value) =>
        new(Optional<RefundTransfer>.Some(value), default, default, default);

    public static TransfersReversalsRequest RefundTransferSplitTransaction(RefundTransferSplitTransaction value) =>
        new(default, Optional<RefundTransferSplitTransaction>.Some(value), default, default);

    public static TransfersReversalsRequest RefundCardPresentTransferReferenced(RefundCardPresentTransferReferenced value) =>
        new(default, default, Optional<RefundCardPresentTransferReferenced>.Some(value), default);

    internal static TransfersReversalsRequest Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetRefundTransfer([NotNullWhen(true)] out RefundTransfer? value) =>
        _refundTransferValue.TryGetValue(out value);

    public bool TryGetRefundTransferSplitTransaction([NotNullWhen(true)] out RefundTransferSplitTransaction? value) =>
        _refundTransferSplitTransactionValue.TryGetValue(out value);

    public bool TryGetRefundCardPresentTransferReferenced([NotNullWhen(true)] out RefundCardPresentTransferReferenced? value) =>
        _refundCardPresentTransferReferencedValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator TransfersReversalsRequest(RefundTransfer value) => RefundTransfer(value);

    public static implicit operator TransfersReversalsRequest(RefundTransferSplitTransaction value) =>
        RefundTransferSplitTransaction(value);

    public static implicit operator TransfersReversalsRequest(RefundCardPresentTransferReferenced value) =>
        RefundCardPresentTransferReferenced(value);

    public TResult Match<TResult>(Func<RefundTransfer, TResult> onRefundTransfer,
        Func<RefundTransferSplitTransaction, TResult> onRefundTransferSplitTransaction,
        Func<RefundCardPresentTransferReferenced, TResult> onRefundCardPresentTransferReferenced,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetRefundTransfer(out var refundTransferValue) => onRefundTransfer(refundTransferValue),
            _ when TryGetRefundTransferSplitTransaction(
                out var refundTransferSplitTransactionValue) => onRefundTransferSplitTransaction(
                refundTransferSplitTransactionValue),
            _ when TryGetRefundCardPresentTransferReferenced(
                out var refundCardPresentTransferReferencedValue) => onRefundCardPresentTransferReferenced(
                refundCardPresentTransferReferencedValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(TransfersReversalsRequest)} holds no value.")
        };

    public void Match(Action<RefundTransfer> onRefundTransfer,
        Action<RefundTransferSplitTransaction> onRefundTransferSplitTransaction,
        Action<RefundCardPresentTransferReferenced> onRefundCardPresentTransferReferenced,
        Action<JsonElement> otherwise)
    {
        if (TryGetRefundTransfer(out var refundTransferValue)) onRefundTransfer(refundTransferValue);
        else if (TryGetRefundTransferSplitTransaction(
            out var refundTransferSplitTransactionValue)) onRefundTransferSplitTransaction(
            refundTransferSplitTransactionValue);
        else if (TryGetRefundCardPresentTransferReferenced(
            out var refundCardPresentTransferReferencedValue)) onRefundCardPresentTransferReferenced(
            refundCardPresentTransferReferencedValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(TransfersReversalsRequest)} holds no value.");
    }
}

file sealed class TransfersReversalsRequestConverter : JsonConverter<TransfersReversalsRequest>
{
    public override TransfersReversalsRequest Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<RefundTransfer>(root, options, out var refundTransferValue))
        {
            return TransfersReversalsRequest.RefundTransfer(refundTransferValue);
        }
        if (JsonSerializer.TryDeserialize<RefundTransferSplitTransaction>(
            root,
            options,
            out var refundTransferSplitTransactionValue))
        {
            return TransfersReversalsRequest.RefundTransferSplitTransaction(refundTransferSplitTransactionValue);
        }
        if (JsonSerializer.TryDeserialize<RefundCardPresentTransferReferenced>(
            root,
            options,
            out var refundCardPresentTransferReferencedValue))
        {
            return TransfersReversalsRequest.RefundCardPresentTransferReferenced(
                refundCardPresentTransferReferencedValue);
        }
        return TransfersReversalsRequest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, TransfersReversalsRequest value, JsonSerializerOptions options)
    {
        if (value.TryGetRefundTransfer(out var refundTransferValue))
        {
            JsonSerializer.Serialize(writer, refundTransferValue, options);
        }
        else if (value.TryGetRefundTransferSplitTransaction(out var refundTransferSplitTransactionValue))
        {
            JsonSerializer.Serialize(writer, refundTransferSplitTransactionValue, options);
        }
        else if (value.TryGetRefundCardPresentTransferReferenced(out var refundCardPresentTransferReferencedValue))
        {
            JsonSerializer.Serialize(writer, refundCardPresentTransferReferencedValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(TransfersReversalsRequest)} contains no valid value to serialize.");
        }
    }
}
