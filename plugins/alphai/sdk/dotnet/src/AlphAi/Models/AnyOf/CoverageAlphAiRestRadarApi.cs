using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using AlphAi.Core.Extensions;
using AlphAi.Core.Models;

namespace AlphAi.Models.AnyOf;

[JsonConverter(typeof(CoverageAlphAiRestRadarApiConverter))]
public record CoverageAlphAiRestRadarApi
{
    private readonly Optional<double> _doubleValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private CoverageAlphAiRestRadarApi(Optional<double> doubleValue, Optional<UnknownArm> unknownValue)
    {
        _doubleValue = doubleValue;
        _unknownValue = unknownValue;
    }

    public static CoverageAlphAiRestRadarApi Double(double value) => new(Optional<double>.Some(value), default);

    internal static CoverageAlphAiRestRadarApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetDouble(out double value) => _doubleValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator CoverageAlphAiRestRadarApi(double value) => Double(value);

    public TResult Match<TResult>(Func<double, TResult> onDouble, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDouble(out var doubleValue) => onDouble(doubleValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(CoverageAlphAiRestRadarApi)} holds no value.")
        };

    public void Match(Action<double> onDouble, Action<JsonElement> otherwise)
    {
        if (TryGetDouble(out var doubleValue)) onDouble(doubleValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(CoverageAlphAiRestRadarApi)} holds no value.");
    }
}

file sealed class CoverageAlphAiRestRadarApiConverter : JsonConverter<CoverageAlphAiRestRadarApi>
{
    public override CoverageAlphAiRestRadarApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<double>(root, options, out var doubleValue))
        {
            return CoverageAlphAiRestRadarApi.Double(doubleValue);
        }
        return CoverageAlphAiRestRadarApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, CoverageAlphAiRestRadarApi value, JsonSerializerOptions options)
    {
        if (value.TryGetDouble(out var doubleValue))
        {
            JsonSerializer.Serialize(writer, doubleValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(CoverageAlphAiRestRadarApi)} contains no valid value to serialize.");
        }
    }
}
