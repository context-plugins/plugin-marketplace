using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(ApiV1SpellcheckResponse1Converter))]
public record ApiV1SpellcheckResponse1
{
    private readonly Optional<ApiV1SpellcheckResponse> _apiV1SpellcheckResponseValue;

    private readonly Optional<JsonElement> _jsonElementValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1SpellcheckResponse1(Optional<ApiV1SpellcheckResponse> apiV1SpellcheckResponseValue,
        Optional<JsonElement> jsonElementValue,
        Optional<UnknownArm> unknownValue)
    {
        _apiV1SpellcheckResponseValue = apiV1SpellcheckResponseValue;
        _jsonElementValue = jsonElementValue;
        _unknownValue = unknownValue;
    }

    public static ApiV1SpellcheckResponse1 ApiV1SpellcheckResponse(ApiV1SpellcheckResponse value) =>
        new(Optional<ApiV1SpellcheckResponse>.Some(value), default, default);

    public static ApiV1SpellcheckResponse1 JsonElement(JsonElement value) =>
        new(default, Optional<JsonElement>.Some(value), default);

    internal static ApiV1SpellcheckResponse1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetApiV1SpellcheckResponse([NotNullWhen(true)] out ApiV1SpellcheckResponse? value) =>
        _apiV1SpellcheckResponseValue.TryGetValue(out value);

    public bool TryGetJsonElement(out JsonElement value) => _jsonElementValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1SpellcheckResponse1(ApiV1SpellcheckResponse value) =>
        ApiV1SpellcheckResponse(value);

    public TResult Match<TResult>(Func<ApiV1SpellcheckResponse, TResult> onApiV1SpellcheckResponse,
        Func<JsonElement, TResult> onJsonElement,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1SpellcheckResponse(out var apiV1SpellcheckResponseValue) => onApiV1SpellcheckResponse(
                apiV1SpellcheckResponseValue),
            _ when TryGetJsonElement(out var jsonElementValue) => onJsonElement(jsonElementValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1SpellcheckResponse1)} holds no value.")
        };

    public void Match(Action<ApiV1SpellcheckResponse> onApiV1SpellcheckResponse,
        Action<JsonElement> onJsonElement,
        Action<JsonElement> otherwise)
    {
        if (TryGetApiV1SpellcheckResponse(out var apiV1SpellcheckResponseValue)) onApiV1SpellcheckResponse(
            apiV1SpellcheckResponseValue);
        else if (TryGetJsonElement(out var jsonElementValue)) onJsonElement(jsonElementValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1SpellcheckResponse1)} holds no value.");
    }
}

file sealed class ApiV1SpellcheckResponse1Converter : JsonConverter<ApiV1SpellcheckResponse1>
{
    public override ApiV1SpellcheckResponse1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ApiV1SpellcheckResponse>(root, options, out var apiV1SpellcheckResponseValue))
        {
            return ApiV1SpellcheckResponse1.ApiV1SpellcheckResponse(apiV1SpellcheckResponseValue);
        }
        if (JsonSerializer.TryDeserialize<JsonElement>(root, options, out var jsonElementValue))
        {
            return ApiV1SpellcheckResponse1.JsonElement(jsonElementValue);
        }
        return ApiV1SpellcheckResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1SpellcheckResponse1 value, JsonSerializerOptions options)
    {
        if (value.TryGetApiV1SpellcheckResponse(out var apiV1SpellcheckResponseValue))
        {
            JsonSerializer.Serialize(writer, apiV1SpellcheckResponseValue, options);
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
            throw new JsonException($"{nameof(ApiV1SpellcheckResponse1)} contains no valid value to serialize.");
        }
    }
}
