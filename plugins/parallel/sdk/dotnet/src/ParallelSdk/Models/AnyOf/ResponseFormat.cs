using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// The response format to use for chat completions. OpenAI compatible.
/// </summary>
[JsonConverter(typeof(ResponseFormatConverter))]
public record ResponseFormat
{
    private readonly Optional<ResponseFormatText> _responseFormatTextValue;

    private readonly Optional<ResponseFormatJsonSchema> _responseFormatJsonSchemaValue;

    private readonly Optional<ResponseFormatJsonObject> _responseFormatJsonObjectValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ResponseFormat(Optional<ResponseFormatText> responseFormatTextValue,
        Optional<ResponseFormatJsonSchema> responseFormatJsonSchemaValue,
        Optional<ResponseFormatJsonObject> responseFormatJsonObjectValue,
        Optional<UnknownArm> unknownValue)
    {
        _responseFormatTextValue = responseFormatTextValue;
        _responseFormatJsonSchemaValue = responseFormatJsonSchemaValue;
        _responseFormatJsonObjectValue = responseFormatJsonObjectValue;
        _unknownValue = unknownValue;
    }

    public static ResponseFormat ResponseFormatText(ResponseFormatText value) =>
        new(Optional<ResponseFormatText>.Some(value), default, default, default);

    public static ResponseFormat ResponseFormatJsonSchema(ResponseFormatJsonSchema value) =>
        new(default, Optional<ResponseFormatJsonSchema>.Some(value), default, default);

    public static ResponseFormat ResponseFormatJsonObject(ResponseFormatJsonObject value) =>
        new(default, default, Optional<ResponseFormatJsonObject>.Some(value), default);

    internal static ResponseFormat Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetResponseFormatText([NotNullWhen(true)] out ResponseFormatText? value) =>
        _responseFormatTextValue.TryGetValue(out value);

    public bool TryGetResponseFormatJsonSchema([NotNullWhen(true)] out ResponseFormatJsonSchema? value) =>
        _responseFormatJsonSchemaValue.TryGetValue(out value);

    public bool TryGetResponseFormatJsonObject([NotNullWhen(true)] out ResponseFormatJsonObject? value) =>
        _responseFormatJsonObjectValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ResponseFormat(ResponseFormatText value) => ResponseFormatText(value);

    public static implicit operator ResponseFormat(ResponseFormatJsonSchema value) => ResponseFormatJsonSchema(value);

    public static implicit operator ResponseFormat(ResponseFormatJsonObject value) => ResponseFormatJsonObject(value);

    public TResult Match<TResult>(Func<ResponseFormatText, TResult> onResponseFormatText,
        Func<ResponseFormatJsonSchema, TResult> onResponseFormatJsonSchema,
        Func<ResponseFormatJsonObject, TResult> onResponseFormatJsonObject,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetResponseFormatText(out var responseFormatTextValue) => onResponseFormatText(
                responseFormatTextValue),
            _ when TryGetResponseFormatJsonSchema(out var responseFormatJsonSchemaValue) => onResponseFormatJsonSchema(
                responseFormatJsonSchemaValue),
            _ when TryGetResponseFormatJsonObject(out var responseFormatJsonObjectValue) => onResponseFormatJsonObject(
                responseFormatJsonObjectValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ResponseFormat)} holds no value.")
        };

    public void Match(Action<ResponseFormatText> onResponseFormatText,
        Action<ResponseFormatJsonSchema> onResponseFormatJsonSchema,
        Action<ResponseFormatJsonObject> onResponseFormatJsonObject,
        Action<JsonElement> otherwise)
    {
        if (TryGetResponseFormatText(out var responseFormatTextValue)) onResponseFormatText(responseFormatTextValue);
        else if (TryGetResponseFormatJsonSchema(out var responseFormatJsonSchemaValue)) onResponseFormatJsonSchema(
            responseFormatJsonSchemaValue);
        else if (TryGetResponseFormatJsonObject(out var responseFormatJsonObjectValue)) onResponseFormatJsonObject(
            responseFormatJsonObjectValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ResponseFormat)} holds no value.");
    }
}

file sealed class ResponseFormatConverter : JsonConverter<ResponseFormat>
{
    public override ResponseFormat Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ResponseFormatText>(root, options, out var responseFormatTextValue))
        {
            return ResponseFormat.ResponseFormatText(responseFormatTextValue);
        }
        if (JsonSerializer.TryDeserialize<ResponseFormatJsonSchema>(
            root,
            options,
            out var responseFormatJsonSchemaValue))
        {
            return ResponseFormat.ResponseFormatJsonSchema(responseFormatJsonSchemaValue);
        }
        if (JsonSerializer.TryDeserialize<ResponseFormatJsonObject>(
            root,
            options,
            out var responseFormatJsonObjectValue))
        {
            return ResponseFormat.ResponseFormatJsonObject(responseFormatJsonObjectValue);
        }
        return ResponseFormat.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ResponseFormat value, JsonSerializerOptions options)
    {
        if (value.TryGetResponseFormatText(out var responseFormatTextValue))
        {
            JsonSerializer.Serialize(writer, responseFormatTextValue, options);
        }
        else if (value.TryGetResponseFormatJsonSchema(out var responseFormatJsonSchemaValue))
        {
            JsonSerializer.Serialize(writer, responseFormatJsonSchemaValue, options);
        }
        else if (value.TryGetResponseFormatJsonObject(out var responseFormatJsonObjectValue))
        {
            JsonSerializer.Serialize(writer, responseFormatJsonObjectValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ResponseFormat)} contains no valid value to serialize.");
        }
    }
}
