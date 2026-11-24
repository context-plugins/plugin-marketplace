using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using CompSniper.Core.Extensions;
using CompSniper.Core.Models;

namespace CompSniper.Models.AnyOf;

[JsonConverter(typeof(V1MercariResponse12Converter))]
public record V1MercariResponse12
{
    private readonly Optional<V1MercariResponse1> _v1MercariResponse1Value;

    private readonly Optional<V1MercariResponse11> _v1MercariResponse11Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private V1MercariResponse12(Optional<V1MercariResponse1> v1MercariResponse1Value,
        Optional<V1MercariResponse11> v1MercariResponse11Value,
        Optional<UnknownArm> unknownValue)
    {
        _v1MercariResponse1Value = v1MercariResponse1Value;
        _v1MercariResponse11Value = v1MercariResponse11Value;
        _unknownValue = unknownValue;
    }

    public static V1MercariResponse12 V1MercariResponse1(V1MercariResponse1 value) =>
        new(Optional<V1MercariResponse1>.Some(value), default, default);

    public static V1MercariResponse12 V1MercariResponse11(V1MercariResponse11 value) =>
        new(default, Optional<V1MercariResponse11>.Some(value), default);

    internal static V1MercariResponse12 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetV1MercariResponse1([NotNullWhen(true)] out V1MercariResponse1? value) =>
        _v1MercariResponse1Value.TryGetValue(out value);

    public bool TryGetV1MercariResponse11([NotNullWhen(true)] out V1MercariResponse11? value) =>
        _v1MercariResponse11Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator V1MercariResponse12(V1MercariResponse1 value) => V1MercariResponse1(value);

    public static implicit operator V1MercariResponse12(V1MercariResponse11 value) => V1MercariResponse11(value);

    public TResult Match<TResult>(Func<V1MercariResponse1, TResult> onV1MercariResponse1,
        Func<V1MercariResponse11, TResult> onV1MercariResponse11,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetV1MercariResponse1(out var v1MercariResponse1Value) => onV1MercariResponse1(
                v1MercariResponse1Value),
            _ when TryGetV1MercariResponse11(out var v1MercariResponse11Value) => onV1MercariResponse11(
                v1MercariResponse11Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(V1MercariResponse12)} holds no value.")
        };

    public void Match(Action<V1MercariResponse1> onV1MercariResponse1,
        Action<V1MercariResponse11> onV1MercariResponse11,
        Action<JsonElement> otherwise)
    {
        if (TryGetV1MercariResponse1(out var v1MercariResponse1Value)) onV1MercariResponse1(v1MercariResponse1Value);
        else if (TryGetV1MercariResponse11(out var v1MercariResponse11Value)) onV1MercariResponse11(
            v1MercariResponse11Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(V1MercariResponse12)} holds no value.");
    }
}

file sealed class V1MercariResponse12Converter : JsonConverter<V1MercariResponse12>
{
    public override V1MercariResponse12 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<V1MercariResponse1>(root, options, out var v1MercariResponse1Value))
        {
            return V1MercariResponse12.V1MercariResponse1(v1MercariResponse1Value);
        }
        if (JsonSerializer.TryDeserialize<V1MercariResponse11>(root, options, out var v1MercariResponse11Value))
        {
            return V1MercariResponse12.V1MercariResponse11(v1MercariResponse11Value);
        }
        return V1MercariResponse12.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, V1MercariResponse12 value, JsonSerializerOptions options)
    {
        if (value.TryGetV1MercariResponse1(out var v1MercariResponse1Value))
        {
            JsonSerializer.Serialize(writer, v1MercariResponse1Value, options);
        }
        else if (value.TryGetV1MercariResponse11(out var v1MercariResponse11Value))
        {
            JsonSerializer.Serialize(writer, v1MercariResponse11Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(V1MercariResponse12)} contains no valid value to serialize.");
        }
    }
}
