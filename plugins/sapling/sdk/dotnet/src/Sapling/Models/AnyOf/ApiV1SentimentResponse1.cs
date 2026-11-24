using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(ApiV1SentimentResponse1Converter))]
public record ApiV1SentimentResponse1
{
    private readonly Optional<ApiV1SentimentResponse> _apiV1SentimentResponseValue;

    private readonly Optional<JsonElement> _jsonElementValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1SentimentResponse1(Optional<ApiV1SentimentResponse> apiV1SentimentResponseValue,
        Optional<JsonElement> jsonElementValue,
        Optional<UnknownArm> unknownValue)
    {
        _apiV1SentimentResponseValue = apiV1SentimentResponseValue;
        _jsonElementValue = jsonElementValue;
        _unknownValue = unknownValue;
    }

    public static ApiV1SentimentResponse1 ApiV1SentimentResponse(ApiV1SentimentResponse value) =>
        new(Optional<ApiV1SentimentResponse>.Some(value), default, default);

    public static ApiV1SentimentResponse1 JsonElement(JsonElement value) =>
        new(default, Optional<JsonElement>.Some(value), default);

    internal static ApiV1SentimentResponse1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetApiV1SentimentResponse([NotNullWhen(true)] out ApiV1SentimentResponse? value) =>
        _apiV1SentimentResponseValue.TryGetValue(out value);

    public bool TryGetJsonElement(out JsonElement value) => _jsonElementValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1SentimentResponse1(ApiV1SentimentResponse value) =>
        ApiV1SentimentResponse(value);

    public TResult Match<TResult>(Func<ApiV1SentimentResponse, TResult> onApiV1SentimentResponse,
        Func<JsonElement, TResult> onJsonElement,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1SentimentResponse(out var apiV1SentimentResponseValue) => onApiV1SentimentResponse(
                apiV1SentimentResponseValue),
            _ when TryGetJsonElement(out var jsonElementValue) => onJsonElement(jsonElementValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1SentimentResponse1)} holds no value.")
        };

    public void Match(Action<ApiV1SentimentResponse> onApiV1SentimentResponse,
        Action<JsonElement> onJsonElement,
        Action<JsonElement> otherwise)
    {
        if (TryGetApiV1SentimentResponse(out var apiV1SentimentResponseValue)) onApiV1SentimentResponse(
            apiV1SentimentResponseValue);
        else if (TryGetJsonElement(out var jsonElementValue)) onJsonElement(jsonElementValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1SentimentResponse1)} holds no value.");
    }
}

file sealed class ApiV1SentimentResponse1Converter : JsonConverter<ApiV1SentimentResponse1>
{
    public override ApiV1SentimentResponse1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ApiV1SentimentResponse>(root, options, out var apiV1SentimentResponseValue))
        {
            return ApiV1SentimentResponse1.ApiV1SentimentResponse(apiV1SentimentResponseValue);
        }
        if (JsonSerializer.TryDeserialize<JsonElement>(root, options, out var jsonElementValue))
        {
            return ApiV1SentimentResponse1.JsonElement(jsonElementValue);
        }
        return ApiV1SentimentResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1SentimentResponse1 value, JsonSerializerOptions options)
    {
        if (value.TryGetApiV1SentimentResponse(out var apiV1SentimentResponseValue))
        {
            JsonSerializer.Serialize(writer, apiV1SentimentResponseValue, options);
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
            throw new JsonException($"{nameof(ApiV1SentimentResponse1)} contains no valid value to serialize.");
        }
    }
}
