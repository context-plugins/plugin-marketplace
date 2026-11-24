using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using AlphaAi.Core.Extensions;
using AlphaAi.Core.Models;

namespace AlphaAi.Models.AnyOf;

[JsonConverter(typeof(WatchlistCoverageConverter))]
public record WatchlistCoverage
{
    private readonly Optional<RadarWatchlistCoverage> _radarWatchlistCoverageValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private WatchlistCoverage(Optional<RadarWatchlistCoverage> radarWatchlistCoverageValue,
        Optional<UnknownArm> unknownValue)
    {
        _radarWatchlistCoverageValue = radarWatchlistCoverageValue;
        _unknownValue = unknownValue;
    }

    public static WatchlistCoverage RadarWatchlistCoverage(RadarWatchlistCoverage value) =>
        new(Optional<RadarWatchlistCoverage>.Some(value), default);

    internal static WatchlistCoverage Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetRadarWatchlistCoverage([NotNullWhen(true)] out RadarWatchlistCoverage? value) =>
        _radarWatchlistCoverageValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator WatchlistCoverage(RadarWatchlistCoverage value) => RadarWatchlistCoverage(value);

    public TResult Match<TResult>(Func<RadarWatchlistCoverage, TResult> onRadarWatchlistCoverage,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetRadarWatchlistCoverage(out var radarWatchlistCoverageValue) => onRadarWatchlistCoverage(
                radarWatchlistCoverageValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(WatchlistCoverage)} holds no value.")
        };

    public void Match(Action<RadarWatchlistCoverage> onRadarWatchlistCoverage, Action<JsonElement> otherwise)
    {
        if (TryGetRadarWatchlistCoverage(out var radarWatchlistCoverageValue)) onRadarWatchlistCoverage(
            radarWatchlistCoverageValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(WatchlistCoverage)} holds no value.");
    }
}

file sealed class WatchlistCoverageConverter : JsonConverter<WatchlistCoverage>
{
    public override WatchlistCoverage Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<RadarWatchlistCoverage>(root, options, out var radarWatchlistCoverageValue))
        {
            return WatchlistCoverage.RadarWatchlistCoverage(radarWatchlistCoverageValue);
        }
        return WatchlistCoverage.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, WatchlistCoverage value, JsonSerializerOptions options)
    {
        if (value.TryGetRadarWatchlistCoverage(out var radarWatchlistCoverageValue))
        {
            JsonSerializer.Serialize(writer, radarWatchlistCoverageValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(WatchlistCoverage)} contains no valid value to serialize.");
        }
    }
}
