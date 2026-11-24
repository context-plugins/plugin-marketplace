using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Givebutter.Core.Extensions;
using Givebutter.Core.Models;

namespace Givebutter.Models.AnyOf;

[JsonConverter(typeof(PrimaryAddressConverter))]
public record PrimaryAddress
{
    private readonly Optional<AppHttpResourcesApiAddressResource> _appHttpResourcesApiAddressResourceValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private PrimaryAddress(Optional<AppHttpResourcesApiAddressResource> appHttpResourcesApiAddressResourceValue,
        Optional<UnknownArm> unknownValue)
    {
        _appHttpResourcesApiAddressResourceValue = appHttpResourcesApiAddressResourceValue;
        _unknownValue = unknownValue;
    }

    public static PrimaryAddress AppHttpResourcesApiAddressResource(AppHttpResourcesApiAddressResource value) =>
        new(Optional<AppHttpResourcesApiAddressResource>.Some(value), default);

    internal static PrimaryAddress Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAppHttpResourcesApiAddressResource([NotNullWhen(true)] out AppHttpResourcesApiAddressResource? value) =>
        _appHttpResourcesApiAddressResourceValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator PrimaryAddress(AppHttpResourcesApiAddressResource value) =>
        AppHttpResourcesApiAddressResource(value);

    public TResult Match<TResult>(Func<AppHttpResourcesApiAddressResource, TResult> onAppHttpResourcesApiAddressResource,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAppHttpResourcesApiAddressResource(
                out var appHttpResourcesApiAddressResourceValue) => onAppHttpResourcesApiAddressResource(
                appHttpResourcesApiAddressResourceValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(PrimaryAddress)} holds no value.")
        };

    public void Match(Action<AppHttpResourcesApiAddressResource> onAppHttpResourcesApiAddressResource,
        Action<JsonElement> otherwise)
    {
        if (TryGetAppHttpResourcesApiAddressResource(
            out var appHttpResourcesApiAddressResourceValue)) onAppHttpResourcesApiAddressResource(
            appHttpResourcesApiAddressResourceValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(PrimaryAddress)} holds no value.");
    }
}

file sealed class PrimaryAddressConverter : JsonConverter<PrimaryAddress>
{
    public override PrimaryAddress Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<AppHttpResourcesApiAddressResource>(
            root,
            options,
            out var appHttpResourcesApiAddressResourceValue))
        {
            return PrimaryAddress.AppHttpResourcesApiAddressResource(appHttpResourcesApiAddressResourceValue);
        }
        return PrimaryAddress.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, PrimaryAddress value, JsonSerializerOptions options)
    {
        if (value.TryGetAppHttpResourcesApiAddressResource(out var appHttpResourcesApiAddressResourceValue))
        {
            JsonSerializer.Serialize(writer, appHttpResourcesApiAddressResourceValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(PrimaryAddress)} contains no valid value to serialize.");
        }
    }
}
