using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Extensions;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models.AnyOf;

[JsonConverter(typeof(MerchantsDevicesRequestConverter))]
public record MerchantsDevicesRequest
{
    private readonly Optional<CreateMerchantDevice> _createMerchantDeviceValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private MerchantsDevicesRequest(Optional<CreateMerchantDevice> createMerchantDeviceValue,
        Optional<UnknownArm> unknownValue)
    {
        _createMerchantDeviceValue = createMerchantDeviceValue;
        _unknownValue = unknownValue;
    }

    public static MerchantsDevicesRequest CreateMerchantDevice(CreateMerchantDevice value) =>
        new(Optional<CreateMerchantDevice>.Some(value), default);

    internal static MerchantsDevicesRequest Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetCreateMerchantDevice([NotNullWhen(true)] out CreateMerchantDevice? value) =>
        _createMerchantDeviceValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator MerchantsDevicesRequest(CreateMerchantDevice value) => CreateMerchantDevice(value);

    public TResult Match<TResult>(Func<CreateMerchantDevice, TResult> onCreateMerchantDevice,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCreateMerchantDevice(out var createMerchantDeviceValue) => onCreateMerchantDevice(
                createMerchantDeviceValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(MerchantsDevicesRequest)} holds no value.")
        };

    public void Match(Action<CreateMerchantDevice> onCreateMerchantDevice, Action<JsonElement> otherwise)
    {
        if (TryGetCreateMerchantDevice(out var createMerchantDeviceValue)) onCreateMerchantDevice(
            createMerchantDeviceValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(MerchantsDevicesRequest)} holds no value.");
    }
}

file sealed class MerchantsDevicesRequestConverter : JsonConverter<MerchantsDevicesRequest>
{
    public override MerchantsDevicesRequest Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<CreateMerchantDevice>(root, options, out var createMerchantDeviceValue))
        {
            return MerchantsDevicesRequest.CreateMerchantDevice(createMerchantDeviceValue);
        }
        return MerchantsDevicesRequest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, MerchantsDevicesRequest value, JsonSerializerOptions options)
    {
        if (value.TryGetCreateMerchantDevice(out var createMerchantDeviceValue))
        {
            JsonSerializer.Serialize(writer, createMerchantDeviceValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(MerchantsDevicesRequest)} contains no valid value to serialize.");
        }
    }
}
