using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(ProviderConverter))]
public record Provider
{
    private readonly Optional<ProviderResponse> _providerResponseValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Provider(Optional<ProviderResponse> providerResponseValue, Optional<UnknownArm> unknownValue)
    {
        _providerResponseValue = providerResponseValue;
        _unknownValue = unknownValue;
    }

    public static Provider ProviderResponse(ProviderResponse value) =>
        new(Optional<ProviderResponse>.Some(value), default);

    internal static Provider Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetProviderResponse([NotNullWhen(true)] out ProviderResponse? value) =>
        _providerResponseValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Provider(ProviderResponse value) => ProviderResponse(value);

    public TResult Match<TResult>(Func<ProviderResponse, TResult> onProviderResponse,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetProviderResponse(out var providerResponseValue) => onProviderResponse(providerResponseValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Provider)} holds no value.")
        };

    public void Match(Action<ProviderResponse> onProviderResponse, Action<JsonElement> otherwise)
    {
        if (TryGetProviderResponse(out var providerResponseValue)) onProviderResponse(providerResponseValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Provider)} holds no value.");
    }
}

file sealed class ProviderConverter : JsonConverter<Provider>
{
    public override Provider Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ProviderResponse>(root, options, out var providerResponseValue))
        {
            return Provider.ProviderResponse(providerResponseValue);
        }
        return Provider.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Provider value, JsonSerializerOptions options)
    {
        if (value.TryGetProviderResponse(out var providerResponseValue))
        {
            JsonSerializer.Serialize(writer, providerResponseValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Provider)} contains no valid value to serialize.");
        }
    }
}
