using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Arbitrary key-value pairs, echoed back on the Response object. Useful for tagging requests. At most 16 keys; keys up to 64 characters, values up to 512 characters.
/// </summary>
[JsonConverter(typeof(Metadata1ParallelAiResponsesApiConverter))]
public record Metadata1ParallelAiResponsesApi
{
    private readonly Optional<IReadOnlyDictionary<string, string>> _mapOfStringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Metadata1ParallelAiResponsesApi(Optional<IReadOnlyDictionary<string, string>> mapOfStringValue,
        Optional<UnknownArm> unknownValue)
    {
        _mapOfStringValue = mapOfStringValue;
        _unknownValue = unknownValue;
    }

    public static Metadata1ParallelAiResponsesApi MapOfString(IReadOnlyDictionary<string, string> value) =>
        new(Optional<IReadOnlyDictionary<string, string>>.Some(value), default);

    internal static Metadata1ParallelAiResponsesApi Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMapOfString([NotNullWhen(true)] out IReadOnlyDictionary<string, string>? value) =>
        _mapOfStringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyDictionary<string, string>, TResult> onMapOfString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMapOfString(out var mapOfStringValue) => onMapOfString(mapOfStringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Metadata1ParallelAiResponsesApi)} holds no value.")
        };

    public void Match(Action<IReadOnlyDictionary<string, string>> onMapOfString, Action<JsonElement> otherwise)
    {
        if (TryGetMapOfString(out var mapOfStringValue)) onMapOfString(mapOfStringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Metadata1ParallelAiResponsesApi)} holds no value.");
    }
}

file sealed class Metadata1ParallelAiResponsesApiConverter : JsonConverter<Metadata1ParallelAiResponsesApi>
{
    public override Metadata1ParallelAiResponsesApi Read(ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyDictionary<string, string>>(root, options, out var mapOfStringValue))
        {
            return Metadata1ParallelAiResponsesApi.MapOfString(mapOfStringValue);
        }
        return Metadata1ParallelAiResponsesApi.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer,
        Metadata1ParallelAiResponsesApi value,
        JsonSerializerOptions options)
    {
        if (value.TryGetMapOfString(out var mapOfStringValue))
        {
            JsonSerializer.Serialize(writer, mapOfStringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Metadata1ParallelAiResponsesApi)} contains no valid value to serialize.");
        }
    }
}
