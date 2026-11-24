using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using DidLogic.Core.Extensions;
using DidLogic.Core.Models;

namespace DidLogic.Models.AnyOf;

[JsonConverter(typeof(ApiV1PurchasesDestinationsResponse31Converter))]
public record ApiV1PurchasesDestinationsResponse31
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<ApiV1PurchasesDestinationsResponse3> _apiV1PurchasesDestinationsResponse3Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1PurchasesDestinationsResponse31(Optional<Error> errorValue,
        Optional<ApiV1PurchasesDestinationsResponse3> apiV1PurchasesDestinationsResponse3Value,
        Optional<UnknownArm> unknownValue)
    {
        _errorValue = errorValue;
        _apiV1PurchasesDestinationsResponse3Value = apiV1PurchasesDestinationsResponse3Value;
        _unknownValue = unknownValue;
    }

    public static ApiV1PurchasesDestinationsResponse31 Error(Error value) =>
        new(Optional<Error>.Some(value), default, default);

    public static ApiV1PurchasesDestinationsResponse31 ApiV1PurchasesDestinationsResponse3(ApiV1PurchasesDestinationsResponse3 value) =>
        new(default, Optional<ApiV1PurchasesDestinationsResponse3>.Some(value), default);

    internal static ApiV1PurchasesDestinationsResponse31 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetApiV1PurchasesDestinationsResponse3([NotNullWhen(true)] out ApiV1PurchasesDestinationsResponse3? value) =>
        _apiV1PurchasesDestinationsResponse3Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1PurchasesDestinationsResponse31(Error value) => Error(value);

    public static implicit operator ApiV1PurchasesDestinationsResponse31(ApiV1PurchasesDestinationsResponse3 value) =>
        ApiV1PurchasesDestinationsResponse3(value);

    public TResult Match<TResult>(Func<Error, TResult> onError,
        Func<ApiV1PurchasesDestinationsResponse3, TResult> onApiV1PurchasesDestinationsResponse3,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetApiV1PurchasesDestinationsResponse3(
                out var apiV1PurchasesDestinationsResponse3Value) => onApiV1PurchasesDestinationsResponse3(
                apiV1PurchasesDestinationsResponse3Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1PurchasesDestinationsResponse31)} holds no value.")
        };

    public void Match(Action<Error> onError,
        Action<ApiV1PurchasesDestinationsResponse3> onApiV1PurchasesDestinationsResponse3,
        Action<JsonElement> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetApiV1PurchasesDestinationsResponse3(
            out var apiV1PurchasesDestinationsResponse3Value)) onApiV1PurchasesDestinationsResponse3(
            apiV1PurchasesDestinationsResponse3Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1PurchasesDestinationsResponse31)} holds no value.");
    }
}

file sealed class ApiV1PurchasesDestinationsResponse31Converter : JsonConverter<ApiV1PurchasesDestinationsResponse31>
{
    public override ApiV1PurchasesDestinationsResponse31 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Error>(root, options, out var errorValue))
        {
            return ApiV1PurchasesDestinationsResponse31.Error(errorValue);
        }
        if (JsonSerializer.TryDeserialize<ApiV1PurchasesDestinationsResponse3>(
            root,
            options,
            out var apiV1PurchasesDestinationsResponse3Value))
        {
            return ApiV1PurchasesDestinationsResponse31.ApiV1PurchasesDestinationsResponse3(
                apiV1PurchasesDestinationsResponse3Value);
        }
        return ApiV1PurchasesDestinationsResponse31.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        ApiV1PurchasesDestinationsResponse31 value,
        JsonSerializerOptions options)
    {
        if (value.TryGetError(out var errorValue))
        {
            JsonSerializer.Serialize(writer, errorValue, options);
        }
        else if (value.TryGetApiV1PurchasesDestinationsResponse3(out var apiV1PurchasesDestinationsResponse3Value))
        {
            JsonSerializer.Serialize(writer, apiV1PurchasesDestinationsResponse3Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException(
                $"{nameof(ApiV1PurchasesDestinationsResponse31)} contains no valid value to serialize.");
        }
    }
}
