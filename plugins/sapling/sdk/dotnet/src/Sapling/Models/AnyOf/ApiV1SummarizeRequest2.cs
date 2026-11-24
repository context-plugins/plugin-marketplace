using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(ApiV1SummarizeRequest2Converter))]
public record ApiV1SummarizeRequest2
{
    private readonly Optional<ApiV1SummarizeRequest> _apiV1SummarizeRequestValue;

    private readonly Optional<ApiV1SummarizeRequest1> _apiV1SummarizeRequest1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1SummarizeRequest2(Optional<ApiV1SummarizeRequest> apiV1SummarizeRequestValue,
        Optional<ApiV1SummarizeRequest1> apiV1SummarizeRequest1Value,
        Optional<UnknownArm> unknownValue)
    {
        _apiV1SummarizeRequestValue = apiV1SummarizeRequestValue;
        _apiV1SummarizeRequest1Value = apiV1SummarizeRequest1Value;
        _unknownValue = unknownValue;
    }

    public static ApiV1SummarizeRequest2 ApiV1SummarizeRequest(ApiV1SummarizeRequest value) =>
        new(Optional<ApiV1SummarizeRequest>.Some(value), default, default);

    public static ApiV1SummarizeRequest2 ApiV1SummarizeRequest1(ApiV1SummarizeRequest1 value) =>
        new(default, Optional<ApiV1SummarizeRequest1>.Some(value), default);

    internal static ApiV1SummarizeRequest2 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetApiV1SummarizeRequest([NotNullWhen(true)] out ApiV1SummarizeRequest? value) =>
        _apiV1SummarizeRequestValue.TryGetValue(out value);

    public bool TryGetApiV1SummarizeRequest1([NotNullWhen(true)] out ApiV1SummarizeRequest1? value) =>
        _apiV1SummarizeRequest1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1SummarizeRequest2(ApiV1SummarizeRequest value) => ApiV1SummarizeRequest(value);

    public static implicit operator ApiV1SummarizeRequest2(ApiV1SummarizeRequest1 value) =>
        ApiV1SummarizeRequest1(value);

    public TResult Match<TResult>(Func<ApiV1SummarizeRequest, TResult> onApiV1SummarizeRequest,
        Func<ApiV1SummarizeRequest1, TResult> onApiV1SummarizeRequest1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1SummarizeRequest(out var apiV1SummarizeRequestValue) => onApiV1SummarizeRequest(
                apiV1SummarizeRequestValue),
            _ when TryGetApiV1SummarizeRequest1(out var apiV1SummarizeRequest1Value) => onApiV1SummarizeRequest1(
                apiV1SummarizeRequest1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1SummarizeRequest2)} holds no value.")
        };

    public void Match(Action<ApiV1SummarizeRequest> onApiV1SummarizeRequest,
        Action<ApiV1SummarizeRequest1> onApiV1SummarizeRequest1,
        Action<JsonElement> otherwise)
    {
        if (TryGetApiV1SummarizeRequest(out var apiV1SummarizeRequestValue)) onApiV1SummarizeRequest(
            apiV1SummarizeRequestValue);
        else if (TryGetApiV1SummarizeRequest1(out var apiV1SummarizeRequest1Value)) onApiV1SummarizeRequest1(
            apiV1SummarizeRequest1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1SummarizeRequest2)} holds no value.");
    }
}

file sealed class ApiV1SummarizeRequest2Converter : JsonConverter<ApiV1SummarizeRequest2>
{
    public override ApiV1SummarizeRequest2 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ApiV1SummarizeRequest>(root, options, out var apiV1SummarizeRequestValue))
        {
            return ApiV1SummarizeRequest2.ApiV1SummarizeRequest(apiV1SummarizeRequestValue);
        }
        if (JsonSerializer.TryDeserialize<ApiV1SummarizeRequest1>(root, options, out var apiV1SummarizeRequest1Value))
        {
            return ApiV1SummarizeRequest2.ApiV1SummarizeRequest1(apiV1SummarizeRequest1Value);
        }
        return ApiV1SummarizeRequest2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1SummarizeRequest2 value, JsonSerializerOptions options)
    {
        if (value.TryGetApiV1SummarizeRequest(out var apiV1SummarizeRequestValue))
        {
            JsonSerializer.Serialize(writer, apiV1SummarizeRequestValue, options);
        }
        else if (value.TryGetApiV1SummarizeRequest1(out var apiV1SummarizeRequest1Value))
        {
            JsonSerializer.Serialize(writer, apiV1SummarizeRequest1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ApiV1SummarizeRequest2)} contains no valid value to serialize.");
        }
    }
}
