using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using DidLogic.Core.Extensions;
using DidLogic.Core.Models;

namespace DidLogic.Models.AnyOf;

[JsonConverter(typeof(ApiV2NumbersRiskChecksResponse21Converter))]
public record ApiV2NumbersRiskChecksResponse21
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<ApiV2NumbersRiskChecksResponse2> _apiV2NumbersRiskChecksResponse2Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV2NumbersRiskChecksResponse21(Optional<Error> errorValue,
        Optional<ApiV2NumbersRiskChecksResponse2> apiV2NumbersRiskChecksResponse2Value,
        Optional<UnknownArm> unknownValue)
    {
        _errorValue = errorValue;
        _apiV2NumbersRiskChecksResponse2Value = apiV2NumbersRiskChecksResponse2Value;
        _unknownValue = unknownValue;
    }

    public static ApiV2NumbersRiskChecksResponse21 Error(Error value) =>
        new(Optional<Error>.Some(value), default, default);

    public static ApiV2NumbersRiskChecksResponse21 ApiV2NumbersRiskChecksResponse2(ApiV2NumbersRiskChecksResponse2 value) =>
        new(default, Optional<ApiV2NumbersRiskChecksResponse2>.Some(value), default);

    internal static ApiV2NumbersRiskChecksResponse21 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetApiV2NumbersRiskChecksResponse2([NotNullWhen(true)] out ApiV2NumbersRiskChecksResponse2? value) =>
        _apiV2NumbersRiskChecksResponse2Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV2NumbersRiskChecksResponse21(Error value) => Error(value);

    public static implicit operator ApiV2NumbersRiskChecksResponse21(ApiV2NumbersRiskChecksResponse2 value) =>
        ApiV2NumbersRiskChecksResponse2(value);

    public TResult Match<TResult>(Func<Error, TResult> onError,
        Func<ApiV2NumbersRiskChecksResponse2, TResult> onApiV2NumbersRiskChecksResponse2,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetApiV2NumbersRiskChecksResponse2(
                out var apiV2NumbersRiskChecksResponse2Value) => onApiV2NumbersRiskChecksResponse2(
                apiV2NumbersRiskChecksResponse2Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV2NumbersRiskChecksResponse21)} holds no value.")
        };

    public void Match(Action<Error> onError,
        Action<ApiV2NumbersRiskChecksResponse2> onApiV2NumbersRiskChecksResponse2,
        Action<JsonElement> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetApiV2NumbersRiskChecksResponse2(
            out var apiV2NumbersRiskChecksResponse2Value)) onApiV2NumbersRiskChecksResponse2(
            apiV2NumbersRiskChecksResponse2Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV2NumbersRiskChecksResponse21)} holds no value.");
    }
}

file sealed class ApiV2NumbersRiskChecksResponse21Converter : JsonConverter<ApiV2NumbersRiskChecksResponse21>
{
    public override ApiV2NumbersRiskChecksResponse21 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Error>(root, options, out var errorValue))
        {
            return ApiV2NumbersRiskChecksResponse21.Error(errorValue);
        }
        if (JsonSerializer.TryDeserialize<ApiV2NumbersRiskChecksResponse2>(
            root,
            options,
            out var apiV2NumbersRiskChecksResponse2Value))
        {
            return ApiV2NumbersRiskChecksResponse21.ApiV2NumbersRiskChecksResponse2(
                apiV2NumbersRiskChecksResponse2Value);
        }
        return ApiV2NumbersRiskChecksResponse21.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        ApiV2NumbersRiskChecksResponse21 value,
        JsonSerializerOptions options)
    {
        if (value.TryGetError(out var errorValue))
        {
            JsonSerializer.Serialize(writer, errorValue, options);
        }
        else if (value.TryGetApiV2NumbersRiskChecksResponse2(out var apiV2NumbersRiskChecksResponse2Value))
        {
            JsonSerializer.Serialize(writer, apiV2NumbersRiskChecksResponse2Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException(
                $"{nameof(ApiV2NumbersRiskChecksResponse21)} contains no valid value to serialize.");
        }
    }
}
