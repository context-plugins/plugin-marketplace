using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Apibara.Core.Extensions;
using Apibara.Core.Models;
using Apibara.Models.Enums;

namespace Apibara.Models.AnyOf;

[JsonConverter(typeof(EngineType1Converter))]
public record EngineType1
{
    private readonly Optional<EngineType> _engineTypeValue;

    private readonly Optional<IReadOnlyList<EngineType>> _listOfEngineTypeValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private EngineType1(Optional<EngineType> engineTypeValue,
        Optional<IReadOnlyList<EngineType>> listOfEngineTypeValue,
        Optional<UnknownArm> unknownValue)
    {
        _engineTypeValue = engineTypeValue;
        _listOfEngineTypeValue = listOfEngineTypeValue;
        _unknownValue = unknownValue;
    }

    public static EngineType1 EngineType(EngineType value) => new(Optional<EngineType>.Some(value), default, default);

    public static EngineType1 ListOfEngineType(IReadOnlyList<EngineType> value) =>
        new(default, Optional<IReadOnlyList<EngineType>>.Some(value), default);

    internal static EngineType1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetEngineType([NotNullWhen(true)] out EngineType? value) => _engineTypeValue.TryGetValue(out value);

    public bool TryGetListOfEngineType([NotNullWhen(true)] out IReadOnlyList<EngineType>? value) =>
        _listOfEngineTypeValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator EngineType1(EngineType value) => EngineType(value);

    public TResult Match<TResult>(Func<EngineType, TResult> onEngineType,
        Func<IReadOnlyList<EngineType>, TResult> onListOfEngineType,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetEngineType(out var engineTypeValue) => onEngineType(engineTypeValue),
            _ when TryGetListOfEngineType(out var listOfEngineTypeValue) => onListOfEngineType(listOfEngineTypeValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(EngineType1)} holds no value.")
        };

    public void Match(Action<EngineType> onEngineType,
        Action<IReadOnlyList<EngineType>> onListOfEngineType,
        Action<JsonElement> otherwise)
    {
        if (TryGetEngineType(out var engineTypeValue)) onEngineType(engineTypeValue);
        else if (TryGetListOfEngineType(out var listOfEngineTypeValue)) onListOfEngineType(listOfEngineTypeValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(EngineType1)} holds no value.");
    }
}

file sealed class EngineType1Converter : JsonConverter<EngineType1>
{
    public override EngineType1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<EngineType>(root, options, out var engineTypeValue))
        {
            return EngineType1.EngineType(engineTypeValue);
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<EngineType>>(root, options, out var listOfEngineTypeValue))
        {
            return EngineType1.ListOfEngineType(listOfEngineTypeValue);
        }
        return EngineType1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, EngineType1 value, JsonSerializerOptions options)
    {
        if (value.TryGetEngineType(out var engineTypeValue))
        {
            JsonSerializer.Serialize(writer, engineTypeValue, options);
        }
        else if (value.TryGetListOfEngineType(out var listOfEngineTypeValue))
        {
            JsonSerializer.Serialize(writer, listOfEngineTypeValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(EngineType1)} contains no valid value to serialize.");
        }
    }
}
