using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Extensions;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models.AnyOf;

/// <summary>
/// Headers for the MCP server.
/// </summary>
[JsonConverter(typeof(HeadersConverter))]
public record Headers
{
    private readonly Optional<IReadOnlyDictionary<string, string>> _mapOfPasswordStringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Headers(Optional<IReadOnlyDictionary<string, string>> mapOfPasswordStringValue,
        Optional<UnknownArm> unknownValue)
    {
        _mapOfPasswordStringValue = mapOfPasswordStringValue;
        _unknownValue = unknownValue;
    }

    public static Headers MapOfPasswordString(IReadOnlyDictionary<string, string> value) =>
        new(Optional<IReadOnlyDictionary<string, string>>.Some(value), default);

    internal static Headers Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetMapOfPasswordString([NotNullWhen(true)] out IReadOnlyDictionary<string, string>? value) =>
        _mapOfPasswordStringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<IReadOnlyDictionary<string, string>, TResult> onMapOfPasswordString,
        Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetMapOfPasswordString(out var mapOfPasswordStringValue) => onMapOfPasswordString(
                mapOfPasswordStringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Headers)} holds no value.")
        };

    public void Match(Action<IReadOnlyDictionary<string, string>> onMapOfPasswordString, Action<JsonElement> otherwise)
    {
        if (TryGetMapOfPasswordString(out var mapOfPasswordStringValue)) onMapOfPasswordString(
            mapOfPasswordStringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Headers)} holds no value.");
    }
}

file sealed class HeadersConverter : JsonConverter<Headers>
{
    public override Headers Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyDictionary<string, string>>(
            root,
            options,
            out var mapOfPasswordStringValue))
        {
            return Headers.MapOfPasswordString(mapOfPasswordStringValue);
        }
        return Headers.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Headers value, JsonSerializerOptions options)
    {
        if (value.TryGetMapOfPasswordString(out var mapOfPasswordStringValue))
        {
            JsonSerializer.Serialize(writer, mapOfPasswordStringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Headers)} contains no valid value to serialize.");
        }
    }
}
