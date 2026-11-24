using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Extensions;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models.AnyOf;

/// <summary>
/// Per-class cost of <c>?exclude=</c>, keyed by class name, plus <c>overlapping</c> — true when classes were counted independently and therefore sum to more than the whole. /grants/summary only.
/// </summary>
[JsonConverter(typeof(ExcludedConverter))]
public record Excluded
{
    private readonly Optional<IReadOnlyDictionary<string, Excluded1>> _mapOfExcluded1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private Excluded(Optional<IReadOnlyDictionary<string, Excluded1>> mapOfExcluded1Value,
        Optional<UnknownArm> unknownValue)
    {
        _mapOfExcluded1Value = mapOfExcluded1Value;
        _unknownValue = unknownValue;
    }

    public static Excluded MapOfExcluded1(IReadOnlyDictionary<string, Excluded1> value) =>
        new(Optional<IReadOnlyDictionary<string, Excluded1>>.Some(value), default);

    internal static Excluded Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMapOfExcluded1([NotNullWhen(true)] out IReadOnlyDictionary<string, Excluded1>? value) =>
        _mapOfExcluded1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyDictionary<string, Excluded1>, TResult> onMapOfExcluded1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMapOfExcluded1(out var mapOfExcluded1Value) => onMapOfExcluded1(mapOfExcluded1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Excluded)} holds no value.")
        };

    public void Match(Action<IReadOnlyDictionary<string, Excluded1>> onMapOfExcluded1, Action<JsonElement> otherwise)
    {
        if (TryGetMapOfExcluded1(out var mapOfExcluded1Value)) onMapOfExcluded1(mapOfExcluded1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Excluded)} holds no value.");
    }
}

file sealed class ExcludedConverter : JsonConverter<Excluded>
{
    public override Excluded Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyDictionary<string, Excluded1>>(
            root,
            options,
            out var mapOfExcluded1Value))
        {
            return Excluded.MapOfExcluded1(mapOfExcluded1Value);
        }
        return Excluded.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Excluded value, JsonSerializerOptions options)
    {
        if (value.TryGetMapOfExcluded1(out var mapOfExcluded1Value))
        {
            JsonSerializer.Serialize(writer, mapOfExcluded1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Excluded)} contains no valid value to serialize.");
        }
    }
}
