using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// JSON schema derived from the baseline task run that constrains and structures the event output.
/// </summary>
[JsonConverter(typeof(OutputSchemaModelConverter))]
public record OutputSchemaModel
{
    private readonly Optional<JsonSchemaParallelAiFindAllApi> _jsonSchemaParallelAiFindAllApiValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private OutputSchemaModel(Optional<JsonSchemaParallelAiFindAllApi> jsonSchemaParallelAiFindAllApiValue,
        Optional<UnknownArm> unknownValue)
    {
        _jsonSchemaParallelAiFindAllApiValue = jsonSchemaParallelAiFindAllApiValue;
        _unknownValue = unknownValue;
    }

    public static OutputSchemaModel JsonSchemaParallelAiFindAllApi(JsonSchemaParallelAiFindAllApi value) =>
        new(Optional<JsonSchemaParallelAiFindAllApi>.Some(value), default);

    internal static OutputSchemaModel Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetJsonSchemaParallelAiFindAllApi([NotNullWhen(true)] out JsonSchemaParallelAiFindAllApi? value) =>
        _jsonSchemaParallelAiFindAllApiValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator OutputSchemaModel(JsonSchemaParallelAiFindAllApi value) =>
        JsonSchemaParallelAiFindAllApi(value);

    public TResult Match<TResult>(Func<JsonSchemaParallelAiFindAllApi, TResult> onJsonSchemaParallelAiFindAllApi,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetJsonSchemaParallelAiFindAllApi(
                out var jsonSchemaParallelAiFindAllApiValue) => onJsonSchemaParallelAiFindAllApi(
                jsonSchemaParallelAiFindAllApiValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(OutputSchemaModel)} holds no value.")
        };

    public void Match(Action<JsonSchemaParallelAiFindAllApi> onJsonSchemaParallelAiFindAllApi,
        Action<JsonElement> otherwise)
    {
        if (TryGetJsonSchemaParallelAiFindAllApi(
            out var jsonSchemaParallelAiFindAllApiValue)) onJsonSchemaParallelAiFindAllApi(
            jsonSchemaParallelAiFindAllApiValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(OutputSchemaModel)} holds no value.");
    }
}

file sealed class OutputSchemaModelConverter : JsonConverter<OutputSchemaModel>
{
    public override OutputSchemaModel Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<JsonSchemaParallelAiFindAllApi>(
            root,
            options,
            out var jsonSchemaParallelAiFindAllApiValue))
        {
            return OutputSchemaModel.JsonSchemaParallelAiFindAllApi(jsonSchemaParallelAiFindAllApiValue);
        }
        return OutputSchemaModel.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, OutputSchemaModel value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(OutputSchemaModel)} contains no valid value to serialize.");
        }
    }
}
