using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using DidLogic.Core.Extensions;
using DidLogic.Core.Models;

namespace DidLogic.Models.AnyOf;

[JsonConverter(typeof(ApiV1CallsRecordingResponse1Converter))]
public record ApiV1CallsRecordingResponse1
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<ApiV1CallsRecordingResponse> _apiV1CallsRecordingResponseValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1CallsRecordingResponse1(Optional<Error> errorValue,
        Optional<ApiV1CallsRecordingResponse> apiV1CallsRecordingResponseValue,
        Optional<UnknownArm> unknownValue)
    {
        _errorValue = errorValue;
        _apiV1CallsRecordingResponseValue = apiV1CallsRecordingResponseValue;
        _unknownValue = unknownValue;
    }

    public static ApiV1CallsRecordingResponse1 Error(Error value) => new(Optional<Error>.Some(value), default, default);

    public static ApiV1CallsRecordingResponse1 ApiV1CallsRecordingResponse(ApiV1CallsRecordingResponse value) =>
        new(default, Optional<ApiV1CallsRecordingResponse>.Some(value), default);

    internal static ApiV1CallsRecordingResponse1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetApiV1CallsRecordingResponse([NotNullWhen(true)] out ApiV1CallsRecordingResponse? value) =>
        _apiV1CallsRecordingResponseValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1CallsRecordingResponse1(Error value) => Error(value);

    public static implicit operator ApiV1CallsRecordingResponse1(ApiV1CallsRecordingResponse value) =>
        ApiV1CallsRecordingResponse(value);

    public TResult Match<TResult>(Func<Error, TResult> onError,
        Func<ApiV1CallsRecordingResponse, TResult> onApiV1CallsRecordingResponse,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetApiV1CallsRecordingResponse(
                out var apiV1CallsRecordingResponseValue) => onApiV1CallsRecordingResponse(
                apiV1CallsRecordingResponseValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1CallsRecordingResponse1)} holds no value.")
        };

    public void Match(Action<Error> onError,
        Action<ApiV1CallsRecordingResponse> onApiV1CallsRecordingResponse,
        Action<JsonElement> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetApiV1CallsRecordingResponse(
            out var apiV1CallsRecordingResponseValue)) onApiV1CallsRecordingResponse(apiV1CallsRecordingResponseValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1CallsRecordingResponse1)} holds no value.");
    }
}

file sealed class ApiV1CallsRecordingResponse1Converter : JsonConverter<ApiV1CallsRecordingResponse1>
{
    public override ApiV1CallsRecordingResponse1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Error>(root, options, out var errorValue))
        {
            return ApiV1CallsRecordingResponse1.Error(errorValue);
        }
        if (JsonSerializer.TryDeserialize<ApiV1CallsRecordingResponse>(
            root,
            options,
            out var apiV1CallsRecordingResponseValue))
        {
            return ApiV1CallsRecordingResponse1.ApiV1CallsRecordingResponse(apiV1CallsRecordingResponseValue);
        }
        return ApiV1CallsRecordingResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1CallsRecordingResponse1 value, JsonSerializerOptions options)
    {
        if (value.TryGetError(out var errorValue))
        {
            JsonSerializer.Serialize(writer, errorValue, options);
        }
        else if (value.TryGetApiV1CallsRecordingResponse(out var apiV1CallsRecordingResponseValue))
        {
            JsonSerializer.Serialize(writer, apiV1CallsRecordingResponseValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ApiV1CallsRecordingResponse1)} contains no valid value to serialize.");
        }
    }
}
