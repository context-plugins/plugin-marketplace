using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(ReceiptsRequestConverter))]
public record ReceiptsRequest
{
    private readonly Optional<ReceiptMinimalFields> _receiptMinimalFieldsValue;

    private readonly Optional<ReceiptAllFields> _receiptAllFieldsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ReceiptsRequest(Optional<ReceiptMinimalFields> receiptMinimalFieldsValue,
        Optional<ReceiptAllFields> receiptAllFieldsValue,
        Optional<UnknownArm> unknownValue)
    {
        _receiptMinimalFieldsValue = receiptMinimalFieldsValue;
        _receiptAllFieldsValue = receiptAllFieldsValue;
        _unknownValue = unknownValue;
    }

    public static ReceiptsRequest ReceiptMinimalFields(ReceiptMinimalFields value) =>
        new(Optional<ReceiptMinimalFields>.Some(value), default, default);

    public static ReceiptsRequest ReceiptAllFields(ReceiptAllFields value) =>
        new(default, Optional<ReceiptAllFields>.Some(value), default);

    internal static ReceiptsRequest Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetReceiptMinimalFields([NotNullWhen(true)] out ReceiptMinimalFields? value) =>
        _receiptMinimalFieldsValue.TryGetValue(out value);

    public bool TryGetReceiptAllFields([NotNullWhen(true)] out ReceiptAllFields? value) =>
        _receiptAllFieldsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ReceiptsRequest(ReceiptMinimalFields value) => ReceiptMinimalFields(value);

    public static implicit operator ReceiptsRequest(ReceiptAllFields value) => ReceiptAllFields(value);

    public TResult Match<TResult>(Func<ReceiptMinimalFields, TResult> onReceiptMinimalFields,
        Func<ReceiptAllFields, TResult> onReceiptAllFields,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetReceiptMinimalFields(out var receiptMinimalFieldsValue) => onReceiptMinimalFields(
                receiptMinimalFieldsValue),
            _ when TryGetReceiptAllFields(out var receiptAllFieldsValue) => onReceiptAllFields(receiptAllFieldsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ReceiptsRequest)} holds no value.")
        };

    public void Match(Action<ReceiptMinimalFields> onReceiptMinimalFields,
        Action<ReceiptAllFields> onReceiptAllFields,
        Action<JsonElement> otherwise)
    {
        if (TryGetReceiptMinimalFields(out var receiptMinimalFieldsValue)) onReceiptMinimalFields(
            receiptMinimalFieldsValue);
        else if (TryGetReceiptAllFields(out var receiptAllFieldsValue)) onReceiptAllFields(receiptAllFieldsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ReceiptsRequest)} holds no value.");
    }
}

file sealed class ReceiptsRequestConverter : JsonConverter<ReceiptsRequest>
{
    public override ReceiptsRequest Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ReceiptMinimalFields>(root, options, out var receiptMinimalFieldsValue))
        {
            return ReceiptsRequest.ReceiptMinimalFields(receiptMinimalFieldsValue);
        }
        if (JsonSerializer.TryDeserialize<ReceiptAllFields>(root, options, out var receiptAllFieldsValue))
        {
            return ReceiptsRequest.ReceiptAllFields(receiptAllFieldsValue);
        }
        return ReceiptsRequest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ReceiptsRequest value, JsonSerializerOptions options)
    {
        if (value.TryGetReceiptMinimalFields(out var receiptMinimalFieldsValue))
        {
            JsonSerializer.Serialize(writer, receiptMinimalFieldsValue, options);
        }
        else if (value.TryGetReceiptAllFields(out var receiptAllFieldsValue))
        {
            JsonSerializer.Serialize(writer, receiptAllFieldsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ReceiptsRequest)} contains no valid value to serialize.");
        }
    }
}
