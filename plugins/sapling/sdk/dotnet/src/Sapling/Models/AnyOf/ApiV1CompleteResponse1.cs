using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(ApiV1CompleteResponse1Converter))]
public record ApiV1CompleteResponse1
{
    private readonly Optional<ApiV1CompleteResponse> _apiV1CompleteResponseValue;

    private readonly Optional<JsonElement> _jsonElementValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1CompleteResponse1(Optional<ApiV1CompleteResponse> apiV1CompleteResponseValue,
        Optional<JsonElement> jsonElementValue,
        Optional<UnknownArm> unknownValue)
    {
        _apiV1CompleteResponseValue = apiV1CompleteResponseValue;
        _jsonElementValue = jsonElementValue;
        _unknownValue = unknownValue;
    }

    public static ApiV1CompleteResponse1 ApiV1CompleteResponse(ApiV1CompleteResponse value) =>
        new(Optional<ApiV1CompleteResponse>.Some(value), default, default);

    public static ApiV1CompleteResponse1 JsonElement(JsonElement value) =>
        new(default, Optional<JsonElement>.Some(value), default);

    internal static ApiV1CompleteResponse1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetApiV1CompleteResponse([NotNullWhen(true)] out ApiV1CompleteResponse? value) =>
        _apiV1CompleteResponseValue.TryGetValue(out value);

    public bool TryGetJsonElement(out JsonElement value) => _jsonElementValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1CompleteResponse1(ApiV1CompleteResponse value) => ApiV1CompleteResponse(value);

    public TResult Match<TResult>(Func<ApiV1CompleteResponse, TResult> onApiV1CompleteResponse,
        Func<JsonElement, TResult> onJsonElement,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1CompleteResponse(out var apiV1CompleteResponseValue) => onApiV1CompleteResponse(
                apiV1CompleteResponseValue),
            _ when TryGetJsonElement(out var jsonElementValue) => onJsonElement(jsonElementValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1CompleteResponse1)} holds no value.")
        };

    public void Match(Action<ApiV1CompleteResponse> onApiV1CompleteResponse,
        Action<JsonElement> onJsonElement,
        Action<JsonElement> otherwise)
    {
        if (TryGetApiV1CompleteResponse(out var apiV1CompleteResponseValue)) onApiV1CompleteResponse(
            apiV1CompleteResponseValue);
        else if (TryGetJsonElement(out var jsonElementValue)) onJsonElement(jsonElementValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1CompleteResponse1)} holds no value.");
    }
}

file sealed class ApiV1CompleteResponse1Converter : JsonConverter<ApiV1CompleteResponse1>
{
    public override ApiV1CompleteResponse1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ApiV1CompleteResponse>(root, options, out var apiV1CompleteResponseValue))
        {
            return ApiV1CompleteResponse1.ApiV1CompleteResponse(apiV1CompleteResponseValue);
        }
        if (JsonSerializer.TryDeserialize<JsonElement>(root, options, out var jsonElementValue))
        {
            return ApiV1CompleteResponse1.JsonElement(jsonElementValue);
        }
        return ApiV1CompleteResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1CompleteResponse1 value, JsonSerializerOptions options)
    {
        if (value.TryGetApiV1CompleteResponse(out var apiV1CompleteResponseValue))
        {
            JsonSerializer.Serialize(writer, apiV1CompleteResponseValue, options);
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
            throw new JsonException($"{nameof(ApiV1CompleteResponse1)} contains no valid value to serialize.");
        }
    }
}
