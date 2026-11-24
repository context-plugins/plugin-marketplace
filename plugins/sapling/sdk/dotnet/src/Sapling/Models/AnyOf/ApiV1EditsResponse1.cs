using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(ApiV1EditsResponse1Converter))]
public record ApiV1EditsResponse1
{
    private readonly Optional<ApiV1EditsResponse> _apiV1EditsResponseValue;

    private readonly Optional<JsonElement> _jsonElementValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1EditsResponse1(Optional<ApiV1EditsResponse> apiV1EditsResponseValue,
        Optional<JsonElement> jsonElementValue,
        Optional<UnknownArm> unknownValue)
    {
        _apiV1EditsResponseValue = apiV1EditsResponseValue;
        _jsonElementValue = jsonElementValue;
        _unknownValue = unknownValue;
    }

    public static ApiV1EditsResponse1 ApiV1EditsResponse(ApiV1EditsResponse value) =>
        new(Optional<ApiV1EditsResponse>.Some(value), default, default);

    public static ApiV1EditsResponse1 JsonElement(JsonElement value) =>
        new(default, Optional<JsonElement>.Some(value), default);

    internal static ApiV1EditsResponse1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetApiV1EditsResponse([NotNullWhen(true)] out ApiV1EditsResponse? value) =>
        _apiV1EditsResponseValue.TryGetValue(out value);

    public bool TryGetJsonElement(out JsonElement value) => _jsonElementValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1EditsResponse1(ApiV1EditsResponse value) => ApiV1EditsResponse(value);

    public TResult Match<TResult>(Func<ApiV1EditsResponse, TResult> onApiV1EditsResponse,
        Func<JsonElement, TResult> onJsonElement,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1EditsResponse(out var apiV1EditsResponseValue) => onApiV1EditsResponse(
                apiV1EditsResponseValue),
            _ when TryGetJsonElement(out var jsonElementValue) => onJsonElement(jsonElementValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1EditsResponse1)} holds no value.")
        };

    public void Match(Action<ApiV1EditsResponse> onApiV1EditsResponse,
        Action<JsonElement> onJsonElement,
        Action<JsonElement> otherwise)
    {
        if (TryGetApiV1EditsResponse(out var apiV1EditsResponseValue)) onApiV1EditsResponse(apiV1EditsResponseValue);
        else if (TryGetJsonElement(out var jsonElementValue)) onJsonElement(jsonElementValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1EditsResponse1)} holds no value.");
    }
}

file sealed class ApiV1EditsResponse1Converter : JsonConverter<ApiV1EditsResponse1>
{
    public override ApiV1EditsResponse1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ApiV1EditsResponse>(root, options, out var apiV1EditsResponseValue))
        {
            return ApiV1EditsResponse1.ApiV1EditsResponse(apiV1EditsResponseValue);
        }
        if (JsonSerializer.TryDeserialize<JsonElement>(root, options, out var jsonElementValue))
        {
            return ApiV1EditsResponse1.JsonElement(jsonElementValue);
        }
        return ApiV1EditsResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1EditsResponse1 value, JsonSerializerOptions options)
    {
        if (value.TryGetApiV1EditsResponse(out var apiV1EditsResponseValue))
        {
            JsonSerializer.Serialize(writer, apiV1EditsResponseValue, options);
        }
        else if (value.TryGetJsonElement(out var jsonElementValue))
        {
            JsonSerializer.Serialize(writer, jsonElementValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ApiV1EditsResponse1)} contains no valid value to serialize.");
        }
    }
}
