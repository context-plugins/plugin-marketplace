using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(ManifestConverter))]
public record Manifest
{
    private readonly Optional<EnvManifest> _envManifestValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Manifest(Optional<EnvManifest> envManifestValue, Optional<UnknownArm> unknownValue)
    {
        _envManifestValue = envManifestValue;
        _unknownValue = unknownValue;
    }

    public static Manifest EnvManifest(EnvManifest value) => new(Optional<EnvManifest>.Some(value), default);

    internal static Manifest Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetEnvManifest([NotNullWhen(true)] out EnvManifest? value) =>
        _envManifestValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Manifest(EnvManifest value) => EnvManifest(value);

    public TResult Match<TResult>(Func<EnvManifest, TResult> onEnvManifest, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetEnvManifest(out var envManifestValue) => onEnvManifest(envManifestValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Manifest)} holds no value.")
        };

    public void Match(Action<EnvManifest> onEnvManifest, Action<JsonElement> otherwise)
    {
        if (TryGetEnvManifest(out var envManifestValue)) onEnvManifest(envManifestValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Manifest)} holds no value.");
    }
}

file sealed class ManifestConverter : JsonConverter<Manifest>
{
    public override Manifest Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<EnvManifest>(root, options, out var envManifestValue))
        {
            return Manifest.EnvManifest(envManifestValue);
        }
        return Manifest.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Manifest value, JsonSerializerOptions options)
    {
        if (value.TryGetEnvManifest(out var envManifestValue))
        {
            JsonSerializer.Serialize(writer, envManifestValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Manifest)} contains no valid value to serialize.");
        }
    }
}
