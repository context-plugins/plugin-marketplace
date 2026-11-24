using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using DidLogic.Core.Extensions;
using DidLogic.Core.Models;

namespace DidLogic.Models.AnyOf;

[JsonConverter(typeof(ApiV1AsrReportResponse1Converter))]
public record ApiV1AsrReportResponse1
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<ApiV1AsrReportResponse> _apiV1AsrReportResponseValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1AsrReportResponse1(Optional<Error> errorValue,
        Optional<ApiV1AsrReportResponse> apiV1AsrReportResponseValue,
        Optional<UnknownArm> unknownValue)
    {
        _errorValue = errorValue;
        _apiV1AsrReportResponseValue = apiV1AsrReportResponseValue;
        _unknownValue = unknownValue;
    }

    public static ApiV1AsrReportResponse1 Error(Error value) => new(Optional<Error>.Some(value), default, default);

    public static ApiV1AsrReportResponse1 ApiV1AsrReportResponse(ApiV1AsrReportResponse value) =>
        new(default, Optional<ApiV1AsrReportResponse>.Some(value), default);

    internal static ApiV1AsrReportResponse1 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetApiV1AsrReportResponse([NotNullWhen(true)] out ApiV1AsrReportResponse? value) =>
        _apiV1AsrReportResponseValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1AsrReportResponse1(Error value) => Error(value);

    public static implicit operator ApiV1AsrReportResponse1(ApiV1AsrReportResponse value) =>
        ApiV1AsrReportResponse(value);

    public TResult Match<TResult>(Func<Error, TResult> onError,
        Func<ApiV1AsrReportResponse, TResult> onApiV1AsrReportResponse,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetApiV1AsrReportResponse(out var apiV1AsrReportResponseValue) => onApiV1AsrReportResponse(
                apiV1AsrReportResponseValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1AsrReportResponse1)} holds no value.")
        };

    public void Match(Action<Error> onError,
        Action<ApiV1AsrReportResponse> onApiV1AsrReportResponse,
        Action<JsonElement> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetApiV1AsrReportResponse(out var apiV1AsrReportResponseValue)) onApiV1AsrReportResponse(
            apiV1AsrReportResponseValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1AsrReportResponse1)} holds no value.");
    }
}

file sealed class ApiV1AsrReportResponse1Converter : JsonConverter<ApiV1AsrReportResponse1>
{
    public override ApiV1AsrReportResponse1 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Error>(root, options, out var errorValue))
        {
            return ApiV1AsrReportResponse1.Error(errorValue);
        }
        if (JsonSerializer.TryDeserialize<ApiV1AsrReportResponse>(root, options, out var apiV1AsrReportResponseValue))
        {
            return ApiV1AsrReportResponse1.ApiV1AsrReportResponse(apiV1AsrReportResponseValue);
        }
        return ApiV1AsrReportResponse1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1AsrReportResponse1 value, JsonSerializerOptions options)
    {
        if (value.TryGetError(out var errorValue))
        {
            JsonSerializer.Serialize(writer, errorValue, options);
        }
        else if (value.TryGetApiV1AsrReportResponse(out var apiV1AsrReportResponseValue))
        {
            JsonSerializer.Serialize(writer, apiV1AsrReportResponseValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ApiV1AsrReportResponse1)} contains no valid value to serialize.");
        }
    }
}
