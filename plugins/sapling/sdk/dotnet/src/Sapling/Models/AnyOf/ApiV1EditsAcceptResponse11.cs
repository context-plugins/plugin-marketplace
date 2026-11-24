using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(ApiV1EditsAcceptResponse11Converter))]
public record ApiV1EditsAcceptResponse11
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<ApiV1EditsAcceptResponse1> _apiV1EditsAcceptResponse1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1EditsAcceptResponse11(Optional<Error> errorValue,
        Optional<ApiV1EditsAcceptResponse1> apiV1EditsAcceptResponse1Value,
        Optional<UnknownArm> unknownValue)
    {
        _errorValue = errorValue;
        _apiV1EditsAcceptResponse1Value = apiV1EditsAcceptResponse1Value;
        _unknownValue = unknownValue;
    }

    public static ApiV1EditsAcceptResponse11 Error(Error value) => new(Optional<Error>.Some(value), default, default);

    public static ApiV1EditsAcceptResponse11 ApiV1EditsAcceptResponse1(ApiV1EditsAcceptResponse1 value) =>
        new(default, Optional<ApiV1EditsAcceptResponse1>.Some(value), default);

    internal static ApiV1EditsAcceptResponse11 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetApiV1EditsAcceptResponse1([NotNullWhen(true)] out ApiV1EditsAcceptResponse1? value) =>
        _apiV1EditsAcceptResponse1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1EditsAcceptResponse11(Error value) => Error(value);

    public static implicit operator ApiV1EditsAcceptResponse11(ApiV1EditsAcceptResponse1 value) =>
        ApiV1EditsAcceptResponse1(value);

    public TResult Match<TResult>(Func<Error, TResult> onError,
        Func<ApiV1EditsAcceptResponse1, TResult> onApiV1EditsAcceptResponse1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetApiV1EditsAcceptResponse1(
                out var apiV1EditsAcceptResponse1Value) => onApiV1EditsAcceptResponse1(apiV1EditsAcceptResponse1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1EditsAcceptResponse11)} holds no value.")
        };

    public void Match(Action<Error> onError,
        Action<ApiV1EditsAcceptResponse1> onApiV1EditsAcceptResponse1,
        Action<JsonElement> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetApiV1EditsAcceptResponse1(out var apiV1EditsAcceptResponse1Value)) onApiV1EditsAcceptResponse1(
            apiV1EditsAcceptResponse1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1EditsAcceptResponse11)} holds no value.");
    }
}

file sealed class ApiV1EditsAcceptResponse11Converter : JsonConverter<ApiV1EditsAcceptResponse11>
{
    public override ApiV1EditsAcceptResponse11 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Error>(root, options, out var errorValue))
        {
            return ApiV1EditsAcceptResponse11.Error(errorValue);
        }
        if (JsonSerializer.TryDeserialize<ApiV1EditsAcceptResponse1>(
            root,
            options,
            out var apiV1EditsAcceptResponse1Value))
        {
            return ApiV1EditsAcceptResponse11.ApiV1EditsAcceptResponse1(apiV1EditsAcceptResponse1Value);
        }
        return ApiV1EditsAcceptResponse11.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1EditsAcceptResponse11 value, JsonSerializerOptions options)
    {
        if (value.TryGetError(out var errorValue))
        {
            JsonSerializer.Serialize(writer, errorValue, options);
        }
        else if (value.TryGetApiV1EditsAcceptResponse1(out var apiV1EditsAcceptResponse1Value))
        {
            JsonSerializer.Serialize(writer, apiV1EditsAcceptResponse1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ApiV1EditsAcceptResponse11)} contains no valid value to serialize.");
        }
    }
}
