using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// List of FieldBasis objects supporting the output.
/// </summary>
[JsonConverter(typeof(BasisConverter))]
public record Basis
{
    private readonly Optional<IReadOnlyList<FieldBasis>> _listOfFieldBasisValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Basis(Optional<IReadOnlyList<FieldBasis>> listOfFieldBasisValue, Optional<UnknownArm> unknownValue)
    {
        _listOfFieldBasisValue = listOfFieldBasisValue;
        _unknownValue = unknownValue;
    }

    public static Basis ListOfFieldBasis(IReadOnlyList<FieldBasis> value) =>
        new(Optional<IReadOnlyList<FieldBasis>>.Some(value), default);

    internal static Basis Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetListOfFieldBasis([NotNullWhen(true)] out IReadOnlyList<FieldBasis>? value) =>
        _listOfFieldBasisValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyList<FieldBasis>, TResult> onListOfFieldBasis,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetListOfFieldBasis(out var listOfFieldBasisValue) => onListOfFieldBasis(listOfFieldBasisValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Basis)} holds no value.")
        };

    public void Match(Action<IReadOnlyList<FieldBasis>> onListOfFieldBasis, Action<JsonElement> otherwise)
    {
        if (TryGetListOfFieldBasis(out var listOfFieldBasisValue)) onListOfFieldBasis(listOfFieldBasisValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Basis)} holds no value.");
    }
}

file sealed class BasisConverter : JsonConverter<Basis>
{
    public override Basis Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyList<FieldBasis>>(root, options, out var listOfFieldBasisValue))
        {
            return Basis.ListOfFieldBasis(listOfFieldBasisValue);
        }
        return Basis.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Basis value, JsonSerializerOptions options)
    {
        if (value.TryGetListOfFieldBasis(out var listOfFieldBasisValue))
        {
            JsonSerializer.Serialize(writer, listOfFieldBasisValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Basis)} contains no valid value to serialize.");
        }
    }
}
