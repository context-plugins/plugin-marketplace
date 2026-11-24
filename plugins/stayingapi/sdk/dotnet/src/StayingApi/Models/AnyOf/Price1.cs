using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using StayingApi.Core.Extensions;
using StayingApi.Core.Models;

namespace StayingApi.Models.AnyOf;

[JsonConverter(typeof(Price1Converter))]
public record Price1
{
    private readonly Optional<Price> _priceValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Price1(Optional<Price> priceValue, Optional<UnknownArm> unknownValue)
    {
        _priceValue = priceValue;
        _unknownValue = unknownValue;
    }

    public static Price1 Price(Price value) => new(Optional<Price>.Some(value), default);

    internal static Price1 Unknown(JsonElement value) => new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetPrice([NotNullWhen(true)] out Price? value) => _priceValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Price1(Price value) => Price(value);

    public TResult Match<TResult>(Func<Price, TResult> onPrice, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetPrice(out var priceValue) => onPrice(priceValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Price1)} holds no value.")
        };

    public void Match(Action<Price> onPrice, Action<JsonElement> otherwise)
    {
        if (TryGetPrice(out var priceValue)) onPrice(priceValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Price1)} holds no value.");
    }
}

file sealed class Price1Converter : JsonConverter<Price1>
{
    public override Price1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Price>(root, options, out var priceValue))
        {
            return Price1.Price(priceValue);
        }
        return Price1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Price1 value, JsonSerializerOptions options)
    {
        if (value.TryGetPrice(out var priceValue))
        {
            JsonSerializer.Serialize(writer, priceValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Price1)} contains no valid value to serialize.");
        }
    }
}
