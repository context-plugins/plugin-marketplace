using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(PaymentInstrumentAssociationsRequestConverter))]
public record PaymentInstrumentAssociationsRequest
{
    private readonly Optional<UpdatePaymentInstrumentAssociationTags> _updatePaymentInstrumentAssociationTagsValue;

    private readonly Optional<UpdatePaymentInstrumentAssociationDisable> _updatePaymentInstrumentAssociationDisableValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private PaymentInstrumentAssociationsRequest(Optional<UpdatePaymentInstrumentAssociationTags> updatePaymentInstrumentAssociationTagsValue,
        Optional<UpdatePaymentInstrumentAssociationDisable> updatePaymentInstrumentAssociationDisableValue,
        Optional<UnknownArm> unknownValue)
    {
        _updatePaymentInstrumentAssociationTagsValue = updatePaymentInstrumentAssociationTagsValue;
        _updatePaymentInstrumentAssociationDisableValue = updatePaymentInstrumentAssociationDisableValue;
        _unknownValue = unknownValue;
    }

    public static PaymentInstrumentAssociationsRequest UpdatePaymentInstrumentAssociationTags(UpdatePaymentInstrumentAssociationTags value) =>
        new(Optional<UpdatePaymentInstrumentAssociationTags>.Some(value), default, default);

    public static PaymentInstrumentAssociationsRequest UpdatePaymentInstrumentAssociationDisable(UpdatePaymentInstrumentAssociationDisable value) =>
        new(default, Optional<UpdatePaymentInstrumentAssociationDisable>.Some(value), default);

    internal static PaymentInstrumentAssociationsRequest Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUpdatePaymentInstrumentAssociationTags([NotNullWhen(true)] out UpdatePaymentInstrumentAssociationTags? value) =>
        _updatePaymentInstrumentAssociationTagsValue.TryGetValue(out value);

    public bool TryGetUpdatePaymentInstrumentAssociationDisable([NotNullWhen(true)] out UpdatePaymentInstrumentAssociationDisable? value) =>
        _updatePaymentInstrumentAssociationDisableValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator PaymentInstrumentAssociationsRequest(UpdatePaymentInstrumentAssociationTags value) =>
        UpdatePaymentInstrumentAssociationTags(value);

    public static implicit operator PaymentInstrumentAssociationsRequest(UpdatePaymentInstrumentAssociationDisable value) =>
        UpdatePaymentInstrumentAssociationDisable(value);

    public TResult Match<TResult>(Func<UpdatePaymentInstrumentAssociationTags, TResult> onUpdatePaymentInstrumentAssociationTags,
        Func<UpdatePaymentInstrumentAssociationDisable, TResult> onUpdatePaymentInstrumentAssociationDisable,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUpdatePaymentInstrumentAssociationTags(
                out var updatePaymentInstrumentAssociationTagsValue) => onUpdatePaymentInstrumentAssociationTags(
                updatePaymentInstrumentAssociationTagsValue),
            _ when TryGetUpdatePaymentInstrumentAssociationDisable(
                out var updatePaymentInstrumentAssociationDisableValue) => onUpdatePaymentInstrumentAssociationDisable(
                updatePaymentInstrumentAssociationDisableValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(PaymentInstrumentAssociationsRequest)} holds no value.")
        };

    public void Match(Action<UpdatePaymentInstrumentAssociationTags> onUpdatePaymentInstrumentAssociationTags,
        Action<UpdatePaymentInstrumentAssociationDisable> onUpdatePaymentInstrumentAssociationDisable,
        Action<JsonElement> otherwise)
    {
        if (TryGetUpdatePaymentInstrumentAssociationTags(
            out var updatePaymentInstrumentAssociationTagsValue)) onUpdatePaymentInstrumentAssociationTags(
            updatePaymentInstrumentAssociationTagsValue);
        else if (TryGetUpdatePaymentInstrumentAssociationDisable(
            out var updatePaymentInstrumentAssociationDisableValue)) onUpdatePaymentInstrumentAssociationDisable(
            updatePaymentInstrumentAssociationDisableValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(PaymentInstrumentAssociationsRequest)} holds no value.");
    }
}

file sealed class PaymentInstrumentAssociationsRequestConverter : JsonConverter<PaymentInstrumentAssociationsRequest>
{
    public override PaymentInstrumentAssociationsRequest Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<UpdatePaymentInstrumentAssociationTags>(
            root,
            options,
            out var updatePaymentInstrumentAssociationTagsValue))
        {
            return PaymentInstrumentAssociationsRequest.UpdatePaymentInstrumentAssociationTags(
                updatePaymentInstrumentAssociationTagsValue);
        }
        if (JsonSerializer.TryDeserialize<UpdatePaymentInstrumentAssociationDisable>(
            root,
            options,
            out var updatePaymentInstrumentAssociationDisableValue))
        {
            return PaymentInstrumentAssociationsRequest.UpdatePaymentInstrumentAssociationDisable(
                updatePaymentInstrumentAssociationDisableValue);
        }
        return PaymentInstrumentAssociationsRequest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        PaymentInstrumentAssociationsRequest value,
        JsonSerializerOptions options)
    {
        if (value.TryGetUpdatePaymentInstrumentAssociationTags(out var updatePaymentInstrumentAssociationTagsValue))
        {
            JsonSerializer.Serialize(writer, updatePaymentInstrumentAssociationTagsValue, options);
        }
        else if (value.TryGetUpdatePaymentInstrumentAssociationDisable(
            out var updatePaymentInstrumentAssociationDisableValue))
        {
            JsonSerializer.Serialize(writer, updatePaymentInstrumentAssociationDisableValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException(
                $"{nameof(PaymentInstrumentAssociationsRequest)} contains no valid value to serialize.");
        }
    }
}
