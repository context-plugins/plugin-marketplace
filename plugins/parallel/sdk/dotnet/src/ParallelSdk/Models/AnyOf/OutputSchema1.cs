using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// JSON schema or text fully describing the desired output from the task. Descriptions of output fields will determine the form and content of the response. A bare string is equivalent to a text schema with the same description.
/// </summary>
[JsonConverter(typeof(OutputSchema1Converter))]
public record OutputSchema1
{
    private readonly Optional<JsonSchemaParallelAiTasksApi> _jsonSchemaParallelAiTasksApiValue;

    private readonly Optional<TextSchema> _textSchemaValue;

    private readonly Optional<AutoSchema> _autoSchemaValue;

    private readonly Optional<string> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private OutputSchema1(Optional<JsonSchemaParallelAiTasksApi> jsonSchemaParallelAiTasksApiValue,
        Optional<TextSchema> textSchemaValue,
        Optional<AutoSchema> autoSchemaValue,
        Optional<string> stringValue,
        Optional<UnknownArm> unknownValue)
    {
        _jsonSchemaParallelAiTasksApiValue = jsonSchemaParallelAiTasksApiValue;
        _textSchemaValue = textSchemaValue;
        _autoSchemaValue = autoSchemaValue;
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static OutputSchema1 JsonSchemaParallelAiTasksApi(JsonSchemaParallelAiTasksApi value) =>
        new(Optional<JsonSchemaParallelAiTasksApi>.Some(value), default, default, default, default);

    public static OutputSchema1 TextSchema(TextSchema value) =>
        new(default, Optional<TextSchema>.Some(value), default, default, default);

    public static OutputSchema1 AutoSchema(AutoSchema value) =>
        new(default, default, Optional<AutoSchema>.Some(value), default, default);

    public static OutputSchema1 String(string value) =>
        new(default, default, default, Optional<string>.Some(value), default);

    internal static OutputSchema1 Unknown(JsonElement value) =>
        new(default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetJsonSchemaParallelAiTasksApi([NotNullWhen(true)] out JsonSchemaParallelAiTasksApi? value) =>
        _jsonSchemaParallelAiTasksApiValue.TryGetValue(out value);

    public bool TryGetTextSchema([NotNullWhen(true)] out TextSchema? value) => _textSchemaValue.TryGetValue(out value);

    public bool TryGetAutoSchema([NotNullWhen(true)] out AutoSchema? value) => _autoSchemaValue.TryGetValue(out value);

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator OutputSchema1(JsonSchemaParallelAiTasksApi value) =>
        JsonSchemaParallelAiTasksApi(value);

    public static implicit operator OutputSchema1(TextSchema value) => TextSchema(value);

    public static implicit operator OutputSchema1(AutoSchema value) => AutoSchema(value);

    public static implicit operator OutputSchema1(string value) => String(value);

    public TResult Match<TResult>(Func<JsonSchemaParallelAiTasksApi, TResult> onJsonSchemaParallelAiTasksApi,
        Func<TextSchema, TResult> onTextSchema,
        Func<AutoSchema, TResult> onAutoSchema,
        Func<string, TResult> onString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetJsonSchemaParallelAiTasksApi(
                out var jsonSchemaParallelAiTasksApiValue) => onJsonSchemaParallelAiTasksApi(
                jsonSchemaParallelAiTasksApiValue),
            _ when TryGetTextSchema(out var textSchemaValue) => onTextSchema(textSchemaValue),
            _ when TryGetAutoSchema(out var autoSchemaValue) => onAutoSchema(autoSchemaValue),
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(OutputSchema1)} holds no value.")
        };

    public void Match(Action<JsonSchemaParallelAiTasksApi> onJsonSchemaParallelAiTasksApi,
        Action<TextSchema> onTextSchema,
        Action<AutoSchema> onAutoSchema,
        Action<string> onString,
        Action<JsonElement> otherwise)
    {
        if (TryGetJsonSchemaParallelAiTasksApi(
            out var jsonSchemaParallelAiTasksApiValue)) onJsonSchemaParallelAiTasksApi(
            jsonSchemaParallelAiTasksApiValue);
        else if (TryGetTextSchema(out var textSchemaValue)) onTextSchema(textSchemaValue);
        else if (TryGetAutoSchema(out var autoSchemaValue)) onAutoSchema(autoSchemaValue);
        else if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(OutputSchema1)} holds no value.");
    }
}

file sealed class OutputSchema1Converter : JsonConverter<OutputSchema1>
{
    public override OutputSchema1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<JsonSchemaParallelAiTasksApi>(
            root,
            options,
            out var jsonSchemaParallelAiTasksApiValue))
        {
            return OutputSchema1.JsonSchemaParallelAiTasksApi(jsonSchemaParallelAiTasksApiValue);
        }
        if (JsonSerializer.TryDeserialize<TextSchema>(root, options, out var textSchemaValue))
        {
            return OutputSchema1.TextSchema(textSchemaValue);
        }
        if (JsonSerializer.TryDeserialize<AutoSchema>(root, options, out var autoSchemaValue))
        {
            return OutputSchema1.AutoSchema(autoSchemaValue);
        }
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return OutputSchema1.String(value);
        }
        return OutputSchema1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, OutputSchema1 value, JsonSerializerOptions options)
    {
        if (value.TryGetJsonSchemaParallelAiTasksApi(out var jsonSchemaParallelAiTasksApiValue))
        {
            JsonSerializer.Serialize(writer, jsonSchemaParallelAiTasksApiValue, options);
        }
        else if (value.TryGetTextSchema(out var textSchemaValue))
        {
            JsonSerializer.Serialize(writer, textSchemaValue, options);
        }
        else if (value.TryGetAutoSchema(out var autoSchemaValue))
        {
            JsonSerializer.Serialize(writer, autoSchemaValue, options);
        }
        else if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(OutputSchema1)} contains no valid value to serialize.");
        }
    }
}
