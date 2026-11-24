using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

[JsonConverter(typeof(FormatConverter))]
public record Format
{
    private readonly Optional<ResponseFormatText> _responseFormatTextValue;

    private readonly Optional<ResponseFormatTextJsonSchemaConfig> _responseFormatTextJsonSchemaConfigValue;

    private readonly Optional<ResponseFormatJsonObject> _responseFormatJsonObjectValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Format(Optional<ResponseFormatText> responseFormatTextValue,
        Optional<ResponseFormatTextJsonSchemaConfig> responseFormatTextJsonSchemaConfigValue,
        Optional<ResponseFormatJsonObject> responseFormatJsonObjectValue,
        Optional<UnknownArm> unknownValue)
    {
        _responseFormatTextValue = responseFormatTextValue;
        _responseFormatTextJsonSchemaConfigValue = responseFormatTextJsonSchemaConfigValue;
        _responseFormatJsonObjectValue = responseFormatJsonObjectValue;
        _unknownValue = unknownValue;
    }

    public static Format ResponseFormatText(ResponseFormatText value) =>
        new(Optional<ResponseFormatText>.Some(value), default, default, default);

    public static Format ResponseFormatTextJsonSchemaConfig(ResponseFormatTextJsonSchemaConfig value) =>
        new(default, Optional<ResponseFormatTextJsonSchemaConfig>.Some(value), default, default);

    public static Format ResponseFormatJsonObject(ResponseFormatJsonObject value) =>
        new(default, default, Optional<ResponseFormatJsonObject>.Some(value), default);

    internal static Format Unknown(JsonElement value) =>
        new(default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetResponseFormatText([NotNullWhen(true)] out ResponseFormatText? value) =>
        _responseFormatTextValue.TryGetValue(out value);

    public bool TryGetResponseFormatTextJsonSchemaConfig([NotNullWhen(true)] out ResponseFormatTextJsonSchemaConfig? value) =>
        _responseFormatTextJsonSchemaConfigValue.TryGetValue(out value);

    public bool TryGetResponseFormatJsonObject([NotNullWhen(true)] out ResponseFormatJsonObject? value) =>
        _responseFormatJsonObjectValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Format(ResponseFormatText value) => ResponseFormatText(value);

    public static implicit operator Format(ResponseFormatTextJsonSchemaConfig value) =>
        ResponseFormatTextJsonSchemaConfig(value);

    public static implicit operator Format(ResponseFormatJsonObject value) => ResponseFormatJsonObject(value);

    public TResult Match<TResult>(Func<ResponseFormatText, TResult> onResponseFormatText,
        Func<ResponseFormatTextJsonSchemaConfig, TResult> onResponseFormatTextJsonSchemaConfig,
        Func<ResponseFormatJsonObject, TResult> onResponseFormatJsonObject,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetResponseFormatText(out var responseFormatTextValue) => onResponseFormatText(
                responseFormatTextValue),
            _ when TryGetResponseFormatTextJsonSchemaConfig(
                out var responseFormatTextJsonSchemaConfigValue) => onResponseFormatTextJsonSchemaConfig(
                responseFormatTextJsonSchemaConfigValue),
            _ when TryGetResponseFormatJsonObject(out var responseFormatJsonObjectValue) => onResponseFormatJsonObject(
                responseFormatJsonObjectValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Format)} holds no value.")
        };

    public void Match(Action<ResponseFormatText> onResponseFormatText,
        Action<ResponseFormatTextJsonSchemaConfig> onResponseFormatTextJsonSchemaConfig,
        Action<ResponseFormatJsonObject> onResponseFormatJsonObject,
        Action<JsonElement> otherwise)
    {
        if (TryGetResponseFormatText(out var responseFormatTextValue)) onResponseFormatText(responseFormatTextValue);
        else if (TryGetResponseFormatTextJsonSchemaConfig(
            out var responseFormatTextJsonSchemaConfigValue)) onResponseFormatTextJsonSchemaConfig(
            responseFormatTextJsonSchemaConfigValue);
        else if (TryGetResponseFormatJsonObject(out var responseFormatJsonObjectValue)) onResponseFormatJsonObject(
            responseFormatJsonObjectValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Format)} holds no value.");
    }
}

file sealed class FormatConverter : JsonConverter<Format>
{
    public override Format Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ResponseFormatText>(root, options, out var responseFormatTextValue))
        {
            return Format.ResponseFormatText(responseFormatTextValue);
        }
        if (JsonSerializer.TryDeserialize<ResponseFormatTextJsonSchemaConfig>(
            root,
            options,
            out var responseFormatTextJsonSchemaConfigValue))
        {
            return Format.ResponseFormatTextJsonSchemaConfig(responseFormatTextJsonSchemaConfigValue);
        }
        if (JsonSerializer.TryDeserialize<ResponseFormatJsonObject>(
            root,
            options,
            out var responseFormatJsonObjectValue))
        {
            return Format.ResponseFormatJsonObject(responseFormatJsonObjectValue);
        }
        return Format.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Format value, JsonSerializerOptions options)
    {
        if (value.TryGetResponseFormatText(out var responseFormatTextValue))
        {
            JsonSerializer.Serialize(writer, responseFormatTextValue, options);
        }
        else if (value.TryGetResponseFormatTextJsonSchemaConfig(out var responseFormatTextJsonSchemaConfigValue))
        {
            JsonSerializer.Serialize(writer, responseFormatTextJsonSchemaConfigValue, options);
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
            throw new JsonException($"{nameof(Format)} contains no valid value to serialize.");
        }
    }
}
