using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(ApiV1ExtractRequest2Converter))]
public record ApiV1ExtractRequest2
{
    private readonly Optional<ApiV1ExtractRequest> _apiV1ExtractRequestValue;

    private readonly Optional<ApiV1ExtractRequest1> _apiV1ExtractRequest1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1ExtractRequest2(Optional<ApiV1ExtractRequest> apiV1ExtractRequestValue,
        Optional<ApiV1ExtractRequest1> apiV1ExtractRequest1Value,
        Optional<UnknownArm> unknownValue)
    {
        _apiV1ExtractRequestValue = apiV1ExtractRequestValue;
        _apiV1ExtractRequest1Value = apiV1ExtractRequest1Value;
        _unknownValue = unknownValue;
    }

    public static ApiV1ExtractRequest2 ApiV1ExtractRequest(ApiV1ExtractRequest value) =>
        new(Optional<ApiV1ExtractRequest>.Some(value), default, default);

    public static ApiV1ExtractRequest2 ApiV1ExtractRequest1(ApiV1ExtractRequest1 value) =>
        new(default, Optional<ApiV1ExtractRequest1>.Some(value), default);

    internal static ApiV1ExtractRequest2 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetApiV1ExtractRequest([NotNullWhen(true)] out ApiV1ExtractRequest? value) =>
        _apiV1ExtractRequestValue.TryGetValue(out value);

    public bool TryGetApiV1ExtractRequest1([NotNullWhen(true)] out ApiV1ExtractRequest1? value) =>
        _apiV1ExtractRequest1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1ExtractRequest2(ApiV1ExtractRequest value) => ApiV1ExtractRequest(value);

    public static implicit operator ApiV1ExtractRequest2(ApiV1ExtractRequest1 value) => ApiV1ExtractRequest1(value);

    public TResult Match<TResult>(Func<ApiV1ExtractRequest, TResult> onApiV1ExtractRequest,
        Func<ApiV1ExtractRequest1, TResult> onApiV1ExtractRequest1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1ExtractRequest(out var apiV1ExtractRequestValue) => onApiV1ExtractRequest(
                apiV1ExtractRequestValue),
            _ when TryGetApiV1ExtractRequest1(out var apiV1ExtractRequest1Value) => onApiV1ExtractRequest1(
                apiV1ExtractRequest1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1ExtractRequest2)} holds no value.")
        };

    public void Match(Action<ApiV1ExtractRequest> onApiV1ExtractRequest,
        Action<ApiV1ExtractRequest1> onApiV1ExtractRequest1,
        Action<JsonElement> otherwise)
    {
        if (TryGetApiV1ExtractRequest(out var apiV1ExtractRequestValue)) onApiV1ExtractRequest(
            apiV1ExtractRequestValue);
        else if (TryGetApiV1ExtractRequest1(out var apiV1ExtractRequest1Value)) onApiV1ExtractRequest1(
            apiV1ExtractRequest1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1ExtractRequest2)} holds no value.");
    }
}

file sealed class ApiV1ExtractRequest2Converter : JsonConverter<ApiV1ExtractRequest2>
{
    public override ApiV1ExtractRequest2 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ApiV1ExtractRequest>(root, options, out var apiV1ExtractRequestValue))
        {
            return ApiV1ExtractRequest2.ApiV1ExtractRequest(apiV1ExtractRequestValue);
        }
        if (JsonSerializer.TryDeserialize<ApiV1ExtractRequest1>(root, options, out var apiV1ExtractRequest1Value))
        {
            return ApiV1ExtractRequest2.ApiV1ExtractRequest1(apiV1ExtractRequest1Value);
        }
        return ApiV1ExtractRequest2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1ExtractRequest2 value, JsonSerializerOptions options)
    {
        if (value.TryGetApiV1ExtractRequest(out var apiV1ExtractRequestValue))
        {
            JsonSerializer.Serialize(writer, apiV1ExtractRequestValue, options);
        }
        else if (value.TryGetApiV1ExtractRequest1(out var apiV1ExtractRequest1Value))
        {
            JsonSerializer.Serialize(writer, apiV1ExtractRequest1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ApiV1ExtractRequest2)} contains no valid value to serialize.");
        }
    }
}
