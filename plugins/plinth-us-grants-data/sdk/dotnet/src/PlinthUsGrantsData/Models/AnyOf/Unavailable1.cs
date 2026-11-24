using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models.AnyOf;

/// <summary>
/// Present only when the size could not be computed. The ranking above is unaffected., Present only when the accounting failed. The totals in the response are unaffected — a failed measurement never fails a correct answer., Present only when the size could not be computed. The ranking above is unaffected., Present only when the size could not be computed. The ranking above is unaffected., Present only when the size could not be computed. The ranking above is unaffected.
/// </summary>
[JsonConverter(typeof(Unavailable1Converter))]
public record Unavailable1
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Unavailable1(Optional<string> stringValue, Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static Unavailable1 String(string value) => new(Optional<string>.Some(value), default);

    internal static Unavailable1 Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Unavailable1(string value) => String(value);

    public TResult Match<TResult>(Func<string, TResult> onString, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Unavailable1)} holds no value.")
        };

    public void Match(Action<string> onString, Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Unavailable1)} holds no value.");
    }
}

file sealed class Unavailable1Converter : JsonConverter<Unavailable1>
{
    public override Unavailable1 Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return Unavailable1.String(value);
        }
        return Unavailable1.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Unavailable1 value, JsonSerializerOptions options)
    {
        if (value.TryGetString(out var stringValue))
        {
            JsonSerializer.Serialize(writer, stringValue, options);
        }
        else if (value.TryGetUnknown(out var unknownValue))
        {
            unknownValue.WriteTo(writer);
        }
        else
        {
            throw new JsonException($"{nameof(Unavailable1)} contains no valid value to serialize.");
        }
    }
}
