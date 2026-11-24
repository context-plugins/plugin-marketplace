using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(ApiV1InclusiveRequest2Converter))]
public record ApiV1InclusiveRequest2
{
    private readonly Optional<ApiV1InclusiveRequest> _apiV1InclusiveRequestValue;

    private readonly Optional<ApiV1InclusiveRequest1> _apiV1InclusiveRequest1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1InclusiveRequest2(Optional<ApiV1InclusiveRequest> apiV1InclusiveRequestValue,
        Optional<ApiV1InclusiveRequest1> apiV1InclusiveRequest1Value,
        Optional<UnknownArm> unknownValue)
    {
        _apiV1InclusiveRequestValue = apiV1InclusiveRequestValue;
        _apiV1InclusiveRequest1Value = apiV1InclusiveRequest1Value;
        _unknownValue = unknownValue;
    }

    public static ApiV1InclusiveRequest2 ApiV1InclusiveRequest(ApiV1InclusiveRequest value) =>
        new(Optional<ApiV1InclusiveRequest>.Some(value), default, default);

    public static ApiV1InclusiveRequest2 ApiV1InclusiveRequest1(ApiV1InclusiveRequest1 value) =>
        new(default, Optional<ApiV1InclusiveRequest1>.Some(value), default);

    internal static ApiV1InclusiveRequest2 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetApiV1InclusiveRequest([NotNullWhen(true)] out ApiV1InclusiveRequest? value) =>
        _apiV1InclusiveRequestValue.TryGetValue(out value);

    public bool TryGetApiV1InclusiveRequest1([NotNullWhen(true)] out ApiV1InclusiveRequest1? value) =>
        _apiV1InclusiveRequest1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1InclusiveRequest2(ApiV1InclusiveRequest value) => ApiV1InclusiveRequest(value);

    public static implicit operator ApiV1InclusiveRequest2(ApiV1InclusiveRequest1 value) =>
        ApiV1InclusiveRequest1(value);

    public TResult Match<TResult>(Func<ApiV1InclusiveRequest, TResult> onApiV1InclusiveRequest,
        Func<ApiV1InclusiveRequest1, TResult> onApiV1InclusiveRequest1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1InclusiveRequest(out var apiV1InclusiveRequestValue) => onApiV1InclusiveRequest(
                apiV1InclusiveRequestValue),
            _ when TryGetApiV1InclusiveRequest1(out var apiV1InclusiveRequest1Value) => onApiV1InclusiveRequest1(
                apiV1InclusiveRequest1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1InclusiveRequest2)} holds no value.")
        };

    public void Match(Action<ApiV1InclusiveRequest> onApiV1InclusiveRequest,
        Action<ApiV1InclusiveRequest1> onApiV1InclusiveRequest1,
        Action<JsonElement> otherwise)
    {
        if (TryGetApiV1InclusiveRequest(out var apiV1InclusiveRequestValue)) onApiV1InclusiveRequest(
            apiV1InclusiveRequestValue);
        else if (TryGetApiV1InclusiveRequest1(out var apiV1InclusiveRequest1Value)) onApiV1InclusiveRequest1(
            apiV1InclusiveRequest1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1InclusiveRequest2)} holds no value.");
    }
}

file sealed class ApiV1InclusiveRequest2Converter : JsonConverter<ApiV1InclusiveRequest2>
{
    public override ApiV1InclusiveRequest2 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ApiV1InclusiveRequest>(root, options, out var apiV1InclusiveRequestValue))
        {
            return ApiV1InclusiveRequest2.ApiV1InclusiveRequest(apiV1InclusiveRequestValue);
        }
        if (JsonSerializer.TryDeserialize<ApiV1InclusiveRequest1>(root, options, out var apiV1InclusiveRequest1Value))
        {
            return ApiV1InclusiveRequest2.ApiV1InclusiveRequest1(apiV1InclusiveRequest1Value);
        }
        return ApiV1InclusiveRequest2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1InclusiveRequest2 value, JsonSerializerOptions options)
    {
        if (value.TryGetApiV1InclusiveRequest(out var apiV1InclusiveRequestValue))
        {
            JsonSerializer.Serialize(writer, apiV1InclusiveRequestValue, options);
        }
        else if (value.TryGetApiV1InclusiveRequest1(out var apiV1InclusiveRequest1Value))
        {
            JsonSerializer.Serialize(writer, apiV1InclusiveRequest1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ApiV1InclusiveRequest2)} contains no valid value to serialize.");
        }
    }
}
