using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(LatestBuildConverter))]
public record LatestBuild
{
    private readonly Optional<LatestBuildSummary> _latestBuildSummaryValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private LatestBuild(Optional<LatestBuildSummary> latestBuildSummaryValue, Optional<UnknownArm> unknownValue)
    {
        _latestBuildSummaryValue = latestBuildSummaryValue;
        _unknownValue = unknownValue;
    }

    public static LatestBuild LatestBuildSummary(LatestBuildSummary value) =>
        new(Optional<LatestBuildSummary>.Some(value), default);

    internal static LatestBuild Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetLatestBuildSummary([NotNullWhen(true)] out LatestBuildSummary? value) =>
        _latestBuildSummaryValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator LatestBuild(LatestBuildSummary value) => LatestBuildSummary(value);

    public TResult Match<TResult>(Func<LatestBuildSummary, TResult> onLatestBuildSummary,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetLatestBuildSummary(out var latestBuildSummaryValue) => onLatestBuildSummary(
                latestBuildSummaryValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(LatestBuild)} holds no value.")
        };

    public void Match(Action<LatestBuildSummary> onLatestBuildSummary, Action<JsonElement> otherwise)
    {
        if (TryGetLatestBuildSummary(out var latestBuildSummaryValue)) onLatestBuildSummary(latestBuildSummaryValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(LatestBuild)} holds no value.");
    }
}

file sealed class LatestBuildConverter : JsonConverter<LatestBuild>
{
    public override LatestBuild Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<LatestBuildSummary>(root, options, out var latestBuildSummaryValue))
        {
            return LatestBuild.LatestBuildSummary(latestBuildSummaryValue);
        }
        return LatestBuild.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, LatestBuild value, JsonSerializerOptions options)
    {
        if (value.TryGetLatestBuildSummary(out var latestBuildSummaryValue))
        {
            JsonSerializer.Serialize(writer, latestBuildSummaryValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(LatestBuild)} contains no valid value to serialize.");
        }
    }
}
