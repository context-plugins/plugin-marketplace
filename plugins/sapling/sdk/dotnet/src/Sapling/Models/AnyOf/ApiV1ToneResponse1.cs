using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(ApiV1ToneResponse1Converter))]
public record ApiV1ToneResponse1
{
    private readonly Optional<ApiV1ToneResponse> _apiV1ToneResponseValue;

    private readonly Optional<JsonElement> _jsonElementValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1ToneResponse1(Optional<ApiV1ToneResponse> apiV1ToneResponseValue,
        Optional<JsonElement> jsonElementValue,
        Optional<UnknownArm> unknownValue)
    {
        _apiV1ToneResponseValue = apiV1ToneResponseValue;
        _jsonElementValue = jsonElementValue;
        _unknownValue = unknownValue;
    }

    public static ApiV1ToneResponse1 ApiV1ToneResponse(ApiV1ToneResponse value) =>
        new(Optional<ApiV1ToneResponse>.Some(value), default, default);

    public static ApiV1ToneResponse1 JsonElement(JsonElement value) =>
        new(default, Optional<JsonElement>.Some(value), default);

    internal static ApiV1ToneResponse1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetApiV1ToneResponse([NotNullWhen(true)] out ApiV1ToneResponse? value) =>
        _apiV1ToneResponseValue.TryGetValue(out value);

    public bool TryGetJsonElement(out JsonElement value) => _jsonElementValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1ToneResponse1(ApiV1ToneResponse value) => ApiV1ToneResponse(value);

    public TResult Match<TResult>(Func<ApiV1ToneResponse, TResult> onApiV1ToneResponse,
        Func<JsonElement, TResult> onJsonElement,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1ToneResponse(out var apiV1ToneResponseValue) => onApiV1ToneResponse(
                apiV1ToneResponseValue),
            _ when TryGetJsonElement(out var jsonElementValue) => onJsonElement(jsonElementValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1ToneResponse1)} holds no value.")
        };

    public void Match(Action<ApiV1ToneResponse> onApiV1ToneResponse,
        Action<JsonElement> onJsonElement,
        Action<JsonElement> otherwise)
    {
        if (TryGetApiV1ToneResponse(out var apiV1ToneResponseValue)) onApiV1ToneResponse(apiV1ToneResponseValue);
        else if (TryGetJsonElement(out var jsonElementValue)) onJsonElement(jsonElementValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1ToneResponse1)} holds no value.");
    }
}

file sealed class ApiV1ToneResponse1Converter : JsonConverter<ApiV1ToneResponse1>
{
    public override ApiV1ToneResponse1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ApiV1ToneResponse>(root, options, out var apiV1ToneResponseValue))
        {
            return ApiV1ToneResponse1.ApiV1ToneResponse(apiV1ToneResponseValue);
        }
        if (JsonSerializer.TryDeserialize<JsonElement>(root, options, out var jsonElementValue))
        {
            return ApiV1ToneResponse1.JsonElement(jsonElementValue);
        }
        return ApiV1ToneResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1ToneResponse1 value, JsonSerializerOptions options)
    {
        if (value.TryGetApiV1ToneResponse(out var apiV1ToneResponseValue))
        {
            JsonSerializer.Serialize(writer, apiV1ToneResponseValue, options);
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
            throw new JsonException($"{nameof(ApiV1ToneResponse1)} contains no valid value to serialize.");
        }
    }
}
