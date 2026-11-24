using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Advanced configuration for fetch policy, excerpt settings, and full content settings. May impact result quality and latency unless used carefully. When omitted, excerpts are enabled and full content is disabled by default.
/// </summary>
[JsonConverter(typeof(AdvancedSettingsConverter))]
public record AdvancedSettings
{
    private readonly Optional<AdvancedExtractSettings> _advancedExtractSettingsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private AdvancedSettings(Optional<AdvancedExtractSettings> advancedExtractSettingsValue,
        Optional<UnknownArm> unknownValue)
    {
        _advancedExtractSettingsValue = advancedExtractSettingsValue;
        _unknownValue = unknownValue;
    }

    public static AdvancedSettings AdvancedExtractSettings(AdvancedExtractSettings value) =>
        new(Optional<AdvancedExtractSettings>.Some(value), default);

    internal static AdvancedSettings Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAdvancedExtractSettings([NotNullWhen(true)] out AdvancedExtractSettings? value) =>
        _advancedExtractSettingsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator AdvancedSettings(AdvancedExtractSettings value) => AdvancedExtractSettings(value);

    public TResult Match<TResult>(Func<AdvancedExtractSettings, TResult> onAdvancedExtractSettings,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAdvancedExtractSettings(out var advancedExtractSettingsValue) => onAdvancedExtractSettings(
                advancedExtractSettingsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(AdvancedSettings)} holds no value.")
        };

    public void Match(Action<AdvancedExtractSettings> onAdvancedExtractSettings, Action<JsonElement> otherwise)
    {
        if (TryGetAdvancedExtractSettings(out var advancedExtractSettingsValue)) onAdvancedExtractSettings(
            advancedExtractSettingsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(AdvancedSettings)} holds no value.");
    }
}

file sealed class AdvancedSettingsConverter : JsonConverter<AdvancedSettings>
{
    public override AdvancedSettings Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<AdvancedExtractSettings>(root, options, out var advancedExtractSettingsValue))
        {
            return AdvancedSettings.AdvancedExtractSettings(advancedExtractSettingsValue);
        }
        return AdvancedSettings.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, AdvancedSettings value, JsonSerializerOptions options)
    {
        if (value.TryGetAdvancedExtractSettings(out var advancedExtractSettingsValue))
        {
            JsonSerializer.Serialize(writer, advancedExtractSettingsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(AdvancedSettings)} contains no valid value to serialize.");
        }
    }
}
