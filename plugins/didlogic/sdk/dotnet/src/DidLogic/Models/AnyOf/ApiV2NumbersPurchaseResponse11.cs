using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using DidLogic.Core.Extensions;
using DidLogic.Core.Models;

namespace DidLogic.Models.AnyOf;

[JsonConverter(typeof(ApiV2NumbersPurchaseResponse11Converter))]
public record ApiV2NumbersPurchaseResponse11
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<ApiV2NumbersPurchaseResponse1> _apiV2NumbersPurchaseResponse1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV2NumbersPurchaseResponse11(Optional<Error> errorValue,
        Optional<ApiV2NumbersPurchaseResponse1> apiV2NumbersPurchaseResponse1Value,
        Optional<UnknownArm> unknownValue)
    {
        _errorValue = errorValue;
        _apiV2NumbersPurchaseResponse1Value = apiV2NumbersPurchaseResponse1Value;
        _unknownValue = unknownValue;
    }

    public static ApiV2NumbersPurchaseResponse11 Error(Error value) =>
        new(Optional<Error>.Some(value), default, default);

    public static ApiV2NumbersPurchaseResponse11 ApiV2NumbersPurchaseResponse1(ApiV2NumbersPurchaseResponse1 value) =>
        new(default, Optional<ApiV2NumbersPurchaseResponse1>.Some(value), default);

    internal static ApiV2NumbersPurchaseResponse11 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetApiV2NumbersPurchaseResponse1([NotNullWhen(true)] out ApiV2NumbersPurchaseResponse1? value) =>
        _apiV2NumbersPurchaseResponse1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV2NumbersPurchaseResponse11(Error value) => Error(value);

    public static implicit operator ApiV2NumbersPurchaseResponse11(ApiV2NumbersPurchaseResponse1 value) =>
        ApiV2NumbersPurchaseResponse1(value);

    public TResult Match<TResult>(Func<Error, TResult> onError,
        Func<ApiV2NumbersPurchaseResponse1, TResult> onApiV2NumbersPurchaseResponse1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetApiV2NumbersPurchaseResponse1(
                out var apiV2NumbersPurchaseResponse1Value) => onApiV2NumbersPurchaseResponse1(
                apiV2NumbersPurchaseResponse1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV2NumbersPurchaseResponse11)} holds no value.")
        };

    public void Match(Action<Error> onError,
        Action<ApiV2NumbersPurchaseResponse1> onApiV2NumbersPurchaseResponse1,
        Action<JsonElement> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetApiV2NumbersPurchaseResponse1(
            out var apiV2NumbersPurchaseResponse1Value)) onApiV2NumbersPurchaseResponse1(
            apiV2NumbersPurchaseResponse1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV2NumbersPurchaseResponse11)} holds no value.");
    }
}

file sealed class ApiV2NumbersPurchaseResponse11Converter : JsonConverter<ApiV2NumbersPurchaseResponse11>
{
    public override ApiV2NumbersPurchaseResponse11 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Error>(root, options, out var errorValue))
        {
            return ApiV2NumbersPurchaseResponse11.Error(errorValue);
        }
        if (JsonSerializer.TryDeserialize<ApiV2NumbersPurchaseResponse1>(
            root,
            options,
            out var apiV2NumbersPurchaseResponse1Value))
        {
            return ApiV2NumbersPurchaseResponse11.ApiV2NumbersPurchaseResponse1(apiV2NumbersPurchaseResponse1Value);
        }
        return ApiV2NumbersPurchaseResponse11.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        ApiV2NumbersPurchaseResponse11 value,
        JsonSerializerOptions options)
    {
        if (value.TryGetError(out var errorValue))
        {
            JsonSerializer.Serialize(writer, errorValue, options);
        }
        else if (value.TryGetApiV2NumbersPurchaseResponse1(out var apiV2NumbersPurchaseResponse1Value))
        {
            JsonSerializer.Serialize(writer, apiV2NumbersPurchaseResponse1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ApiV2NumbersPurchaseResponse11)} contains no valid value to serialize.");
        }
    }
}
