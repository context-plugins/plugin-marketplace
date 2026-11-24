using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Optional JSON schema or text description of expected input to the task. A bare string is equivalent to a text schema with the same description.
/// </summary>
[JsonConverter(typeof(InputSchemaConverter))]
public record InputSchema
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<JsonSchemaParallelAiTasksApi> _jsonSchemaParallelAiTasksApiValue;

    private readonly Optional<TextSchema> _textSchemaValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private InputSchema(Optional<string> stringValue,
        Optional<JsonSchemaParallelAiTasksApi> jsonSchemaParallelAiTasksApiValue,
        Optional<TextSchema> textSchemaValue,
        Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _jsonSchemaParallelAiTasksApiValue = jsonSchemaParallelAiTasksApiValue;
        _textSchemaValue = textSchemaValue;
        _unknownValue = unknownValue;
    }

    public static InputSchema String(string value) => new(Optional<string>.Some(value), default, default, default);

    public static InputSchema JsonSchemaParallelAiTasksApi(JsonSchemaParallelAiTasksApi value) =>
        new(default, Optional<JsonSchemaParallelAiTasksApi>.Some(value), default, default);

    public static InputSchema TextSchema(TextSchema value) =>
        new(default, default, Optional<TextSchema>.Some(value), default);

    internal static InputSchema Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetJsonSchemaParallelAiTasksApi([NotNullWhen(true)] out JsonSchemaParallelAiTasksApi? value) =>
        _jsonSchemaParallelAiTasksApiValue.TryGetValue(out value);

    public bool TryGetTextSchema([NotNullWhen(true)] out TextSchema? value) => _textSchemaValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator InputSchema(string value) => String(value);

    public static implicit operator InputSchema(JsonSchemaParallelAiTasksApi value) =>
        JsonSchemaParallelAiTasksApi(value);

    public static implicit operator InputSchema(TextSchema value) => TextSchema(value);

    public TResult Match<TResult>(Func<string, TResult> onString,
        Func<JsonSchemaParallelAiTasksApi, TResult> onJsonSchemaParallelAiTasksApi,
        Func<TextSchema, TResult> onTextSchema,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetJsonSchemaParallelAiTasksApi(
                out var jsonSchemaParallelAiTasksApiValue) => onJsonSchemaParallelAiTasksApi(
                jsonSchemaParallelAiTasksApiValue),
            _ when TryGetTextSchema(out var textSchemaValue) => onTextSchema(textSchemaValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(InputSchema)} holds no value.")
        };

    public void Match(Action<string> onString,
        Action<JsonSchemaParallelAiTasksApi> onJsonSchemaParallelAiTasksApi,
        Action<TextSchema> onTextSchema,
        Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetJsonSchemaParallelAiTasksApi(
            out var jsonSchemaParallelAiTasksApiValue)) onJsonSchemaParallelAiTasksApi(
            jsonSchemaParallelAiTasksApiValue);
        else if (TryGetTextSchema(out var textSchemaValue)) onTextSchema(textSchemaValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(InputSchema)} holds no value.");
    }
}

file sealed class InputSchemaConverter : JsonConverter<InputSchema>
{
    public override InputSchema Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return InputSchema.String(value);
        }
        if (JsonSerializer.TryDeserialize<JsonSchemaParallelAiTasksApi>(
            root,
            options,
            out var jsonSchemaParallelAiTasksApiValue))
        {
            return InputSchema.JsonSchemaParallelAiTasksApi(jsonSchemaParallelAiTasksApiValue);
        }
        if (JsonSerializer.TryDeserialize<TextSchema>(root, options, out var textSchemaValue))
        {
            return InputSchema.TextSchema(textSchemaValue);
        }
        return InputSchema.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, InputSchema value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetJsonSchemaParallelAiTasksApi(out var jsonSchemaParallelAiTasksApiValue))
        {
            JsonSerializer.Serialize(writer, jsonSchemaParallelAiTasksApiValue, options);
        }
        else if (value.TryGetTextSchema(out var textSchemaValue))
        {
            JsonSerializer.Serialize(writer, textSchemaValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(InputSchema)} contains no valid value to serialize.");
        }
    }
}
