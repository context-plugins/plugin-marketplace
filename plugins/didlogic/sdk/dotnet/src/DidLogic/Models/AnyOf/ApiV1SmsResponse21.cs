using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using DidLogic.Core.Extensions;
using DidLogic.Core.Models;

namespace DidLogic.Models.AnyOf;

[JsonConverter(typeof(ApiV1SmsResponse21Converter))]
public record ApiV1SmsResponse21
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<ApiV1SmsResponse2> _apiV1SmsResponse2Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1SmsResponse21(Optional<Error> errorValue,
        Optional<ApiV1SmsResponse2> apiV1SmsResponse2Value,
        Optional<UnknownArm> unknownValue)
    {
        _errorValue = errorValue;
        _apiV1SmsResponse2Value = apiV1SmsResponse2Value;
        _unknownValue = unknownValue;
    }

    public static ApiV1SmsResponse21 Error(Error value) => new(Optional<Error>.Some(value), default, default);

    public static ApiV1SmsResponse21 ApiV1SmsResponse2(ApiV1SmsResponse2 value) =>
        new(default, Optional<ApiV1SmsResponse2>.Some(value), default);

    internal static ApiV1SmsResponse21 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetApiV1SmsResponse2([NotNullWhen(true)] out ApiV1SmsResponse2? value) =>
        _apiV1SmsResponse2Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1SmsResponse21(Error value) => Error(value);

    public static implicit operator ApiV1SmsResponse21(ApiV1SmsResponse2 value) => ApiV1SmsResponse2(value);

    public TResult Match<TResult>(Func<Error, TResult> onError,
        Func<ApiV1SmsResponse2, TResult> onApiV1SmsResponse2,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetApiV1SmsResponse2(out var apiV1SmsResponse2Value) => onApiV1SmsResponse2(
                apiV1SmsResponse2Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1SmsResponse21)} holds no value.")
        };

    public void Match(Action<Error> onError,
        Action<ApiV1SmsResponse2> onApiV1SmsResponse2,
        Action<JsonElement> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetApiV1SmsResponse2(out var apiV1SmsResponse2Value)) onApiV1SmsResponse2(apiV1SmsResponse2Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1SmsResponse21)} holds no value.");
    }
}

file sealed class ApiV1SmsResponse21Converter : JsonConverter<ApiV1SmsResponse21>
{
    public override ApiV1SmsResponse21 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Error>(root, options, out var errorValue))
        {
            return ApiV1SmsResponse21.Error(errorValue);
        }
        if (JsonSerializer.TryDeserialize<ApiV1SmsResponse2>(root, options, out var apiV1SmsResponse2Value))
        {
            return ApiV1SmsResponse21.ApiV1SmsResponse2(apiV1SmsResponse2Value);
        }
        return ApiV1SmsResponse21.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1SmsResponse21 value, JsonSerializerOptions options)
    {
        if (value.TryGetError(out var errorValue))
        {
            JsonSerializer.Serialize(writer, errorValue, options);
        }
        else if (value.TryGetApiV1SmsResponse2(out var apiV1SmsResponse2Value))
        {
            JsonSerializer.Serialize(writer, apiV1SmsResponse2Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ApiV1SmsResponse21)} contains no valid value to serialize.");
        }
    }
}
