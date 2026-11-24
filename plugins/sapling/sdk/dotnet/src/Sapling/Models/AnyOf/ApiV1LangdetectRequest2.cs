using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(ApiV1LangdetectRequest2Converter))]
public record ApiV1LangdetectRequest2
{
    private readonly Optional<ApiV1LangdetectRequest> _apiV1LangdetectRequestValue;

    private readonly Optional<ApiV1LangdetectRequest1> _apiV1LangdetectRequest1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1LangdetectRequest2(Optional<ApiV1LangdetectRequest> apiV1LangdetectRequestValue,
        Optional<ApiV1LangdetectRequest1> apiV1LangdetectRequest1Value,
        Optional<UnknownArm> unknownValue)
    {
        _apiV1LangdetectRequestValue = apiV1LangdetectRequestValue;
        _apiV1LangdetectRequest1Value = apiV1LangdetectRequest1Value;
        _unknownValue = unknownValue;
    }

    public static ApiV1LangdetectRequest2 ApiV1LangdetectRequest(ApiV1LangdetectRequest value) =>
        new(Optional<ApiV1LangdetectRequest>.Some(value), default, default);

    public static ApiV1LangdetectRequest2 ApiV1LangdetectRequest1(ApiV1LangdetectRequest1 value) =>
        new(default, Optional<ApiV1LangdetectRequest1>.Some(value), default);

    internal static ApiV1LangdetectRequest2 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetApiV1LangdetectRequest([NotNullWhen(true)] out ApiV1LangdetectRequest? value) =>
        _apiV1LangdetectRequestValue.TryGetValue(out value);

    public bool TryGetApiV1LangdetectRequest1([NotNullWhen(true)] out ApiV1LangdetectRequest1? value) =>
        _apiV1LangdetectRequest1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1LangdetectRequest2(ApiV1LangdetectRequest value) =>
        ApiV1LangdetectRequest(value);

    public static implicit operator ApiV1LangdetectRequest2(ApiV1LangdetectRequest1 value) =>
        ApiV1LangdetectRequest1(value);

    public TResult Match<TResult>(Func<ApiV1LangdetectRequest, TResult> onApiV1LangdetectRequest,
        Func<ApiV1LangdetectRequest1, TResult> onApiV1LangdetectRequest1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1LangdetectRequest(out var apiV1LangdetectRequestValue) => onApiV1LangdetectRequest(
                apiV1LangdetectRequestValue),
            _ when TryGetApiV1LangdetectRequest1(out var apiV1LangdetectRequest1Value) => onApiV1LangdetectRequest1(
                apiV1LangdetectRequest1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1LangdetectRequest2)} holds no value.")
        };

    public void Match(Action<ApiV1LangdetectRequest> onApiV1LangdetectRequest,
        Action<ApiV1LangdetectRequest1> onApiV1LangdetectRequest1,
        Action<JsonElement> otherwise)
    {
        if (TryGetApiV1LangdetectRequest(out var apiV1LangdetectRequestValue)) onApiV1LangdetectRequest(
            apiV1LangdetectRequestValue);
        else if (TryGetApiV1LangdetectRequest1(out var apiV1LangdetectRequest1Value)) onApiV1LangdetectRequest1(
            apiV1LangdetectRequest1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1LangdetectRequest2)} holds no value.");
    }
}

file sealed class ApiV1LangdetectRequest2Converter : JsonConverter<ApiV1LangdetectRequest2>
{
    public override ApiV1LangdetectRequest2 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ApiV1LangdetectRequest>(root, options, out var apiV1LangdetectRequestValue))
        {
            return ApiV1LangdetectRequest2.ApiV1LangdetectRequest(apiV1LangdetectRequestValue);
        }
        if (JsonSerializer.TryDeserialize<ApiV1LangdetectRequest1>(root, options, out var apiV1LangdetectRequest1Value))
        {
            return ApiV1LangdetectRequest2.ApiV1LangdetectRequest1(apiV1LangdetectRequest1Value);
        }
        return ApiV1LangdetectRequest2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1LangdetectRequest2 value, JsonSerializerOptions options)
    {
        if (value.TryGetApiV1LangdetectRequest(out var apiV1LangdetectRequestValue))
        {
            JsonSerializer.Serialize(writer, apiV1LangdetectRequestValue, options);
        }
        else if (value.TryGetApiV1LangdetectRequest1(out var apiV1LangdetectRequest1Value))
        {
            JsonSerializer.Serialize(writer, apiV1LangdetectRequest1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ApiV1LangdetectRequest2)} contains no valid value to serialize.");
        }
    }
}
