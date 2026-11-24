using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using CompSniper.Core.Extensions;
using CompSniper.Core.Models;

namespace CompSniper.Models.AnyOf;

[JsonConverter(typeof(V1PoshmarkSoldResponse12Converter))]
public record V1PoshmarkSoldResponse12
{
    private readonly Optional<V1PoshmarkSoldResponse1> _v1PoshmarkSoldResponse1Value;

    private readonly Optional<V1PoshmarkSoldResponse11> _v1PoshmarkSoldResponse11Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private V1PoshmarkSoldResponse12(Optional<V1PoshmarkSoldResponse1> v1PoshmarkSoldResponse1Value,
        Optional<V1PoshmarkSoldResponse11> v1PoshmarkSoldResponse11Value,
        Optional<UnknownArm> unknownValue)
    {
        _v1PoshmarkSoldResponse1Value = v1PoshmarkSoldResponse1Value;
        _v1PoshmarkSoldResponse11Value = v1PoshmarkSoldResponse11Value;
        _unknownValue = unknownValue;
    }

    public static V1PoshmarkSoldResponse12 V1PoshmarkSoldResponse1(V1PoshmarkSoldResponse1 value) =>
        new(Optional<V1PoshmarkSoldResponse1>.Some(value), default, default);

    public static V1PoshmarkSoldResponse12 V1PoshmarkSoldResponse11(V1PoshmarkSoldResponse11 value) =>
        new(default, Optional<V1PoshmarkSoldResponse11>.Some(value), default);

    internal static V1PoshmarkSoldResponse12 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetV1PoshmarkSoldResponse1([NotNullWhen(true)] out V1PoshmarkSoldResponse1? value) =>
        _v1PoshmarkSoldResponse1Value.TryGetValue(out value);

    public bool TryGetV1PoshmarkSoldResponse11([NotNullWhen(true)] out V1PoshmarkSoldResponse11? value) =>
        _v1PoshmarkSoldResponse11Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator V1PoshmarkSoldResponse12(V1PoshmarkSoldResponse1 value) =>
        V1PoshmarkSoldResponse1(value);

    public static implicit operator V1PoshmarkSoldResponse12(V1PoshmarkSoldResponse11 value) =>
        V1PoshmarkSoldResponse11(value);

    public TResult Match<TResult>(Func<V1PoshmarkSoldResponse1, TResult> onV1PoshmarkSoldResponse1,
        Func<V1PoshmarkSoldResponse11, TResult> onV1PoshmarkSoldResponse11,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetV1PoshmarkSoldResponse1(out var v1PoshmarkSoldResponse1Value) => onV1PoshmarkSoldResponse1(
                v1PoshmarkSoldResponse1Value),
            _ when TryGetV1PoshmarkSoldResponse11(out var v1PoshmarkSoldResponse11Value) => onV1PoshmarkSoldResponse11(
                v1PoshmarkSoldResponse11Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(V1PoshmarkSoldResponse12)} holds no value.")
        };

    public void Match(Action<V1PoshmarkSoldResponse1> onV1PoshmarkSoldResponse1,
        Action<V1PoshmarkSoldResponse11> onV1PoshmarkSoldResponse11,
        Action<JsonElement> otherwise)
    {
        if (TryGetV1PoshmarkSoldResponse1(out var v1PoshmarkSoldResponse1Value)) onV1PoshmarkSoldResponse1(
            v1PoshmarkSoldResponse1Value);
        else if (TryGetV1PoshmarkSoldResponse11(out var v1PoshmarkSoldResponse11Value)) onV1PoshmarkSoldResponse11(
            v1PoshmarkSoldResponse11Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(V1PoshmarkSoldResponse12)} holds no value.");
    }
}

file sealed class V1PoshmarkSoldResponse12Converter : JsonConverter<V1PoshmarkSoldResponse12>
{
    public override V1PoshmarkSoldResponse12 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<V1PoshmarkSoldResponse1>(root, options, out var v1PoshmarkSoldResponse1Value))
        {
            return V1PoshmarkSoldResponse12.V1PoshmarkSoldResponse1(v1PoshmarkSoldResponse1Value);
        }
        if (JsonSerializer.TryDeserialize<V1PoshmarkSoldResponse11>(
            root,
            options,
            out var v1PoshmarkSoldResponse11Value))
        {
            return V1PoshmarkSoldResponse12.V1PoshmarkSoldResponse11(v1PoshmarkSoldResponse11Value);
        }
        return V1PoshmarkSoldResponse12.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, V1PoshmarkSoldResponse12 value, JsonSerializerOptions options)
    {
        if (value.TryGetV1PoshmarkSoldResponse1(out var v1PoshmarkSoldResponse1Value))
        {
            JsonSerializer.Serialize(writer, v1PoshmarkSoldResponse1Value, options);
        }
        else if (value.TryGetV1PoshmarkSoldResponse11(out var v1PoshmarkSoldResponse11Value))
        {
            JsonSerializer.Serialize(writer, v1PoshmarkSoldResponse11Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(V1PoshmarkSoldResponse12)} contains no valid value to serialize.");
        }
    }
}
