using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using DidLogic.Core.Extensions;
using DidLogic.Core.Models;

namespace DidLogic.Models.AnyOf;

[JsonConverter(typeof(ApiV1SipaccountsResponse11Converter))]
public record ApiV1SipaccountsResponse11
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<ApiV1SipaccountsResponse1> _apiV1SipaccountsResponse1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1SipaccountsResponse11(Optional<Error> errorValue,
        Optional<ApiV1SipaccountsResponse1> apiV1SipaccountsResponse1Value,
        Optional<UnknownArm> unknownValue)
    {
        _errorValue = errorValue;
        _apiV1SipaccountsResponse1Value = apiV1SipaccountsResponse1Value;
        _unknownValue = unknownValue;
    }

    public static ApiV1SipaccountsResponse11 Error(Error value) => new(Optional<Error>.Some(value), default, default);

    public static ApiV1SipaccountsResponse11 ApiV1SipaccountsResponse1(ApiV1SipaccountsResponse1 value) =>
        new(default, Optional<ApiV1SipaccountsResponse1>.Some(value), default);

    internal static ApiV1SipaccountsResponse11 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetApiV1SipaccountsResponse1([NotNullWhen(true)] out ApiV1SipaccountsResponse1? value) =>
        _apiV1SipaccountsResponse1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1SipaccountsResponse11(Error value) => Error(value);

    public static implicit operator ApiV1SipaccountsResponse11(ApiV1SipaccountsResponse1 value) =>
        ApiV1SipaccountsResponse1(value);

    public TResult Match<TResult>(Func<Error, TResult> onError,
        Func<ApiV1SipaccountsResponse1, TResult> onApiV1SipaccountsResponse1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetApiV1SipaccountsResponse1(
                out var apiV1SipaccountsResponse1Value) => onApiV1SipaccountsResponse1(apiV1SipaccountsResponse1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1SipaccountsResponse11)} holds no value.")
        };

    public void Match(Action<Error> onError,
        Action<ApiV1SipaccountsResponse1> onApiV1SipaccountsResponse1,
        Action<JsonElement> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetApiV1SipaccountsResponse1(out var apiV1SipaccountsResponse1Value)) onApiV1SipaccountsResponse1(
            apiV1SipaccountsResponse1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1SipaccountsResponse11)} holds no value.");
    }
}

file sealed class ApiV1SipaccountsResponse11Converter : JsonConverter<ApiV1SipaccountsResponse11>
{
    public override ApiV1SipaccountsResponse11 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Error>(root, options, out var errorValue))
        {
            return ApiV1SipaccountsResponse11.Error(errorValue);
        }
        if (JsonSerializer.TryDeserialize<ApiV1SipaccountsResponse1>(
            root,
            options,
            out var apiV1SipaccountsResponse1Value))
        {
            return ApiV1SipaccountsResponse11.ApiV1SipaccountsResponse1(apiV1SipaccountsResponse1Value);
        }
        return ApiV1SipaccountsResponse11.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1SipaccountsResponse11 value, JsonSerializerOptions options)
    {
        if (value.TryGetError(out var errorValue))
        {
            JsonSerializer.Serialize(writer, errorValue, options);
        }
        else if (value.TryGetApiV1SipaccountsResponse1(out var apiV1SipaccountsResponse1Value))
        {
            JsonSerializer.Serialize(writer, apiV1SipaccountsResponse1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ApiV1SipaccountsResponse11)} contains no valid value to serialize.");
        }
    }
}
