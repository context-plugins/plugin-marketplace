using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using OddsRelay.Core.Extensions;
using OddsRelay.Core.Models;

namespace OddsRelay.Models.AnyOf;

/// <summary>
/// Lowest price first. An array of exchange offers; on <c>each-way</c> and <c>extra-place</c> an object <c>{win, place}</c> of two such arrays; absent on <c>dutching</c>.
/// </summary>
[JsonConverter(typeof(Lay2Converter))]
public record Lay2
{
    private readonly Optional<IReadOnlyList<Lay>> _listOfLayValue;

    private readonly Optional<Lay1> _lay1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private Lay2(Optional<IReadOnlyList<Lay>> listOfLayValue,
        Optional<Lay1> lay1Value,
        Optional<UnknownArm> unknownValue)
    {
        _listOfLayValue = listOfLayValue;
        _lay1Value = lay1Value;
        _unknownValue = unknownValue;
    }

    public static Lay2 ListOfLay(IReadOnlyList<Lay> value) =>
        new(Optional<IReadOnlyList<Lay>>.Some(value), default, default);

    public static Lay2 Lay1(Lay1 value) => new(default, Optional<Lay1>.Some(value), default);

    internal static Lay2 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfLay([NotNullWhen(true)] out IReadOnlyList<Lay>? value) =>
        _listOfLayValue.TryGetValue(out value);

    public bool TryGetLay1([NotNullWhen(true)] out Lay1? value) => _lay1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Lay2(Lay1 value) => Lay1(value);

    public TResult Match<TResult>(Func<IReadOnlyList<Lay>, TResult> onListOfLay,
        Func<Lay1, TResult> onLay1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfLay(out var listOfLayValue) => onListOfLay(listOfLayValue),
            _ when TryGetLay1(out var lay1Value) => onLay1(lay1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Lay2)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<Lay>> onListOfLay, Action<Lay1> onLay1, Action<JsonElement> otherwise)
    {
        if (TryGetListOfLay(out var listOfLayValue)) onListOfLay(listOfLayValue);
        else if (TryGetLay1(out var lay1Value)) onLay1(lay1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Lay2)} holds no value.");
    }
}

file sealed class Lay2Converter : JsonConverter<Lay2>
{
    public override Lay2 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<Lay>>(root, options, out var listOfLayValue))
        {
            return Lay2.ListOfLay(listOfLayValue);
        }
        if (JsonSerializer.TryDeserialize<Lay1>(root, options, out var lay1Value))
        {
            return Lay2.Lay1(lay1Value);
        }
        return Lay2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Lay2 value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfLay(out var listOfLayValue))
        {
            JsonSerializer.Serialize(writer, listOfLayValue, options);
        }
        else if (value.TryGetLay1(out var lay1Value))
        {
            JsonSerializer.Serialize(writer, lay1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Lay2)} contains no valid value to serialize.");
        }
    }
}
