using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Apibara.Core.Extensions;
using Apibara.Core.Models;
using Apibara.Core.Validation;

namespace Apibara.Models.AnyOf;

[JsonConverter(typeof(GenerationIdConverter))]
public record GenerationId
{
    private readonly Optional<int> _intValue;

    private readonly Optional<IReadOnlyList<int>> _listOfIntValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private GenerationId(Optional<int> intValue,
        Optional<IReadOnlyList<int>> listOfIntValue,
        Optional<UnknownArm> unknownValue)
    {
        _intValue = intValue;
        _listOfIntValue = listOfIntValue;
        _unknownValue = unknownValue;
    }

    public static GenerationId Int(int value) => new(Optional<int>.Some(value), default, default);

    public static GenerationId ListOfInt(IReadOnlyList<int> value) =>
        new(default, Optional<IReadOnlyList<int>>.Some(value), default);

    internal static GenerationId Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetInt(out int value) => _intValue.TryGetValue(out value);

    public bool TryGetListOfInt([NotNullWhen(true)] out IReadOnlyList<int>? value) =>
        _listOfIntValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator GenerationId(int value) => Int(value);

    public TResult Match<TResult>(Func<int, TResult> onInt,
        Func<IReadOnlyList<int>, TResult> onListOfInt,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetInt(out var intValue) => onInt(intValue),
            _ when TryGetListOfInt(out var listOfIntValue) => onListOfInt(listOfIntValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(GenerationId)} holds no value.")
        };

    public void Match(Action<int> onInt, Action<IReadOnlyList<int>> onListOfInt, Action<JsonElement> otherwise)
    {
        if (TryGetInt(out var intValue)) onInt(intValue);
        else if (TryGetListOfInt(out var listOfIntValue)) onListOfInt(listOfIntValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(GenerationId)} holds no value.");
    }
}

file sealed class GenerationIdConverter : JsonConverter<GenerationId>
{
    public override GenerationId Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.Number)
        {
            if (root.TryGetInt32(out var intValue) && intValue.MeetsMinimum(1))
            {
                return GenerationId.Int(intValue);
            }
        }
        if (JsonSerializer.TryDeserialize<IReadOnlyList<int>>(root, options, out var listOfIntValue))
        {
            return GenerationId.ListOfInt(listOfIntValue);
        }
        return GenerationId.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, GenerationId value, JsonSerializerOptions options)
    {
        if (value.TryGetInt(out var intValue))
        {
            JsonSerializer.Serialize(writer, intValue, options);
        }
        else if (value.TryGetListOfInt(out var listOfIntValue))
        {
            JsonSerializer.Serialize(writer, listOfIntValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(GenerationId)} contains no valid value to serialize.");
        }
    }
}
