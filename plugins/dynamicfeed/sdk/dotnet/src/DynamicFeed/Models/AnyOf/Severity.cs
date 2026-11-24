using System;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
using DynamicFeed.Core.Models;

namespace DynamicFeed.Models.AnyOf;

/// <summary>
/// low | moderate | high | critical
/// </summary>
[JsonConverter(typeof(SeverityConverter))]
public record Severity
{
    private readonly Optional<string> _stringValue;

    private readonly Optional<UnknownArm> _unknownValue;

    private Severity(Optional<string> stringValue, Optional<UnknownArm> unknownValue)
    {
        _stringValue = stringValue;
        _unknownValue = unknownValue;
    }

    public static Severity String(string value) => new(Optional<string>.Some(value), default);

    internal static Severity Unknown(JsonElement value) =>
        new(default, Optional<UnknownArm>.Some(new UnknownArm(value)));

    public bool TryGetString([NotNullWhen(true)] out string? value) => _stringValue.TryGetValue(out value);

    public bool TryGetUnknown(out JsonElement value) => _unknownValue.TryGetValue(out value);

    public static implicit operator Severity(string value) => String(value);

    public TResult Match<TResult>(Func<string, TResult> onString, Func<JsonElement, TResult> otherwise) =>
        this switch
        {
            _ when TryGetString(out var stringValue) => onString(stringValue),
            _ when TryGetUnknown(out var unknownValue) => otherwise(unknownValue),
            _ => throw new InvalidOperationException($"{nameof(Severity)} holds no value.")
        };

    public void Match(Action<string> onString, Action<JsonElement> otherwise)
    {
        if (TryGetString(out var stringValue)) onString(stringValue);
        else if (TryGetUnknown(out var unknownValue)) otherwise(unknownValue);
        else throw new InvalidOperationException($"{nameof(Severity)} holds no value.");
    }
}

file sealed class SeverityConverter : JsonConverter<Severity>
{
    public override Severity Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        using var doc = JsonDocument.ParseValue(ref reader);
        var root = doc.RootElement;
        if (root.ValueKind == JsonValueKind.String)
        {
            var value = root.GetString()!;
            return Severity.String(value);
        }
        return Severity.Unknown(root);
    }

    public override void Write(Utf8JsonWriter writer, Severity value, JsonSerializerOptions options)
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
            throw new JsonException($"{nameof(Severity)} contains no valid value to serialize.");
        }
    }
}
