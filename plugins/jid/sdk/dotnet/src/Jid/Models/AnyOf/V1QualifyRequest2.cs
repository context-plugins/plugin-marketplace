using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Jid.Core.Extensions;
using Jid.Core.Models;

namespace Jid.Models.AnyOf;

[JsonConverter(typeof(V1QualifyRequest2Converter))]
public record V1QualifyRequest2
{
    private readonly Optional<V1QualifyRequest> _v1QualifyRequestValue;

    private readonly Optional<V1QualifyRequest1> _v1QualifyRequest1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private V1QualifyRequest2(Optional<V1QualifyRequest> v1QualifyRequestValue,
        Optional<V1QualifyRequest1> v1QualifyRequest1Value,
        Optional<UnknownArm> unknownValue)
    {
        _v1QualifyRequestValue = v1QualifyRequestValue;
        _v1QualifyRequest1Value = v1QualifyRequest1Value;
        _unknownValue = unknownValue;
    }

    public static V1QualifyRequest2 V1QualifyRequest(V1QualifyRequest value) =>
        new(Optional<V1QualifyRequest>.Some(value), default, default);

    public static V1QualifyRequest2 V1QualifyRequest1(V1QualifyRequest1 value) =>
        new(default, Optional<V1QualifyRequest1>.Some(value), default);

    internal static V1QualifyRequest2 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetV1QualifyRequest([NotNullWhen(true)] out V1QualifyRequest? value) =>
        _v1QualifyRequestValue.TryGetValue(out value);

    public bool TryGetV1QualifyRequest1([NotNullWhen(true)] out V1QualifyRequest1? value) =>
        _v1QualifyRequest1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator V1QualifyRequest2(V1QualifyRequest value) => V1QualifyRequest(value);

    public static implicit operator V1QualifyRequest2(V1QualifyRequest1 value) => V1QualifyRequest1(value);

    public TResult Match<TResult>(Func<V1QualifyRequest, TResult> onV1QualifyRequest,
        Func<V1QualifyRequest1, TResult> onV1QualifyRequest1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetV1QualifyRequest(out var v1QualifyRequestValue) => onV1QualifyRequest(v1QualifyRequestValue),
            _ when TryGetV1QualifyRequest1(out var v1QualifyRequest1Value) => onV1QualifyRequest1(
                v1QualifyRequest1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(V1QualifyRequest2)} holds no value.")
        };

    public void Match(Action<V1QualifyRequest> onV1QualifyRequest,
        Action<V1QualifyRequest1> onV1QualifyRequest1,
        Action<JsonElement> otherwise)
    {
        if (TryGetV1QualifyRequest(out var v1QualifyRequestValue)) onV1QualifyRequest(v1QualifyRequestValue);
        else if (TryGetV1QualifyRequest1(out var v1QualifyRequest1Value)) onV1QualifyRequest1(v1QualifyRequest1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(V1QualifyRequest2)} holds no value.");
    }
}

file sealed class V1QualifyRequest2Converter : JsonConverter<V1QualifyRequest2>
{
    public override V1QualifyRequest2 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<V1QualifyRequest>(root, options, out var v1QualifyRequestValue))
        {
            return V1QualifyRequest2.V1QualifyRequest(v1QualifyRequestValue);
        }
        if (JsonSerializer.TryDeserialize<V1QualifyRequest1>(root, options, out var v1QualifyRequest1Value))
        {
            return V1QualifyRequest2.V1QualifyRequest1(v1QualifyRequest1Value);
        }
        return V1QualifyRequest2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, V1QualifyRequest2 value, JsonSerializerOptions options)
    {
        if (value.TryGetV1QualifyRequest(out var v1QualifyRequestValue))
        {
            JsonSerializer.Serialize(writer, v1QualifyRequestValue, options);
        }
        else if (value.TryGetV1QualifyRequest1(out var v1QualifyRequest1Value))
        {
            JsonSerializer.Serialize(writer, v1QualifyRequest1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(V1QualifyRequest2)} contains no valid value to serialize.");
        }
    }
}
