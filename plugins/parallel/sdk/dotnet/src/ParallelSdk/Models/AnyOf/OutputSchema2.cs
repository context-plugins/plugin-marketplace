using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// JSON schema that constrains and structures the event output. When set, events are returned as JSON objects matching this schema.
/// </summary>
[JsonConverter(typeof(OutputSchema2Converter))]
public record OutputSchema2
{
    private readonly Optional<JsonSchemaParallelAiFindAllApi> _jsonSchemaParallelAiFindAllApiValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private OutputSchema2(Optional<JsonSchemaParallelAiFindAllApi> jsonSchemaParallelAiFindAllApiValue,
        Optional<UnknownArm> unknownValue)
    {
        _jsonSchemaParallelAiFindAllApiValue = jsonSchemaParallelAiFindAllApiValue;
        _unknownValue = unknownValue;
    }

    public static OutputSchema2 JsonSchemaParallelAiFindAllApi(JsonSchemaParallelAiFindAllApi value) =>
        new(Optional<JsonSchemaParallelAiFindAllApi>.Some(value), default);

    internal static OutputSchema2 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetJsonSchemaParallelAiFindAllApi([NotNullWhen(true)] out JsonSchemaParallelAiFindAllApi? value) =>
        _jsonSchemaParallelAiFindAllApiValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator OutputSchema2(JsonSchemaParallelAiFindAllApi value) =>
        JsonSchemaParallelAiFindAllApi(value);

    public TResult Match<TResult>(Func<JsonSchemaParallelAiFindAllApi, TResult> onJsonSchemaParallelAiFindAllApi,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetJsonSchemaParallelAiFindAllApi(
                out var jsonSchemaParallelAiFindAllApiValue) => onJsonSchemaParallelAiFindAllApi(
                jsonSchemaParallelAiFindAllApiValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(OutputSchema2)} holds no value.")
        };

    public void Match(Action<JsonSchemaParallelAiFindAllApi> onJsonSchemaParallelAiFindAllApi,
        Action<JsonElement> otherwise)
    {
        if (TryGetJsonSchemaParallelAiFindAllApi(
            out var jsonSchemaParallelAiFindAllApiValue)) onJsonSchemaParallelAiFindAllApi(
            jsonSchemaParallelAiFindAllApiValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(OutputSchema2)} holds no value.");
    }
}

file sealed class OutputSchema2Converter : JsonConverter<OutputSchema2>
{
    public override OutputSchema2 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<JsonSchemaParallelAiFindAllApi>(
            root,
            options,
            out var jsonSchemaParallelAiFindAllApiValue))
        {
            return OutputSchema2.JsonSchemaParallelAiFindAllApi(jsonSchemaParallelAiFindAllApiValue);
        }
        return OutputSchema2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, OutputSchema2 value, JsonSerializerOptions options)
    {
        if (value.TryGetJsonSchemaParallelAiFindAllApi(out var jsonSchemaParallelAiFindAllApiValue))
        {
            JsonSerializer.Serialize(writer, jsonSchemaParallelAiFindAllApiValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(OutputSchema2)} contains no valid value to serialize.");
        }
    }
}
