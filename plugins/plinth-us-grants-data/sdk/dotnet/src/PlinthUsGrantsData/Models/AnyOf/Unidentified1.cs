using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Extensions;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models.AnyOf;

/// <summary>
/// On /grants/recipients: the grants held out of the ranking because their recipient is a person, a class of people, or nobody the filer named. Add these back to reconcile with /grants/summary.
/// </summary>
[JsonConverter(typeof(Unidentified1Converter))]
public record Unidentified1
{
    private readonly Optional<Unidentified> _unidentifiedValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Unidentified1(Optional<Unidentified> unidentifiedValue, Optional<UnknownArm> unknownValue)
    {
        _unidentifiedValue = unidentifiedValue;
        _unknownValue = unknownValue;
    }

    public static Unidentified1 Unidentified(Unidentified value) => new(Optional<Unidentified>.Some(value), default);

    internal static Unidentified1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetUnidentified([NotNullWhen(true)] out Unidentified? value) =>
        _unidentifiedValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Unidentified1(Unidentified value) => Unidentified(value);

    public TResult Match<TResult>(Func<Unidentified, TResult> onUnidentified, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUnidentified(out var unidentifiedValue) => onUnidentified(unidentifiedValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Unidentified1)} holds no value.")
        };

    public void Match(Action<Unidentified> onUnidentified, Action<JsonElement> otherwise)
    {
        if (TryGetUnidentified(out var unidentifiedValue)) onUnidentified(unidentifiedValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Unidentified1)} holds no value.");
    }
}

file sealed class Unidentified1Converter : JsonConverter<Unidentified1>
{
    public override Unidentified1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (JsonSerializer.TryDeserialize<Unidentified>(root, options, out var unidentifiedValue))
        {
            return Unidentified1.Unidentified(unidentifiedValue);
        }
        return Unidentified1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Unidentified1 value, JsonSerializerOptions options)
    {
        if (value.TryGetUnidentified(out var unidentifiedValue))
        {
            JsonSerializer.Serialize(writer, unidentifiedValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Unidentified1)} contains no valid value to serialize.");
        }
    }
}
