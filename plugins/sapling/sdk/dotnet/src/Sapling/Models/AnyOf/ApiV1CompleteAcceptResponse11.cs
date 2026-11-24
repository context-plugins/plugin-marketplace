using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(ApiV1CompleteAcceptResponse11Converter))]
public record ApiV1CompleteAcceptResponse11
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<ApiV1CompleteAcceptResponse1> _apiV1CompleteAcceptResponse1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1CompleteAcceptResponse11(Optional<Error> errorValue,
        Optional<ApiV1CompleteAcceptResponse1> apiV1CompleteAcceptResponse1Value,
        Optional<UnknownArm> unknownValue)
    {
        _errorValue = errorValue;
        _apiV1CompleteAcceptResponse1Value = apiV1CompleteAcceptResponse1Value;
        _unknownValue = unknownValue;
    }

    public static ApiV1CompleteAcceptResponse11 Error(Error value) =>
        new(Optional<Error>.Some(value), default, default);

    public static ApiV1CompleteAcceptResponse11 ApiV1CompleteAcceptResponse1(ApiV1CompleteAcceptResponse1 value) =>
        new(default, Optional<ApiV1CompleteAcceptResponse1>.Some(value), default);

    internal static ApiV1CompleteAcceptResponse11 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetApiV1CompleteAcceptResponse1([NotNullWhen(true)] out ApiV1CompleteAcceptResponse1? value) =>
        _apiV1CompleteAcceptResponse1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1CompleteAcceptResponse11(Error value) => Error(value);

    public static implicit operator ApiV1CompleteAcceptResponse11(ApiV1CompleteAcceptResponse1 value) =>
        ApiV1CompleteAcceptResponse1(value);

    public TResult Match<TResult>(Func<Error, TResult> onError,
        Func<ApiV1CompleteAcceptResponse1, TResult> onApiV1CompleteAcceptResponse1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetApiV1CompleteAcceptResponse1(
                out var apiV1CompleteAcceptResponse1Value) => onApiV1CompleteAcceptResponse1(
                apiV1CompleteAcceptResponse1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1CompleteAcceptResponse11)} holds no value.")
        };

    public void Match(Action<Error> onError,
        Action<ApiV1CompleteAcceptResponse1> onApiV1CompleteAcceptResponse1,
        Action<JsonElement> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetApiV1CompleteAcceptResponse1(
            out var apiV1CompleteAcceptResponse1Value)) onApiV1CompleteAcceptResponse1(
            apiV1CompleteAcceptResponse1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1CompleteAcceptResponse11)} holds no value.");
    }
}

file sealed class ApiV1CompleteAcceptResponse11Converter : JsonConverter<ApiV1CompleteAcceptResponse11>
{
    public override ApiV1CompleteAcceptResponse11 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Error>(root, options, out var errorValue))
        {
            return ApiV1CompleteAcceptResponse11.Error(errorValue);
        }
        if (JsonSerializer.TryDeserialize<ApiV1CompleteAcceptResponse1>(
            root,
            options,
            out var apiV1CompleteAcceptResponse1Value))
        {
            return ApiV1CompleteAcceptResponse11.ApiV1CompleteAcceptResponse1(apiV1CompleteAcceptResponse1Value);
        }
        return ApiV1CompleteAcceptResponse11.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        ApiV1CompleteAcceptResponse11 value,
        JsonSerializerOptions options)
    {
        if (value.TryGetError(out var errorValue))
        {
            JsonSerializer.Serialize(writer, errorValue, options);
        }
        else if (value.TryGetApiV1CompleteAcceptResponse1(out var apiV1CompleteAcceptResponse1Value))
        {
            JsonSerializer.Serialize(writer, apiV1CompleteAcceptResponse1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ApiV1CompleteAcceptResponse11)} contains no valid value to serialize.");
        }
    }
}
