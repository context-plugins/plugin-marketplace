using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Advanced monitor configuration.
/// </summary>
[JsonConverter(typeof(AdvancedSettingsParallelAiMonitorApiConverter))]
public record AdvancedSettingsParallelAiMonitorApi
{
    private readonly Optional<AdvancedMonitorSettings> _advancedMonitorSettingsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private AdvancedSettingsParallelAiMonitorApi(Optional<AdvancedMonitorSettings> advancedMonitorSettingsValue,
        Optional<UnknownArm> unknownValue)
    {
        _advancedMonitorSettingsValue = advancedMonitorSettingsValue;
        _unknownValue = unknownValue;
    }

    public static AdvancedSettingsParallelAiMonitorApi AdvancedMonitorSettings(AdvancedMonitorSettings value) =>
        new(Optional<AdvancedMonitorSettings>.Some(value), default);

    internal static AdvancedSettingsParallelAiMonitorApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAdvancedMonitorSettings([NotNullWhen(true)] out AdvancedMonitorSettings? value) =>
        _advancedMonitorSettingsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator AdvancedSettingsParallelAiMonitorApi(AdvancedMonitorSettings value) =>
        AdvancedMonitorSettings(value);

    public TResult Match<TResult>(Func<AdvancedMonitorSettings, TResult> onAdvancedMonitorSettings,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAdvancedMonitorSettings(out var advancedMonitorSettingsValue) => onAdvancedMonitorSettings(
                advancedMonitorSettingsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(AdvancedSettingsParallelAiMonitorApi)} holds no value.")
        };

    public void Match(Action<AdvancedMonitorSettings> onAdvancedMonitorSettings, Action<JsonElement> otherwise)
    {
        if (TryGetAdvancedMonitorSettings(out var advancedMonitorSettingsValue)) onAdvancedMonitorSettings(
            advancedMonitorSettingsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(AdvancedSettingsParallelAiMonitorApi)} holds no value.");
    }
}

file sealed class AdvancedSettingsParallelAiMonitorApiConverter : JsonConverter<AdvancedSettingsParallelAiMonitorApi>
{
    public override AdvancedSettingsParallelAiMonitorApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<AdvancedMonitorSettings>(root, options, out var advancedMonitorSettingsValue))
        {
            return AdvancedSettingsParallelAiMonitorApi.AdvancedMonitorSettings(advancedMonitorSettingsValue);
        }
        return AdvancedSettingsParallelAiMonitorApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        AdvancedSettingsParallelAiMonitorApi value,
        JsonSerializerOptions options)
    {
        if (value.TryGetAdvancedMonitorSettings(out var advancedMonitorSettingsValue))
        {
            JsonSerializer.Serialize(writer, advancedMonitorSettingsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException(
                $"{nameof(AdvancedSettingsParallelAiMonitorApi)} contains no valid value to serialize.");
        }
    }
}
