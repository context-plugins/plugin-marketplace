using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(ApiV1SimplifyRequest2Converter))]
public record ApiV1SimplifyRequest2
{
    private readonly Optional<ApiV1SimplifyRequest> _apiV1SimplifyRequestValue;

    private readonly Optional<ApiV1SimplifyRequest1> _apiV1SimplifyRequest1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1SimplifyRequest2(Optional<ApiV1SimplifyRequest> apiV1SimplifyRequestValue,
        Optional<ApiV1SimplifyRequest1> apiV1SimplifyRequest1Value,
        Optional<UnknownArm> unknownValue)
    {
        _apiV1SimplifyRequestValue = apiV1SimplifyRequestValue;
        _apiV1SimplifyRequest1Value = apiV1SimplifyRequest1Value;
        _unknownValue = unknownValue;
    }

    public static ApiV1SimplifyRequest2 ApiV1SimplifyRequest(ApiV1SimplifyRequest value) =>
        new(Optional<ApiV1SimplifyRequest>.Some(value), default, default);

    public static ApiV1SimplifyRequest2 ApiV1SimplifyRequest1(ApiV1SimplifyRequest1 value) =>
        new(default, Optional<ApiV1SimplifyRequest1>.Some(value), default);

    internal static ApiV1SimplifyRequest2 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetApiV1SimplifyRequest([NotNullWhen(true)] out ApiV1SimplifyRequest? value) =>
        _apiV1SimplifyRequestValue.TryGetValue(out value);

    public bool TryGetApiV1SimplifyRequest1([NotNullWhen(true)] out ApiV1SimplifyRequest1? value) =>
        _apiV1SimplifyRequest1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1SimplifyRequest2(ApiV1SimplifyRequest value) => ApiV1SimplifyRequest(value);

    public static implicit operator ApiV1SimplifyRequest2(ApiV1SimplifyRequest1 value) => ApiV1SimplifyRequest1(value);

    public TResult Match<TResult>(Func<ApiV1SimplifyRequest, TResult> onApiV1SimplifyRequest,
        Func<ApiV1SimplifyRequest1, TResult> onApiV1SimplifyRequest1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1SimplifyRequest(out var apiV1SimplifyRequestValue) => onApiV1SimplifyRequest(
                apiV1SimplifyRequestValue),
            _ when TryGetApiV1SimplifyRequest1(out var apiV1SimplifyRequest1Value) => onApiV1SimplifyRequest1(
                apiV1SimplifyRequest1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1SimplifyRequest2)} holds no value.")
        };

    public void Match(Action<ApiV1SimplifyRequest> onApiV1SimplifyRequest,
        Action<ApiV1SimplifyRequest1> onApiV1SimplifyRequest1,
        Action<JsonElement> otherwise)
    {
        if (TryGetApiV1SimplifyRequest(out var apiV1SimplifyRequestValue)) onApiV1SimplifyRequest(
            apiV1SimplifyRequestValue);
        else if (TryGetApiV1SimplifyRequest1(out var apiV1SimplifyRequest1Value)) onApiV1SimplifyRequest1(
            apiV1SimplifyRequest1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1SimplifyRequest2)} holds no value.");
    }
}

file sealed class ApiV1SimplifyRequest2Converter : JsonConverter<ApiV1SimplifyRequest2>
{
    public override ApiV1SimplifyRequest2 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ApiV1SimplifyRequest>(root, options, out var apiV1SimplifyRequestValue))
        {
            return ApiV1SimplifyRequest2.ApiV1SimplifyRequest(apiV1SimplifyRequestValue);
        }
        if (JsonSerializer.TryDeserialize<ApiV1SimplifyRequest1>(root, options, out var apiV1SimplifyRequest1Value))
        {
            return ApiV1SimplifyRequest2.ApiV1SimplifyRequest1(apiV1SimplifyRequest1Value);
        }
        return ApiV1SimplifyRequest2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1SimplifyRequest2 value, JsonSerializerOptions options)
    {
        if (value.TryGetApiV1SimplifyRequest(out var apiV1SimplifyRequestValue))
        {
            JsonSerializer.Serialize(writer, apiV1SimplifyRequestValue, options);
        }
        else if (value.TryGetApiV1SimplifyRequest1(out var apiV1SimplifyRequest1Value))
        {
            JsonSerializer.Serialize(writer, apiV1SimplifyRequest1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ApiV1SimplifyRequest2)} contains no valid value to serialize.");
        }
    }
}
