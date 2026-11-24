using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Extensions;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.Enums;

namespace PlinthUsGrantsData.Models.AnyOf;

[JsonConverter(typeof(FunderType1Converter))]
public record FunderType1
{
    private readonly Optional<FunderType> _funderTypeValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private FunderType1(Optional<FunderType> funderTypeValue, Optional<UnknownArm> unknownValue)
    {
        _funderTypeValue = funderTypeValue;
        _unknownValue = unknownValue;
    }

    public static FunderType1 FunderType(FunderType value) => new(Optional<FunderType>.Some(value), default);

    internal static FunderType1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetFunderType([NotNullWhen(true)] out FunderType? value) => _funderTypeValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator FunderType1(FunderType value) => FunderType(value);

    public TResult Match<TResult>(Func<FunderType, TResult> onFunderType, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetFunderType(out var funderTypeValue) => onFunderType(funderTypeValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(FunderType1)} holds no value.")
        };

    public void Match(Action<FunderType> onFunderType, Action<JsonElement> otherwise)
    {
        if (TryGetFunderType(out var funderTypeValue)) onFunderType(funderTypeValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(FunderType1)} holds no value.");
    }
}

file sealed class FunderType1Converter : JsonConverter<FunderType1>
{
    public override FunderType1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<FunderType>(root, options, out var funderTypeValue))
        {
            return FunderType1.FunderType(funderTypeValue);
        }
        return FunderType1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, FunderType1 value, JsonSerializerOptions options)
    {
        if (value.TryGetFunderType(out var funderTypeValue))
        {
            JsonSerializer.Serialize(writer, funderTypeValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(FunderType1)} contains no valid value to serialize.");
        }
    }
}
