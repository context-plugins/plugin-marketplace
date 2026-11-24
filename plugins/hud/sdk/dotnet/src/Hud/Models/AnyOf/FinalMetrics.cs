using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(FinalMetricsConverter))]
public record FinalMetrics
{
    private readonly Optional<AtifFinalMetrics> _atifFinalMetricsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private FinalMetrics(Optional<AtifFinalMetrics> atifFinalMetricsValue, Optional<UnknownArm> unknownValue)
    {
        _atifFinalMetricsValue = atifFinalMetricsValue;
        _unknownValue = unknownValue;
    }

    public static FinalMetrics AtifFinalMetrics(AtifFinalMetrics value) =>
        new(Optional<AtifFinalMetrics>.Some(value), default);

    internal static FinalMetrics Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAtifFinalMetrics([NotNullWhen(true)] out AtifFinalMetrics? value) =>
        _atifFinalMetricsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator FinalMetrics(AtifFinalMetrics value) => AtifFinalMetrics(value);

    public TResult Match<TResult>(Func<AtifFinalMetrics, TResult> onAtifFinalMetrics,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAtifFinalMetrics(out var atifFinalMetricsValue) => onAtifFinalMetrics(atifFinalMetricsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(FinalMetrics)} holds no value.")
        };

    public void Match(Action<AtifFinalMetrics> onAtifFinalMetrics, Action<JsonElement> otherwise)
    {
        if (TryGetAtifFinalMetrics(out var atifFinalMetricsValue)) onAtifFinalMetrics(atifFinalMetricsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(FinalMetrics)} holds no value.");
    }
}

file sealed class FinalMetricsConverter : JsonConverter<FinalMetrics>
{
    public override FinalMetrics Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<AtifFinalMetrics>(root, options, out var atifFinalMetricsValue))
        {
            return FinalMetrics.AtifFinalMetrics(atifFinalMetricsValue);
        }
        return FinalMetrics.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, FinalMetrics value, JsonSerializerOptions options)
    {
        if (value.TryGetAtifFinalMetrics(out var atifFinalMetricsValue))
        {
            JsonSerializer.Serialize(writer, atifFinalMetricsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(FinalMetrics)} contains no valid value to serialize.");
        }
    }
}
