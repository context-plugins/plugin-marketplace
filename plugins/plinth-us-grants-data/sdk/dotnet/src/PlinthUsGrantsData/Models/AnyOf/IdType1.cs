using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Extensions;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.Enums;

namespace PlinthUsGrantsData.Models.AnyOf;

[JsonConverter(typeof(IdType1Converter))]
public record IdType1
{
    private readonly Optional<IdType> _idTypeValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private IdType1(Optional<IdType> idTypeValue, Optional<UnknownArm> unknownValue)
    {
        _idTypeValue = idTypeValue;
        _unknownValue = unknownValue;
    }

    public static IdType1 IdType(IdType value) => new(Optional<IdType>.Some(value), default);

    internal static IdType1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetIdType([NotNullWhen(true)] out IdType? value) => _idTypeValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator IdType1(IdType value) => IdType(value);

    public TResult Match<TResult>(Func<IdType, TResult> onIdType, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetIdType(out var idTypeValue) => onIdType(idTypeValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(IdType1)} holds no value.")
        };

    public void Match(Action<IdType> onIdType, Action<JsonElement> otherwise)
    {
        if (TryGetIdType(out var idTypeValue)) onIdType(idTypeValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(IdType1)} holds no value.");
    }
}

file sealed class IdType1Converter : JsonConverter<IdType1>
{
    public override IdType1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IdType>(root, options, out var idTypeValue))
        {
            return IdType1.IdType(idTypeValue);
        }
        return IdType1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, IdType1 value, JsonSerializerOptions options)
    {
        if (value.TryGetIdType(out var idTypeValue))
        {
            JsonSerializer.Serialize(writer, idTypeValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(IdType1)} contains no valid value to serialize.");
        }
    }
}
