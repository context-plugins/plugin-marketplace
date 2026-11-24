using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(ApiV1StyleguideRequest4Converter))]
public record ApiV1StyleguideRequest4
{
    private readonly Optional<ApiV1StyleguideRequest> _apiV1StyleguideRequestValue;

    private readonly Optional<ApiV1StyleguideRequest1> _apiV1StyleguideRequest1Value;

    private readonly Optional<ApiV1StyleguideRequest2> _apiV1StyleguideRequest2Value;

    private readonly Optional<ApiV1StyleguideRequest3> _apiV1StyleguideRequest3Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1StyleguideRequest4(Optional<ApiV1StyleguideRequest> apiV1StyleguideRequestValue,
        Optional<ApiV1StyleguideRequest1> apiV1StyleguideRequest1Value,
        Optional<ApiV1StyleguideRequest2> apiV1StyleguideRequest2Value,
        Optional<ApiV1StyleguideRequest3> apiV1StyleguideRequest3Value,
        Optional<UnknownArm> unknownValue)
    {
        _apiV1StyleguideRequestValue = apiV1StyleguideRequestValue;
        _apiV1StyleguideRequest1Value = apiV1StyleguideRequest1Value;
        _apiV1StyleguideRequest2Value = apiV1StyleguideRequest2Value;
        _apiV1StyleguideRequest3Value = apiV1StyleguideRequest3Value;
        _unknownValue = unknownValue;
    }

    public static ApiV1StyleguideRequest4 ApiV1StyleguideRequest(ApiV1StyleguideRequest value) =>
        new(Optional<ApiV1StyleguideRequest>.Some(value), default, default, default, default);

    public static ApiV1StyleguideRequest4 ApiV1StyleguideRequest1(ApiV1StyleguideRequest1 value) =>
        new(default, Optional<ApiV1StyleguideRequest1>.Some(value), default, default, default);

    public static ApiV1StyleguideRequest4 ApiV1StyleguideRequest2(ApiV1StyleguideRequest2 value) =>
        new(default, default, Optional<ApiV1StyleguideRequest2>.Some(value), default, default);

    public static ApiV1StyleguideRequest4 ApiV1StyleguideRequest3(ApiV1StyleguideRequest3 value) =>
        new(default, default, default, Optional<ApiV1StyleguideRequest3>.Some(value), default);

    internal static ApiV1StyleguideRequest4 Unknown(JsonElement value) =>
        new(default, default, default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetApiV1StyleguideRequest([NotNullWhen(true)] out ApiV1StyleguideRequest? value) =>
        _apiV1StyleguideRequestValue.TryGetValue(out value);

    public bool TryGetApiV1StyleguideRequest1([NotNullWhen(true)] out ApiV1StyleguideRequest1? value) =>
        _apiV1StyleguideRequest1Value.TryGetValue(out value);

    public bool TryGetApiV1StyleguideRequest2([NotNullWhen(true)] out ApiV1StyleguideRequest2? value) =>
        _apiV1StyleguideRequest2Value.TryGetValue(out value);

    public bool TryGetApiV1StyleguideRequest3([NotNullWhen(true)] out ApiV1StyleguideRequest3? value) =>
        _apiV1StyleguideRequest3Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1StyleguideRequest4(ApiV1StyleguideRequest value) =>
        ApiV1StyleguideRequest(value);

    public static implicit operator ApiV1StyleguideRequest4(ApiV1StyleguideRequest1 value) =>
        ApiV1StyleguideRequest1(value);

    public static implicit operator ApiV1StyleguideRequest4(ApiV1StyleguideRequest2 value) =>
        ApiV1StyleguideRequest2(value);

    public static implicit operator ApiV1StyleguideRequest4(ApiV1StyleguideRequest3 value) =>
        ApiV1StyleguideRequest3(value);

    public TResult Match<TResult>(Func<ApiV1StyleguideRequest, TResult> onApiV1StyleguideRequest,
        Func<ApiV1StyleguideRequest1, TResult> onApiV1StyleguideRequest1,
        Func<ApiV1StyleguideRequest2, TResult> onApiV1StyleguideRequest2,
        Func<ApiV1StyleguideRequest3, TResult> onApiV1StyleguideRequest3,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1StyleguideRequest(out var apiV1StyleguideRequestValue) => onApiV1StyleguideRequest(
                apiV1StyleguideRequestValue),
            _ when TryGetApiV1StyleguideRequest1(out var apiV1StyleguideRequest1Value) => onApiV1StyleguideRequest1(
                apiV1StyleguideRequest1Value),
            _ when TryGetApiV1StyleguideRequest2(out var apiV1StyleguideRequest2Value) => onApiV1StyleguideRequest2(
                apiV1StyleguideRequest2Value),
            _ when TryGetApiV1StyleguideRequest3(out var apiV1StyleguideRequest3Value) => onApiV1StyleguideRequest3(
                apiV1StyleguideRequest3Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1StyleguideRequest4)} holds no value.")
        };

