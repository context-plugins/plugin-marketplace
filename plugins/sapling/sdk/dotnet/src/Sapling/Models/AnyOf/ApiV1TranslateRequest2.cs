using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(ApiV1TranslateRequest2Converter))]
public record ApiV1TranslateRequest2
{
    private readonly Optional<ApiV1TranslateRequest> _apiV1TranslateRequestValue;

    private readonly Optional<ApiV1TranslateRequest1> _apiV1TranslateRequest1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1TranslateRequest2(Optional<ApiV1TranslateRequest> apiV1TranslateRequestValue,
        Optional<ApiV1TranslateRequest1> apiV1TranslateRequest1Value,
        Optional<UnknownArm> unknownValue)
    {
        _apiV1TranslateRequestValue = apiV1TranslateRequestValue;
        _apiV1TranslateRequest1Value = apiV1TranslateRequest1Value;
        _unknownValue = unknownValue;
    }

    public static ApiV1TranslateRequest2 ApiV1TranslateRequest(ApiV1TranslateRequest value) =>
        new(Optional<ApiV1TranslateRequest>.Some(value), default, default);

    public static ApiV1TranslateRequest2 ApiV1TranslateRequest1(ApiV1TranslateRequest1 value) =>
        new(default, Optional<ApiV1TranslateRequest1>.Some(value), default);

    internal static ApiV1TranslateRequest2 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetApiV1TranslateRequest([NotNullWhen(true)] out ApiV1TranslateRequest? value) =>
        _apiV1TranslateRequestValue.TryGetValue(out value);

    public bool TryGetApiV1TranslateRequest1([NotNullWhen(true)] out ApiV1TranslateRequest1? value) =>
        _apiV1TranslateRequest1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1TranslateRequest2(ApiV1TranslateRequest value) => ApiV1TranslateRequest(value);

    public static implicit operator ApiV1TranslateRequest2(ApiV1TranslateRequest1 value) =>
        ApiV1TranslateRequest1(value);

    public TResult Match<TResult>(Func<ApiV1TranslateRequest, TResult> onApiV1TranslateRequest,
        Func<ApiV1TranslateRequest1, TResult> onApiV1TranslateRequest1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1TranslateRequest(out var apiV1TranslateRequestValue) => onApiV1TranslateRequest(
                apiV1TranslateRequestValue),
            _ when TryGetApiV1TranslateRequest1(out var apiV1TranslateRequest1Value) => onApiV1TranslateRequest1(
                apiV1TranslateRequest1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1TranslateRequest2)} holds no value.")
        };

    public void Match(Action<ApiV1TranslateRequest> onApiV1TranslateRequest,
        Action<ApiV1TranslateRequest1> onApiV1TranslateRequest1,
        Action<JsonElement> otherwise)
    {
        if (TryGetApiV1TranslateRequest(out var apiV1TranslateRequestValue)) onApiV1TranslateRequest(
            apiV1TranslateRequestValue);
        else if (TryGetApiV1TranslateRequest1(out var apiV1TranslateRequest1Value)) onApiV1TranslateRequest1(
            apiV1TranslateRequest1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1TranslateRequest2)} holds no value.");
    }
}

file sealed class ApiV1TranslateRequest2Converter : JsonConverter<ApiV1TranslateRequest2>
{
    public override ApiV1TranslateRequest2 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ApiV1TranslateRequest>(root, options, out var apiV1TranslateRequestValue))
        {
            return ApiV1TranslateRequest2.ApiV1TranslateRequest(apiV1TranslateRequestValue);
        }
        if (JsonSerializer.TryDeserialize<ApiV1TranslateRequest1>(root, options, out var apiV1TranslateRequest1Value))
        {
            return ApiV1TranslateRequest2.ApiV1TranslateRequest1(apiV1TranslateRequest1Value);
        }
        return ApiV1TranslateRequest2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1TranslateRequest2 value, JsonSerializerOptions options)
    {
        if (value.TryGetApiV1TranslateRequest(out var apiV1TranslateRequestValue))
        {
            JsonSerializer.Serialize(writer, apiV1TranslateRequestValue, options);
        }
        else if (value.TryGetApiV1TranslateRequest1(out var apiV1TranslateRequest1Value))
        {
            JsonSerializer.Serialize(writer, apiV1TranslateRequest1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ApiV1TranslateRequest2)} contains no valid value to serialize.");
        }
    }
}
