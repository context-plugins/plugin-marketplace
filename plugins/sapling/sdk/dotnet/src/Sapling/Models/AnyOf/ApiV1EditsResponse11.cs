using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using Sapling.Core.Extensions;
using Sapling.Core.Models;

namespace Sapling.Models.AnyOf;

[JsonConverter(typeof(ApiV1EditsResponse11Converter))]
public record ApiV1EditsResponse11
{
    private readonly Optional<Error> _errorValue;

    private readonly Optional<JsonElement> _jsonElementValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private ApiV1EditsResponse11(Optional<Error> errorValue,
        Optional<JsonElement> jsonElementValue,
        Optional<UnknownArm> unknownValue)
    {
        _errorValue = errorValue;
        _jsonElementValue = jsonElementValue;
        _unknownValue = unknownValue;
    }

    public static ApiV1EditsResponse11 Error(Error value) => new(Optional<Error>.Some(value), default, default);

    public static ApiV1EditsResponse11 JsonElement(JsonElement value) =>
        new(default, Optional<JsonElement>.Some(value), default);

    internal static ApiV1EditsResponse11 Unknown(JsonElement value) =>
        new(default, default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetJsonElement(out JsonElement value) => _jsonElementValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator ApiV1EditsResponse11(Error value) => Error(value);

    public TResult Match<TResult>(Func<Error, TResult> onError,
        Func<JsonElement, TResult> onJsonElement,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetJsonElement(out var jsonElementValue) => onJsonElement(jsonElementValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(ApiV1EditsResponse11)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<JsonElement> onJsonElement, Action<JsonElement> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetJsonElement(out var jsonElementValue)) onJsonElement(jsonElementValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(ApiV1EditsResponse11)} holds no value.");
    }
}

file sealed class ApiV1EditsResponse11Converter : JsonConverter<ApiV1EditsResponse11>
{
    public override ApiV1EditsResponse11 Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Error>(root, options, out var errorValue))
        {
            return ApiV1EditsResponse11.Error(errorValue);
        }
        if (JsonSerializer.TryDeserialize<JsonElement>(root, options, out var jsonElementValue))
        {
            return ApiV1EditsResponse11.JsonElement(jsonElementValue);
        }
        return ApiV1EditsResponse11.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, ApiV1EditsResponse11 value, JsonSerializerOptions options)
    {
        if (value.TryGetError(out var errorValue))
        {
            JsonSerializer.Serialize(writer, errorValue, options);
        }
        else if (value.TryGetJsonElement(out var jsonElementValue))
        {
            JsonSerializer.Serialize(writer, jsonElementValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(ApiV1EditsResponse11)} contains no valid value to serialize.");
        }
    }
}
