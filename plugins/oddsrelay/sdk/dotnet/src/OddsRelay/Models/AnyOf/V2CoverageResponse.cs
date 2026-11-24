using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using OddsRelay.Core.Extensions;
using OddsRelay.Core.Models;

namespace OddsRelay.Models.AnyOf;

[JsonConverter(typeof(V2CoverageResponseConverter))]
public record V2CoverageResponse
{
    private readonly Optional<CoverageSummary> _coverageSummaryValue;

    private readonly Optional<CoverageKeyed> _coverageKeyedValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private V2CoverageResponse(Optional<CoverageSummary> coverageSummaryValue,
        Optional<CoverageKeyed> coverageKeyedValue,
        Optional<UnknownArm> unknownValue)
    {
        _coverageSummaryValue = coverageSummaryValue;
        _coverageKeyedValue = coverageKeyedValue;
        _unknownValue = unknownValue;
    }

    public static V2CoverageResponse CoverageSummary(CoverageSummary value) =>
        new(Optional<CoverageSummary>.Some(value), default, default);

    public static V2CoverageResponse CoverageKeyed(CoverageKeyed value) =>
        new(default, Optional<CoverageKeyed>.Some(value), default);

    internal static V2CoverageResponse Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetCoverageSummary([NotNullWhen(true)] out CoverageSummary? value) =>
        _coverageSummaryValue.TryGetValue(out value);

    public bool TryGetCoverageKeyed([NotNullWhen(true)] out CoverageKeyed? value) =>
        _coverageKeyedValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator V2CoverageResponse(CoverageSummary value) => CoverageSummary(value);

    public static implicit operator V2CoverageResponse(CoverageKeyed value) => CoverageKeyed(value);

    public TResult Match<TResult>(Func<CoverageSummary, TResult> onCoverageSummary,
        Func<CoverageKeyed, TResult> onCoverageKeyed,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCoverageSummary(out var coverageSummaryValue) => onCoverageSummary(coverageSummaryValue),
            _ when TryGetCoverageKeyed(out var coverageKeyedValue) => onCoverageKeyed(coverageKeyedValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(V2CoverageResponse)} holds no value.")
        };

    public void Match(Action<CoverageSummary> onCoverageSummary,
        Action<CoverageKeyed> onCoverageKeyed,
        Action<JsonElement> otherwise)
    {
        if (TryGetCoverageSummary(out var coverageSummaryValue)) onCoverageSummary(coverageSummaryValue);
        else if (TryGetCoverageKeyed(out var coverageKeyedValue)) onCoverageKeyed(coverageKeyedValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(V2CoverageResponse)} holds no value.");
    }
}

file sealed class V2CoverageResponseConverter : JsonConverter<V2CoverageResponse>
{
    public override V2CoverageResponse Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<CoverageSummary>(root, options, out var coverageSummaryValue))
        {
            return V2CoverageResponse.CoverageSummary(coverageSummaryValue);
        }
        if (JsonSerializer.TryDeserialize<CoverageKeyed>(root, options, out var coverageKeyedValue))
        {
            return V2CoverageResponse.CoverageKeyed(coverageKeyedValue);
        }
        return V2CoverageResponse.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, V2CoverageResponse value, JsonSerializerOptions options)
    {
        if (value.TryGetCoverageSummary(out var coverageSummaryValue))
        {
            JsonSerializer.Serialize(writer, coverageSummaryValue, options);
        }
        else if (value.TryGetCoverageKeyed(out var coverageKeyedValue))
        {
            JsonSerializer.Serialize(writer, coverageKeyedValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(V2CoverageResponse)} contains no valid value to serialize.");
        }
    }
}
