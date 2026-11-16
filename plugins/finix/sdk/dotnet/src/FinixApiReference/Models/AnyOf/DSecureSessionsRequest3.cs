using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(DSecureSessionsRequest3Converter))]
public record DSecureSessionsRequest3
{
    private readonly Optional<DSecureSessionPaymentInstrument3> _dSecureSessionPaymentInstrument3Value;

    private readonly Optional<DSecureSessionToken3> _dSecureSessionToken3Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private DSecureSessionsRequest3(Optional<DSecureSessionPaymentInstrument3> dSecureSessionPaymentInstrument3Value,
        Optional<DSecureSessionToken3> dSecureSessionToken3Value,
        Optional<UnknownArm> unknownValue)
    {
        _dSecureSessionPaymentInstrument3Value = dSecureSessionPaymentInstrument3Value;
        _dSecureSessionToken3Value = dSecureSessionToken3Value;
        _unknownValue = unknownValue;
    }

    public static DSecureSessionsRequest3 DSecureSessionPaymentInstrument3(DSecureSessionPaymentInstrument3 value) =>
        new(Optional<DSecureSessionPaymentInstrument3>.Some(value), default, default);

    public static DSecureSessionsRequest3 DSecureSessionToken3(DSecureSessionToken3 value) =>
        new(default, Optional<DSecureSessionToken3>.Some(value), default);

    internal static DSecureSessionsRequest3 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDSecureSessionPaymentInstrument3([NotNullWhen(true)] out DSecureSessionPaymentInstrument3? value) =>
        _dSecureSessionPaymentInstrument3Value.TryGetValue(out value);

    public bool TryGetDSecureSessionToken3([NotNullWhen(true)] out DSecureSessionToken3? value) =>
        _dSecureSessionToken3Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator DSecureSessionsRequest3(DSecureSessionPaymentInstrument3 value) =>
        DSecureSessionPaymentInstrument3(value);

    public static implicit operator DSecureSessionsRequest3(DSecureSessionToken3 value) => DSecureSessionToken3(value);

    public TResult Match<TResult>(Func<DSecureSessionPaymentInstrument3, TResult> onDSecureSessionPaymentInstrument3,
        Func<DSecureSessionToken3, TResult> onDSecureSessionToken3,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDSecureSessionPaymentInstrument3(
                out var dSecureSessionPaymentInstrument3Value) => onDSecureSessionPaymentInstrument3(
                dSecureSessionPaymentInstrument3Value),
            _ when TryGetDSecureSessionToken3(out var dSecureSessionToken3Value) => onDSecureSessionToken3(
                dSecureSessionToken3Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(DSecureSessionsRequest3)} holds no value.")
        };

    public void Match(Action<DSecureSessionPaymentInstrument3> onDSecureSessionPaymentInstrument3,
        Action<DSecureSessionToken3> onDSecureSessionToken3,
        Action<JsonElement> otherwise)
    {
        if (TryGetDSecureSessionPaymentInstrument3(
            out var dSecureSessionPaymentInstrument3Value)) onDSecureSessionPaymentInstrument3(
            dSecureSessionPaymentInstrument3Value);
        else if (TryGetDSecureSessionToken3(out var dSecureSessionToken3Value)) onDSecureSessionToken3(
            dSecureSessionToken3Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(DSecureSessionsRequest3)} holds no value.");
    }
}

file sealed class DSecureSessionsRequest3Converter : JsonConverter<DSecureSessionsRequest3>
{
    public override DSecureSessionsRequest3 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<DSecureSessionPaymentInstrument3>(
            root,
            options,
            out var dSecureSessionPaymentInstrument3Value))
        {
            return DSecureSessionsRequest3.DSecureSessionPaymentInstrument3(dSecureSessionPaymentInstrument3Value);
        }
        if (JsonSerializer.TryDeserialize<DSecureSessionToken3>(root, options, out var dSecureSessionToken3Value))
        {
            return DSecureSessionsRequest3.DSecureSessionToken3(dSecureSessionToken3Value);
        }
        return DSecureSessionsRequest3.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, DSecureSessionsRequest3 value, JsonSerializerOptions options)
    {
        if (value.TryGetDSecureSessionPaymentInstrument3(out var dSecureSessionPaymentInstrument3Value))
        {
            JsonSerializer.Serialize(writer, dSecureSessionPaymentInstrument3Value, options);
        }
        else if (value.TryGetDSecureSessionToken3(out var dSecureSessionToken3Value))
        {
            JsonSerializer.Serialize(writer, dSecureSessionToken3Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(DSecureSessionsRequest3)} contains no valid value to serialize.");
        }
    }
}
