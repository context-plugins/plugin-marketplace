using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(ApiV1SafetyRequest2Converter))]
public record ApiV1SafetyRequest2
{
    private readonly Optional<ApiV1SafetyRequest> _apiV1SafetyRequestValue;

    private readonly Optional<ApiV1SafetyRequest1> _apiV1SafetyRequest1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1SafetyRequest2(Optional<ApiV1SafetyRequest> apiV1SafetyRequestValue,
        Optional<ApiV1SafetyRequest1> apiV1SafetyRequest1Value,
        Optional<UnknownArm> unknownValue)
    {
        _apiV1SafetyRequestValue = apiV1SafetyRequestValue;
        _apiV1SafetyRequest1Value = apiV1SafetyRequest1Value;
        _unknownValue = unknownValue;
    }

    public static ApiV1SafetyRequest2 ApiV1SafetyRequest(ApiV1SafetyRequest value) =>
        new(Optional<ApiV1SafetyRequest>.Some(value), default, default);

    public static ApiV1SafetyRequest2 ApiV1SafetyRequest1(ApiV1SafetyRequest1 value) =>
        new(default, Optional<ApiV1SafetyRequest1>.Some(value), default);

    internal static ApiV1SafetyRequest2 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetApiV1SafetyRequest([NotNullWhen(true)] out ApiV1SafetyRequest? value) =>
        _apiV1SafetyRequestValue.TryGetValue(out value);

    public bool TryGetApiV1SafetyRequest1([NotNullWhen(true)] out ApiV1SafetyRequest1? value) =>
        _apiV1SafetyRequest1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1SafetyRequest2(ApiV1SafetyRequest value) => ApiV1SafetyRequest(value);

    public static implicit operator ApiV1SafetyRequest2(ApiV1SafetyRequest1 value) => ApiV1SafetyRequest1(value);

    public TResult Match<TResult>(Func<ApiV1SafetyRequest, TResult> onApiV1SafetyRequest,
        Func<ApiV1SafetyRequest1, TResult> onApiV1SafetyRequest1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1SafetyRequest(out var apiV1SafetyRequestValue) => onApiV1SafetyRequest(
                apiV1SafetyRequestValue),
            _ when TryGetApiV1SafetyRequest1(out var apiV1SafetyRequest1Value) => onApiV1SafetyRequest1(
                apiV1SafetyRequest1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1SafetyRequest2)} holds no value.")
        };

    public void Match(Action<ApiV1SafetyRequest> onApiV1SafetyRequest,
        Action<ApiV1SafetyRequest1> onApiV1SafetyRequest1,
        Action<JsonElement> otherwise)
    {
        if (TryGetApiV1SafetyRequest(out var apiV1SafetyRequestValue)) onApiV1SafetyRequest(apiV1SafetyRequestValue);
        else if (TryGetApiV1SafetyRequest1(out var apiV1SafetyRequest1Value)) onApiV1SafetyRequest1(
            apiV1SafetyRequest1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1SafetyRequest2)} holds no value.");
    }
}

file sealed class ApiV1SafetyRequest2Converter : JsonConverter<ApiV1SafetyRequest2>
{
    public override ApiV1SafetyRequest2 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<ApiV1SafetyRequest>(root, options, out var apiV1SafetyRequestValue))
        {
            return ApiV1SafetyRequest2.ApiV1SafetyRequest(apiV1SafetyRequestValue);
        }
        if (JsonSerializer.TryDeserialize<ApiV1SafetyRequest1>(root, options, out var apiV1SafetyRequest1Value))
        {
            return ApiV1SafetyRequest2.ApiV1SafetyRequest1(apiV1SafetyRequest1Value);
        }
        return ApiV1SafetyRequest2.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1SafetyRequest2 value, JsonSerializerOptions options)
    {
        if (value.TryGetApiV1SafetyRequest(out var apiV1SafetyRequestValue))
        {
            JsonSerializer.Serialize(writer, apiV1SafetyRequestValue, options);
        }
        else if (value.TryGetApiV1SafetyRequest1(out var apiV1SafetyRequest1Value))
        {
            JsonSerializer.Serialize(writer, apiV1SafetyRequest1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ApiV1SafetyRequest2)} contains no valid value to serialize.");
        }
    }
}
