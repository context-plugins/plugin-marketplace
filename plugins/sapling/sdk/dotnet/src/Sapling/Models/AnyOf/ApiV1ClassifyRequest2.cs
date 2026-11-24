using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(ApiV1ClassifyRequest2Converter))]
public record ApiV1ClassifyRequest2
{
    private readonly Optional<ApiV1ClassifyRequest> _apiV1ClassifyRequestValue;

    private readonly Optional<ApiV1ClassifyRequest1> _apiV1ClassifyRequest1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1ClassifyRequest2(Optional<ApiV1ClassifyRequest> apiV1ClassifyRequestValue,
        Optional<ApiV1ClassifyRequest1> apiV1ClassifyRequest1Value,
        Optional<UnknownArm> unknownValue)
    {
        _apiV1ClassifyRequestValue = apiV1ClassifyRequestValue;
        _apiV1ClassifyRequest1Value = apiV1ClassifyRequest1Value;
        _unknownValue = unknownValue;
    }

    public static ApiV1ClassifyRequest2 ApiV1ClassifyRequest(ApiV1ClassifyRequest value) =>
        new(Optional<ApiV1ClassifyRequest>.Some(value), default, default);

    public static ApiV1ClassifyRequest2 ApiV1ClassifyRequest1(ApiV1ClassifyRequest1 value) =>
        new(default, Optional<ApiV1ClassifyRequest1>.Some(value), default);

    internal static ApiV1ClassifyRequest2 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetApiV1ClassifyRequest([NotNullWhen(true)] out ApiV1ClassifyRequest? value) =>
        _apiV1ClassifyRequestValue.TryGetValue(out value);

    public bool TryGetApiV1ClassifyRequest1([NotNullWhen(true)] out ApiV1ClassifyRequest1? value) =>
        _apiV1ClassifyRequest1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1ClassifyRequest2(ApiV1ClassifyRequest value) => ApiV1ClassifyRequest(value);

    public static implicit operator ApiV1ClassifyRequest2(ApiV1ClassifyRequest1 value) => ApiV1ClassifyRequest1(value);

    public TResult Match<TResult>(Func<ApiV1ClassifyRequest, TResult> onApiV1ClassifyRequest,
        Func<ApiV1ClassifyRequest1, TResult> onApiV1ClassifyRequest1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1ClassifyRequest(out var apiV1ClassifyRequestValue) => onApiV1ClassifyRequest(
                apiV1ClassifyRequestValue),
            _ when TryGetApiV1ClassifyRequest1(out var apiV1ClassifyRequest1Value) => onApiV1ClassifyRequest1(
                apiV1ClassifyRequest1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1ClassifyRequest2)} holds no value.")
        };

    public void Match(Action<ApiV1ClassifyRequest> onApiV1ClassifyRequest,
        Action<ApiV1ClassifyRequest1> onApiV1ClassifyRequest1,
        Action<JsonElement> otherwise)
    {
        if (TryGetApiV1ClassifyRequest(out var apiV1ClassifyRequestValue)) onApiV1ClassifyRequest(
            apiV1ClassifyRequestValue);
        else if (TryGetApiV1ClassifyRequest1(out var apiV1ClassifyRequest1Value)) onApiV1ClassifyRequest1(
            apiV1ClassifyRequest1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1ClassifyRequest2)} holds no value.");
    }
}

file sealed class ApiV1ClassifyRequest2Converter : JsonConverter<ApiV1ClassifyRequest2>
{
    public override ApiV1ClassifyRequest2 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ApiV1ClassifyRequest>(root, options, out var apiV1ClassifyRequestValue))
        {
            return ApiV1ClassifyRequest2.ApiV1ClassifyRequest(apiV1ClassifyRequestValue);
        }
        if (JsonSerializer.TryDeserialize<ApiV1ClassifyRequest1>(root, options, out var apiV1ClassifyRequest1Value))
        {
            return ApiV1ClassifyRequest2.ApiV1ClassifyRequest1(apiV1ClassifyRequest1Value);
        }
        return ApiV1ClassifyRequest2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1ClassifyRequest2 value, JsonSerializerOptions options)
    {
        if (value.TryGetApiV1ClassifyRequest(out var apiV1ClassifyRequestValue))
        {
            JsonSerializer.Serialize(writer, apiV1ClassifyRequestValue, options);
        }
        else if (value.TryGetApiV1ClassifyRequest1(out var apiV1ClassifyRequest1Value))
        {
            JsonSerializer.Serialize(writer, apiV1ClassifyRequest1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ApiV1ClassifyRequest2)} contains no valid value to serialize.");
        }
    }
}
