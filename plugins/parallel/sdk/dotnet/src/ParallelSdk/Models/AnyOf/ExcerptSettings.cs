using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Controls excerpt sizes. Provide excerpt settings for fine-grained control, or omit to use defaults.
/// </summary>
[JsonConverter(typeof(ExcerptSettingsConverter))]
public record ExcerptSettings
{
    private readonly Optional<V1ExcerptSettings> _v1ExcerptSettingsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ExcerptSettings(Optional<V1ExcerptSettings> v1ExcerptSettingsValue, Optional<UnknownArm> unknownValue)
    {
        _v1ExcerptSettingsValue = v1ExcerptSettingsValue;
        _unknownValue = unknownValue;
    }

    public static ExcerptSettings V1ExcerptSettings(V1ExcerptSettings value) =>
        new(Optional<V1ExcerptSettings>.Some(value), default);

    internal static ExcerptSettings Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetV1ExcerptSettings([NotNullWhen(true)] out V1ExcerptSettings? value) =>
        _v1ExcerptSettingsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ExcerptSettings(V1ExcerptSettings value) => V1ExcerptSettings(value);

    public TResult Match<TResult>(Func<V1ExcerptSettings, TResult> onV1ExcerptSettings,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetV1ExcerptSettings(out var v1ExcerptSettingsValue) => onV1ExcerptSettings(
                v1ExcerptSettingsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ExcerptSettings)} holds no value.")
        };

    public void Match(Action<V1ExcerptSettings> onV1ExcerptSettings, Action<JsonElement> otherwise)
    {
        if (TryGetV1ExcerptSettings(out var v1ExcerptSettingsValue)) onV1ExcerptSettings(v1ExcerptSettingsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ExcerptSettings)} holds no value.");
    }
}

file sealed class ExcerptSettingsConverter : JsonConverter<ExcerptSettings>
{
    public override ExcerptSettings Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<V1ExcerptSettings>(root, options, out var v1ExcerptSettingsValue))
        {
            return ExcerptSettings.V1ExcerptSettings(v1ExcerptSettingsValue);
        }
        return ExcerptSettings.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ExcerptSettings value, JsonSerializerOptions options)
    {
        if (value.TryGetV1ExcerptSettings(out var v1ExcerptSettingsValue))
        {
            JsonSerializer.Serialize(writer, v1ExcerptSettingsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ExcerptSettings)} contains no valid value to serialize.");
        }
    }
}
