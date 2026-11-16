using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(PaymentInstrumentsRequest2Converter))]
public record PaymentInstrumentsRequest2
{
    private readonly Optional<CvvVerification> _cvvVerificationValue;

    private readonly Optional<AddressVerification> _addressVerificationValue;

    private readonly Optional<NameVerification> _nameVerificationValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private PaymentInstrumentsRequest2(Optional<CvvVerification> cvvVerificationValue,
        Optional<AddressVerification> addressVerificationValue,
        Optional<NameVerification> nameVerificationValue,
        Optional<UnknownArm> unknownValue)
    {
        _cvvVerificationValue = cvvVerificationValue;
        _addressVerificationValue = addressVerificationValue;
        _nameVerificationValue = nameVerificationValue;
        _unknownValue = unknownValue;
    }

    public static PaymentInstrumentsRequest2 CvvVerification(CvvVerification value) =>
        new(Optional<CvvVerification>.Some(value), default, default, default);

    public static PaymentInstrumentsRequest2 AddressVerification(AddressVerification value) =>
        new(default, Optional<AddressVerification>.Some(value), default, default);

    public static PaymentInstrumentsRequest2 NameVerification(NameVerification value) =>
        new(default, default, Optional<NameVerification>.Some(value), default);

    internal static PaymentInstrumentsRequest2 Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetCvvVerification([NotNullWhen(true)] out CvvVerification? value) =>
        _cvvVerificationValue.TryGetValue(out value);

    public bool TryGetAddressVerification([NotNullWhen(true)] out AddressVerification? value) =>
        _addressVerificationValue.TryGetValue(out value);

    public bool TryGetNameVerification([NotNullWhen(true)] out NameVerification? value) =>
        _nameVerificationValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator PaymentInstrumentsRequest2(CvvVerification value) => CvvVerification(value);

    public static implicit operator PaymentInstrumentsRequest2(AddressVerification value) => AddressVerification(value);

    public static implicit operator PaymentInstrumentsRequest2(NameVerification value) => NameVerification(value);

    public TResult Match<TResult>(Func<CvvVerification, TResult> onCvvVerification,
        Func<AddressVerification, TResult> onAddressVerification,
        Func<NameVerification, TResult> onNameVerification,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCvvVerification(out var cvvVerificationValue) => onCvvVerification(cvvVerificationValue),
            _ when TryGetAddressVerification(out var addressVerificationValue) => onAddressVerification(
                addressVerificationValue),
            _ when TryGetNameVerification(out var nameVerificationValue) => onNameVerification(nameVerificationValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(PaymentInstrumentsRequest2)} holds no value.")
        };

    public void Match(Action<CvvVerification> onCvvVerification,
        Action<AddressVerification> onAddressVerification,
        Action<NameVerification> onNameVerification,
        Action<JsonElement> otherwise)
    {
        if (TryGetCvvVerification(out var cvvVerificationValue)) onCvvVerification(cvvVerificationValue);
        else if (TryGetAddressVerification(out var addressVerificationValue)) onAddressVerification(
            addressVerificationValue);
        else if (TryGetNameVerification(out var nameVerificationValue)) onNameVerification(nameVerificationValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(PaymentInstrumentsRequest2)} holds no value.");
    }
}

file sealed class PaymentInstrumentsRequest2Converter : JsonConverter<PaymentInstrumentsRequest2>
{
    public override PaymentInstrumentsRequest2 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<CvvVerification>(root, options, out var cvvVerificationValue))
        {
            return PaymentInstrumentsRequest2.CvvVerification(cvvVerificationValue);
        }
        if (JsonSerializer.TryDeserialize<AddressVerification>(root, options, out var addressVerificationValue))
        {
            return PaymentInstrumentsRequest2.AddressVerification(addressVerificationValue);
        }
        if (JsonSerializer.TryDeserialize<NameVerification>(root, options, out var nameVerificationValue))
        {
            return PaymentInstrumentsRequest2.NameVerification(nameVerificationValue);
        }
        return PaymentInstrumentsRequest2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, PaymentInstrumentsRequest2 value, JsonSerializerOptions options)
    {
        if (value.TryGetCvvVerification(out var cvvVerificationValue))
        {
            JsonSerializer.Serialize(writer, cvvVerificationValue, options);
        }
        else if (value.TryGetAddressVerification(out var addressVerificationValue))
        {
            JsonSerializer.Serialize(writer, addressVerificationValue, options);
        }
        else if (value.TryGetNameVerification(out var nameVerificationValue))
        {
            JsonSerializer.Serialize(writer, nameVerificationValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(PaymentInstrumentsRequest2)} contains no valid value to serialize.");
        }
    }
}
