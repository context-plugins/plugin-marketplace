using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.OneOf;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Task run output from the most recent completed execution of this snapshot monitor — same structure as the output of the original task run the monitor was created from. <c>null</c> until the first run completes.
/// </summary>
[JsonConverter(typeof(LatestSnapshotConverter))]
public record LatestSnapshot
{
    private readonly Optional<LatestSnapshot1> _latestSnapshot1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private LatestSnapshot(Optional<LatestSnapshot1> latestSnapshot1Value, Optional<UnknownArm> unknownValue)
    {
        _latestSnapshot1Value = latestSnapshot1Value;
        _unknownValue = unknownValue;
    }

    public static LatestSnapshot LatestSnapshot1(LatestSnapshot1 value) =>
        new(Optional<LatestSnapshot1>.Some(value), default);

    internal static LatestSnapshot Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetLatestSnapshot1([NotNullWhen(true)] out LatestSnapshot1? value) =>
        _latestSnapshot1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator LatestSnapshot(LatestSnapshot1 value) => LatestSnapshot1(value);

    public TResult Match<TResult>(Func<LatestSnapshot1, TResult> onLatestSnapshot1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetLatestSnapshot1(out var latestSnapshot1Value) => onLatestSnapshot1(latestSnapshot1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(LatestSnapshot)} holds no value.")
        };

    public void Match(Action<LatestSnapshot1> onLatestSnapshot1, Action<JsonElement> otherwise)
    {
        if (TryGetLatestSnapshot1(out var latestSnapshot1Value)) onLatestSnapshot1(latestSnapshot1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(LatestSnapshot)} holds no value.");
    }
}

file sealed class LatestSnapshotConverter : JsonConverter<LatestSnapshot>
{
    public override LatestSnapshot Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<LatestSnapshot1>(root, options, out var latestSnapshot1Value))
        {
            return LatestSnapshot.LatestSnapshot1(latestSnapshot1Value);
        }
        return LatestSnapshot.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, LatestSnapshot value, JsonSerializerOptions options)
    {
        if (value.TryGetLatestSnapshot1(out var latestSnapshot1Value))
        {
            JsonSerializer.Serialize(writer, latestSnapshot1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(LatestSnapshot)} contains no valid value to serialize.");
        }
    }
}
