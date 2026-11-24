using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using BrowserUse.Core.Extensions;
using BrowserUse.Core.Models;

namespace BrowserUse.Models.AnyOf;

/// <summary>
/// Labels for this browser. Up to 10 key-value pairs. Filterable on the browsers list and in the dashboard history.
/// </summary>
[JsonConverter(typeof(MetadataConverter))]
public record Metadata
{
    private readonly Optional<IReadOnlyDictionary<string, string>> _mapOfStringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Metadata(Optional<IReadOnlyDictionary<string, string>> mapOfStringValue, Optional<UnknownArm> unknownValue)
    {
        _mapOfStringValue = mapOfStringValue;
        _unknownValue = unknownValue;
    }

    public static Metadata MapOfString(IReadOnlyDictionary<string, string> value) =>
        new(Optional<IReadOnlyDictionary<string, string>>.Some(value), default);

    internal static Metadata Unknown(JsonElement value) =>
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
            _ => throw new InvalidOperationException($"{nameof(Metadata)} holds no value.")
        };

    public void Match(Action<IReadOnlyDictionary<string, string>> onMapOfString, Action<JsonElement> otherwise)
    {
        if (TryGetMapOfString(out var mapOfStringValue)) onMapOfString(mapOfStringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Metadata)} holds no value.");
    }
}

file sealed class MetadataConverter : JsonConverter<Metadata>
{
    public override Metadata Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<IReadOnlyDictionary<string, string>>(root, options, out var mapOfStringValue))
        {
            return Metadata.MapOfString(mapOfStringValue);
        }
        return Metadata.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Metadata value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(Metadata)} contains no valid value to serialize.");
        }
    }
}
