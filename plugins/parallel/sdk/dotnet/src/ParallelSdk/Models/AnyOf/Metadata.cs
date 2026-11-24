using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Metadata for the FindAll run., User-provided metadata stored with the task group.
/// </summary>
[JsonConverter(typeof(MetadataConverter))]
public record Metadata
{
    private readonly Optional<IReadOnlyDictionary<string, Metadata1>> _mapOfMetadata1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private Metadata(Optional<IReadOnlyDictionary<string, Metadata1>> mapOfMetadata1Value,
        Optional<UnknownArm> unknownValue)
    {
        _mapOfMetadata1Value = mapOfMetadata1Value;
        _unknownValue = unknownValue;
    }

    public static Metadata MapOfMetadata1(IReadOnlyDictionary<string, Metadata1> value) =>
        new(Optional<IReadOnlyDictionary<string, Metadata1>>.Some(value), default);

    internal static Metadata Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMapOfMetadata1([NotNullWhen(true)] out IReadOnlyDictionary<string, Metadata1>? value) =>
        _mapOfMetadata1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyDictionary<string, Metadata1>, TResult> onMapOfMetadata1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMapOfMetadata1(out var mapOfMetadata1Value) => onMapOfMetadata1(mapOfMetadata1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Metadata)} holds no value.")
        };

    public void Match(Action<IReadOnlyDictionary<string, Metadata1>> onMapOfMetadata1, Action<JsonElement> otherwise)
    {
        if (TryGetMapOfMetadata1(out var mapOfMetadata1Value)) onMapOfMetadata1(mapOfMetadata1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Metadata)} holds no value.");
    }
}

file sealed class MetadataConverter : JsonConverter<Metadata>
{
    public override Metadata Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyDictionary<string, Metadata1>>(
            root,
            options,
            out var mapOfMetadata1Value))
        {
            return Metadata.MapOfMetadata1(mapOfMetadata1Value);
        }
        return Metadata.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Metadata value, JsonSerializerOptions options)
    {
        if (value.TryGetMapOfMetadata1(out var mapOfMetadata1Value))
        {
            JsonSerializer.Serialize(writer, mapOfMetadata1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Metadata)} contains no valid value to serialize.");
        }
    }
}
