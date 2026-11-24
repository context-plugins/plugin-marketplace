using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(ApiV1NerRequest2Converter))]
public record ApiV1NerRequest2
{
    private readonly Optional<ApiV1NerRequest> _apiV1NerRequestValue;

    private readonly Optional<ApiV1NerRequest1> _apiV1NerRequest1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1NerRequest2(Optional<ApiV1NerRequest> apiV1NerRequestValue,
        Optional<ApiV1NerRequest1> apiV1NerRequest1Value,
        Optional<UnknownArm> unknownValue)
    {
        _apiV1NerRequestValue = apiV1NerRequestValue;
        _apiV1NerRequest1Value = apiV1NerRequest1Value;
        _unknownValue = unknownValue;
    }

    public static ApiV1NerRequest2 ApiV1NerRequest(ApiV1NerRequest value) =>
        new(Optional<ApiV1NerRequest>.Some(value), default, default);

    public static ApiV1NerRequest2 ApiV1NerRequest1(ApiV1NerRequest1 value) =>
        new(default, Optional<ApiV1NerRequest1>.Some(value), default);

    internal static ApiV1NerRequest2 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetApiV1NerRequest([NotNullWhen(true)] out ApiV1NerRequest? value) =>
        _apiV1NerRequestValue.TryGetValue(out value);

    public bool TryGetApiV1NerRequest1([NotNullWhen(true)] out ApiV1NerRequest1? value) =>
        _apiV1NerRequest1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1NerRequest2(ApiV1NerRequest value) => ApiV1NerRequest(value);

    public static implicit operator ApiV1NerRequest2(ApiV1NerRequest1 value) => ApiV1NerRequest1(value);

    public TResult Match<TResult>(Func<ApiV1NerRequest, TResult> onApiV1NerRequest,
        Func<ApiV1NerRequest1, TResult> onApiV1NerRequest1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1NerRequest(out var apiV1NerRequestValue) => onApiV1NerRequest(apiV1NerRequestValue),
            _ when TryGetApiV1NerRequest1(out var apiV1NerRequest1Value) => onApiV1NerRequest1(apiV1NerRequest1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1NerRequest2)} holds no value.")
        };

    public void Match(Action<ApiV1NerRequest> onApiV1NerRequest,
        Action<ApiV1NerRequest1> onApiV1NerRequest1,
        Action<JsonElement> otherwise)
    {
        if (TryGetApiV1NerRequest(out var apiV1NerRequestValue)) onApiV1NerRequest(apiV1NerRequestValue);
        else if (TryGetApiV1NerRequest1(out var apiV1NerRequest1Value)) onApiV1NerRequest1(apiV1NerRequest1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1NerRequest2)} holds no value.");
    }
}

file sealed class ApiV1NerRequest2Converter : JsonConverter<ApiV1NerRequest2>
{
    public override ApiV1NerRequest2 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ApiV1NerRequest>(root, options, out var apiV1NerRequestValue))
        {
            return ApiV1NerRequest2.ApiV1NerRequest(apiV1NerRequestValue);
        }
        if (JsonSerializer.TryDeserialize<ApiV1NerRequest1>(root, options, out var apiV1NerRequest1Value))
        {
            return ApiV1NerRequest2.ApiV1NerRequest1(apiV1NerRequest1Value);
        }
        return ApiV1NerRequest2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1NerRequest2 value, JsonSerializerOptions options)
    {
        if (value.TryGetApiV1NerRequest(out var apiV1NerRequestValue))
        {
            JsonSerializer.Serialize(writer, apiV1NerRequestValue, options);
        }
        else if (value.TryGetApiV1NerRequest1(out var apiV1NerRequest1Value))
        {
            JsonSerializer.Serialize(writer, apiV1NerRequest1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ApiV1NerRequest2)} contains no valid value to serialize.");
        }
    }
}
