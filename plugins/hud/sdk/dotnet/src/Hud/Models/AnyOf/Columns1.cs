using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hud.Core.Extensions;
using Hud.Core.Models;

namespace Hud.Models.AnyOf;

[JsonConverter(typeof(Columns1Converter))]
public record Columns1
{
    private readonly Optional<IReadOnlyDictionary<string, Columns2>> _mapOfColumns2Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private Columns1(Optional<IReadOnlyDictionary<string, Columns2>> mapOfColumns2Value,
        Optional<UnknownArm> unknownValue)
    {
        _mapOfColumns2Value = mapOfColumns2Value;
        _unknownValue = unknownValue;
    }

    public static Columns1 MapOfColumns2(IReadOnlyDictionary<string, Columns2> value) =>
        new(Optional<IReadOnlyDictionary<string, Columns2>>.Some(value), default);

    internal static Columns1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMapOfColumns2([NotNullWhen(true)] out IReadOnlyDictionary<string, Columns2>? value) =>
        _mapOfColumns2Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyDictionary<string, Columns2>, TResult> onMapOfColumns2,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMapOfColumns2(out var mapOfColumns2Value) => onMapOfColumns2(mapOfColumns2Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Columns1)} holds no value.")
        };

    public void Match(Action<IReadOnlyDictionary<string, Columns2>> onMapOfColumns2, Action<JsonElement> otherwise)
    {
        if (TryGetMapOfColumns2(out var mapOfColumns2Value)) onMapOfColumns2(mapOfColumns2Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Columns1)} holds no value.");
    }
}

file sealed class Columns1Converter : JsonConverter<Columns1>
{
    public override Columns1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyDictionary<string, Columns2>>(
            root,
            options,
            out var mapOfColumns2Value))
        {
            return Columns1.MapOfColumns2(mapOfColumns2Value);
        }
        return Columns1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Columns1 value, JsonSerializerOptions options)
    {
        if (value.TryGetMapOfColumns2(out var mapOfColumns2Value))
        {
            JsonSerializer.Serialize(writer, mapOfColumns2Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Columns1)} contains no valid value to serialize.");
        }
    }
}
