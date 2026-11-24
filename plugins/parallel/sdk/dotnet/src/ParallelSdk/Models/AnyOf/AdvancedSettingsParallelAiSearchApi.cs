using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Advanced configuration for source policy, fetch policy, and excerpt settings. May impact result quality and latency unless used carefully. When omitted, excerpts are enabled by default.
/// </summary>
[JsonConverter(typeof(AdvancedSettingsParallelAiSearchApiConverter))]
public record AdvancedSettingsParallelAiSearchApi
{
    private readonly Optional<AdvancedSearchSettings> _advancedSearchSettingsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private AdvancedSettingsParallelAiSearchApi(Optional<AdvancedSearchSettings> advancedSearchSettingsValue,
        Optional<UnknownArm> unknownValue)
    {
        _advancedSearchSettingsValue = advancedSearchSettingsValue;
        _unknownValue = unknownValue;
    }

    public static AdvancedSettingsParallelAiSearchApi AdvancedSearchSettings(AdvancedSearchSettings value) =>
        new(Optional<AdvancedSearchSettings>.Some(value), default);

    internal static AdvancedSettingsParallelAiSearchApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAdvancedSearchSettings([NotNullWhen(true)] out AdvancedSearchSettings? value) =>
        _advancedSearchSettingsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator AdvancedSettingsParallelAiSearchApi(AdvancedSearchSettings value) =>
        AdvancedSearchSettings(value);

    public TResult Match<TResult>(Func<AdvancedSearchSettings, TResult> onAdvancedSearchSettings,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAdvancedSearchSettings(out var advancedSearchSettingsValue) => onAdvancedSearchSettings(
                advancedSearchSettingsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(AdvancedSettingsParallelAiSearchApi)} holds no value.")
        };

    public void Match(Action<AdvancedSearchSettings> onAdvancedSearchSettings, Action<JsonElement> otherwise)
    {
        if (TryGetAdvancedSearchSettings(out var advancedSearchSettingsValue)) onAdvancedSearchSettings(
            advancedSearchSettingsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(AdvancedSettingsParallelAiSearchApi)} holds no value.");
    }
}

file sealed class AdvancedSettingsParallelAiSearchApiConverter : JsonConverter<AdvancedSettingsParallelAiSearchApi>
{
    public override AdvancedSettingsParallelAiSearchApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<AdvancedSearchSettings>(root, options, out var advancedSearchSettingsValue))
        {
            return AdvancedSettingsParallelAiSearchApi.AdvancedSearchSettings(advancedSearchSettingsValue);
        }
        return AdvancedSettingsParallelAiSearchApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        AdvancedSettingsParallelAiSearchApi value,
        JsonSerializerOptions options)
    {
        if (value.TryGetAdvancedSearchSettings(out var advancedSearchSettingsValue))
        {
            JsonSerializer.Serialize(writer, advancedSearchSettingsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException(
                $"{nameof(AdvancedSettingsParallelAiSearchApi)} contains no valid value to serialize.");
        }
    }
}
