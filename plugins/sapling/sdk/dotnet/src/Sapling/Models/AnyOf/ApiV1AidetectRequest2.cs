using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(ApiV1AidetectRequest2Converter))]
public record ApiV1AidetectRequest2
{
    private readonly Optional<ApiV1AidetectRequest> _apiV1AidetectRequestValue;

    private readonly Optional<ApiV1AidetectRequest1> _apiV1AidetectRequest1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1AidetectRequest2(Optional<ApiV1AidetectRequest> apiV1AidetectRequestValue,
        Optional<ApiV1AidetectRequest1> apiV1AidetectRequest1Value,
        Optional<UnknownArm> unknownValue)
    {
        _apiV1AidetectRequestValue = apiV1AidetectRequestValue;
        _apiV1AidetectRequest1Value = apiV1AidetectRequest1Value;
        _unknownValue = unknownValue;
    }

    public static ApiV1AidetectRequest2 ApiV1AidetectRequest(ApiV1AidetectRequest value) =>
        new(Optional<ApiV1AidetectRequest>.Some(value), default, default);

    public static ApiV1AidetectRequest2 ApiV1AidetectRequest1(ApiV1AidetectRequest1 value) =>
        new(default, Optional<ApiV1AidetectRequest1>.Some(value), default);

    internal static ApiV1AidetectRequest2 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetApiV1AidetectRequest([NotNullWhen(true)] out ApiV1AidetectRequest? value) =>
        _apiV1AidetectRequestValue.TryGetValue(out value);

    public bool TryGetApiV1AidetectRequest1([NotNullWhen(true)] out ApiV1AidetectRequest1? value) =>
        _apiV1AidetectRequest1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1AidetectRequest2(ApiV1AidetectRequest value) => ApiV1AidetectRequest(value);

    public static implicit operator ApiV1AidetectRequest2(ApiV1AidetectRequest1 value) => ApiV1AidetectRequest1(value);

    public TResult Match<TResult>(Func<ApiV1AidetectRequest, TResult> onApiV1AidetectRequest,
        Func<ApiV1AidetectRequest1, TResult> onApiV1AidetectRequest1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1AidetectRequest(out var apiV1AidetectRequestValue) => onApiV1AidetectRequest(
                apiV1AidetectRequestValue),
            _ when TryGetApiV1AidetectRequest1(out var apiV1AidetectRequest1Value) => onApiV1AidetectRequest1(
                apiV1AidetectRequest1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1AidetectRequest2)} holds no value.")
        };

    public void Match(Action<ApiV1AidetectRequest> onApiV1AidetectRequest,
        Action<ApiV1AidetectRequest1> onApiV1AidetectRequest1,
        Action<JsonElement> otherwise)
    {
        if (TryGetApiV1AidetectRequest(out var apiV1AidetectRequestValue)) onApiV1AidetectRequest(
            apiV1AidetectRequestValue);
        else if (TryGetApiV1AidetectRequest1(out var apiV1AidetectRequest1Value)) onApiV1AidetectRequest1(
            apiV1AidetectRequest1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1AidetectRequest2)} holds no value.");
    }
}

file sealed class ApiV1AidetectRequest2Converter : JsonConverter<ApiV1AidetectRequest2>
{
    public override ApiV1AidetectRequest2 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ApiV1AidetectRequest>(root, options, out var apiV1AidetectRequestValue))
        {
            return ApiV1AidetectRequest2.ApiV1AidetectRequest(apiV1AidetectRequestValue);
        }
        if (JsonSerializer.TryDeserialize<ApiV1AidetectRequest1>(root, options, out var apiV1AidetectRequest1Value))
        {
            return ApiV1AidetectRequest2.ApiV1AidetectRequest1(apiV1AidetectRequest1Value);
        }
        return ApiV1AidetectRequest2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1AidetectRequest2 value, JsonSerializerOptions options)
    {
        if (value.TryGetApiV1AidetectRequest(out var apiV1AidetectRequestValue))
        {
            JsonSerializer.Serialize(writer, apiV1AidetectRequestValue, options);
        }
        else if (value.TryGetApiV1AidetectRequest1(out var apiV1AidetectRequest1Value))
        {
            JsonSerializer.Serialize(writer, apiV1AidetectRequest1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ApiV1AidetectRequest2)} contains no valid value to serialize.");
        }
    }
}
