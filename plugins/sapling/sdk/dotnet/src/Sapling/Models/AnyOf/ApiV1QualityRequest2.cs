using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(ApiV1QualityRequest2Converter))]
public record ApiV1QualityRequest2
{
    private readonly Optional<ApiV1QualityRequest> _apiV1QualityRequestValue;

    private readonly Optional<ApiV1QualityRequest1> _apiV1QualityRequest1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1QualityRequest2(Optional<ApiV1QualityRequest> apiV1QualityRequestValue,
        Optional<ApiV1QualityRequest1> apiV1QualityRequest1Value,
        Optional<UnknownArm> unknownValue)
    {
        _apiV1QualityRequestValue = apiV1QualityRequestValue;
        _apiV1QualityRequest1Value = apiV1QualityRequest1Value;
        _unknownValue = unknownValue;
    }

    public static ApiV1QualityRequest2 ApiV1QualityRequest(ApiV1QualityRequest value) =>
        new(Optional<ApiV1QualityRequest>.Some(value), default, default);

    public static ApiV1QualityRequest2 ApiV1QualityRequest1(ApiV1QualityRequest1 value) =>
        new(default, Optional<ApiV1QualityRequest1>.Some(value), default);

    internal static ApiV1QualityRequest2 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetApiV1QualityRequest([NotNullWhen(true)] out ApiV1QualityRequest? value) =>
        _apiV1QualityRequestValue.TryGetValue(out value);

    public bool TryGetApiV1QualityRequest1([NotNullWhen(true)] out ApiV1QualityRequest1? value) =>
        _apiV1QualityRequest1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1QualityRequest2(ApiV1QualityRequest value) => ApiV1QualityRequest(value);

    public static implicit operator ApiV1QualityRequest2(ApiV1QualityRequest1 value) => ApiV1QualityRequest1(value);

    public TResult Match<TResult>(Func<ApiV1QualityRequest, TResult> onApiV1QualityRequest,
        Func<ApiV1QualityRequest1, TResult> onApiV1QualityRequest1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1QualityRequest(out var apiV1QualityRequestValue) => onApiV1QualityRequest(
                apiV1QualityRequestValue),
            _ when TryGetApiV1QualityRequest1(out var apiV1QualityRequest1Value) => onApiV1QualityRequest1(
                apiV1QualityRequest1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1QualityRequest2)} holds no value.")
        };

    public void Match(Action<ApiV1QualityRequest> onApiV1QualityRequest,
        Action<ApiV1QualityRequest1> onApiV1QualityRequest1,
        Action<JsonElement> otherwise)
    {
        if (TryGetApiV1QualityRequest(out var apiV1QualityRequestValue)) onApiV1QualityRequest(
            apiV1QualityRequestValue);
        else if (TryGetApiV1QualityRequest1(out var apiV1QualityRequest1Value)) onApiV1QualityRequest1(
            apiV1QualityRequest1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1QualityRequest2)} holds no value.");
    }
}

file sealed class ApiV1QualityRequest2Converter : JsonConverter<ApiV1QualityRequest2>
{
    public override ApiV1QualityRequest2 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ApiV1QualityRequest>(root, options, out var apiV1QualityRequestValue))
        {
            return ApiV1QualityRequest2.ApiV1QualityRequest(apiV1QualityRequestValue);
        }
        if (JsonSerializer.TryDeserialize<ApiV1QualityRequest1>(root, options, out var apiV1QualityRequest1Value))
        {
            return ApiV1QualityRequest2.ApiV1QualityRequest1(apiV1QualityRequest1Value);
        }
        return ApiV1QualityRequest2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1QualityRequest2 value, JsonSerializerOptions options)
    {
        if (value.TryGetApiV1QualityRequest(out var apiV1QualityRequestValue))
        {
            JsonSerializer.Serialize(writer, apiV1QualityRequestValue, options);
        }
        else if (value.TryGetApiV1QualityRequest1(out var apiV1QualityRequest1Value))
        {
            JsonSerializer.Serialize(writer, apiV1QualityRequest1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ApiV1QualityRequest2)} contains no valid value to serialize.");
        }
    }
}
