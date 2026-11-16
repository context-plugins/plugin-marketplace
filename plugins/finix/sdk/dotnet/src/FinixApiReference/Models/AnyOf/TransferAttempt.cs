using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(TransferAttemptConverter))]
public record TransferAttempt
{
    private readonly Optional<TransferAttemptCheckoutForm> _transferAttemptCheckoutFormValue;

    private readonly Optional<TransferAttemptPaymentLink> _transferAttemptPaymentLinkValue;

    private readonly Optional<TransferAttemptPayoutLink> _transferAttemptPayoutLinkValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private TransferAttempt(Optional<TransferAttemptCheckoutForm> transferAttemptCheckoutFormValue,
        Optional<TransferAttemptPaymentLink> transferAttemptPaymentLinkValue,
        Optional<TransferAttemptPayoutLink> transferAttemptPayoutLinkValue,
        Optional<UnknownArm> unknownValue)
    {
        _transferAttemptCheckoutFormValue = transferAttemptCheckoutFormValue;
        _transferAttemptPaymentLinkValue = transferAttemptPaymentLinkValue;
        _transferAttemptPayoutLinkValue = transferAttemptPayoutLinkValue;
        _unknownValue = unknownValue;
    }

    public static TransferAttempt TransferAttemptCheckoutForm(TransferAttemptCheckoutForm value) =>
        new(Optional<TransferAttemptCheckoutForm>.Some(value), default, default, default);

    public static TransferAttempt TransferAttemptPaymentLink(TransferAttemptPaymentLink value) =>
        new(default, Optional<TransferAttemptPaymentLink>.Some(value), default, default);

    public static TransferAttempt TransferAttemptPayoutLink(TransferAttemptPayoutLink value) =>
        new(default, default, Optional<TransferAttemptPayoutLink>.Some(value), default);

    internal static TransferAttempt Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetTransferAttemptCheckoutForm([NotNullWhen(true)] out TransferAttemptCheckoutForm? value) =>
        _transferAttemptCheckoutFormValue.TryGetValue(out value);

    public bool TryGetTransferAttemptPaymentLink([NotNullWhen(true)] out TransferAttemptPaymentLink? value) =>
        _transferAttemptPaymentLinkValue.TryGetValue(out value);

    public bool TryGetTransferAttemptPayoutLink([NotNullWhen(true)] out TransferAttemptPayoutLink? value) =>
        _transferAttemptPayoutLinkValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator TransferAttempt(TransferAttemptCheckoutForm value) =>
        TransferAttemptCheckoutForm(value);

    public static implicit operator TransferAttempt(TransferAttemptPaymentLink value) =>
        TransferAttemptPaymentLink(value);

    public static implicit operator TransferAttempt(TransferAttemptPayoutLink value) =>
        TransferAttemptPayoutLink(value);

    public TResult Match<TResult>(Func<TransferAttemptCheckoutForm, TResult> onTransferAttemptCheckoutForm,
        Func<TransferAttemptPaymentLink, TResult> onTransferAttemptPaymentLink,
        Func<TransferAttemptPayoutLink, TResult> onTransferAttemptPayoutLink,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetTransferAttemptCheckoutForm(
                out var transferAttemptCheckoutFormValue) => onTransferAttemptCheckoutForm(
                transferAttemptCheckoutFormValue),
            _ when TryGetTransferAttemptPaymentLink(
                out var transferAttemptPaymentLinkValue) => onTransferAttemptPaymentLink(
                transferAttemptPaymentLinkValue),
            _ when TryGetTransferAttemptPayoutLink(
                out var transferAttemptPayoutLinkValue) => onTransferAttemptPayoutLink(transferAttemptPayoutLinkValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(TransferAttempt)} holds no value.")
        };

    public void Match(Action<TransferAttemptCheckoutForm> onTransferAttemptCheckoutForm,
        Action<TransferAttemptPaymentLink> onTransferAttemptPaymentLink,
        Action<TransferAttemptPayoutLink> onTransferAttemptPayoutLink,
        Action<JsonElement> otherwise)
    {
        if (TryGetTransferAttemptCheckoutForm(out var transferAttemptCheckoutFormValue)) onTransferAttemptCheckoutForm(
            transferAttemptCheckoutFormValue);
        else if (TryGetTransferAttemptPaymentLink(
            out var transferAttemptPaymentLinkValue)) onTransferAttemptPaymentLink(transferAttemptPaymentLinkValue);
        else if (TryGetTransferAttemptPayoutLink(out var transferAttemptPayoutLinkValue)) onTransferAttemptPayoutLink(
            transferAttemptPayoutLinkValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(TransferAttempt)} holds no value.");
    }
}

file sealed class TransferAttemptConverter : JsonConverter<TransferAttempt>
{
    public override TransferAttempt Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<TransferAttemptCheckoutForm>(
            root,
            options,
            out var transferAttemptCheckoutFormValue))
        {
            return TransferAttempt.TransferAttemptCheckoutForm(transferAttemptCheckoutFormValue);
        }
        if (JsonSerializer.TryDeserialize<TransferAttemptPaymentLink>(
            root,
            options,
            out var transferAttemptPaymentLinkValue))
        {
            return TransferAttempt.TransferAttemptPaymentLink(transferAttemptPaymentLinkValue);
        }
        if (JsonSerializer.TryDeserialize<TransferAttemptPayoutLink>(
            root,
            options,
            out var transferAttemptPayoutLinkValue))
        {
            return TransferAttempt.TransferAttemptPayoutLink(transferAttemptPayoutLinkValue);
        }
        return TransferAttempt.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, TransferAttempt value, JsonSerializerOptions options)
    {
        if (value.TryGetTransferAttemptCheckoutForm(out var transferAttemptCheckoutFormValue))
        {
            JsonSerializer.Serialize(writer, transferAttemptCheckoutFormValue, options);
        }
        else if (value.TryGetTransferAttemptPaymentLink(out var transferAttemptPaymentLinkValue))
        {
            JsonSerializer.Serialize(writer, transferAttemptPaymentLinkValue, options);
        }
        else if (value.TryGetTransferAttemptPayoutLink(out var transferAttemptPayoutLinkValue))
        {
            JsonSerializer.Serialize(writer, transferAttemptPayoutLinkValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(TransferAttempt)} contains no valid value to serialize.");
        }
    }
}
