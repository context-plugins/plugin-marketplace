using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Filter by monitor type. Pass multiple times to filter by multiple values. Omit to return all types.
/// </summary>
[JsonConverter(typeof(Type5VariantCchzdoConverter))]
public record Type5VariantCchzdo
{
    private readonly Optional<IReadOnlyList<Type4>> _listOfType4Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private Type5VariantCchzdo(Optional<IReadOnlyList<Type4>> listOfType4Value, Optional<UnknownArm> unknownValue)
    {
        _listOfType4Value = listOfType4Value;
        _unknownValue = unknownValue;
    }

    public static Type5VariantCchzdo ListOfType4(IReadOnlyList<Type4> value) =>
        new(Optional<IReadOnlyList<Type4>>.Some(value), default);

    internal static Type5VariantCchzdo Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfType4([NotNullWhen(true)] out IReadOnlyList<Type4>? value) =>
        _listOfType4Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<Type4>, TResult> onListOfType4,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfType4(out var listOfType4Value) => onListOfType4(listOfType4Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Type5VariantCchzdo)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<Type4>> onListOfType4, Action<JsonElement> otherwise)
    {
        if (TryGetListOfType4(out var listOfType4Value)) onListOfType4(listOfType4Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Type5VariantCchzdo)} holds no value.");
    }
}

file sealed class Type5VariantCchzdoConverter : JsonConverter<Type5VariantCchzdo>
{
    public override Type5VariantCchzdo Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<Type4>>(root, options, out var listOfType4Value))
        {
            return Type5VariantCchzdo.ListOfType4(listOfType4Value);
        }
        return Type5VariantCchzdo.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Type5VariantCchzdo value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfType4(out var listOfType4Value))
        {
            JsonSerializer.Serialize(writer, listOfType4Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Type5VariantCchzdo)} contains no valid value to serialize.");
        }
    }
}
