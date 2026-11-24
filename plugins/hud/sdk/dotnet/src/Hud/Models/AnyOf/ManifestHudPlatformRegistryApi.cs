using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(ManifestHudPlatformRegistryApiConverter))]
public record ManifestHudPlatformRegistryApi
{
    private readonly Optional<object> _anonymousObjectValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ManifestHudPlatformRegistryApi(Optional<object> anonymousObjectValue, Optional<UnknownArm> unknownValue)
    {
        _anonymousObjectValue = anonymousObjectValue;
        _unknownValue = unknownValue;
    }

    public static ManifestHudPlatformRegistryApi AnonymousObject(object value) =>
        new(Optional<object>.Some(value), default);

    internal static ManifestHudPlatformRegistryApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAnonymousObject([NotNullWhen(true)] out object? value) =>
        _anonymousObjectValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<object, TResult> onAnonymousObject, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAnonymousObject(out var anonymousObjectValue) => onAnonymousObject(anonymousObjectValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ManifestHudPlatformRegistryApi)} holds no value.")
        };

    public void Match(Action<object> onAnonymousObject, Action<JsonElement> otherwise)
    {
        if (TryGetAnonymousObject(out var anonymousObjectValue)) onAnonymousObject(anonymousObjectValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ManifestHudPlatformRegistryApi)} holds no value.");
    }
}

file sealed class ManifestHudPlatformRegistryApiConverter : JsonConverter<ManifestHudPlatformRegistryApi>
{
    public override ManifestHudPlatformRegistryApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<object>(root, options, out var anonymousObjectValue))
        {
            return ManifestHudPlatformRegistryApi.AnonymousObject(anonymousObjectValue);
        }
        return ManifestHudPlatformRegistryApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        ManifestHudPlatformRegistryApi value,
        JsonSerializerOptions options)
    {
        if (value.TryGetAnonymousObject(out var anonymousObjectValue))
        {
            JsonSerializer.Serialize(writer, anonymousObjectValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ManifestHudPlatformRegistryApi)} contains no valid value to serialize.");
        }
    }
}