    public void Match(Action<ApiV1StyleguideRequest> onApiV1StyleguideRequest,
        Action<ApiV1StyleguideRequest1> onApiV1StyleguideRequest1,
        Action<ApiV1StyleguideRequest2> onApiV1StyleguideRequest2,
        Action<ApiV1StyleguideRequest3> onApiV1StyleguideRequest3,
        Action<JsonElement> otherwise)
    {
        if (TryGetApiV1StyleguideRequest(out var apiV1StyleguideRequestValue)) onApiV1StyleguideRequest(
            apiV1StyleguideRequestValue);
        else if (TryGetApiV1StyleguideRequest1(out var apiV1StyleguideRequest1Value)) onApiV1StyleguideRequest1(
            apiV1StyleguideRequest1Value);
        else if (TryGetApiV1StyleguideRequest2(out var apiV1StyleguideRequest2Value)) onApiV1StyleguideRequest2(
            apiV1StyleguideRequest2Value);
        else if (TryGetApiV1StyleguideRequest3(out var apiV1StyleguideRequest3Value)) onApiV1StyleguideRequest3(
            apiV1StyleguideRequest3Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1StyleguideRequest4)} holds no value.");
    }
}

file sealed class ApiV1StyleguideRequest4Converter : JsonConverter<ApiV1StyleguideRequest4>
{
    public override ApiV1StyleguideRequest4 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ApiV1StyleguideRequest>(root, options, out var apiV1StyleguideRequestValue))
        {
            return ApiV1StyleguideRequest4.ApiV1StyleguideRequest(apiV1StyleguideRequestValue);
        }
        if (JsonSerializer.TryDeserialize<ApiV1StyleguideRequest1>(root, options, out var apiV1StyleguideRequest1Value))
        {
            return ApiV1StyleguideRequest4.ApiV1StyleguideRequest1(apiV1StyleguideRequest1Value);
        }
        if (JsonSerializer.TryDeserialize<ApiV1StyleguideRequest2>(root, options, out var apiV1StyleguideRequest2Value))
        {
            return ApiV1StyleguideRequest4.ApiV1StyleguideRequest2(apiV1StyleguideRequest2Value);
        }
        if (JsonSerializer.TryDeserialize<ApiV1StyleguideRequest3>(root, options, out var apiV1StyleguideRequest3Value))
        {
            return ApiV1StyleguideRequest4.ApiV1StyleguideRequest3(apiV1StyleguideRequest3Value);
        }
        return ApiV1StyleguideRequest4.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1StyleguideRequest4 value, JsonSerializerOptions options)
    {
        if (value.TryGetApiV1StyleguideRequest(out var apiV1StyleguideRequestValue))
        {
            JsonSerializer.Serialize(writer, apiV1StyleguideRequestValue, options);
        }
        else if (value.TryGetApiV1StyleguideRequest1(out var apiV1StyleguideRequest1Value))
        {
            JsonSerializer.Serialize(writer, apiV1StyleguideRequest1Value, options);
        }
        else if (value.TryGetApiV1StyleguideRequest2(out var apiV1StyleguideRequest2Value))
        {
            JsonSerializer.Serialize(writer, apiV1StyleguideRequest2Value, options);
        }
        else if (value.TryGetApiV1StyleguideRequest3(out var apiV1StyleguideRequest3Value))
        {
            JsonSerializer.Serialize(writer, apiV1StyleguideRequest3Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ApiV1StyleguideRequest4)} contains no valid value to serialize.");
        }
    }
}
