using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(MetricsHudPlatformJobsApiConverter))]
public record MetricsHudPlatformJobsApi
{
    private readonly Optional<AtifMetrics> _atifMetricsValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private MetricsHudPlatformJobsApi(Optional<AtifMetrics> atifMetricsValue, Optional<UnknownArm> unknownValue)
    {
        _atifMetricsValue = atifMetricsValue;
        _unknownValue = unknownValue;
    }

    public static MetricsHudPlatformJobsApi AtifMetrics(AtifMetrics value) =>
        new(Optional<AtifMetrics>.Some(value), default);

    internal static MetricsHudPlatformJobsApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetAtifMetrics([NotNullWhen(true)] out AtifMetrics? value) =>
        _atifMetricsValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator MetricsHudPlatformJobsApi(AtifMetrics value) => AtifMetrics(value);

    public TResult Match<TResult>(Func<AtifMetrics, TResult> onAtifMetrics, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAtifMetrics(out var atifMetricsValue) => onAtifMetrics(atifMetricsValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(MetricsHudPlatformJobsApi)} holds no value.")
        };

    public void Match(Action<AtifMetrics> onAtifMetrics, Action<JsonElement> otherwise)
    {
        if (TryGetAtifMetrics(out var atifMetricsValue)) onAtifMetrics(atifMetricsValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(MetricsHudPlatformJobsApi)} holds no value.");
    }
}

file sealed class MetricsHudPlatformJobsApiConverter : JsonConverter<MetricsHudPlatformJobsApi>
{
    public override MetricsHudPlatformJobsApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<AtifMetrics>(root, options, out var atifMetricsValue))
        {
            return MetricsHudPlatformJobsApi.AtifMetrics(atifMetricsValue);
        }
        return MetricsHudPlatformJobsApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, MetricsHudPlatformJobsApi value, JsonSerializerOptions options)
    {
        if (value.TryGetAtifMetrics(out var atifMetricsValue))
        {
            JsonSerializer.Serialize(writer, atifMetricsValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(MetricsHudPlatformJobsApi)} contains no valid value to serialize.");
        }
    }
}
