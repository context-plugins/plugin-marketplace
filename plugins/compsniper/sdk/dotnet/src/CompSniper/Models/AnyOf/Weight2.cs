using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using CompSniper.Core.Extensions;
using CompSniper.Core.Models;

namespace CompSniper.Models.AnyOf;

[JsonConverter(typeof(Weight2Converter))]
public record Weight2
{
    private readonly Optional<Weight> _weightValue;

    private readonly Optional<Weight1> _weight1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private Weight2(Optional<Weight> weightValue, Optional<Weight1> weight1Value, Optional<UnknownArm> unknownValue)
    {
        _weightValue = weightValue;
        _weight1Value = weight1Value;
        _unknownValue = unknownValue;
    }

    public static Weight2 Weight(Weight value) => new(Optional<Weight>.Some(value), default, default);

    public static Weight2 Weight1(Weight1 value) => new(default, Optional<Weight1>.Some(value), default);

    internal static Weight2 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetWeight([NotNullWhen(true)] out Weight? value) => _weightValue.TryGetValue(out value);

    public bool TryGetWeight1([NotNullWhen(true)] out Weight1? value) => _weight1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Weight2(Weight value) => Weight(value);

    public static implicit operator Weight2(Weight1 value) => Weight1(value);

    public TResult Match<TResult>(Func<Weight, TResult> onWeight,
        Func<Weight1, TResult> onWeight1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetWeight(out var weightValue) => onWeight(weightValue),
            _ when TryGetWeight1(out var weight1Value) => onWeight1(weight1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Weight2)} holds no value.")
        };

    public void Match(Action<Weight> onWeight, Action<Weight1> onWeight1, Action<JsonElement> otherwise)
    {
        if (TryGetWeight(out var weightValue)) onWeight(weightValue);
        else if (TryGetWeight1(out var weight1Value)) onWeight1(weight1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Weight2)} holds no value.");
    }
}

file sealed class Weight2Converter : JsonConverter<Weight2>
{
    public override Weight2 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Weight>(root, options, out var weightValue))
        {
            return Weight2.Weight(weightValue);
        }
        if (JsonSerializer.TryDeserialize<Weight1>(root, options, out var weight1Value))
        {
            return Weight2.Weight1(weight1Value);
        }
        return Weight2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Weight2 value, JsonSerializerOptions options)
    {
        if (value.TryGetWeight(out var weightValue))
        {
            JsonSerializer.Serialize(writer, weightValue, options);
        }
        else if (value.TryGetWeight1(out var weight1Value))
        {
            JsonSerializer.Serialize(writer, weight1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Weight2)} contains no valid value to serialize.");
        }
    }
}
