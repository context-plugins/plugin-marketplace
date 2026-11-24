using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(ApiV1EditsRejectResponse11Converter))]
public record ApiV1EditsRejectResponse11
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<ApiV1EditsRejectResponse1> _apiV1EditsRejectResponse1Value;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1EditsRejectResponse11(Optional<Error> errorValue,
        Optional<ApiV1EditsRejectResponse1> apiV1EditsRejectResponse1Value,
        Optional<UnknownArm> unknownValue)
    {
        _errorValue = errorValue;
        _apiV1EditsRejectResponse1Value = apiV1EditsRejectResponse1Value;
        _unknownValue = unknownValue;
    }

    public static ApiV1EditsRejectResponse11 Error(Error value) => new(Optional<Error>.Some(value), default, default);

    public static ApiV1EditsRejectResponse11 ApiV1EditsRejectResponse1(ApiV1EditsRejectResponse1 value) =>
        new(default, Optional<ApiV1EditsRejectResponse1>.Some(value), default);

    internal static ApiV1EditsRejectResponse11 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetApiV1EditsRejectResponse1([NotNullWhen(true)] out ApiV1EditsRejectResponse1? value) =>
        _apiV1EditsRejectResponse1Value.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1EditsRejectResponse11(Error value) => Error(value);

    public static implicit operator ApiV1EditsRejectResponse11(ApiV1EditsRejectResponse1 value) =>
        ApiV1EditsRejectResponse1(value);

    public TResult Match<TResult>(Func<Error, TResult> onError,
        Func<ApiV1EditsRejectResponse1, TResult> onApiV1EditsRejectResponse1,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetApiV1EditsRejectResponse1(
                out var apiV1EditsRejectResponse1Value) => onApiV1EditsRejectResponse1(apiV1EditsRejectResponse1Value),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1EditsRejectResponse11)} holds no value.")
        };

    public void Match(Action<Error> onError,
        Action<ApiV1EditsRejectResponse1> onApiV1EditsRejectResponse1,
        Action<JsonElement> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetApiV1EditsRejectResponse1(out var apiV1EditsRejectResponse1Value)) onApiV1EditsRejectResponse1(
            apiV1EditsRejectResponse1Value);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1EditsRejectResponse11)} holds no value.");
    }
}

file sealed class ApiV1EditsRejectResponse11Converter : JsonConverter<ApiV1EditsRejectResponse11>
{
    public override ApiV1EditsRejectResponse11 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Error>(root, options, out var errorValue))
        {
            return ApiV1EditsRejectResponse11.Error(errorValue);
        }
        if (JsonSerializer.TryDeserialize<ApiV1EditsRejectResponse1>(
            root,
            options,
            out var apiV1EditsRejectResponse1Value))
        {
            return ApiV1EditsRejectResponse11.ApiV1EditsRejectResponse1(apiV1EditsRejectResponse1Value);
        }
        return ApiV1EditsRejectResponse11.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1EditsRejectResponse11 value, JsonSerializerOptions options)
    {
        if (value.TryGetError(out var errorValue))
        {
            JsonSerializer.Serialize(writer, errorValue, options);
        }
        else if (value.TryGetApiV1EditsRejectResponse1(out var apiV1EditsRejectResponse1Value))
        {
            JsonSerializer.Serialize(writer, apiV1EditsRejectResponse1Value, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ApiV1EditsRejectResponse11)} contains no valid value to serialize.");
        }
    }
}
